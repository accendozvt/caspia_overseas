"use client";

import manifest from "./image-manifest.json";

type Entry = { w: number; h: number; widths: number[] };
const MANIFEST: Record<string, Entry> = manifest;

/**
 * Custom `next/image` loader for the static export.
 *
 * With `output: "export"` there is no image optimization server, so this maps each
 * request to a WebP variant pre-generated at build time by scripts/generate-images.js.
 *
 * It only ever returns a width that was actually generated, and returns the original
 * src untouched for anything not in the manifest - so an image the pipeline has not
 * seen still renders, just unoptimized, instead of 404ing.
 */
export default function caspiaImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const entry = MANIFEST[src];
  if (!entry) return src;

  const chosen =
    entry.widths.find((w) => w >= width) ?? entry.widths[entry.widths.length - 1];

  return `/_img${src.replace(/\.[^.]+$/, "")}-${chosen}.webp`;
}
