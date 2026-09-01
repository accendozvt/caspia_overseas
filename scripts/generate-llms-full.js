// Runs after `next build` (wired as the npm "postbuild" hook) and writes out/llms-full.txt:
// the real, rendered <main> text content of every public page, concatenated into one file,
// per the llms-full.txt convention (https://llmstxt.org). A Route Handler can't do this
// itself during the build - it would need every other page's finished HTML, which doesn't
// exist yet mid-build - so this walks the already-built `out/` directory instead.
//
// Re-run automatically on every `npm run build`. No manual step needed when pages change.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "out");
const SITE_URL = "https://caspiaedu.com"; // must match lib/site.ts `site.url`

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === "index.html") acc.push(full);
  }
  return acc;
}

function decodeEntities(str) {
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? decodeEntities(m[1]).trim() : "";
}

function extractMainText(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) return "";
  let text = mainMatch[1];

  text = text.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

  // turn block-level boundaries into line breaks before stripping tags, so the
  // output reads as paragraphs/list items rather than one run-on line
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<li[^>]*>/gi, "\n- ");
  text = text.replace(
    /<\/(p|div|li|h1|h2|h3|h4|h5|h6|section|article|tr|blockquote|ul|ol)>/gi,
    "\n"
  );

  text = text.replace(/<[^>]+>/g, " ");
  text = decodeEntities(text);
  text = text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");

  return text;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error(`${OUT} does not exist - run \`next build\` first.`);
    process.exit(1);
  }

  const files = walk(OUT, []).filter(
    (f) => !f.includes("_not-found") && !f.endsWith(path.join("404", "index.html"))
  );

  const pages = files
    .map((f) => {
      const route = "/" + path.relative(OUT, path.dirname(f)).split(path.sep).join("/");
      const normalizedRoute = route === "/." ? "/" : route + "/";
      const html = fs.readFileSync(f, "utf8");
      return {
        route: normalizedRoute === "//" ? "/" : normalizedRoute,
        title: extractTitle(html),
        text: extractMainText(html),
      };
    })
    .filter((p) => p.text)
    .sort((a, b) => a.route.localeCompare(b.route));

  const sections = pages.map(
    (p) => `## ${p.title}\nURL: ${SITE_URL}${p.route}\n\n${p.text}`
  );

  const body =
    [
      `# Caspia Overseas Studies — Full Page Contents`,
      `Concatenated, full plain-text content of every public page on ${SITE_URL}, generated from the live build. For a concise link index instead, see ${SITE_URL}/llms.txt.`,
      ...sections,
    ].join("\n\n---\n\n") + "\n";

  fs.writeFileSync(path.join(OUT, "llms-full.txt"), body, "utf8");
  console.log(`Wrote out/llms-full.txt (${pages.length} pages, ${(body.length / 1024).toFixed(1)} KB)`);
}

main();
