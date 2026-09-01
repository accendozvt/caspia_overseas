import { site } from "./site";
import ogImageDimensions from "./og-image-dimensions.json";

/**
 * Central JSON-LD builders.
 *
 * Every page emits ONE `@graph` block describing itself, and the root layout emits
 * ONE `@graph` block describing the site and the company. Nodes are linked by `@id`
 * rather than being re-inlined, so the whole site describes a single Organization
 * entity and a single WebSite entity instead of 76 duplicate copies of each.
 *
 * The stable `@id` values below are what make that cross-referencing work - they are
 * URIs, not URLs, and must stay stable across pages.
 */

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

const DEFAULT_OG_IMAGE = "/assets/opengraph/preview.webp";
const LOGO_PATH = "/images/2023/01/Caspia-Squ.png";

type ImageDims = { width: number; height: number; type: string };
const DIMENSIONS: Record<string, ImageDims> = ogImageDimensions;

type JsonLdNode = Record<string, unknown>;

function imageNode(imgPath: string): JsonLdNode {
  const dims =
    imgPath === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : DIMENSIONS[imgPath];
  return {
    "@type": "ImageObject",
    url: `${site.url}${imgPath}`,
    ...(dims ? { width: dims.width, height: dims.height } : {}),
  };
}

const postalAddress: JsonLdNode = {
  "@type": "PostalAddress",
  addressLocality: "Vyttila, Kochi",
  addressRegion: "Kerala",
  addressCountry: "IN",
};

/**
 * The company. Typed as both EducationalOrganization and LocalBusiness because Caspia
 * is genuinely both: an institute that teaches, and a walk-in business with a physical
 * campus in Vyttila, Kochi.
 *
 * Deliberately omits street address, postal code, geo coordinates, opening hours and
 * price range: none of those exist anywhere in the repo, and structured data must not
 * assert facts the site cannot back up.
 */
function organizationNode(): JsonLdNode {
  return {
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: `${site.url}/`,
    logo: imageNode(LOGO_PATH),
    image: imageNode(LOGO_PATH),
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    areaServed: [
      { "@type": "State", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Admissions",
      telephone: site.phone,
      email: site.email,
      areaServed: "IN",
      availableLanguage: ["en", "ml"],
    },
    sameAs: [
      site.social.facebook,
      site.social.twitter,
      site.social.instagram,
      site.social.youtube,
      site.social.linkedin,
    ],
  };
}

function webSiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Sitewide graph, emitted once from the root layout. */
export function siteGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), webSiteNode()],
  };
}

/* ------------------------------------------------------------------ */
/* Per-page graph                                                      */
/* ------------------------------------------------------------------ */

export type Crumb = { name: string; path: string };
export type FaqEntry = { q: string; a: string };

/** WebPage subtypes that match a real page's purpose. */
export type PageKind = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export type PageGraphInput = {
  title: string;
  description: string;
  /** Root-relative, starts and ends with "/". */
  path: string;
  kind?: PageKind;
  /** Root-relative image path; falls back to the shared brand preview card. */
  image?: string;
  /**
   * Trail from (but not including) Home down to this page. Home is prepended
   * automatically. Omit on the home page itself.
   */
  breadcrumbs?: Crumb[];
  /** Visible FAQ entries on this page; merged onto the page node as FAQPage. */
  faq?: FaqEntry[];
  datePublished?: string;
  dateModified?: string;
  /** Page-specific nodes (Service, Course, Article, ...) added to the same graph. */
  extraNodes?: JsonLdNode[];
};

export function webPageId(path: string): string {
  return `${site.url}${path}#webpage`;
}

function breadcrumbNode(path: string, crumbs: Crumb[]): JsonLdNode {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${path}#breadcrumb`,
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

export function pageGraph({
  title,
  description,
  path,
  kind = "WebPage",
  image,
  breadcrumbs,
  faq,
  datePublished,
  dateModified,
  extraNodes = [],
}: PageGraphInput): JsonLdNode {
  const hasFaq = Boolean(faq && faq.length > 0);

  // A URL is one page entity. When the page shows FAQs we multi-type the single
  // page node rather than emitting a second, competing page entity for the same URL.
  const type = hasFaq ? [kind, "FAQPage"] : kind;

  const page: JsonLdNode = {
    "@type": type,
    "@id": webPageId(path),
    url: `${site.url}${path}`,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: imageNode(image || DEFAULT_OG_IMAGE),
    inLanguage: "en-IN",
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(breadcrumbs && breadcrumbs.length > 0
      ? { breadcrumb: { "@id": `${site.url}${path}#breadcrumb` } }
      : {}),
    ...(hasFaq
      ? {
          mainEntity: faq!.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      page,
      ...(breadcrumbs && breadcrumbs.length > 0 ? [breadcrumbNode(path, breadcrumbs)] : []),
      ...extraNodes,
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Page-specific node builders                                         */
/* ------------------------------------------------------------------ */

/**
 * A guidance/placement service Caspia provides (Ausbildung placement, study-abroad
 * consultancy). The provider is referenced by @id, never re-inlined.
 */
export function serviceNode({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name,
    description,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "State", name: "Kerala" },
      { "@type": "Country", name: "India" },
    ],
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    mainEntityOfPage: { "@id": webPageId(path) },
  };
}

/** A course Caspia itself teaches. */
export function courseNode({
  name,
  description,
  path,
  teaches,
  educationalLevel,
  courseModes,
}: {
  name: string;
  description: string;
  path: string;
  teaches: string;
  educationalLevel: string[];
  courseModes: ("Onsite" | "Online")[];
}): JsonLdNode {
  return {
    "@type": "Course",
    "@id": `${site.url}${path}#course`,
    name,
    description,
    teaches,
    educationalLevel,
    provider: { "@id": ORG_ID },
    hasCourseInstance: courseModes.map((mode) => ({
      "@type": "CourseInstance",
      courseMode: mode,
      ...(mode === "Onsite"
        ? {
            location: {
              "@type": "Place",
              name: `${site.name}, ${site.address}`,
              address: postalAddress,
            },
          }
        : {}),
    })),
    mainEntityOfPage: { "@id": webPageId(path) },
  };
}

/** A blog post. Author and publisher are @id references to the one Organization. */
export function articleNode({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLdNode {
  return {
    "@type": "Article",
    "@id": `${site.url}${path}#article`,
    headline,
    description,
    ...(image ? { image: imageNode(image) } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": webPageId(path) },
    mainEntityOfPage: { "@id": webPageId(path) },
  };
}
