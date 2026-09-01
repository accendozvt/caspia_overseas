// Scans every OG image referenced across app/**/page.tsx and content/posts/*.md,
// reads each file's real width/height/mime type via sharp, and writes the result
// to lib/og-image-dimensions.json. lib/metadata.ts reads that manifest synchronously
// so pageMetadata() can emit accurate og:image:width/height/type instead of guessing.
//
// Re-run this whenever a new page-specific OG image is introduced (a new blog post
// with a custom ogImage, a new static page passing a custom `image` to pageMetadata):
//   node scripts/generate-og-dimensions.js

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

function collectFromAppPages() {
  const images = new Set();
  const appDir = path.join(ROOT, "app");
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === "page.tsx") files.push(full);
    }
  })(appDir);

  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    for (const m of src.matchAll(/image:\s*"(\/images\/[^"]+)"/g)) {
      images.add(m[1]);
    }
  }
  return images;
}

function collectFromPosts() {
  const images = new Set();
  const postsDir = path.join(ROOT, "content", "posts");
  for (const file of fs.readdirSync(postsDir)) {
    if (!file.endsWith(".md")) continue;
    const src = fs.readFileSync(path.join(postsDir, file), "utf8");
    const fmMatch = src.match(/^ogImage:\s*"([^"]*)"/m);
    if (fmMatch && fmMatch[1]) {
      images.add(fmMatch[1]);
      continue;
    }
    // fall back to the first Markdown image in the body, same logic as lib/posts.ts firstImage()
    const bodyMatch = src.match(/!\[[^\]]*\]\(([^)]+)\)/);
    if (bodyMatch) images.add(bodyMatch[1]);
  }
  return images;
}

// Images that aren't OG images but still need real dimensions baked in: the company
// logo is emitted as an ImageObject inside the Organization JSON-LD (lib/jsonld.ts).
const ALWAYS_INCLUDE = ["/images/2023/01/Caspia-Squ.png"];

async function main() {
  const images = new Set([
    ...ALWAYS_INCLUDE,
    ...collectFromAppPages(),
    ...collectFromPosts(),
  ]);
  const manifest = {};
  let missing = 0;

  for (const img of images) {
    const full = path.join(PUBLIC, img.replace(/^\//, "").split("/").join(path.sep));
    if (!fs.existsSync(full)) {
      console.log("MISSING FILE:", img);
      missing++;
      continue;
    }
    const meta = await sharp(full).metadata();
    const ext = path.extname(img).toLowerCase();
    manifest[img] = {
      width: meta.width,
      height: meta.height,
      type: MIME[ext] || "image/jpeg",
    };
  }

  const outPath = path.join(ROOT, "lib", "og-image-dimensions.json");
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Wrote ${Object.keys(manifest).length} entries to ${path.relative(ROOT, outPath)}`);
  if (missing) console.log(`${missing} referenced image(s) not found on disk.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
