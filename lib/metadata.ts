import type { Metadata } from "next";
import { site } from "./site";
import ogImageDimensions from "./og-image-dimensions.json";

const DEFAULT_OG_IMAGE_WEBP = "/assets/opengraph/preview.webp";
const DEFAULT_OG_IMAGE_PNG = "/assets/opengraph/preview.png";
const TWITTER_HANDLE = "@CaspiaOverseas";

type ImageDims = { width: number; height: number; type: string };
const DIMENSIONS: Record<string, ImageDims> = ogImageDimensions;

type PageMetadataInput = {
  /** Final, complete title including the "| Caspia Overseas Studies" (or similar) brand suffix. */
  title: string;
  description: string;
  /** Root-relative path, must start and end with "/", e.g. "/study-in-germany/". */
  path: string;
  type?: "website" | "article";
  /** Root-relative path to a page-specific OG image (e.g. a blog post's hero image). Falls back to the shared brand preview image. Its real dimensions are looked up from lib/og-image-dimensions.json (see scripts/generate-og-dimensions.js). */
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Builds a complete Metadata object (title, description, canonical, full OpenGraph,
 * full Twitter Card) for a single page. Next.js does not deep-merge `openGraph`/`twitter`
 * between a layout and a page: if a page defines its own `openGraph`, it fully replaces
 * the layout's, silently dropping `type`/`siteName`/`locale`. Every page must therefore
 * build its OG/Twitter metadata explicitly through this helper rather than relying on
 * inheritance from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const alt = imageAlt || (title.includes("Caspia") ? title : `${site.name}: ${title}`);

  let images: NonNullable<Metadata["openGraph"]>["images"];
  let twitterImage: string;

  if (image) {
    const dims = DIMENSIONS[image];
    const absoluteUrl = `${site.url}${image}`;
    images = [
      {
        url: absoluteUrl,
        alt,
        ...(dims ? { width: dims.width, height: dims.height, type: dims.type } : {}),
      },
    ];
    twitterImage = absoluteUrl;
  } else {
    images = [
      {
        url: `${site.url}${DEFAULT_OG_IMAGE_WEBP}`,
        width: 1200,
        height: 630,
        alt,
        type: "image/webp",
      },
      {
        url: `${site.url}${DEFAULT_OG_IMAGE_PNG}`,
        width: 1200,
        height: 630,
        alt,
        type: "image/png",
      },
    ];
    twitterImage = `${site.url}${DEFAULT_OG_IMAGE_WEBP}`;
  }

  const openGraphBase = {
    siteName: site.name,
    locale: "en_IN",
    url,
    title,
    description,
    images,
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          ...openGraphBase,
          type: "article",
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : { ...openGraphBase, type: "website" };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: twitterImage, alt }],
      site: TWITTER_HANDLE,
    },
  };
}
