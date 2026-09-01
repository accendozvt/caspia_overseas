// Post-build fix for Next.js App Router prefetch 404s under `output: "export"`.
//
// When you hover a <Link>, the client fetches that route's RSC segment payload from a
// FLAT, dot-separated path:
//
//     /german-nursing-registration/__next.german-nursing-registration.__PAGE__.txt
//
// but `next build` writes the very same payload into a NESTED directory instead:
//
//     out/german-nursing-registration/__next.german-nursing-registration/__PAGE__.txt
//
// The content is correct and present - only the path encoding differs (a "/" where the
// client expects a "."). The result is a 404 on every nav link hover, which Chrome logs
// as a console error, which fails Lighthouse's "no browser errors logged to the console"
// audit and caps Best Practices at 96 on every page.
//
// This copies each nested payload to the flat filename the client actually requests.
// It adds files rather than moving them, so the nested paths keep working too and
// nothing regresses if a future Next.js version starts emitting the flat form itself.

const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "out");

function findSegmentDirs(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) acc.push(full);
    else findSegmentDirs(full, acc);
  }
  return acc;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error(`${OUT} does not exist - run \`next build\` first.`);
    process.exit(1);
  }

  let written = 0;
  for (const segDir of findSegmentDirs(OUT)) {
    const parent = path.dirname(segDir);
    const segName = path.basename(segDir); // e.g. "__next.german-nursing-registration"

    for (const file of fs.readdirSync(segDir)) {
      if (!file.endsWith(".txt")) continue;
      const flat = path.join(parent, `${segName}.${file}`);
      fs.copyFileSync(path.join(segDir, file), flat);
      written++;
    }
  }

  console.log(`segment prefetch aliases written: ${written}`);
}

main();
