import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog: German Language & Ausbildung Guides | Caspia",
  description:
    "Insights, guides and updates on German language learning, Ausbildung programs, and studying abroad: from Caspia Overseas Studies, Kochi.",
  path: "/blogs/",
});

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Caspia Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold">Articles</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Guides and updates on German language learning, Ausbildung and overseas education.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {featured && (
          <Link
            href={`/${featured.slug}/`}
            className="group grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-xl transition-shadow mb-12"
          >
            {featured.ogImage && (
              <div className="relative h-64 md:h-auto md:min-h-80 overflow-hidden">
                <Image
                  src={featured.ogImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">
                Latest Article
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted line-clamp-3">{featured.excerpt}</p>
              <p className="mt-4 text-sm text-muted">{formatDate(featured.date)}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
                Read article
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}/`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow flex flex-col"
            >
              {p.ogImage ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.ogImage}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white/80 font-bold text-lg px-6 text-center line-clamp-3">
                    {p.title}
                  </span>
                </div>
              )}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-3 flex-1">{p.excerpt}</p>
                <p className="mt-3 text-xs text-muted">{formatDate(p.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
