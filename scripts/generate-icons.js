// Generates the favicon/app-icon set from the master square logo.
//
// The source logo is 1600x1600 with a lot of white margin baked in, so scaling it
// down directly leaves a tiny logo floating in a big empty square. This trims the
// blank border first, then re-pads to a consistent ~80% content box - which is also
// the safe zone Android uses for maskable icons.
//
// Outputs (re-run with `npm run icons` after changing the logo):
//   app/apple-icon.png        180x180  -> Next.js emits <link rel="apple-touch-icon">
//   public/icons/icon-192.png 192x192  -> referenced by app/manifest.ts
//   public/icons/icon-512.png 512x512  -> referenced by app/manifest.ts

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public", "images", "2023", "01", "Caspia-Squ.png");
// The logo sits on solid white; keep that so Apple/Android don't composite it on black.
const BG = { r: 255, g: 255, b: 255, alpha: 1 };
const CONTENT_RATIO = 0.8;

const TARGETS = [
  { size: 180, out: path.join(ROOT, "app", "apple-icon.png") },
  { size: 192, out: path.join(ROOT, "public", "icons", "icon-192.png") },
  { size: 512, out: path.join(ROOT, "public", "icons", "icon-512.png") },
];

async function build({ size, out }) {
  const inner = Math.round(size * CONTENT_RATIO);
  const pad = Math.round((size - inner) / 2);

  const buf = await sharp(SRC)
    .trim() // drop the uniform white border baked into the source
    .resize(inner, inner, { fit: "contain", background: BG })
    .toBuffer();

  await sharp(buf)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: BG })
    .resize(size, size, { fit: "fill" }) // guard against off-by-one from rounding
    .png()
    .toFile(out);

  const { size: bytes } = fs.statSync(out);
  console.log(`${path.relative(ROOT, out)}  ${size}x${size}  ${(bytes / 1024).toFixed(1)} KB`);
}

async function main() {
  fs.mkdirSync(path.join(ROOT, "public", "icons"), { recursive: true });
  for (const t of TARGETS) await build(t);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
