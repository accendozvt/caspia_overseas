import Link from "next/link";
import { site } from "@/lib/site";

/* ---------- Section heading with eyebrow ---------- */
export function SectionHeading({
  eyebrow,
  title,
  center = true,
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {eyebrow && (
        <p
          className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 ${
            light ? "text-accent" : "text-orange"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-2xl md:text-4xl font-extrabold leading-tight ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </Tag>
    </div>
  );
}

/* ---------- Buttons ---------- */
export function WhatsAppCTA({
  label = "Enquire Now",
  href = site.whatsapp,
  className = "",
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-orange hover:brightness-110 shadow-lg shadow-orange/25 transition-all ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87zm8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.39z" />
      </svg>
      {label}
    </a>
  );
}

export function PrimaryCTA({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) {
  const external = href.startsWith("http");
  const cls = `inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-primary hover:bg-primary-dark shadow-lg shadow-primary/25 transition-colors ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

/* ---------- Page hero (inner pages) ---------- */
export function PageHero({
  eyebrow = "Your Gateway to World-Class Education",
  title,
  subtitle,
  cta = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: boolean;
}) {
  return (
    <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 text-center">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/80 max-w-2xl mx-auto md:text-lg">{subtitle}</p>
        )}
        {cta && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA label="Register Today" href="/german-nursing-registration/" />
            <WhatsAppCTA />
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- FAQ (no-JS accordion) ---------- */
export type FAQItem = { q: string; a: string };

/** One accordion item — shared by the FAQ grid. */
export function FaqRow({ n, item }: { n: number; item: FAQItem }) {
  return (
    <details className="group bg-white rounded-xl shadow-sm ring-1 ring-black/5 open:ring-accent/40 transition-shadow hover:shadow-md">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-secondary [&::-webkit-details-marker]:hidden">
        <span>
          <span className="text-accent">{n}.</span> {item.q}
        </span>
        <span
          className="mt-1 text-accent transition-transform group-open:rotate-45"
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </summary>
      <p className="px-5 pb-5 text-ink/80 leading-relaxed">{item.a}</p>
    </details>
  );
}

/** Two-column accordion grid; each column expands independently. */
export function FaqGrid({ items, offset = 0 }: { items: FAQItem[]; offset?: number }) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-4 items-start">
      <div className="space-y-3 md:space-y-4">
        {left.map((item, j) => (
          <FaqRow key={j} n={offset + j + 1} item={item} />
        ))}
      </div>
      <div className="space-y-3 md:space-y-4">
        {right.map((item, j) => (
          <FaqRow key={j} n={offset + mid + j + 1} item={item} />
        ))}
      </div>
    </div>
  );
}

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  lead,
}: {
  items: FAQItem[];
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="FAQ" title={title} />
        {lead && <p className="text-center text-muted -mt-6 mb-8">{lead}</p>}
        <FaqGrid items={items} />
      </div>
    </section>
  );
}

/** JSON-LD FAQPage schema helper */
export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Contact / admission CTA band ---------- */
export function ContactBand({
  title = "For Admission Related Queries",
  note = "(Only for INDIAN Nationals)",
  text,
}: {
  title?: string;
  note?: string;
  text?: string;
}) {
  return (
    <section className="relative bg-hero bg-hero-shine text-white py-16 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold">{title}</h2>
        {text && <p className="mt-4 text-white/80 md:text-lg">{text}</p>}
        <p className="mt-2 text-accent font-semibold">{note}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryCTA label="Register Today" href="/german-nursing-registration/" />
          <WhatsAppCTA label="WhatsApp Us to Know More" />
        </div>
        <p className="mt-6 text-white/70 text-sm">
          Phone: {site.phone} · Office: {site.address} | {site.branches.join(" | ")}
        </p>
      </div>
    </section>
  );
}
