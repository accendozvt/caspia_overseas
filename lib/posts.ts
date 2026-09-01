import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import imageManifest from "./image-manifest.json";

const postsDir = path.join(process.cwd(), "content", "posts");

type ImageEntry = { w: number; h: number; widths: number[] };
const IMAGES: Record<string, ImageEntry> = imageManifest;

/** Article column is max-w-3xl (768px); below that the image is full-bleed. */
const POST_IMAGE_SIZES = "(max-width: 768px) 100vw, 768px";

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function webpVariant(src: string, width: number): string {
  return `/_img${src.replace(/\.[^.]+$/, "")}-${width}.webp`;
}

/**
 * Body images in blog Markdown never pass through `next/image`, so by default `marked`
 * emitted a bare <img src alt> with no dimensions, no lazy-loading and no WebP. That
 * costs layout stability and bandwidth on every post. This renderer emits the same
 * responsive WebP variants the rest of the site uses, with intrinsic width/height so
 * the browser can reserve space before the image loads.
 */
/**
 * Body headings are renumbered so they never skip a level. The post template renders
 * the title as the page's <h1>, so body headings start at 2; several posts jump
 * straight from ## to ####, which fails the heading-order accessibility audit on 34
 * pages. Clamping in the renderer fixes every post at once and keeps future ones
 * correct, without rewriting the Markdown sources.
 */
let previousHeadingLevel = 1;

marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const level = Math.min(depth, previousHeadingLevel + 1);
      previousHeadingLevel = level;
      return `<h${level}>${this.parser.parseInline(tokens)}</h${level}>`;
    },

    /**
     * Adds header scopes, and promotes the first column to row headers when the
     * table's top-left cell is blank. That layout means the first column holds row
     * labels rather than data, but without <th scope="row"> the cells underneath an
     * empty <th> have no header at all, which is what the td-has-header audit flags.
     */
    table({ header, rows }) {
      const alignOf = (c: { align: string | null }) =>
        c.align ? ` style="text-align:${c.align}"` : "";
      const firstColumnIsLabels = !header[0] || header[0].text.trim() === "";

      const head = header
        .map((c) => `<th scope="col"${alignOf(c)}>${this.parser.parseInline(c.tokens)}</th>`)
        .join("");

      const body = rows
        .map((row) => {
          const cells = row
            .map((c, i) => {
              const isRowHeader = firstColumnIsLabels && i === 0;
              const tag = isRowHeader ? "th" : "td";
              const scope = isRowHeader ? ' scope="row"' : "";
              return `<${tag}${scope}${alignOf(c)}>${this.parser.parseInline(c.tokens)}</${tag}>`;
            })
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");

      return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
    },

    image({ href, title, text }) {
      const entry = IMAGES[href];
      const alt = escapeAttr(text || "");
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";

      if (!entry) {
        // Unknown to the image pipeline: render it plainly rather than guess a variant.
        return `<img src="${escapeAttr(href)}" alt="${alt}"${titleAttr} loading="lazy" decoding="async">`;
      }

      const srcset = entry.widths
        .map((w) => `${webpVariant(href, w)} ${w}w`)
        .join(", ");
      const largest = entry.widths[entry.widths.length - 1];

      return (
        `<img src="${webpVariant(href, largest)}" srcset="${srcset}" sizes="${POST_IMAGE_SIZES}"` +
        ` width="${entry.w}" height="${entry.h}" alt="${alt}"${titleAttr} loading="lazy" decoding="async">`
      );
    },
  },
});

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  ogImage: string;
  date: string;
  modified: string;
  html: string;
  excerpt: string;
};

function firstImage(md: string): string | null {
  const m = md.match(/!\[[^\]]*\]\(([^)]+)\)/);
  return m ? m[1] : null;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(postsDir, slug + ".md"), "utf8");
  const { data, content } = matter(raw);
  // Reset before each post: the heading renderer carries state across calls, and the
  // page <h1> is the post title, so body headings restart from level 2.
  previousHeadingLevel = 1;
  const html = marked.parse(content, { async: false }) as string;
  const text = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#+\s.*$/gm, "")
    .replace(/\s+/g, " ")
    .trim();
  return {
    slug,
    title: data.title || slug,
    seoTitle: data.seoTitle || data.title || slug,
    description: data.description || "",
    ogImage: data.ogImage || firstImage(content) || "",
    date: data.date || "",
    modified: data.modified || "",
    html,
    excerpt: (data.description || text.slice(0, 180)).trim(),
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map(getPost)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
