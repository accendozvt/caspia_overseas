import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import {
  PageHero,
  SectionHeading,
  WhatsAppCTA,
  FAQ,
  ContactBand,
  type FAQItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph, serviceNode } from "@/lib/jsonld";

const seo = {
  title: "Nursing Ausbildung in Germany | Caspia Overseas Studies",
  description:
    "Caspia Overseas Studies (formerly DirectionNXT) is Kochi's pioneer in German language training and admission guidance for Nursing Ausbildung in Germany.",
  path: "/nursing-ausbildung-in-germany/",
};

export const metadata: Metadata = pageMetadata(seo);

const faqItems: FAQItem[] = [
  {
    q: "Is Nursing Ausbildung in Germany completely free?",
    a: "Yes! There are no tuition fees. In fact, it is a paid program where you receive a monthly salary of €1,300+ to cover your living expenses.",
  },
  {
    q: "Can I apply for Nursing Ausbildung without NEET?",
    a: "Yes. NEET is an Indian entrance exam and is not required for Germany. Your 12th-grade marks and German language skills are what matter.",
  },
  {
    q: "Is a Blocked Account mandatory for Nursing Ausbildung?",
    a: "In most cases, No. If your monthly stipend (e.g., €1,340) is higher than the required cost of living proof (~€992), the embassy usually waives the blocked account requirement. Caspia will guide you based on your specific contract.",
  },
  {
    q: "How difficult is the German B2 exam?",
    a: "It is challenging but achievable. With Caspia’s specialized training methodology, most Kerala students clear B2 in 6-8 months of dedicated study.",
  },
  {
    q: "Can I work part-time during Ausbildung?",
    a: "Yes, you can work up to 10 hours/week in a mini-job to earn extra pocket money, but your training schedule will be busy, so focus on studies first.",
  },
  {
    q: "What is the difference between BSc Nursing and Ausbildung?",
    a: "BSc Nursing is an academic university degree. Ausbildung is a practical vocational qualification. In Germany, both lead to the same license to practice as a Registered Nurse.",
  },
  {
    q: "Can I bring my family while studying?",
    a: "Generally, family reunion visas are for working professionals. During the 3-year Ausbildung, bringing a spouse is difficult unless they qualify for their own visa. You can bring them easily once you start working full-time after 3 years.",
  },
  {
    q: "Is there an entrance exam for Ausbildung?",
    a: "There is no centralized entrance exam like NEET. However, individual hospitals may conduct a digital interview or a small test to check your German proficiency and aptitude.",
  },
  {
    q: "Can Arts/Commerce students apply for Nursing in Germany?",
    a: "Yes, though Science students are preferred. If you are from Arts/Commerce but have strong grades and excellent German skills, you can still secure a spot. Caspia can help highlight your strengths.",
  },
  {
    q: "Why choose Caspia Overseas for Nursing in Germany?",
    a: "We are Kerala’s specialists for Germany. We don’t just send applications; we train you in the language, prepare you for the culture, and support you until you are settled in Germany.",
  },
];

const whatIsCards = [
  {
    title: "Theory (2,100 Hours)",
    text: "You study medical subjects like Anatomy, Pharmacology, and Ethics at a Nursing School (Pflegeschule).",
  },
  {
    title: "Practical (2,500 Hours)",
    text: "You work in real hospitals, elderly care homes, and pediatric wards, gaining hands-on experience with patients.",
  },
  {
    title: 'The "Generalist" Revolution',
    text: "Since 2020, the separate courses for Elderly Care, Sick Care, and Pediatric Care have been combined into one universal qualification: Pflegefachmann/Pflegefachfrau. Your license is valid across all medical sectors in the entire European Union.",
  },
];

const stipendCards = [
  { label: "1st Year", value: "~ €1,340", caption: "per month" },
  { label: "2nd Year", value: "~ €1,402", caption: "per month" },
  { label: "3rd Year", value: "~ €1,503", caption: "per month" },
];

const eligibilityBlocks = [
  {
    title: "1. Academic Qualification",
    items: [
      "Higher Secondary (12th Passed): You need a valid 12th-grade certificate (Abitur equivalent).",
      "Subject Preference: Science stream (Biology/Chemistry) is preferred, but students from other streams with strong profiles can also apply.",
      "Minimum Marks: 60% and above is recommended.",
    ],
    intro: null as string | null,
  },
  {
    title: "2. German Language Proficiency",
    intro: "You cannot treat patients if you cannot speak to them.",
    items: [
      "Requirement: Level B2 Certificate (Goethe, Telc, or ÖSD).",
      "Why B2? A1/A2 is not enough. You must understand medical instructions in German.",
      "Solution: Join Caspia’s Best German Language Classes in Kerala to fast-track your B2 certification with native-level trainers.",
    ],
  },
  {
    title: "3. Age Limit",
    intro: null as string | null,
    items: [
      "Ideal Age: 17 to 30 years.",
      "Note: While there is no legal upper limit, employers prefer younger candidates for vocational training.",
    ],
  },
];

const careerBullets = [
  "Starting Salary (2026): €2,800 – €3,200 Gross/Month.",
  "With Experience: €3,500 – €4,000+ Gross/Month.",
  "Specializations: You can further specialize (Fachweiterbildung) in ICU, Anesthesia, Oncology, or Psychiatry to double your income.",
  "Higher Studies: Your Ausbildung qualification allows you to study for a Bachelor’s or Master’s in Nursing Science later if you choose.",
];

const hospitals = [
  "Charité – Universitätsmedizin Berlin",
  "Universitätsklinikum Heidelberg",
  "Universitätsklinikum Hamburg-Eppendorf (UKE)",
  "LMU Klinikum München (Munich)",
  "Universitätsklinikum Freiburg",
  "Universitätsklinikum Köln (Cologne)",
  "Universitätsklinikum Tübingen",
  "Universitätsklinikum Dresden",
  "Universitätsklinikum Frankfurt",
  "Medizinische Hochschule Hannover (MHH)",
  "Universitätsklinikum Bonn",
  "Universitätsklinikum Erlangen",
  "Universitätsklinikum Essen",
  "Universitätsklinikum Würzburg",
  "Universitätsklinikum Leipzig",
  "Universitätsklinikum Aachen",
  "Universitätsklinikum Münster",
  "Klinikum Stuttgart",
  "Vivantes Hospital Network (Berlin)",
  "Asklepios Kliniken (National)",
];

const processSteps = [
  "Counseling & Assessment: We evaluate your profile and explain the roadmap.",
  "German Language Training: Enrol in Caspia’s A1-B2 intensive batches (Offline in Kochi or Online).",
  "Document Preparation: We handle the Translation and Recognition (Anerkennung) of your 12th-grade certificates.",
  "CV & Motivation Letter: We craft a German-standard Lebenslauf (CV) and Anschreiben (Cover Letter) that employers love.",
  "Interview Preparation: We conduct mock interviews to prepare you for questions from the German Hospital HR.",
  "Contract & Visa: Once you get the contract, we file your visa application.",
  "Fly to Germany: We assist with flights, accommodation, and city registration.",
];

const readySteps = [
  "Step 1: Book a Free Consultation.",
  "Step 2: Join our next German A1 Batch.",
  "Step 3: Fly to Germany next year!",
];

const badgeCls = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-orange/10 text-orange",
];

function CheckIcon() {
  return (
    <span className="mt-1 shrink-0 text-accent" aria-hidden>
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

/** Bolds a leading "Label:" prefix while keeping the text verbatim. */
function Rich({ text }: { text: string }) {
  const m = text.match(/^([^:]{2,60}):\s([^]*)$/);
  if (m && !m[1].includes(".")) {
    return (
      <>
        <strong className="font-bold">{m[1]}:</strong> {m[2]}
      </>
    );
  }
  return <>{text}</>;
}

export default function NursingAusbildungPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          ...seo,
          faq: faqItems,
          breadcrumbs: [
            { name: "Courses", path: "/courses/" },
            { name: "Nursing Ausbildung", path: seo.path },
          ],
          extraNodes: [
            serviceNode({
              name: "Nursing Ausbildung placement and training",
              description: seo.description,
              path: seo.path,
              serviceType: "Ausbildung placement and German language training",
            }),
          ],
        })}
      />

      <PageHero title="Study Nursing Ausbildung in Germany" cta={false} />

      {/* ============ INTRO ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              Nursing Ausbildung in Germany: Your Complete Guide to a Free, Paid Career in
              2026
            </h2>
            <p className="mt-4 text-orange font-bold md:text-lg">
              Become a Global Healthcare Professional with Zero Tuition Fees &amp; a Monthly
              Salary.
            </p>
            <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
              <p>
                {
                  "Are you looking for a secure, high-paying medical career in Europe? Nursing Ausbildung in Germany is the golden ticket for Indian students in 2026. Unlike expensive degree programs in other countries, Germany offers a unique Dual Vocational Training model where you get paid to learn."
                }
              </p>
              <p>
                {
                  "At Caspia Overseas Studies, we don't just guide you; we prepare you. From German Language Classes in Kerala to securing your training contract in a top German hospital, we are your trusted partner in this journey."
                }
              </p>
            </div>
            <div className="mt-8">
              <WhatsAppCTA
                label="Contact Caspia Overseas Now"
                href="https://wa.me/919446511115"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/2025/01/smiling-young-indian-doctor-woman-uniform-posing-white-background-e1737275973288.png"
              alt="Indian Nursing Student for Ausbildung in Germany"
              width={830}
              height={1203}
              sizes="384px"
              className="rounded-3xl w-full h-auto object-cover max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ WHAT IS ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What is Nursing Ausbildung in Germany?" />
          <div className="max-w-3xl mx-auto text-center -mt-6 mb-10 space-y-3">
            <p className="text-muted">
              The Nursing Ausbildung (official title: Pflegefachmann or Pflegefachfrau) is a
              3-year professional training program funded by the German government and
              healthcare employers.
            </p>
            <p className="text-muted">
              It is not a traditional college degree where you sit in a classroom all day. It
              is a job-oriented training program:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whatIsCards.map((c, i) => (
              <div
                key={c.title}
                className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-5 ${badgeCls[i % badgeCls.length]}`}
                  aria-hidden
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {i === 0 ? (
                      <>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </>
                    ) : i === 1 ? (
                      <>
                        <path d="M12 2 2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-extrabold text-secondary">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/80 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STIPEND ============ */}
      <section className="bg-secondary text-white py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Nursing Ausbildung Stipend 2026: Earn While You Learn"
            light
          />
          <div className="max-w-3xl mx-auto text-center -mt-6 mb-10 space-y-3">
            <p className="text-white/80">
              One of the biggest reasons Indian students choose Germany is the financial
              independence. You do not pay tuition fees. Instead, you earn a monthly stipend
              (Ausbildungsvergütung).
            </p>
            <p className="text-accent font-semibold">
              Updated Stipend Rates for 2026 (Based on TVAöD Public Sector Collective
              Agreement):
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {stipendCards.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl p-8 text-center bg-white/10 ring-1 ring-white/15 backdrop-blur"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  {s.label}
                </p>
                <p className="mt-3 text-3xl md:text-4xl font-extrabold text-accent">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/75">{s.caption}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-10 rounded-3xl bg-white p-8 border-l-4 border-orange shadow-lg">
            <h3 className="text-lg font-extrabold text-secondary">
              Caspia Pro Tip: Do I need a Blocked Account?
            </h3>
            <p className="mt-3 text-ink/85 leading-relaxed">
              In 2026, the blocked account requirement is often waived for Nursing Ausbildung
              students because your monthly stipend (e.g., €1,340) is higher than the minimum
              blocked account limit (~€992). This saves you ₹10 Lakhs in upfront costs!
            </p>
          </div>
        </div>
      </section>

      {/* ============ ELIGIBILITY ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Eligibility Requirements for Indian Students" />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-10">
            To apply for Nursing Ausbildung through Caspia Overseas, you must meet these
            criteria:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eligibilityBlocks.map((b, i) => {
              const num = b.title.match(/^(\d+)\./)?.[1];
              return (
                <div
                  key={b.title}
                  className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow"
                >
                  {num && (
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-5 ${badgeCls[i % badgeCls.length]}`}
                    >
                      {num}
                    </div>
                  )}
                  <h3 className="text-lg font-extrabold text-secondary">
                    {b.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  {b.intro && (
                    <p className="mt-3 text-sm text-ink/80 leading-relaxed">{b.intro}</p>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-2.5 items-start text-sm text-ink/80 leading-relaxed"
                      >
                        <CheckIcon />
                        <span>
                          <Rich text={it} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CAREER PATH ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/2026/01/1024-x-1024-2.webp"
              alt="Career Path for Nurses in Germany"
              width={1024}
              height={1024}
              sizes="448px"
              className="rounded-3xl w-full h-auto object-cover max-w-md mx-auto"
            />
          </div>
          <div>
            <SectionHeading title="Career Path & Salary After Graduation" center={false} />
            <p className="text-muted -mt-6 mb-8">
              Once you pass your final state exam (Staatsexamen), you become a Registered
              Nurse in Germany.
            </p>
            <div className="bg-mist rounded-3xl p-8">
              <ul className="space-y-3">
                {careerBullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 items-start text-sm md:text-base text-ink/85 leading-relaxed"
                  >
                    <CheckIcon />
                    <span>
                      <Rich text={b} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOP 20 HOSPITALS ============ */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Top 20 Hospitals for Nursing Ausbildung in Germany" light />
          <p className="text-center text-white/80 max-w-3xl mx-auto -mt-6 mb-10">
            Germany has world-class University Hospitals (Universitätsklinikum) that offer the
            best training. Here are the top institutions where our students aspire to work:
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hospitals.map((h) => (
              <li
                key={h}
                className="rounded-2xl bg-white/10 ring-1 ring-white/10 px-4 py-3 text-sm font-semibold text-white/90 flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ APPLICATION PROCESS ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Step-by-Step Application Process with Caspia" />
          <p className="text-center text-muted -mt-6 mb-10">
            We simplify the complex German bureaucracy for you.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ol>
                {processSteps.map((s, i) => (
                  <li key={i} className="relative flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-primary text-white font-extrabold flex items-center justify-center shadow-lg shadow-primary/25">
                        {i + 1}
                      </span>
                      {i < processSteps.length - 1 && (
                        <span className="w-px flex-1 my-1 bg-primary/20" aria-hidden />
                      )}
                    </div>
                    <p className="pt-2 pb-8 text-ink/85 leading-relaxed">
                      <Rich text={s} />
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <Image
                src="/images/2026/01/Banner-03.png"
                alt="Caspia Overseas Application Process"
                width={1072}
                height={1574}
                sizes="384px"
                className="rounded-3xl w-full h-auto object-cover max-w-sm mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions (FAQ)"
        lead="Optimized for Google Answer Engines & Voice Search"
      />

      {/* ============ CLOSING CTA ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-secondary">
            Start Your Medical Career in Germany Today
          </h2>
          <p className="mt-5 text-ink/85 md:text-lg leading-relaxed">
            {
              "Don't let expensive private college fees hold you back. Germany is calling for skilled nurses, and they are ready to pay for your training."
            }
          </p>
          <h3 className="mt-8 text-lg md:text-xl font-extrabold text-secondary">
            Ready to start?
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {readySteps.map((s, i) => (
              <div
                key={s}
                className="rounded-3xl bg-mist p-6 text-sm font-semibold text-secondary"
              >
                <div
                  className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-extrabold mb-3 ${badgeCls[i % badgeCls.length]}`}
                >
                  {i + 1}
                </div>
                <Rich text={s} />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA
              label="Contact Caspia Overseas Now"
              href="https://wa.me/919446511115"
            />
            <WhatsAppCTA
              label="Register for German Demo Class"
              href="https://wa.me/919446511115"
            />
          </div>
          <p className="mt-8 text-ink/80">
            <strong className="font-bold">Contact Us:</strong> Phone: +91 9446 511 115
            Office: Vyttila, Kochi | Perinthalmanna | Kodungallur | Cherthala | Perumbavoor
          </p>
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
            src="/images/2023/04/Layer-3-e1680957652753.png"
            alt="Overseas Consultancy and Study Abroad in Kochi"
            width={733}
            height={959}
            sizes="384px"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </section>
    </>
  );
}
