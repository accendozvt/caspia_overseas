import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "content", "posts");

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
