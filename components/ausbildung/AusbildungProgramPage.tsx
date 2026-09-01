import Image from "next/image";
import {
  PageHero,
  SectionHeading,
  WhatsAppCTA,
  PrimaryCTA,
  FAQ,
  ContactBand,
  type FAQItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph, serviceNode } from "@/lib/jsonld";

/* ---------------- Types ---------------- */

export type Img = { src: string; alt: string; width: number; height: number };
export type Cta = { label: string; href: string };

export type Card = {
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type StatCard = { label: string; value: string; caption?: string };

export type Tone = "white" | "mist" | "dark";

export type CardsSection = {
  kind: "cards";
  title: string;
  lead?: string[];
  subheading?: string;
  cards: Card[];
  cols?: 2 | 3 | 4;
  tone?: Tone;
};

export type CareerSection = {
  kind: "career";
  title: string;
  lead?: string[];
  stats?: StatCard[];
  subheading?: string;
  bullets?: string[];
  blocks?: Card[];
  image?: Img;
  tone?: Tone;
};

export type StepsSection = {
  kind: "steps";
  title: string;
  lead?: string[];
  steps: string[];
  image?: Img;
  tone?: Tone;
};

export type Section = CardsSection | CareerSection | StepsSection;

/**
 * SEO/JSON-LD facts for an Ausbildung program page. `title`, `description`, `path`
 * and `image` are the same values the page hands to `pageMetadata()` - each page file
 * defines them once and feeds both, so meta tags and structured data can't drift.
 */
export type AusbildungSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Short program name, e.g. "Logistics Ausbildung". Used for breadcrumb and Service name. */
  programName: string;
};

export type AusbildungPageData = {
  seo: AusbildungSeo;
  heroTitle: string;
  headline: string;
  subheadline: string;
  intro: string[];
  heroCta: Cta;
  heroImage: Img;
  sections: Section[];
  faqTitle: string;
  faqLead: string;
  faq: FAQItem[];
  closing: {
    title: string;
    paragraphs: string[];
    contactHeading: string;
    contactLines: string[];
    ctas: Cta[];
  };
  footImage: Img;
};

/* ---------------- Helpers ---------------- */

const toneCls: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-mist",
  dark: "bg-secondary text-white",
};

const badgeCls = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-orange/10 text-orange",
];

/** Bolds a leading "Label:" prefix while keeping the text verbatim. */
function Rich({ text }: { text: string }) {
  const m = text.match(/^([^:]{2,60}):\s([\s\S]*)$/);
  if (m && !m[1].includes(".")) {
    return (
      <>
        <strong className="font-bold">{m[1]}:</strong> {m[2]}
      </>
    );
  }
  return <>{text}</>;
}

function CheckIcon({ className = "text-accent" }: { className?: string }) {
  return (
    <span className={`mt-1 shrink-0 ${className}`} aria-hidden>
      <svg
        width="14"
        height="14"
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

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((b, i) => (
        <li
          key={i}
          className={`flex gap-2.5 items-start text-sm leading-relaxed ${
            dark ? "text-white/85" : "text-ink/80"
          }`}
        >
          <CheckIcon />
          <span>
            <Rich text={b} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Splits an optional leading "N." out of a card title for the number badge. */
function splitNumber(title: string): { num: string | null; rest: string } {
  const m = title.match(/^(\d+)\.\s*([\s\S]*)$/);
  return m ? { num: m[1], rest: m[2] } : { num: null, rest: title };
}

function CardBox({ card, index }: { card: Card; index: number }) {
  const { num, rest } = splitNumber(card.title);
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow flex flex-col">
      {num && (
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-5 ${
            badgeCls[index % badgeCls.length]
          }`}
        >
          {num}
        </div>
      )}
      <h3 className="text-lg font-extrabold text-secondary leading-snug">{rest}</h3>
      {card.subtitle && (
        <p className="mt-1 text-sm font-bold text-primary">{card.subtitle}</p>
      )}
      {card.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-sm text-ink/80 leading-relaxed">
          <Rich text={p} />
        </p>
      ))}
      {card.bullets && <BulletList items={card.bullets} />}
    </div>
  );
}

function gridCols(count: number, cols?: 2 | 3 | 4): string {
  const c = cols ?? (count === 2 ? 2 : count === 4 ? 4 : 3);
  if (c === 2) return "grid gap-6 md:grid-cols-2";
  if (c === 4) return "grid gap-6 md:grid-cols-2 lg:grid-cols-4";
  return "grid gap-6 md:grid-cols-2 lg:grid-cols-3";
}

function StatCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`rounded-3xl p-8 text-center text-white shadow-lg ${
            i === 0
              ? "bg-gradient-to-b from-primary to-primary-dark"
              : i === 1
              ? "bg-gradient-to-b from-blue to-secondary"
              : "bg-gradient-to-b from-secondary to-secondary-deep"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            {s.label}
          </p>
          <p className="mt-3 text-3xl md:text-4xl font-extrabold text-accent">{s.value}</p>
          {s.caption && <p className="mt-2 text-sm text-white/75">{s.caption}</p>}
        </div>
      ))}
    </div>
  );
}

function SectionLead({ lead, dark = false }: { lead?: string[]; dark?: boolean }) {
  if (!lead?.length) return null;
  return (
    <div className="max-w-3xl mx-auto text-center -mt-6 mb-10 space-y-3">
      {lead.map((p, i) => (
        <p key={i} className={dark ? "text-white/80" : "text-muted"}>
          {p}
        </p>
      ))}
    </div>
  );
}

/* ---------------- Section renderers ---------------- */

function RenderCards({ s }: { s: CardsSection }) {
  const tone = s.tone ?? "white";
  return (
    <section className={`${toneCls[tone]} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={s.title} light={tone === "dark"} />
        <SectionLead lead={s.lead} dark={tone === "dark"} />
        {s.subheading && (
          <h3
            className={`text-center text-lg md:text-xl font-extrabold mb-8 ${
              tone === "dark" ? "text-accent" : "text-secondary"
            }`}
          >
            {s.subheading}
          </h3>
        )}
        <div className={gridCols(s.cards.length, s.cols)}>
          {s.cards.map((c, i) => (
            <CardBox key={i} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerBlocks({ blocks }: { blocks: Card[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => (
        <div key={i} className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-extrabold text-secondary">{b.title}</h3>
          {b.paragraphs?.map((p, j) => (
            <p key={j} className="mt-3 text-ink/85 leading-relaxed font-semibold">
              <Rich text={p} />
            </p>
          ))}
          {b.bullets && <BulletList items={b.bullets} />}
        </div>
      ))}
    </div>
  );
}

function RenderCareer({ s }: { s: CareerSection }) {
  const tone = s.tone ?? "white";
  const body = (
    <>
      {s.stats && <StatCards stats={s.stats} />}
      {s.subheading && (
        <h3 className="text-center text-lg md:text-2xl font-extrabold text-secondary mt-12 mb-2">
          {s.subheading}
        </h3>
      )}
      {s.bullets && !s.image && (
        <div className="max-w-3xl mx-auto">
          <BulletList items={s.bullets} />
        </div>
      )}
    </>
  );

  if (s.image) {
    return (
      <section className={`${toneCls[tone]} py-16 md:py-24`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={s.image.src}
                alt={s.image.alt}
                width={s.image.width}
                height={s.image.height}
                sizes="448px"
                className="rounded-3xl w-full h-auto object-cover max-w-md mx-auto"
              />
            </div>
            <div>
              <SectionHeading title={s.title} center={false} />
              {s.lead?.map((p, i) => (
                <p key={i} className="text-muted -mt-6 mb-8">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
                  <BulletList items={s.bullets} />
                </div>
              )}
              {s.blocks && <CareerBlocks blocks={s.blocks} />}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${toneCls[tone]} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={s.title} />
        <SectionLead lead={s.lead} />
        {body}
        {s.blocks && (
          <div className="max-w-3xl mx-auto">
            <CareerBlocks blocks={s.blocks} />
          </div>
        )}
      </div>
    </section>
  );
}

function StepsTimeline({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <ol className="space-y-0">
      {steps.map((raw, i) => {
        const { num, rest } = splitNumber(raw);
        return (
          <li key={i} className="relative flex gap-5">
            <div className="flex flex-col items-center">
              <span
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-extrabold shadow-lg ${
                  dark
                    ? "bg-accent text-secondary shadow-accent/20"
                    : "bg-primary text-white shadow-primary/25"
                }`}
              >
                {num ?? i + 1}
              </span>
              {i < steps.length - 1 && (
                <span
                  className={`w-px flex-1 my-1 ${dark ? "bg-white/20" : "bg-primary/20"}`}
                  aria-hidden
                />
              )}
            </div>
            <p
              className={`pt-2 pb-8 leading-relaxed ${
                dark ? "text-white/85" : "text-ink/85"
              }`}
            >
              <Rich text={rest} />
            </p>
          </li>
        );
      })}
    </ol>
  );
}

function RenderSteps({ s }: { s: StepsSection }) {
  const tone = s.tone ?? "dark";
  const dark = tone === "dark";
  return (
    <section className={`${toneCls[tone]} py-16 md:py-24 overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={s.title} light={dark} />
        <SectionLead lead={s.lead} dark={dark} />
        {s.image ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={s.image.src}
                alt={s.image.alt}
                width={s.image.width}
                height={s.image.height}
                sizes="448px"
                className={`rounded-3xl w-full h-auto object-cover max-w-md mx-auto ${
                  dark ? "ring-4 ring-white/10" : ""
                }`}
              />
            </div>
            <div>
              <StepsTimeline steps={s.steps} dark={dark} />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <StepsTimeline steps={s.steps} dark={dark} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Page template ---------------- */

function CtaButton({ cta, className = "" }: { cta: Cta; className?: string }) {
  return cta.href.includes("wa.me") ? (
    <WhatsAppCTA label={cta.label} href={cta.href} className={className} />
  ) : (
    <PrimaryCTA label={cta.label} href={cta.href} className={className} />
  );
}

export function AusbildungProgramPage({ data }: { data: AusbildungPageData }) {
  return (
    <>
      <JsonLd
        data={pageGraph({
          title: data.seo.title,
          description: data.seo.description,
          path: data.seo.path,
          image: data.seo.image,
          faq: data.faq,
          breadcrumbs: [
            { name: "Courses", path: "/courses/" },
            { name: data.seo.programName, path: data.seo.path },
          ],
          extraNodes: [
            serviceNode({
              name: `${data.seo.programName} placement and training`,
              description: data.seo.description,
              path: data.seo.path,
              serviceType: "Ausbildung placement and German language training",
            }),
          ],
        })}
      />

      <PageHero title={data.heroTitle} cta={false} />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              {data.headline}
            </h2>
            <p className="mt-4 text-orange font-bold md:text-lg">{data.subheadline}</p>
            <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
              {data.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <CtaButton cta={data.heroCta} />
            </div>
          </div>
          <div>
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              width={data.heroImage.width}
              height={data.heroImage.height}
              sizes="512px"
              className="rounded-3xl w-full h-auto object-cover max-w-lg mx-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {data.sections.map((s, i) => {
        if (s.kind === "cards") return <RenderCards key={i} s={s} />;
        if (s.kind === "career") return <RenderCareer key={i} s={s} />;
        return <RenderSteps key={i} s={s} />;
      })}

      <FAQ items={data.faq} title={data.faqTitle} lead={data.faqLead} />

      {/* Closing CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-secondary">
            {data.closing.title}
          </h2>
          {data.closing.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-ink/85 md:text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <h3 className="mt-8 text-lg md:text-xl font-extrabold text-secondary">
            {data.closing.contactHeading}
          </h3>
          <div className="mt-3 space-y-1">
            {data.closing.contactLines.map((l, i) => (
              <p key={i} className="text-ink/80">
                <Rich text={l} />
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {data.closing.ctas.map((c, i) => (
              <CtaButton key={i} cta={c} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="The Best German Language Classes in Kerala"
        text="For Admission Related Queries"
        note="(Only for INDIAN Nationals)"
      />

      {/* Footer illustration */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <Image
            src={data.footImage.src}
            alt={data.footImage.alt}
            width={data.footImage.width}
            height={data.footImage.height}
            sizes="384px"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </section>
    </>
  );
}
