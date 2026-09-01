import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import {
  PageHero,
  SectionHeading,
  WhatsAppCTA,
  FAQ,
  type FAQItem,
} from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { courseNode, pageGraph } from "@/lib/jsonld";

const seo = {
  title: "Best German Language Classes | Caspia Overseas Studies",
  description:
    "Caspia Overseas is the No.1 institute for German language classes in Kerala. Become proficient in German with expert trainers and a comprehensive A1-C1 curriculum.",
  path: "/german-language-classes/",
};

export const metadata: Metadata = pageMetadata(seo);

const faqItems: FAQItem[] = [
  {
    q: "Which is the best German language institute in Kerala for nurses?",
    a: "Caspia Overseas Studies in Vyttila, Kochi is widely rated as the best German language institute in Kerala for nurses. We offer a specialized B2 medical module that specifically prepares candidates for Nursing Ausbildung in Germany.",
  },
  {
    q: "How long does it take to learn German B2 level in Kerala?",
    a: "At Caspia, our intensive German language classes can take you from A1 to B2 in approximately 6 to 8 months. Regular batches may take 10-12 months depending on the student's pace.",
  },
  {
    q: "What is the fee for German language classes in Kochi?",
    a: "Fees vary by level. Generally, a comprehensive package (A1 to B2) in Kerala ranges from ₹80,000 to ₹1.2 Lakhs. Caspia offers competitive package rates that often include study materials and exam mock tests.",
  },
  {
    q: "Is B2 level mandatory for Ausbildung Nursing in Germany?",
    a: "Yes. To secure a contract for Ausbildung Nursing in Germany, hospitals strictly require a B2 Level certificate (Goethe/Telc/ÖSD). B1 is rarely accepted for nursing due to patient safety regulations.",
  },
  {
    q: "Does Caspia offer online German language classes?",
    a: "Yes. We are considered the best German language institute in Kochi for online training. Our live, interactive sessions allow students from Trivandrum, Calicut, and even the Middle East to join our expert-led classes.",
  },
  {
    q: "Are the certificates from Caspia valid for the German Visa?",
    a: "We prepare you for the official Goethe-Zertifikat or Telc exams. These external certificates are the only ones valid for German visa applications. Caspia’s internal training ensures you pass these exams.",
  },
  {
    q: "Can I get a job in Germany after learning the language?",
    a: "Language is the key. With a B2 certificate, you qualify for the Chancenkarte (Opportunity Card) or direct Ausbildung placement. As the best German consultancy in Kerala, we assist you with job applications post-certification.",
  },
  {
    q: "What is the passing mark for the German language exam?",
    a: "For Goethe and Telc exams, you need to score 60% (60 out of 100) to pass. You must pass all four modules: Reading, Writing, Listening, and Speaking.",
  },
  {
    q: "Is German grammar difficult for Malayalam speakers?",
    a: "German grammar has complex cases (Nominative, Accusative, Dative), but Malayalam speakers often find German pronunciation easier than English speakers do. Our trainers use comparative methods to make grammar logic easy to understand.",
  },
  {
    q: "Do you provide hostel facilities for students outside Kochi?",
    a: "Yes. Caspia Overseas provides safe and comfortable hostel facilities (separate for men and women) near our Vyttila campus for outstation students attending our German language classes.",
  },
  {
    q: "How many students are there in one batch?",
    a: "To maintain quality, we limit our batches to 10–15 students. This ensures that our trainers can give personal attention to every student's speaking skills.",
  },
  {
    q: "What study materials do you use?",
    a: "We use standard international textbooks like Netzwerk, Studio D, and Aspekte Neu, supplemented by Caspia’s proprietary exam-prep workbooks.",
  },
  {
    q: "Can I join for only one level (e.g., only B2)?",
    a: "Yes. If you have completed B1 elsewhere, you can take an entrance test and join our advanced German language classes for the B2 level directly.",
  },
  {
    q: "What is the difference between Goethe and Telc exams?",
    a: "Both are accepted for visas. Goethe is generally more grammar-focused, while Telc is often considered slightly more communication-focused. Caspia trains you for both formats.",
  },
  {
    q: "Does Caspia help with exam booking?",
    a: "Yes. Getting an exam slot in Kerala can be difficult. We assist our enrolled students in booking their exam slots at Goethe-Zentrum or other exam centers.",
  },
  {
    q: "Why is Caspia called the best German consultancy in Kerala?",
    a: 'Because we offer a "One-Stop Solution." Most institutes only teach the language. Caspia teaches the language and processes your admission, visa, and flight: all under one roof.',
  },
  {
    q: "Is there an age limit for learning German?",
    a: "No. We have students from age 17 to 55. However, for Nursing Ausbildung in Germany, employers generally prefer candidates between 18 and 30 years old.",
  },
  {
    q: "Do you offer weekend classes for working professionals?",
    a: "Yes. We have specialized weekend batches for working nurses and IT professionals who want to learn German without quitting their current jobs.",
  },
  {
    q: "What is the success rate of Caspia students?",
    a: "We boast a pass rate of over 90% for students who attend all our classes and complete the assigned mock tests.",
  },
  {
    q: "How do I enroll in the next batch?",
    a: "Simply contact us at +91 9446 511 115 or visit our website to book a free demo class. We start new batches every month.",
  },
];

const levels = [
  {
    badge: "A1",
    title: "German Language Level A1",
    tag: "The Foundation | 6–8 Weeks",
    rows: [
      { label: "Goal:", text: "Survival German. Learn to introduce yourself, order food, and navigate the city." },
      { label: "Ideal For:", text: "Spouse Visa applicants and tourists." },
    ],
  },
  {
    badge: "A2",
    title: "German Language Level A2",
    tag: "Building Blocks | 8–10 Weeks",
    rows: [
      { label: "Goal:", text: "Basic conversation. Understand sentences related to immediate relevance (e.g., employment, local geography)." },
      { label: "Ideal For:", text: "Students building a base before intermediate training." },
    ],
  },
  {
    badge: "B1",
    title: "German Language Level B1",
    tag: "Intermediate | 10–12 Weeks",
    rows: [
      { label: "Goal:", text: "Independent language use. This is the minimum requirement for many Ausbildung programs (e.g., Logistics, Hospitality)." },
      { label: "Focus:", text: "Complex grammar structures and letter writing." },
    ],
  },
  {
    badge: "B2",
    title: "German Language Level B2",
    tag: "Professional | 12–16 Weeks",
    rows: [
      { label: "Goal:", text: "Professional fluency. This is the mandatory requirement for Nursing Ausbildung in Germany and for doctors." },
      { label: "Why Caspia?", text: "Our B2 grads are preferred by German employers because they can argue, debate, and negotiate in German." },
    ],
  },
];

export default function GermanLanguageClassesPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          ...seo,
          faq: faqItems,
          breadcrumbs: [
            { name: "Courses", path: "/courses/" },
            { name: "German Language", path: seo.path },
          ],
          extraNodes: [
            courseNode({
              name: "German Language Classes (A1 to B2)",
              description: seo.description,
              path: seo.path,
              teaches: "German language, CEFR levels A1 to B2",
              // The four level cards actually shown on this page.
              educationalLevel: ["A1", "A2", "B1", "B2"],
              // Both are genuinely offered: classroom batches at the Vyttila campus,
              // and the live online classes described in this page's own FAQ.
              courseModes: ["Onsite", "Online"],
            }),
          ],
        })}
      />

      <PageHero
        eyebrow="Your Gateway to World-Class Education"
        title="The Best German Language Classes in Kerala"
        cta={false}
      />

      {/* ============ INTRO ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              The Best German Language Classes in Kerala: Your Gateway to a Global Career
            </h2>
            <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
              <p>
                {"In the competitive world of 2026, fluency in German is not just a skill: it is your passport to Europe’s strongest economy. At Caspia Overseas Studies, recognized as the best German language institute in Kerala, we don't just teach you a language; we engineer your future."}
              </p>
              <p>
                {"Whether you are aspiring for Nursing Ausbildung in Germany, seeking a high-paying IT career via the Chancenkarte, or pursuing tuition-free higher education, your journey begins with the best German language classes in the region. Located in the heart of Vyttila, Kochi, with a digital footprint across the state, Caspia is the definitive choice for serious aspirants."}
              </p>
            </div>
            <div className="mt-8">
              <WhatsAppCTA label="Book Free Demo" href="https://wa.me/919446511115" />
            </div>
          </div>
          <div>
            <Image
              src="/images/2026/01/ger-lang.webp"
              alt="German Language Classes in Kochi Kerala"
              width={1024}
              height={1024}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ WHY CASPIA ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why Caspia"
            title="Why Caspia is the Best German Language Institute in Kochi"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {"Finding the right mentor is critical. While many centers offer German language classes, Caspia stands apart as the best German consultancy in Kerala because we integrate language learning with career success. We understand that you aren't learning German for a hobby; you are learning it to survive and thrive in a German workplace."}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl mb-5">
                1
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                {"100% Exam-Focused Curriculum (Goethe & Telc)"}
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {'Our syllabus is rigorously aligned with the Common European Framework of Reference for Languages (CEFR). We are known as the best German language institute in Kochi because our "Exam-Crack" methodology ensures high pass rates in Goethe-Zertifikat and Telc exams.'}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Mock Tests:</strong>{" "}
                  {"Weekly simulations of the Reading, Writing, Listening, and Speaking modules."}
                </li>
                <li>
                  <strong className="text-secondary">Native-Level Trainers:</strong>{" "}
                  {"Learn from faculty who have lived and worked in Germany."}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center font-extrabold text-xl mb-5">
                2
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                Specialized B2 Training for Nursing Ausbildung
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We are the market leaders for Ausbildung Nursing in Germany. German hospitals demand a specific type of language proficiency: Pflegefachsprache (Nursing German). Unlike generic institutes, our B2 modules include medical terminology, patient communication, and hospital documentation protocols, ensuring you are job-ready on Day 1."}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center font-extrabold text-xl mb-5">
                3
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                {"Hybrid Learning: Online & Offline"}
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We offer the most flexible German language classes in the state."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Smart Classrooms in Vyttila:</strong>{" "}
                  {"Experience immersive learning with audio-visual aids."}
                </li>
                <li>
                  <strong className="text-secondary">Live Online Classes:</strong>{" "}
                  {"Can’t travel to Kochi? Our German language institute in Kerala brings the classroom to your home. These are live, interactive sessions, not recorded videos."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COURSES A1 TO C2 ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Course Levels" title="Our German Language Courses: A1 to C2" />
          <p className="text-center text-muted -mt-6 mb-12">
            {"We offer comprehensive programs tailored to your migration goals."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((lv) => (
              <div
                key={lv.badge}
                className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl mb-5">
                  {lv.badge}
                </div>
                <h3 className="text-lg font-extrabold text-secondary">{lv.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-orange">
                  {lv.tag}
                </p>
                <div className="mt-4 space-y-3 text-sm text-ink/80">
                  {lv.rows.map((r) => (
                    <p key={r.label}>
                      <strong className="text-secondary">{r.label}</strong> {r.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-gradient-to-r from-secondary to-primary text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center font-extrabold text-lg">
              C1+
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-extrabold">{"C1 & C2 Level: Mastery"}</h3>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                <strong className="text-white">Goal:</strong>{" "}
                {"Native-level competence."}{" "}
                <strong className="text-white">Ideal For:</strong>{" "}
                {"Academic researchers and literature enthusiasts."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NURSING AUSBILDUNG ============ */}
      <section className="bg-secondary text-white py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              Nursing Ausbildung in Germany: The Caspia Advantage
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              {'Why do thousands of students search for "Ausbildung Nursing in Germany" every month? Because it is a tuition-free pathway to a high-paying career. As the best German consultancy in Kerala, Caspia bridges the gap between language learning and job placement.'}
            </p>
            <ul className="mt-6 space-y-4">
              <li className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white/90">
                <strong className="text-accent">The Link:</strong>{" "}
                {"You cannot get an Ausbildung contract without a B2 certificate."}
              </li>
              <li className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white/90">
                <strong className="text-accent">The Caspia Method:</strong>{" "}
                {"We don't just hand you a certificate. We train you for the employer interview. We teach you how to speak confidently to a German Pflegedienstleitung (Nursing Director)."}
              </li>
              <li className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white/90">
                <strong className="text-accent">Guaranteed Placement:</strong>{" "}
                {"Students who complete our B2 German language classes with good grades get priority access to our exclusive network of German hospitals and clinics."}
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/2026/01/Nurse.webp"
              alt="Nursing Ausbildung Germany Students"
              width={1600}
              height={1600}
              className="rounded-3xl w-full h-auto ring-4 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Approach" title="Methodology: How We Teach" />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {'Our status as the German language institute in Kerala of choice comes from our unique teaching philosophy: "Kommunikative Methode" (Communicative Method).'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Role Plays</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We simulate real-life scenarios: opening a bank account in Berlin, talking to a landlord, or handling a medical emergency."}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Audio-Visual Immersion</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We use Deutsche Welle resources, German news clips, and podcasts to tune your ear to the speed of native speakers."}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Personalized Feedback</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"Our batch sizes are small (10-15 students) to ensure every student gets individual correction on their pronunciation and grammar."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ
        items={faqItems}
        title="AEO Optimized FAQ Section"
        lead={'This section is specifically designed to answer the "People Also Ask" questions on Google, helping you rank as a featured snippet.'}
      />

      {/* ============ FINAL CTA ============ */}
      <section className="bg-secondary text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Ready to Start Your German Journey?
          </h2>
          <p className="mt-5 text-white/80 md:text-lg leading-relaxed">
            {"Don't settle for average. Train with the best German language institute in Kerala. Whether it's securing a seat in a Nursing Ausbildung or mastering the language for the Chancenkarte, Caspia Overseas Studies is your trusted partner for 2026."}
          </p>
          <p className="mt-5 text-white/70 text-sm leading-relaxed">
            {"Contact Us Today: +91 9446 511 115 | 79944 76446 Email: info@caspiaedu.com Location: Vyttila, Kochi (Branches: Perinthalmanna, Kodungallur, Cherthala, Perumbavoor)"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA label="Enquire Now for 2026 Batches" href="https://wa.me/919446511115" />
          </div>
        </div>
      </section>
    </>
  );
}
