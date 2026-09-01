import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/posts";
import { ContactBand } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { articleNode, pageGraph } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/${slug}/`,
    type: "article",
    image: post.ogImage || undefined,
    imageAlt: post.title,
    publishedTime: post.date || undefined,
    modifiedTime: post.modified || undefined,
  });
}

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const path = `/${slug}/`;

  return (
    <>
      <JsonLd
        data={pageGraph({
          title: post.seoTitle,
          description: post.description,
          path,
          image: post.ogImage || undefined,
          datePublished: post.date || undefined,
          dateModified: post.modified || undefined,
          breadcrumbs: [
            { name: "Blog", path: "/blogs/" },
            { name: post.title, path },
          ],
          extraNodes: [
            articleNode({
              headline: post.title,
              description: post.description,
              path,
              image: post.ogImage || undefined,
              datePublished: post.date || undefined,
              dateModified: post.modified || undefined,
            }),
          ],
        })}
      />

      {/* Hero */}
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Caspia Blog
          </p>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">{post.title}</h1>
          {post.date && (
            <p className="mt-4 text-white/70 text-sm">{formatDate(post.date)}</p>
          )}
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div
          className="prose-caspia"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-mist py-14">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary text-center mb-8">
              More from the Caspia Blog
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow"
                >
                  {p.ogImage && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={p.ogImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBand />
    </>
  );
}
