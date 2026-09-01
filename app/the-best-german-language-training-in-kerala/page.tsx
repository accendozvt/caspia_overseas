import type { Metadata } from "next";
import Image from "next/image";
import {
  SectionHeading,
  WhatsAppCTA,
  FAQ,
  FAQJsonLd,
  type FAQItem,
} from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Best German Institute in Kerala | Caspia Overseas Studies" },
  description:
    "Caspia Overseas Studies is Kochi's leading German language institute, offering expert A1-B2 classes and Nursing Ausbildung placement in Germany.",
  alternates: { canonical: "/the-best-german-language-training-in-kerala/" },
};

const faqItems: FAQItem[] = [
  {
    q: "Which is the best German language institute in Kerala?",
    a: "Caspia Overseas Studies (Vyttila, Kochi) is widely rated as the best German language institute in Kerala. We combine certified native-level training with career-focused consultancy for Germany.",
  },
  {
    q: "What is the fee for German language classes in Kochi?",
    a: "Fees vary by level (A1-B2). Generally, comprehensive packages in Kerala range from ₹60,000 to ₹1 Lakh. Caspia offers competitive rates that include exam preparation and study materials.",
  },
  {
    q: "Can I get Nursing Ausbildung in Germany from Kerala?",
    a: "Yes. Caspia Overseas specializes in placing students from Kerala into Nursing Ausbildung programs. We handle language training, documentation, and hospital interviews.",
  },
  {
    q: "Is German language difficult for Malayalam speakers?",
    a: "While grammar can be complex, Malayalam speakers often find German pronunciation easier than English speakers do. With Caspia's systematic training, students typically reach B2 level in 6-8 months.",
  },
  {
    q: "What is the stipend for Ausbildung Nursing in Germany (2026)?",
    a: "In 2026, nursing apprentices can expect a monthly stipend starting from approx. €1,200 to €1,400 (gross), depending on the region and employer.",
  },
  {
    q: "Do I need IELTS for Germany?",
    a: "For English-taught university programs, yes. However, for Ausbildung and German-taught jobs, only a German language certificate (Goethe/Telc/ÖSD) is required.",
  },
  {
    q: "What are the services offered by Caspia Overseas?",
    a: "We offer German Language Training, Study Abroad Consultancy, Ausbildung Placement (Nursing, IT, Logistics), Visa Assistance, and Post-Arrival Support in Germany.",
  },
  {
    q: "Can I study in Germany for free?",
    a: "Yes. Most public universities in Germany charge zero tuition fees. You only need to cover your living expenses and a small semester contribution.",
  },
  {
    q: "Does Caspia provide online German classes?",
    a: "Yes. We offer live, interactive Online German Language Classes for students who cannot travel to our Kochi campus.",
  },
  {
    q: "What is the qualification for Ausbildung?",
    a: "Generally, a Plus Two (12th Grade) completion is required. For nursing, science subjects are preferred. A B2 Level German certificate is mandatory.",
  },
  {
    q: "How does Caspia help with the German Visa?",
    a: "We guide you through the entire checklist: opening a Blocked Account, getting health insurance, drafting a Motivation Letter, and preparing for the Embassy interview.",
  },
  {
    q: "Is there an age limit for Ausbildung in Germany?",
    a: "Legally, no. However, employers generally prefer candidates between 18 and 30 years old. Caspia assesses profiles individually to find the best match.",
  },
  {
    q: 'What is the "Chancenkarte" (Opportunity Card)?',
    a: "It is a points-based visa introduced by Germany allowing skilled workers to enter the country to look for jobs without a prior offer. Caspia assists with this application.",
  },
  {
    q: "Does Caspia have a hostel facility?",
    a: "Yes, Caspia provides separate hostel facilities for male and female students near our Vyttila institute for those attending our language classes.",
  },
  {
    q: "What industries offer Ausbildung besides Nursing?",
    a: "Caspia offers guidance for Ausbildung in IT Specialist, Automotive Mechatronics, Logistics, Hospitality (Hotel Specialist), and Anesthesia Technical Assistant.",
  },
  {
    q: "How long is the German language course at Caspia?",
    a: "An intensive batch (A1 to B2) typically takes 6 to 8 months. Regular batches may take longer.",
  },
  {
    q: "Is Caspia Overseas a registered consultancy?",
    a: "Yes, Caspia Overseas Studies is a registered and trusted education consultant in Kerala with a physical presence in Kochi and multiple branches.",
  },
  {
    q: "Do I need a blocked account for Ausbildung?",
    a: "Usually, no. Since you receive a monthly stipend, you often do not need a full Blocked Account like university students. However, rules vary, and Caspia advises based on the specific contract.",
  },
  {
    q: "What is the success rate of Caspia students?",
    a: "We boast a high success rate for both Goethe exams and Visa approvals, thanks to our meticulous document verification and interview preparation.",
  },
  {
    q: "How can I contact Caspia Overseas?",
    a: "You can visit our Head Office in Vyttila, Kochi, or call us at +91 9446 511 115 to book a free counseling session.",
  },
];

export default function AboutPage() {
  return (
    <>
      <FAQJsonLd items={faqItems} />

      {/* ============ HERO ============ */}
      <section className="relative bg-hero bg-hero-shine text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {"Caspia Overseas: The Best German Language Institute in Kerala & Your Gateway to Germany (2026)"}
            </h1>
            <div className="mt-6 space-y-4 text-white/85 md:text-lg leading-relaxed">
              <p>
                {"In the rapidly evolving landscape of global education and careers, one language stands as the ultimate key to success: German. As we navigate the opportunities of 2026, Caspia Overseas Studies (formerly DirectionNXT) has firmly established itself as the best German language institute in Kerala. Located in the heart of Vyttila, Kochi, we are more than just a training center; we are your strategic partner in building a life in Europe."}
              </p>
              <p>
                {"Whether you are a nurse seeking a high-paying career through Nursing Ausbildung in Germany, an engineer eyeing the automotive industry, or a student aspiring for free higher education, Caspia provides the roadmap. With a legacy of excellence and a future-forward approach, we offer the most comprehensive German language classes designed to take you from a beginner to a fluent professional."}
              </p>
            </div>
            <div className="mt-8">
              <WhatsAppCTA label="Connect with Us" href="https://wa.me/919446511115" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-end">
            <Image
              src="/images/2023/04/Layer-3-e1680957652753.png"
              alt="Caspia Student Success Stories"
              width={733}
              height={959}
              className="rounded-3xl w-full h-auto"
            />
            <Image
              src="/images/2023/03/Caspia-Girl-2-e1679900203401.png"
              alt="Student Studying German in Kerala"
              width={385}
              height={960}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ WHY CASPIA ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why Caspia"
            title="Why Caspia is Rated the Best German Language Institute in Kochi"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {"Finding the right mentor is the first step toward your dream. In a city filled with options, Caspia Overseas stands out as the best German language institute in Kochi for distinct reasons. Our approach combines linguistic precision with cultural immersion, ensuring that our students don't just pass exams: they thrive in German society."}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl mb-5">
                1
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                {"2026-Ready Curriculum (Goethe & Telc Standards)"}
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {"The German migration rules have changed. The new Skilled Immigration Act and the Chancenkarte (Opportunity Card) require specific proficiency levels. Our curriculum is strictly aligned with the Common European Framework of Reference for Languages (CEFR)."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">{"A1 & A2 (Foundation):"}</strong>{" "}
                  {"We build your grammar and vocabulary from scratch."}
                </li>
                <li>
                  <strong className="text-secondary">{"B1 & B2 (Intermediate/Advanced):"}</strong>{" "}
                  {'This is the "Golden Standard" for Ausbildung Nursing in Germany and most jobs. Our intensive B2 training focuses on medical and technical terminology.'}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center font-extrabold text-xl mb-5">
                2
              </div>
              <h3 className="text-lg font-extrabold text-secondary">
                {"Expert Faculty & Hybrid Learning"}
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We employ the finest trainers in the state: professionals who have mastered the nuances of the language. Understanding the busy schedules of our students, we offer:"}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Offline Classes:</strong>{" "}
                  {"At our state-of-the-art campus in Vyttila, Ernakulam."}
                </li>
                <li>
                  <strong className="text-secondary">Online German Language Classes:</strong>{" "}
                  {"Live, interactive sessions accessible from anywhere in the world, maintaining the same quality as our physical classrooms."}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center font-extrabold text-xl mb-5">
                3
              </div>
              <h3 className="text-lg font-extrabold text-secondary">A Track Record of Success</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"Being the best German consultancy in Kerala isn't a self-proclaimed title; it is earned through results. Our students consistently achieve high pass rates in Goethe-Zertifikat exams, and our placement record for vocational training in Germany is unmatched."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GERMAN LANGUAGE CLASSES ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Language Training"
            title="German Language Classes: Your Ticket to Global Opportunities"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {"At Caspia, we believe that language is a bridge. Our German language classes are structured to ensure you are exam-ready and job-ready."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-extrabold text-secondary">
                Beginner to Advanced Training
              </h3>
              <p className="mt-3 text-sm text-ink/80">
                {"We offer flexible batches ranging from A1 to C1 levels."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li>
                  <strong className="text-secondary">Intensive Batches:</strong>{" "}
                  {"Designed for students who need to fly within 6-8 months."}
                </li>
                <li>
                  <strong className="text-secondary">Regular Batches:</strong>{" "}
                  {"Ideal for college students and working professionals."}
                </li>
                <li>
                  <strong className="text-secondary">Exam Preparation:</strong>{" "}
                  {"We conduct rigorous mock tests (Listening, Reading, Writing, Speaking) to eliminate exam anxiety."}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-extrabold text-secondary">Specialized Medical German</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"For healthcare professionals, generic German isn't enough. As the premier institute for Nursing Ausbildung in Germany, we incorporate Pflegefachsprache (Nursing German) into our B2 curriculum, ensuring you can communicate effectively with doctors and patients upon arrival."}
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
              Nursing Ausbildung in Germany: The Golden Opportunity
            </h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              {"For students from Kerala, the Ausbildung Nursing in Germany program is the most sought-after pathway in 2026. This is not just a study program; it is a career launchpad."}
            </p>
            <h3 className="mt-8 text-xl font-bold text-accent">Why Nursing Ausbildung?</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-2.5 items-start text-white/90">
                <span className="mt-1 text-accent" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong className="text-white">Zero Fees:</strong>{" "}
                  {"You do not pay to learn."}
                </span>
              </li>
              <li className="flex gap-2.5 items-start text-white/90">
                <span className="mt-1 text-accent" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong className="text-white">Earn While You Learn:</strong>{" "}
                  {"You receive a monthly stipend (approx. €1,200 - €1,400 in 2026) during the 3-year training."}
                </span>
              </li>
              <li className="flex gap-2.5 items-start text-white/90">
                <span className="mt-1 text-accent" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong className="text-white">Guaranteed Job:</strong>{" "}
                  {"Upon graduation, you are a state-registered nurse with a guaranteed job and a clear path to Permanent Residency (PR)."}
                </span>
              </li>
            </ul>
            <p className="mt-6 text-white/85 leading-relaxed">
              {"As the best German consultancy in Kerala, Caspia Overseas streamlines this complex process. We connect you with top hospitals, handle your Anerkennung (recognition) paperwork, and prepare you for the rigorous embassy interviews."}
            </p>
            <div className="mt-8">
              <WhatsAppCTA label="Enquire About Nursing" href="https://wa.me/919446511115" />
            </div>
          </div>
          <div>
            <Image
              src="/images/2026/01/Banner-03.png"
              alt="Nursing Ausbildung Germany Process"
              width={1072}
              height={1574}
              className="rounded-3xl w-full max-w-md mx-auto h-auto ring-4 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* ============ BEYOND NURSING ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Ausbildung Programs"
            title="Beyond Nursing: Specialized Ausbildung Programs"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {"While we are famous for our nursing programs, Germany’s industrial sector is booming. Caspia offers guaranteed placement support for Ausbildung in other high-demand sectors:"}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Logistics & Supply Chain", d: "Germany is the logistics hub of Europe." },
              { t: "IT & System Integration", d: "Earn while you code." },
              { t: "Hospitality & Tourism", d: "Work in top hotels with a generous stipend." },
              { t: "Automotive Mechatronics", d: "Train with the world's best engineering firms." },
            ].map((c) => (
              <div
                key={c.t}
                className="bg-white rounded-3xl p-7 shadow-sm ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="font-extrabold text-secondary">{c.t}</h3>
                <p className="mt-3 text-sm text-ink/80">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-ink/85 max-w-3xl mx-auto">
            {'These programs are the perfect alternative to expensive degrees, offering a direct route to becoming a "Skilled Worker" and obtaining Permanent Residency (PR).'}
          </p>
        </div>
      </section>

      {/* ============ STUDY ABROAD CONSULTANCY ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Holistic Education Provider"
              title="Comprehensive Study Abroad Consultancy"
              center={false}
            />
            <p className="-mt-4 text-ink/85 leading-relaxed">
              {"Caspia Overseas isn't limited to Germany. We are a holistic education provider."}
            </p>
            <ul className="mt-6 space-y-4">
              <li className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-black/5">
                <strong className="text-secondary">Global Destinations:</strong>{" "}
                {"We assist with admissions to the UK, USA, Canada, Ireland, France, Australia, Malta, Finland, and New Zealand."}
              </li>
              <li className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-black/5">
                <strong className="text-secondary">Admission Services:</strong>{" "}
                {"Whether it's Medical, Engineering, or Management courses within India or abroad, we provide end-to-end guidance."}
              </li>
              <li className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-black/5">
                <strong className="text-secondary">Scholarship Assistance:</strong>{" "}
                {"We help meritorious students apply for scholarships to reduce their financial burden."}
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/2026/01/1024-x-1024-2.webp"
              alt="Caspia Office and Team"
              width={1024}
              height={1024}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ CASPIA ADVANTAGE ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Post-Admission Support"
            title="The Caspia Advantage: More Than Just a Consultancy"
          />
          <p className="text-center text-muted max-w-3xl mx-auto -mt-6 mb-12">
            {"What truly makes us the German language institute in Kerala of choice is our post-admission support."}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Visa Assistance</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"Our success rate for German National Visas is exemplary. We meticulously review every document."}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Accommodation Support</h3>
              <p className="mt-3 text-sm text-ink/80">
                {"Finding a home in Germany is tough. We assist our students in securing housing before they land."}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
              <h3 className="font-extrabold text-secondary">Cultural Orientation</h3>
              <p className="mt-3 text-sm text-ink/80">
                {'We prepare you for the "German way of life": from recycling rules to "Ruhezeit" (Quiet hours), ensuring you integrate smoothly.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISIT US ============ */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHeading eyebrow="Our Campus" title="Visit Us in Kochi" />
          <div className="-mt-4 space-y-4 text-ink/85 leading-relaxed">
            <p>
              {"Located in Vyttila, the connectivity hub of Kochi, our campus is easily accessible for students from Alappuzha, Kottayam, and Thrissur. We also have branches in Perinthalmanna, Kodungallur, Cherthala, and Perumbavoor."}
            </p>
            <p>
              {"If you are searching for the best German language classes or a trusted partner for Ausbildung Nursing in Germany, your search ends at Caspia Overseas."}
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppCTA label="Get Directions" href="https://wa.me/919446511115" />
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions (FAQ)"
        lead={'Designed to rank in Google\'s "People Also Ask" and Answer Engines.'}
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
            {"Contact Us Today: Phone: +91 9446 511 115 | 79944 76446 Email: info@caspiaedu.com Location: Vyttila, Kochi (Branches: Perinthalmanna, Kodungallur, Cherthala, Perumbavoor)"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA label="Enquire Now for 2026 Batches" href="https://wa.me/919446511115" />
          </div>
        </div>
      </section>
    </>
  );
}
