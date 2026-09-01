import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppCTA } from "@/components/ui";
import FormEmbed from "@/components/FormEmbed";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/jsonld";

const seo = {
  title: "Contact - Caspia Overseas Studies - German Language Classes",
  description:
    "Contact Caspia Overseas Studies in Vyttila, Kochi for German language classes and Ausbildung guidance. Call, WhatsApp, or visit one of our 5 Kerala branches.",
  path: "/contact-caspia-overseas-studies/",
};

export const metadata: Metadata = pageMetadata(seo);

const socials = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Twitter", href: site.social.twitter },
  { label: "Instagram", href: site.social.instagram },
  { label: "YouTube", href: site.social.youtube },
  { label: "LinkedIn", href: site.social.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          ...seo,
          kind: "ContactPage",
          breadcrumbs: [{ name: "Contact", path: "/contact-caspia-overseas-studies/" }],
        })}
      />

      {/* ============ HERO ============ */}
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Caspia Overseas Studies
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-bold text-white/90">
            The Best German Language Classes in Kerala
          </p>
        </div>
      </section>

      {/* ============ CONTACT CARDS ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5" aria-hidden>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h2 className="font-extrabold text-secondary tracking-wide">Call Us</h2>
              <p className="mt-3">
                <a href={site.phoneHref} className="font-bold text-primary hover:underline">
                  {site.phone}
                </a>
              </p>
              <p className="mt-1 text-ink/80 font-semibold">{site.altPhones}</p>
            </div>
            {/* Email */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5" aria-hidden>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h2 className="font-extrabold text-secondary tracking-wide">Email Us</h2>
              <p className="mt-3">
                <a href={`mailto:${site.email}`} className="font-bold text-primary hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
            {/* Address */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-5" aria-hidden>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h2 className="font-extrabold text-secondary tracking-wide">Visit Us</h2>
              <p className="mt-3 font-bold text-ink">{site.address}</p>
              <p className="mt-1 text-sm text-muted font-semibold">
                Branches: {site.branches.join(" | ")}
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted">
              Follow Us
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-bold bg-mist text-secondary hover:bg-primary hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
            <WhatsAppCTA label="WhatsApp Us" className="px-4 py-2 text-sm" />
          </div>
        </div>
      </section>

      {/* ============ ADMISSION FORM ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              For Admission Related Queries
            </h2>
            <p className="mt-2 text-orange font-bold">(Only for INDIAN Nationals)</p>
            <p className="mt-5 text-ink/80 leading-relaxed">
              Fill in the form and our admission counsellors will get back to you at the earliest.
            </p>
            <Image
              src="/images/2023/04/Layer-3-e1680957652753.png"
              alt="Overseas Consultancy and Study Abroad in Kochi"
              width={733}
              height={959}
              sizes="448px"
              className="mt-8 rounded-3xl w-full max-w-md h-auto"
            />
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm ring-1 ring-black/5">
            <FormEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
