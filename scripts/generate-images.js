// Build-time responsive image pipeline.
//
// This site is a static export (`output: "export"`), so Next.js's on-demand image
// optimizer is unavailable and `next/image` would otherwise ship the original file
// at full size with no srcset. Instead we pre-generate WebP variants here and point
// `next/image` at them through the custom loader in lib/image-loader.ts.
//
// Outputs:
//   public/_img/<original path minus extension>-<width>.webp
//   lib/image-manifest.json   { "/images/x.png": { w, h, widths: [...] } }
//
// The manifest is what makes the loader safe: it only ever emits a URL for a width
// that was actually generated, and falls back to the original file for any image it
// does not know about. Widths larger than the source are never generated, so nothing
// is upscaled.
//
// Runs automatically as the npm "prebuild" step. Regeneration is skipped when the
// output is newer than its source, so repeat builds are cheap.

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const OUT_DIR = path.join(PUBLIC, "_img");
const MANIFEST_PATH = path.join(ROOT, "lib", "image-manifest.json");

// Must stay in sync with deviceSizes + imageSizes in next.config.ts.
const WIDTHS = [256, 384, 640, 828, 1080, 1920];
const QUALITY = 72;
const RASTER = /\.(png|jpe?g)$/i;

/* ---------------- collecting referenced images ---------------- */

function walk(dir, test, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, test, acc);
    else if (test(e.name)) acc.push(full);
  }
  return acc;
}

function collect() {
  const found = new Set();
  const add = (p) => {
    if (p && p.startsWith("/images/") && RASTER.test(p)) found.add(p);
  };

  // any "/images/..." string literal in app/ or components/ source
  const sources = [
    ...walk(path.join(ROOT, "app"), (n) => /\.tsx?$/.test(n)),
    ...walk(path.join(ROOT, "components"), (n) => /\.tsx?$/.test(n)),
    ...walk(path.join(ROOT, "lib"), (n) => /\.ts$/.test(n)),
  ];
  for (const f of sources) {
    const src = fs.readFileSync(f, "utf8");
    for (const m of src.matchAll(/["'`](\/images\/[^"'`]+?)["'`]/g)) add(m[1]);
  }

  // markdown body images and ogImage frontmatter
  const postsDir = path.join(ROOT, "content", "posts");
  if (fs.existsSync(postsDir)) {
    for (const file of fs.readdirSync(postsDir)) {
      if (!file.endsWith(".md")) continue;
      const src = fs.readFileSync(path.join(postsDir, file), "utf8");
      for (const m of src.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)) add(m[1]);
      for (const m of src.matchAll(/^ogImage:\s*"([^"]+)"/gm)) add(m[1]);
    }
  }

  return [...found].sort();
}

/* ---------------- generation ---------------- */

function outPathFor(src, width) {
  const noExt = src.replace(/\.[^.]+$/, "");
  return path.join(OUT_DIR, `${noExt}-${width}.webp`.replace(/^[\\/]/, ""));
}

function isFresh(srcFile, outFile) {
  if (!fs.existsSync(outFile)) return false;
  return fs.statSync(outFile).mtimeMs >= fs.statSync(srcFile).mtimeMs;
}

async function main() {
  const images = collect();
  const manifest = {};
  let generated = 0;
  let skipped = 0;
  let missing = 0;

  for (const src of images) {
    const srcFile = path.join(PUBLIC, src.replace(/^\//, "").split("/").join(path.sep));
    if (!fs.existsSync(srcFile)) {
      console.log(`  missing source, skipped: ${src}`);
      missing++;
      continue;
    }

    const meta = await sharp(srcFile).metadata();
    // never upscale: keep widths at or below the source, plus the source width itself
    const widths = WIDTHS.filter((w) => w < meta.width);
    if (!widths.includes(meta.width)) widths.push(meta.width);
    widths.sort((a, b) => a - b);

    for (const w of widths) {
      const outFile = outPathFor(src, w);
      if (isFresh(srcFile, outFile)) {
        skipped++;
        continue;
      }
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      await sharp(srcFile).resize(w).webp({ quality: QUALITY }).toFile(outFile);
      generated++;
    }

    manifest[src] = { w: meta.width, h: meta.height, widths };
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `images: ${images.length} referenced, ${generated} variants written, ${skipped} up to date` +
      (missing ? `, ${missing} missing` : "")
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
