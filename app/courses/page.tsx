import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, ContactBand } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "German Language & Ausbildung Courses | Caspia" },
  description:
    "Explore German language classes, OET/IELTS prep, and Ausbildung programs in Nursing, IT, Logistics, and more with Caspia Overseas Studies in Kochi, Kerala.",
  alternates: { canonical: "/courses/" },
};

const courses: { title: string; href?: string }[] = [
  { title: "German Language", href: "/german-language-classes/" },
  { title: "OET" },
  { title: "IELTS" },
  { title: "Engineering & Medical" },
  { title: "Management Courses" },
  { title: "Hospitality Management" },
  {
    title: "IRS Certified Enrolled Agent",
    href: "/irs-certified-enrolled-agent-course-in-kochi-kerala/",
  },
];

const ausbildung: { title: string; href: string }[] = [
  { title: "Nursing", href: "/nursing-ausbildung-in-germany/" },
  { title: "Logistics", href: "/logistics-ausbildung-program-caspia-overseas-kochi/" },
  {
    title: "Hospitality & Tourism",
    href: "/hospitality-and-tourism-ausbildung-caspia-overseas-kochi/",
  },
  {
    title: "Information Technology",
    href: "/information-technology-ausbildung-caspia-overseas-kochi/",
  },
  {
    title: "Automotive & Engineering",
    href: "/automotive-and-engineering-ausbildung-caspia-overseas-kochi/",
  },
  {
    title: "Anesthesia Technical Assistant",
    href: "/anesthesia-technical-assistant-ausbildung-caspia-overseas-kochi/",
  },
];

function CourseCard({ title, href }: { title: string; href?: string }) {
  const inner = (
    <>
      <h3 className="text-lg font-extrabold text-secondary group-hover:text-primary transition-colors">
        {title}
      </h3>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  );

  const cls =
    "group flex flex-col justify-between bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all";

  return href ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Courses" />

      {/* ============ COURSES ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Training & Coaching" title="Our Courses" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.title} title={c.title} href={c.href} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUSBILDUNG PROGRAMS ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Earn While You Learn" title="Ausbildung Programs in Germany" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ausbildung.map((c) => (
              <CourseCard key={c.title} title={c.title} href={c.href} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
