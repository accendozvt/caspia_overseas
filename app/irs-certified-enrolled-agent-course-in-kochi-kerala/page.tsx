import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading, PrimaryCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "IRS Certified Enrolled Agent - Caspia Overseas Studies" },
  description:
    "MNC jobs with attractive starting package in US taxation MASTER U.S. TAXATION! BECOME AN ENROLLED AGENT Get Ready To File Us Federal Tax Returns. Expand Your Tax Practice To United States Of America An Enrolled Agent is a professional licensed to PREPARE TAX RETURNS & represent taxpayers before the IRS. The…",
  alternates: { canonical: "/irs-certified-enrolled-agent-course-in-kochi-kerala/" },
};

export default function EnrolledAgentPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
              MNC jobs with attractive starting package in US taxation
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              MASTER U.S. TAXATION! BECOME AN ENROLLED AGENT
            </h1>
            <p className="mt-4 text-lg font-bold text-white/90">
              Get Ready To File Us Federal Tax Returns. Expand Your Tax Practice To United States
              Of America
            </p>
            <p className="mt-5 text-white/80 leading-relaxed">
              {"An Enrolled Agent is a professional licensed to PREPARE TAX RETURNS & represent taxpayers before the IRS. The EA course is the IRS recognized qualification in US Taxation. Just like a CPA that has unlimited possibilities to show your potential in the tax field. The exam is administered by the IRS, and exams are conducted in Prometric centers in India."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA label="Register Now" href="/german-nursing-registration/" />
              <PrimaryCTA
                label="Download Brochure"
                href="https://play.google.com/store/apps/details?id=co.diy17.asxwb&pli=1"
                className="bg-white/10 hover:bg-white/20 ring-1 ring-white/30 shadow-none"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/2023/07/Layer-36-coply.jpg"
              alt="IRS Certified Enrolled Agent Course in Kerala"
              width={960}
              height={894}
              className="rounded-3xl w-full h-auto ring-4 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHT STATS ============ */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-3 gap-6">
          <div className="text-center bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Course Fee</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-secondary">
              Rs.85,000 + Tax
            </p>
          </div>
          <div className="text-center bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Duration</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-secondary">
              6 Months Inhouse Training
            </p>
          </div>
          <div className="text-center bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">EA Exam Fee</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-secondary">
              $203 per attempt
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY EA + ELIGIBILITY ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div>
              <SectionHeading eyebrow="The Opportunity" title="Why EA?" center={false} />
              <div className="-mt-4 space-y-4 text-ink/85 leading-relaxed">
                <p>
                  {"Being an Enrolled Agent (EA) offers significant career growth opportunities. By pursuing a career as an EA, individuals can enhance their earning potential, with unlimited career opportunities."}
                </p>
                <p>
                  {"The role of an EA is prestigious and commands respect from others. It establishes one’s expertise and provides opportunities to enhance tax skills and knowledge. Moreover, working as an EA contributes to personal and professional development, fostering growth in both aspects of life."}
                </p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Who Can Apply" title="EA Course Eligibility" center={false} />
              <p className="-mt-4 text-ink/85 leading-relaxed">
                {"IRS doesent specify any qualicification for EA. Still Caspia Overseas prefer any Graduate with basic accounting knowledge can apply for the EA Course. Applicant must prove his/her competency for the tax-pertaining content."}
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/2023/07/group-three-modern-architects-1.jpg"
              alt="IRS Certified Enrolled Agent Course in Kerala"
              width={1000}
              height={667}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ OPPORTUNITIES & CAREER ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHeading
            eyebrow="MNC jobs with attractive starting package in US taxation"
            title="Opportunities & Career"
          />
          <div className="-mt-4 space-y-4 text-ink/85 leading-relaxed text-left md:text-center">
            <p>
              {"Upon successfully passing the EA exam, candidates open up avenues for their career in tax accounting MNS’s in India, and they also have the option to establish their own practice in the US. This EA certification presents excellent opportunities for professionals considering migration to USA. The EA exam offers flexibility and convenience, as it is a single-level online exam divided into three parts."}
            </p>
            <p>
              {"With dedicated effort, individuals can clear all the parts in less than a year. For M. Com and Commerce graduates, as well as other tax professionals, pursuing the EA certification is highly recommended. It is a rare international certification that can be pursued alongside a job, offering tremendous job potential in the field."}
            </p>
          </div>
        </div>
      </section>

      {/* ============ SYLLABUS ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="What You Learn" title="Syllabus" center={false} />
            <p className="-mt-4 font-semibold text-secondary">EA contains 3 parts</p>
            <ul className="mt-4 space-y-3">
              {[
                "Part 1 – Individuals",
                "Part 2 – Businesses",
                "Part 3 – Representation, practices & procedures.",
              ].map((t, i) => (
                <li
                  key={t}
                  className="flex gap-4 items-center bg-white rounded-2xl p-4 shadow-sm ring-1 ring-black/5"
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-ink">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink/85">
              {"All 3 papers can be taken together, but it is advised to go for 1 at a time."}
            </p>
            <p className="mt-4 text-ink/85">
              {"Each part of the EA Exam contains 100 multiple choice questions covering topic such as:"}
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Federal Taxation",
                "Ethical Considerations",
                "Tax Accounting",
                "Procedural Requirements",
                "The use of tax returns forms for Individuals, Partnerships, Corporations, Trusts, Estates & Gifts.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start text-ink/85">
                  <span className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <Image
              src="/images/2023/07/29632329_phone_calculator_1-1024x871.png"
              alt="IRS Certified Enrolled Agent Course in Kerala"
              width={1024}
              height={871}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/2023/07/businesspeople-working-as-team-with-laptop.jpg"
              alt="IRS Certified Enrolled Agent Course in Kerala"
              width={1000}
              height={667}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="How to Become an EA" title="Process" light />
          <p className="text-center text-white/80 max-w-3xl mx-auto -mt-6 mb-12">
            {"To become an Enrolled Agent, these are the steps you need to follow:"}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Obtain a Preparer Tax Identification Number (PTIN).",
              "Apply to take the Special Enrollment Examination (SEE).",
              "Successfully pass all three parts of the SEE.",
              "Submit an application for enrollment.",
            ].map((t, i) => (
              <div key={t} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-7">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center font-extrabold text-xl mb-5">
                  {i + 1}
                </div>
                <p className="text-white/90 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-white/80 max-w-3xl mx-auto">
            {"By completing these, you can become enrolled as a qualified tax professional, ready to provide services to clients and ensure compliance with tax regulations."}
          </p>
        </div>
      </section>

      {/* ============ EXAM FEE ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Fees" title="Enrolled Agent Exam Fee Details" />
          <p className="text-center text-ink/85 -mt-4">
            {"The EA exam fee is currently $203 per attempt, and you have four attempts per testing season to pass the exams. You can reschedule your appointment online or by phone."}
          </p>
          <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
            <h3 className="font-extrabold text-secondary">Rescheduling fees:</h3>
            <ul className="mt-4 space-y-3">
              {[
                "30+ days: no fee",
                "5-29 days: $35.00",
                "5 days or less: You will be required to pay another full examination fee if you reschedule less than five calendar days before your appointment date",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start text-ink/85">
                  <span className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-orange/15 text-orange flex items-center justify-center" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ COURSE FEE & DURATION ============ */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 bg-gradient-to-b from-primary to-primary-dark text-white shadow-lg">
            <h2 className="text-xl font-extrabold">Course Fee</h2>
            <p className="mt-3 text-white/90 leading-relaxed">
              {"The EA Course Fee in Caspia Overseas Studies in Rs.85,000 + Tax"}
            </p>
          </div>
          <div className="rounded-3xl p-8 bg-gradient-to-b from-secondary to-secondary-deep text-white shadow-lg">
            <h2 className="text-xl font-extrabold">Duration</h2>
            <p className="mt-3 text-white/90 leading-relaxed">6 Months Inhouse Training</p>
          </div>
        </div>
      </section>
    </>
  );
}
