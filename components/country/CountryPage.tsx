import Image from "next/image";
import {
  WhatsAppCTA,
  PrimaryCTA,
  FaqGrid,
  type FAQItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph, serviceNode } from "@/lib/jsonld";
import { site } from "@/lib/site";

/* ================= Types ================= */

export type CountryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CountryCTA = { label: string; href: string };

export type CountryFaqEntry = { n: number; q: string; a: string };

export type CountryFaqGroup = {
  subheading?: string;
  items: CountryFaqEntry[];
};

export type CountryFeature = {
  title: string;
  text?: string;
  bullets?: string[];
};

export type CountrySection = {
  heading?: string;
  /** Render bullets as stat cards ("facts") or as check-list cards ("checks", default) */
  variant?: "checks" | "facts";
  paragraphs?: string[];
  /** Titled sub-sections rendered as a card grid */
  features?: CountryFeature[];
  bullets?: string[];
  /** Course names rendered as a chip grid with star icons */
  courses?: string[];
  image?: CountryImage;
  ctas?: CountryCTA[];
  faqGroups?: CountryFaqGroup[];
};

/**
 * SEO/JSON-LD facts for a country page. `title`, `description`, `path` and `image`
 * are the same values the page hands to `pageMetadata()` - each page file defines
 * them once and feeds both, so the meta tags and the structured data can't drift.
 */
export type CountrySeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Plain country name, e.g. "Germany". Used for the breadcrumb and Service name. */
  countryName: string;
};

export type CountryData = {
  seo: CountrySeo;
  heroTitle: string;
  /** Original "Register Today" button href from the source page */
  registerHref?: string;
  /** Original "Enquire Now" button href from the source page */
  enquireHref?: string;
  /** Banner image shown right below the hero */
  heroImage?: CountryImage;
  sections: CountrySection[];
  callback: { heading: string; subheading?: string; note?: string };
  /** Content that appears after the callback form in the original page */
  postSections?: CountrySection[];
};

/* ================= Country code lookup (inferred from heroTitle) ================= */
/* Uses ISO codes as a cross-platform watermark instead of emoji flags,
   which don't render as flags on Windows. */

const CODES: { key: string; code: string }[] = [
  { key: "germany", code: "DE" },
  { key: "uk", code: "UK" },
  { key: "usa", code: "USA" },
  { key: "canada", code: "CA" },
  { key: "ireland", code: "IE" },
  { key: "france", code: "FR" },
  { key: "australia", code: "AU" },
  { key: "malta", code: "MT" },
  { key: "finland", code: "FI" },
  { key: "new zealand", code: "NZ" },
];

function codeFor(title: string): string {
  const t = title.toLowerCase();
  const hit = CODES.find((f) => t.includes(f.key));
  return hit ? hit.code : "🌍";
}

/* ================= Icons ================= */

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
      aria-hidden
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 text-orange"
      aria-hidden
    >
      <path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.36L18 20.5 12 17.27 6 20.5l1.25-6.87L2.5 9.27l6.6-1.01L12 2z" />
    </svg>
  );
}

function PhoneLink() {
  return (
    <a
      href={site.phoneHref}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white ring-2 ring-white/40 hover:bg-white/10 transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2z" />
      </svg>
      {site.phone}
    </a>
  );
}

/* ================= Building blocks ================= */

function isWhatsApp(href: string) {
  return href.includes("wa.me") || href.includes("whatsapp");
}

/** Left-aligned section heading with an accent rule. */
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary leading-tight">
        {children}
      </h2>
      <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}

function FactCard({ text }: { text: string }) {
  const idx = text.indexOf(": ");
  const splittable = idx > 0 && idx <= 28;
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm border-l-4 border-accent">
      {splittable ? (
        <>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange">
            {text.slice(0, idx)}
          </p>
          <p className="mt-1.5 font-bold text-secondary leading-snug">
            {text.slice(idx + 2)}
          </p>
        </>
      ) : (
        <p className="font-semibold text-secondary leading-snug">{text}</p>
      )}
    </div>
  );
}

function SectionBlock({
  section,
  tone,
}: {
  section: CountrySection;
  tone: "white" | "mist";
}) {
  const isFacts = section.variant === "facts";
  const hasBody =
    section.paragraphs?.length ||
    section.features?.length ||
    section.bullets?.length ||
    section.courses?.length ||
    section.image ||
    section.ctas?.length ||
    section.faqGroups?.length;

  // Facts sections get an accent-tinted band regardless of alternation
  const bg = isFacts
    ? "bg-secondary text-white"
    : tone === "mist"
      ? "bg-mist"
      : "bg-white";

  return (
    <section className={`${bg} ${hasBody ? "py-14 md:py-20" : "py-10"}`}>
      <div className="mx-auto max-w-6xl px-4">
        {section.heading &&
          (isFacts ? (
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                {section.heading}
              </h2>
              <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent" />
            </div>
          ) : (
            <Heading>{section.heading}</Heading>
          ))}

        {section.paragraphs && section.paragraphs.length > 0 && (
          <div className="max-w-4xl space-y-5">
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed md:text-lg ${
                  isFacts ? "text-white/85" : "text-ink/80"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Feature cards */}
        {section.features && section.features.length > 0 && (
          <div
            className={`${section.paragraphs?.length ? "mt-10" : ""} grid gap-5 md:grid-cols-2`}
          >
            {section.features.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary font-extrabold">
                    {i + 1}
                  </span>
                  <h3 className="font-extrabold text-secondary md:text-lg">
                    {f.title}
                  </h3>
                </div>
                {f.text && (
                  <p className="mt-3 text-ink/80 leading-relaxed">{f.text}</p>
                )}
                {f.bullets && f.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2.5">
                    {f.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-ink/90 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bullets, facts as stat cards, else check cards */}
        {section.bullets && section.bullets.length > 0 && (
          <div
            className={`${section.paragraphs?.length ? "mt-10" : ""} grid gap-4 ${
              isFacts
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "md:grid-cols-2"
            }`}
          >
            {section.bullets.map((b, i) =>
              isFacts ? (
                <FactCard key={i} text={b} />
              ) : (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckIcon />
                  <p className="text-ink/90 leading-relaxed">{b}</p>
                </div>
              )
            )}
          </div>
        )}

        {/* Course chips */}
        {section.courses && section.courses.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {section.courses.map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 ring-1 ring-black/5 shadow-sm font-semibold text-secondary"
              >
                <StarIcon />
                {c}
              </span>
            ))}
          </div>
        )}

        {/* FAQ, 2 columns */}
        {section.faqGroups && section.faqGroups.length > 0 && (
          <div className="space-y-10">
            {section.faqGroups.map((group, gi) => (
              <div key={gi}>
                {group.subheading && (
                  <h3 className="mb-5 text-center text-xl md:text-2xl font-extrabold text-secondary">
                    {group.subheading}
                  </h3>
                )}
                <FaqGrid items={group.items.map((it) => ({ q: it.q, a: it.a }))} />
              </div>
            ))}
          </div>
        )}

        {section.image && (
          <figure className="mt-10 mx-auto max-w-4xl">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className="w-full h-auto rounded-3xl shadow-lg ring-1 ring-black/5"
            />
          </figure>
        )}

        {section.ctas && section.ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {section.ctas.map((cta, i) =>
              isWhatsApp(cta.href) ? (
                <WhatsAppCTA key={i} label={cta.label} href={cta.href} />
              ) : (
                <PrimaryCTA key={i} label={cta.label} href={cta.href} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= Hero ================= */

function CountryHero({ data }: { data: CountryData }) {
  const code = codeFor(data.heroTitle);
  return (
    <>
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        {/* Oversized faded country code as a backdrop watermark */}
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] text-[14rem] md:text-[20rem] font-extrabold leading-none text-white/[0.06] select-none tracking-tighter"
          aria-hidden
        >
          {code}
        </span>
        <div
          className={`relative mx-auto max-w-7xl px-4 pt-16 md:pt-24 text-center ${
            data.heroImage ? "pb-32 md:pb-40" : "pb-16 md:pb-24"
          }`}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Your Gateway to World-Class Education
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            {data.heroTitle}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA
              label="Register Today"
              href={data.registerHref ?? "/german-nursing-registration/"}
            />
            <WhatsAppCTA
              label="Enquire Now"
              href={data.enquireHref ?? site.whatsapp}
            />
          </div>
        </div>
      </section>
      {data.heroImage && (
        <div className="relative z-10 mx-auto max-w-5xl px-4 -mt-20 md:-mt-24">
          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            width={data.heroImage.width}
            height={data.heroImage.height}
            priority
            className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-black/10"
          />
        </div>
      )}
    </>
  );
}

/* ================= Callback panel ================= */

function CallbackPanel({
  callback,
  enquireHref,
}: {
  callback: CountryData["callback"];
  enquireHref?: string;
}) {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-hero bg-hero-shine text-white px-6 py-12 md:p-14 text-center shadow-xl">
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
              {callback.heading}
            </h2>
            {callback.subheading && (
              <p className="mt-4 text-white/85 text-lg md:text-xl font-bold">
                {callback.subheading}
              </p>
            )}
            {callback.note && (
              <p className="mt-2 text-accent font-semibold">{callback.note}</p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <WhatsAppCTA
                label="Enquire Now"
                href={enquireHref ?? site.whatsapp}
              />
              <PhoneLink />
              <PrimaryCTA
                label="Register Today"
                href="/german-nursing-registration/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Page ================= */

export default function CountryPage({ data }: { data: CountryData }) {
  const faqItems: FAQItem[] = data.sections
    .flatMap((s) => s.faqGroups ?? [])
    .flatMap((g) => g.items)
    .map((it) => ({ q: it.q, a: it.a }));

  // Alternate white/mist only across non-facts sections so the rhythm stays clean
  let toneIdx = 0;
  const toneFor = (s: CountrySection) => {
    if (s.variant === "facts") return "white" as const;
    const t = toneIdx % 2 === 0 ? ("white" as const) : ("mist" as const);
    toneIdx += 1;
    return t;
  };

  return (
    <>
      <JsonLd
        data={pageGraph({
          title: data.seo.title,
          description: data.seo.description,
          path: data.seo.path,
          image: data.seo.image,
          faq: faqItems,
          breadcrumbs: [
            { name: `Study in ${data.seo.countryName}`, path: data.seo.path },
          ],
          extraNodes: [
            serviceNode({
              name: `Study in ${data.seo.countryName} consultancy`,
              description: data.seo.description,
              path: data.seo.path,
              serviceType: "Overseas education consultancy",
            }),
          ],
        })}
      />
      <CountryHero data={data} />
      {data.sections.map((section, i) => (
        <SectionBlock key={i} section={section} tone={toneFor(section)} />
      ))}
      <CallbackPanel callback={data.callback} enquireHref={data.enquireHref} />
      {data.postSections?.map((section, i) => (
        <SectionBlock key={i} section={section} tone={toneFor(section)} />
      ))}
    </>
  );
}
