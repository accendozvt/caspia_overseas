import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const staticPages = [
  "",
  "the-best-german-language-training-in-kerala",
  "german-language-classes",
  "success-with-the-best-german-language-class-kerala",
  "study-in-germany",
  "study-in-the-uk",
  "study-in-the-usa",
  "study-in-canada",
  "study-in-ireland",
  "study-in-france",
  "study-in-australia",
  "study-in-malta",
  "study-in-finland",
  "study-in-new-zealand",
  "nursing-ausbildung-in-germany",
  "logistics-ausbildung-program-caspia-overseas-kochi",
  "hospitality-and-tourism-ausbildung-caspia-overseas-kochi",
  "information-technology-ausbildung-caspia-overseas-kochi",
  "automotive-and-engineering-ausbildung-caspia-overseas-kochi",
  "anesthesia-technical-assistant-ausbildung-caspia-overseas-kochi",
  "irs-certified-enrolled-agent-course-in-kochi-kerala",
  "german-nursing-registration",
  "contact-caspia-overseas-studies",
  "courses",
  "blogs",
  "privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${site.url}/${p ? p + "/" : ""}`,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/${post.slug}/`,
    lastModified: post.modified || post.date || undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
