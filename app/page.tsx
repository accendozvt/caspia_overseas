import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import BannerCarousel from "@/components/BannerCarousel";
import RotatingWords from "@/components/RotatingWords";
import {
  SectionHeading,
  WhatsAppCTA,
  PrimaryCTA,
  FAQ,
  type FAQItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/jsonld";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

const seo = {
  title: "Best German Language Classes in Kerala - Caspia Overseas Studies",
  description:
    "Discover the best German language classes in Kerala, offering immersive learning experiences. Master German with Kerala's premier language institution.",
  path: "/",
};

export const metadata: Metadata = pageMetadata(seo);

const heroCountries = [
  "GERMANY",
  "USA",
  "CANADA",
  "IRELAND",
  "FRANCE",
  "AUSTRALIA",
  "LATVIA",
  "FINLAND",
  "MALTA",
];

const faqItems: FAQItem[] = [
  {
    q: "Which is the best German language institute in Kochi?",
    a: "Caspia Overseas Studies in Vyttila is rated as the best German language institute in Kochi due to its high pass rates in Goethe exams, certified trainers, and integrated career support for Nursing and Ausbildung candidates.",
  },
  {
    q: "What is the fee for a German language course in Kerala?",
    a: "Fees vary by level. Generally, an A1 or A2 course in Kerala costs between ₹15,000 and ₹25,000. Intensive B1/B2 levels may cost slightly higher. At Caspia, we offer competitive package rates for A1-B2 bundles.",
  },
  {
    q: "How long does it take to learn German B2 level?",
    a: "In an intensive course, you can reach B2 level in 6 to 8 months. Regular weekend batches may take 10-12 months. Consistency is key.",
  },
  {
    q: "Is German language difficult for Malayalam speakers?",
    a: "Not necessarily. While the grammar is complex, the pronunciation is consistent. Malayalam speakers often find German phonetics easier than English speakers do because our native tongue uses a wide range of sounds.",
  },
  {
    q: "Can I study in Germany for free?",
    a: "Yes! Public universities in Germany charge zero tuition fees for most courses. You only pay a semester contribution (€150-€300). Caspia helps you apply to these free universities.",
  },
  {
    q: 'What is the "Ausbildung" program?',
    a: "Ausbildung is a dual vocational training program where you work in a company and study simultaneously. You earn a monthly stipend (€900-€1,300) and pay zero tuition fees. It is ideal for Plus Two graduates.",
  },
  {
    q: "Do I need IELTS for Germany?",
    a: "For English-taught university programs, yes (6.5 band usually). However, for Ausbildung and German-taught programs, you need a German Language Certificate (B1/B2) from Goethe, Telc, or ÖSD.",
  },
  {
    q: "Is the Goethe certificate valid for visa applications?",
    a: "Yes, the Goethe-Zertifikat is universally accepted by the German Embassy and all German employers. We strictly prepare students for this specific certification.",
  },
  {
    q: "Can nurses work in Germany without experience?",
    a: "Yes. Fresh GNM/BSc graduates can join an Anpassungslehrgang (Adaptation Course) or training program in Germany. However, having 1-2 years of experience helps in getting better salaries immediately.",
  },
  {
    q: 'What is the 2026 "Chancenkarte" (Opportunity Card)?',
    a: "It is a points-based visa that allows skilled workers to enter Germany to look for a job for 1 year without a prior offer. Points are given for age, language skills, and experience.",
  },
  {
    q: "Does Caspia provide online German classes?",
    a: "Yes, we offer live, interactive Online German Classes that follow the same syllabus as our offline classes. Perfect for students from Trivandrum, Calicut, or working professionals.",
  },
  {
    q: "What is the passing mark for the Goethe Exam?",
    a: "You need to score 60% (60 out of 100) to pass each level (A1-C2). You must pass all four modules (Reading, Writing, Listening, Speaking).",
  },
  {
    q: "How much can a nurse earn in Germany?",
    a: "In 2026, a registered nurse (Pflegefachkraft) starts with a salary of approx. €2,800 - €3,200 (Gross) per month. This increases significantly with night shifts and experience.",
  },
  {
    q: "Can I bring my spouse to Germany while studying?",
    a: 'It is possible but strict. You usually need to show "Sufficient Living Space" (12 sqm/person) and a blocked account with higher funds (~€18,000/year for a couple).',
  },
  {
    q: 'What are the "Blocked Account" requirements for 2026?',
    a: "For a student visa, you must deposit approx. €11,904 (subject to change) into a German Blocked Account (Sperrkonto) to prove you can support yourself for one year.",
  },
  {
    q: "Is there an age limit for learning German?",
    a: "No! We have students ranging from 17 to 50 years old. However, for programs like Ausbildung, employers prefer candidates under 30.",
  },
  {
    q: "Does Caspia help with the Visa Interview?",
    a: "Yes. We conduct rigorous mock visa interviews to ensure you can confidently answer questions about your course, finances, and motivation to the Visa Officer.",
  },
  {
    q: "Why choose Caspia over other consultancies?",
    a: "Unlike generic agents, we are Education Specialists. We don't just \"send\" you; we train you. Our in-house language academy ensures you are culturally and linguistically ready, reducing visa rejection risks.",
  },
  {
    q: "Where is Caspia located?",
    a: "Our Head Office is in Vyttila, Kochi. We also have branches in Perinthalmanna, Kodungallur, Cherthala, and Perumbavoor.",
  },
  {
    q: "How do I start?",
    a: 'Simply click the "Contact Us" button or call +91 9446 511 115 to book a free counseling session and language demo class.',
  },
];

const admissionStreams = [
  {
    name: "MEDICAL",
    intro: "Our services are offered on admissions for the following list of UG & PG courses.",
    groups: [
      {
        label: "Undergraduate (UG) courses:",
        items: ["MBBS", "BDS", "B.Sc Nursing", "Post B.Sc Nursing", "B. Pharm", "D. Pharm", "GNM", "BPT"],
      },
      { label: "Postgraduate (PG) courses:", items: ["MD", "MDS", "M.Sc Nursing", "M. Pharm"] },
    ],
  },
  {
    name: "ENGINEERING",
    intro: "Our services are offered on admissions for the following list of UG & PG courses.",
    groups: [{ label: "", items: ["B.E/B.Tech", "B.Arch", "M.E/M.Tech"] }],
  },
  {
    name: "MANAGEMENT COURSES",
    intro: "Our services are offered on admissions for the following list of UG & PG courses.",
    groups: [
      { label: "Undergraduate (UG) courses:", items: ["BBA", "BBM", "BMS", "BHA", "B.Com", "BCA", "LLB"] },
      { label: "Postgraduate (PG) courses:", items: ["MBA", "M.Com", "MSW"] },
    ],
  },
  {
    name: "HOSPITALITY MANAGEMENT",
    intro: "Our services are offered on admissions for the following list of courses:",
    groups: [{ label: "", items: ["BHM", "Diploma in Hotel/Hospitality Management"] }],
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <JsonLd data={pageGraph({ ...seo, faq: faqItems })} />

      {/* ============ HERO ============ */}
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-end">
            {/* Copy */}
            <div className="py-16 md:py-24 lg:pb-28">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Comprehensive Training, Guidance &amp; Placement
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Build Your Career in{" "}
                <span className="block mt-1">
                  <RotatingWords words={heroCountries} />
                </span>
              </h1>
              <p className="mt-6 text-white/80 md:text-lg max-w-xl leading-relaxed">
                From Kerala to a specialized nursing role in Berlin, a mechatronics career in
                Munich, or a seat at a top Technical University: fluency is your first step. We
                don&rsquo;t just teach German; we engineer your success.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppCTA label="Enquire Now" />
                <PrimaryCTA
                  label="Register Today"
                  href="/german-nursing-registration/"
                  className="bg-white/10 hover:bg-white/20 ring-1 ring-white/30 shadow-none"
                />
              </div>
              {/* Trust strip */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg border-t border-white/10 pt-6">
                {[
                  { k: "A1–C1", v: "Certified Training" },
                  { k: "Goethe · Telc · ÖSD", v: "Exam Focused" },
                  { k: "5 Centres", v: "Across Kerala" },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="font-extrabold text-white leading-tight text-sm md:text-base">
                      {s.k}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Portrait, flush to the bottom edge of the hero */}
            <div className="hidden lg:block self-stretch min-h-[34rem]">
              <BannerCarousel
                images={[
                  "/images/2026/01/Banner-01-1-768x1128.png",
                  "/images/2026/01/Banner-02-1-768x1128.png",
                  "/images/2026/01/Banner-03-768x1128.png",
                  "/images/2026/01/Banner-04-768x1128.png",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/2026/01/Layer-10-768x685.webp"
              alt="best german language classes"
              width={768}
              height={685}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-ink mb-3">
              Unlock Your Global Career with 2026&rsquo;s Top-Rated Language Training Institute.
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              Experience the Best German Language Classes in Kochi &amp; Kerala
            </h2>
            <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
              <p>
                Welcome to Caspia Overseas Studies (formerly DirectionNXT), the most trusted name
                for German language training and overseas education in Kerala. Located in the
                heart of Vyttila, Kochi, with branches across the state, we have established
                ourselves as the &ldquo;go-to&rdquo; destination for serious aspirants.
              </p>
              <p>
                In the rapidly changing migration landscape of 2026, &ldquo;knowing&rdquo; German
                isn&rsquo;t enough. You need to prove it. The new Skilled Immigration Act and the
                Chancenkarte (Opportunity Card) require precise certification and documented
                proficiency. This is where we excel.
              </p>
              <p>
                We understand that for a student from Kerala, learning a foreign language is a
                significant investment of time and money. That is why our curriculum is
                hyper-focused on Results. We combine traditional classroom rigour with modern,
                interactive digital tools to ensure you don&rsquo;t just pass the exam, you
                dominate it.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Master German (A1 - C1) with Certified Native-Level Trainers.",
                "100% Exam-Focused: Dedicated preparation for Goethe-Zertifikat, Telc, & ÖSD.",
                "Your Gateway to Germany: Specialized pathways for Nursing, Ausbildung, and Higher Education.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppCTA label="2026 Admission Enquiry" />
            </div>
            <p className="mt-4 text-sm text-muted font-medium">
              Conveniently located in Vyttila, the connectivity hub of Kochi.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY CASPIA ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why Caspia"
            title="Why Caspia is Rated the Best German Language Institute in Kerala"
          />
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm ring-1 ring-black/5">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-secondary">
                Our Teaching Philosophy: &ldquo;Exam-Ready, Life-Ready&rdquo;
              </h3>
              <p className="mt-4 text-ink/85 leading-relaxed">
                Many institutes teach you to memorize. We teach you to communicate. Our
                &ldquo;Best German Language Class&rdquo; module is designed to tackle the specific
                challenges Malayali students face, from pronunciation to complex grammar
                structures, ensuring you sound professional and confident in your future German
                workplace.
              </p>
              <blockquote className="mt-6 border-l-4 border-accent pl-4 text-secondary font-semibold italic">
                The World is Your Classroom. &ldquo;We don&rsquo;t just teach you how to speak
                German; we teach you how to live in Germany.&rdquo;
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryCTA label="Enrol Now" href="/german-nursing-registration/" />
                <WhatsAppCTA label="WhatsApp Us to Know More" href="https://bit.ly/caspia_whatsapp" />
              </div>
            </div>
            <div>
              <Image
                src="/images/2023/03/medium-shot-graduate-student-e1679831439527.jpg"
                alt="Graduate student, study abroad with Caspia"
                width={720}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT SETS US APART ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="The Best German Language Classes in Kochi: What Sets Us Apart?"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            Finding the right training center is critical. Here is why hundreds of students every
            year rate Caspia as the best German language training center in Kerala:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl mb-5">
                1
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                Goethe-Standard Curriculum (A1 to C1)
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                Our syllabus is strictly aligned with the Common European Framework of Reference
                for Languages (CEFR).
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">A1 &amp; A2 (Beginner):</strong> Build a solid
                  foundation. Learn to introduce yourself, shop, and handle daily survival in
                  Germany.
                </li>
                <li>
                  <strong className="text-secondary">B1 (Intermediate):</strong> The
                  &ldquo;Gatekeeper&rdquo; level for most Ausbildung programs. We focus intensely
                  on grammar and letter writing here.
                </li>
                <li>
                  <strong className="text-secondary">B2 (Advanced):</strong> The &ldquo;Nurse&rsquo;s
                  Standard.&rdquo; Our specialized B2 Medical module ensures you can talk to
                  patients and doctors fluently.
                </li>
                <li>
                  <strong className="text-secondary">C1 (Professional):</strong> For academic
                  excellence and high-level corporate jobs.
                </li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-ink flex items-center justify-center font-extrabold text-xl mb-5">
                2
              </div>
              <h3 className="text-lg font-extrabold text-secondary">2026-Ready Hybrid Learning</h3>
              <p className="mt-3 text-sm text-ink/80">
                We understand the busy lives of professionals and students.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Offline Classes in Vyttila:</strong>{" "}
                  Experience our high-tech, air-conditioned classrooms with immersive audio-visual
                  aids.
                </li>
                <li>
                  <strong className="text-secondary">Online Live Classes:</strong> Can&rsquo;t
                  travel to Kochi? Join our Best Online German Language Class. It&rsquo;s not a
                  recorded video; it&rsquo;s a live, interactive session with the same expert
                  trainers.
                </li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-accent-ink flex items-center justify-center font-extrabold text-xl mb-5">
                3
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                The &ldquo;Exam Crack&rdquo; Methodology
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                We don&rsquo;t leave your success to chance. Our students undergo rigorous Mock
                Tests that mirror the actual Goethe/Telc exam pattern.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Hören (Listening):</strong> Practice with
                  authentic German radio and dialogues.
                </li>
                <li>
                  <strong className="text-secondary">Lesen (Reading):</strong> Strategies to decode
                  complex texts quickly.
                </li>
                <li>
                  <strong className="text-secondary">Schreiben (Writing):</strong> Templates and
                  vocabulary hacks for perfect essays.
                </li>
                <li>
                  <strong className="text-secondary">Sprechen (Speaking):</strong> Daily role-plays
                  to kill your stage fright.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GERMAN NURSING PROGRAM ============ */}
      <section className="bg-secondary text-white py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Here&rsquo;s how things are going to change for your career
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">German Nursing Program</h2>
            <h3 className="mt-2 text-xl font-bold text-white/90">
              Why choose German Nursing Program?
            </h3>
            <p className="mt-5 text-white/80 leading-relaxed">
              We don&rsquo;t say goodbye at the airport. We assist with accommodation, city
              registration (Anmeldung), and bank account setup in Germany.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "The Best German Language Classes",
                "Regular/Online Language Training",
                "Certificate Translation",
                "Documentation",
                "VISA Processing",
                "Facility to Receive at Airport",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 items-start text-sm text-white/90">
                  <span className="mt-0.5 text-accent" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div>
                <h4 className="font-extrabold text-lg">Download Nursing Handbook</h4>
              </div>
              <a
                href="https://caspiaedu.com/wp-content/uploads/2023/04/Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-secondary bg-accent hover:brightness-110 transition-all"
              >
                Download Now
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/2023/03/IMG-20230326-WA0044.jpg"
              alt="German Nursing Program students at Caspia"
              width={720}
              height={520}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl w-full h-auto object-cover ring-4 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* ============ SPECIALIZED PROGRAMS ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Best German Language Classes in Kochi"
            title="Our Specialized Language & Career Programs"
          />
          <p className="text-center text-muted -mt-6 mb-12">
            We are more than a language institute; we are a career architect.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-8 bg-gradient-to-b from-primary to-primary-dark text-white shadow-lg">
              <h3 className="text-lg font-extrabold">1. Intensive German Language Training</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>
                  <strong className="text-white">Fast-Track Batches:</strong> Need a B1 certificate
                  in 6 months? Our intensive batches for urgent visa timelines.
                </li>
                <li>
                  <strong className="text-white">Weekend Batches:</strong> Perfect for working
                  professionals (Nurses, IT Engineers) planning to migrate.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 bg-gradient-to-b from-secondary to-secondary-deep text-white shadow-lg">
              <h3 className="text-lg font-extrabold">
                2. German Nursing Program (The Kerala Specialty)
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>
                  <strong className="text-white">Recruitment for 2026:</strong> We guide GNM and
                  BSc Nurses through the Anerkennung (Recognition) process.
                </li>
                <li>
                  <strong className="text-white">Deficit Management:</strong> We help you choose
                  the right Anpassungslehrgang or Kenntnisprüfung path.
                </li>
                <li>
                  <strong className="text-white">Language for Nurses:</strong> We guide GNM and BSc
                  Nurses through the entire Anerkennung (Recognition) process.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 bg-gradient-to-b from-blue to-secondary text-white shadow-lg">
              <h3 className="text-lg font-extrabold">
                3. Ausbildung: The &ldquo;Earn While You Learn&rdquo; Route
              </h3>
              <p className="mt-3 text-sm text-white/85">
                Germany&rsquo;s dual vocational training is the hottest trend for 2026.
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/85">
                <li>
                  <strong className="text-white">Guidance:</strong> We help you find Ausbildung
                  contracts in Logistics, IT, Automotive, Mechatronics, and Hospitality.
                </li>
                <li>
                  <strong className="text-white">Stipend:</strong> We only target programs that
                  offer a monthly stipend (approx. €900 - €1,300).
                </li>
                <li>
                  <strong className="text-white">Visa Support:</strong> Full assistance with
                  motivation letters and embassy interviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADMISSION CONSULTATION ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Admission Consultation in South India" title="We Offer All Kinds of Courses and Programs All Over India." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionStreams.map((s) => (
              <div key={s.name} className="bg-white rounded-3xl p-7 shadow-sm ring-1 ring-black/5">
                <h3 className="font-extrabold text-secondary tracking-wide">{s.name}</h3>
                <p className="mt-2 text-xs text-muted">{s.intro}</p>
                {s.groups.map((g, gi) => (
                  <div key={gi} className="mt-4">
                    {g.label && (
                      <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                        {g.label}
                      </p>
                    )}
                    <ul className="flex flex-wrap gap-1.5">
                      {g.items.map((c) => (
                        <li
                          key={c}
                          className="text-xs font-semibold bg-mist text-ink px-2.5 py-1 rounded-full"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUILD YOUR CAREER ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Services" title="Build Your Career with Caspia!" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "CONSULTATION",
                d: "We provide consultation services by introducing various streams of education which can help you achieve your dream job.",
              },
              {
                t: "GUIDANCE",
                d: "Based on the eligibility criteria we can get your admission done on top colleges for your desired branch of study.",
              },
              {
                t: "SCHOLARSHIP",
                d: "We provide assistance for availing scholarship possibilities for the student to excel in top colleges without fees burden.",
              },
            ].map((c, i) => (
              <div
                key={c.t}
                className="text-center rounded-3xl p-8 bg-white shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className={`mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    i === 0 ? "bg-primary/10 text-primary" : i === 1 ? "bg-accent/10 text-accent-ink" : "bg-orange/10 text-accent-ink"
                  }`}
                  aria-hidden
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 ? (
                      <>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
                      </>
                    ) : i === 1 ? (
                      <>
                        <path d="M12 2 2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="font-extrabold text-secondary tracking-wide">{c.t}</h3>
                <p className="mt-3 text-sm text-ink/80 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Insights & Updates" title="Blogs" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow flex flex-col"
              >
                {p.ogImage && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.ogImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="mt-4 text-sm font-bold text-accent-ink">Read More »</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <PrimaryCTA label="View All Articles" href="/blogs/" />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ items={faqItems} />

      {/* ============ FINAL CTA ============ */}
      <section className="bg-secondary text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Start Your Journey with the Best German Language Institute Today
          </h2>
          <h3 className="mt-3 text-lg md:text-xl font-bold text-accent">
            For Admission Related Queries
          </h3>
          <p className="mt-5 text-white/80 md:text-lg leading-relaxed">
            Don&rsquo;t let another year pass by. The opportunities in Germany for 2026 are vast,
            but they belong to those who are prepared. Join Caspia Overseas Studies and let us
            build your bridge to Europe.
          </p>
          <p className="mt-2 text-white/60 text-sm font-semibold">(Only for INDIAN Nationals)</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA label="Register Today" href="/german-nursing-registration/" />
            <WhatsAppCTA label="Enquire Now" />
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Phone: {site.phone} · Office: {site.address} | {site.branches.join(" | ")}
          </p>
        </div>
      </section>
    </>
  );
}
