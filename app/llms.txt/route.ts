import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

import { metadata as mHome } from "../page";
import { metadata as mAbout } from "../the-best-german-language-training-in-kerala/page";
import { metadata as mContact } from "../contact-caspia-overseas-studies/page";
import { metadata as mPrivacy } from "../privacy-policy/page";
import { metadata as mGermanLanguage } from "../german-language-classes/page";
import { metadata as mSuccess } from "../success-with-the-best-german-language-class-kerala/page";
import { metadata as mNursing } from "../nursing-ausbildung-in-germany/page";
import { metadata as mGermanNursingReg } from "../german-nursing-registration/page";
import { metadata as mLogistics } from "../logistics-ausbildung-program-caspia-overseas-kochi/page";
import { metadata as mHospitality } from "../hospitality-and-tourism-ausbildung-caspia-overseas-kochi/page";
import { metadata as mIT } from "../information-technology-ausbildung-caspia-overseas-kochi/page";
import { metadata as mAutomotive } from "../automotive-and-engineering-ausbildung-caspia-overseas-kochi/page";
import { metadata as mAnesthesia } from "../anesthesia-technical-assistant-ausbildung-caspia-overseas-kochi/page";
import { metadata as mAustralia } from "../study-in-australia/page";
import { metadata as mCanada } from "../study-in-canada/page";
import { metadata as mFinland } from "../study-in-finland/page";
import { metadata as mFrance } from "../study-in-france/page";
import { metadata as mGermany } from "../study-in-germany/page";
import { metadata as mIreland } from "../study-in-ireland/page";
import { metadata as mMalta } from "../study-in-malta/page";
import { metadata as mNewZealand } from "../study-in-new-zealand/page";
import { metadata as mUK } from "../study-in-the-uk/page";
import { metadata as mUSA } from "../study-in-the-usa/page";
import { metadata as mCourses } from "../courses/page";
import { metadata as mEnrolledAgent } from "../irs-certified-enrolled-agent-course-in-kochi-kerala/page";
import { metadata as mBlogs } from "../blogs/page";

export const dynamic = "force-static";

type Entry = { path: string; meta: Metadata };
type Section = { heading: string; entries: Entry[] };

function titleText(meta: Metadata): string {
  const t = meta.title;
  if (typeof t === "string") return t;
  if (t && typeof t === "object" && "absolute" in t && t.absolute) {
    return String(t.absolute);
  }
  return "";
}

function descriptionText(meta: Metadata): string {
  return typeof meta.description === "string" ? meta.description : "";
}

const sections: Section[] = [
  {
    heading: "Company",
    entries: [
      { path: "/", meta: mHome },
      { path: "/the-best-german-language-training-in-kerala/", meta: mAbout },
      { path: "/contact-caspia-overseas-studies/", meta: mContact },
      { path: "/privacy-policy/", meta: mPrivacy },
    ],
  },
  {
    heading: "German Language Training",
    entries: [
      { path: "/german-language-classes/", meta: mGermanLanguage },
      { path: "/success-with-the-best-german-language-class-kerala/", meta: mSuccess },
    ],
  },
  {
    heading: "Nursing in Germany",
    entries: [
      { path: "/nursing-ausbildung-in-germany/", meta: mNursing },
      { path: "/german-nursing-registration/", meta: mGermanNursingReg },
    ],
  },
  {
    heading: "Ausbildung Programs",
    entries: [
      { path: "/logistics-ausbildung-program-caspia-overseas-kochi/", meta: mLogistics },
      { path: "/hospitality-and-tourism-ausbildung-caspia-overseas-kochi/", meta: mHospitality },
      { path: "/information-technology-ausbildung-caspia-overseas-kochi/", meta: mIT },
      { path: "/automotive-and-engineering-ausbildung-caspia-overseas-kochi/", meta: mAutomotive },
      { path: "/anesthesia-technical-assistant-ausbildung-caspia-overseas-kochi/", meta: mAnesthesia },
    ],
  },
  {
    heading: "Study Abroad",
    entries: [
      { path: "/study-in-germany/", meta: mGermany },
      { path: "/study-in-the-uk/", meta: mUK },
      { path: "/study-in-the-usa/", meta: mUSA },
      { path: "/study-in-canada/", meta: mCanada },
      { path: "/study-in-ireland/", meta: mIreland },
      { path: "/study-in-france/", meta: mFrance },
      { path: "/study-in-australia/", meta: mAustralia },
      { path: "/study-in-malta/", meta: mMalta },
      { path: "/study-in-finland/", meta: mFinland },
      { path: "/study-in-new-zealand/", meta: mNewZealand },
    ],
  },
  {
    heading: "Other Courses",
    entries: [
      { path: "/courses/", meta: mCourses },
      { path: "/irs-certified-enrolled-agent-course-in-kochi-kerala/", meta: mEnrolledAgent },
    ],
  },
];

function renderSection(heading: string, entries: Entry[]): string {
  const lines = entries.map((e) => {
    const title = titleText(e.meta);
    const desc = descriptionText(e.meta);
    return `- [${title}](${site.url}${e.path}): ${desc}`;
  });
  return `## ${heading}\n\n${lines.join("\n")}`;
}

export async function GET() {
  const posts = getAllPosts();
  const blogEntries = posts.map(
    (post) => `- [${post.title}](${site.url}/${post.slug}/): ${post.description}`
  );
  const blogSection = `## Blog\n\n${[
    `- [Blog](${site.url}/blogs/): ${descriptionText(mBlogs)}`,
    ...blogEntries,
  ].join("\n")}`;

  const optionalSection = [
    "## Optional",
    "",
    `- [Full page contents](${site.url}/llms-full.txt): the complete text content of every page above, concatenated into one file`,
    `- [XML sitemap](${site.url}/sitemap.xml): machine-readable list of every indexable URL`,
  ].join("\n");

  const body =
    [
      `# ${site.name}`,
      `> ${site.tagline}`,
      `${site.description} Branches: ${site.branches.join(", ")}.`,
      ...sections.map((s) => renderSection(s.heading, s.entries)),
      blogSection,
      optionalSection,
    ].join("\n\n") + "\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
