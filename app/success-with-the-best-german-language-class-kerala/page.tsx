import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHero,
  SectionHeading,
  PrimaryCTA,
} from "@/components/ui";
import FormEmbed from "@/components/FormEmbed";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/jsonld";

const seo = {
  title: "Success with Kerala's No.1 German Language Class | Caspia",
  description:
    "Caspia Overseas Studies is the leading institute for German language class and training in Kerala, with a range of courses from beginner to advanced levels.",
  path: "/success-with-the-best-german-language-class-kerala/",
};

export const metadata: Metadata = pageMetadata(seo);

const whyChoose = [
  {
    t: "Tailored German Courses:",
    d: "Caspia offers a range of courses – from beginner to advanced levels – that are customized to your individual learning goals, including specialized preparation for vocational training courses.",
  },
  {
    t: "Qualified Teachers:",
    d: "With a team of experienced native speakers and certified German language instructors, Caspia guarantees you an authentic and effective learning experience.",
  },
  {
    t: "Innovative Learning Methods:",
    d: "Our teaching methods include interactive modules that accelerate language acquisition while also fostering a deep understanding of German culture.",
  },
  {
    t: "Flexible Learning:",
    d: "Whether you prefer in-person classes in Kochi or are searching for “online German language courses,” Caspia Overseas Studies provides flexible options that fit your lifestyle.",
  },
  {
    t: "Track Record of Success:",
    d: "Caspia prides itself on the high success rate of its students in language examinations, making it the “best German language institute in Kerala.”",
  },
  {
    t: "Vocational Training Agency in Kerala:",
    d: "As a reputable vocational training agency, Caspia offers tailored counseling and support for those interested in vocational educational pathways in Germany.",
  },
  {
    t: "Comprehensive Support:",
    d: "Beyond language courses, Caspia also assists with visa procurement, enrollment in Germany, and offers an extensive orientation program.",
  },
  {
    t: "Career Advantages:",
    d: "With German language skills, doors open to multinational companies, both in India and Germany, making Caspia the ideal stepping stone for your career.",
  },
];

const highlights = [
  {
    t: "Best German Language Institute:",
    d: "Caspia Overseas Studies is your premier destination for German class es in Kerala, recognized for its outstanding quality of language training.",
  },
  {
    t: "Vocational Training Agency in Kerala:",
    d: "For vocational training in Germany, Caspia is the trusted partner that not only teaches you the language but also guides you through the entire training process.",
  },
  {
    t: "German Language Institute in Kochi:",
    d: "Located in the heart of Kochi, Caspia Overseas Studies is perfectly positioned to provide students with top-notch German language education.",
  },
  {
    t: "Online German Language Courses:",
    d: "With flexible online options, Caspia ensures that your German language skills know no boundaries.",
  },
];

export default function SuccessGermanClassPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          ...seo,
          breadcrumbs: [
            {
              name: "Success with Kerala's No.1 German Language Class",
              path: "/success-with-the-best-german-language-class-kerala/",
            },
          ],
        })}
      />

      <PageHero
        eyebrow="Your Gateway to World-Class Education"
        title="Study in Germany"
        cta={false}
      />

      {/* ============ INTRO ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/2023/11/Germany.png"
              alt="The Best German Language Classes in Kerala"
              width={1007}
              height={640}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-secondary leading-tight">
              Caspia Overseas Studies: Your Gateway to Success with German Language Class in Kerala
            </h2>
            <p className="mt-6 text-ink/85 leading-relaxed">
              {"In today’s globally interconnected world, the ability to speak multiple languages is an invaluable asset. Caspia Overseas Studies in Kerala has established itself as the leading institute for German language class & training. If you are searching for the “best German language institute in Kerala” or the “best German language institute in Kochi,” Caspia Overseas Studies is at the top of your list."}
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Why Caspia"
            title="Why Choose Caspia Overseas Studies for German Courses?"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((c, i) => (
              <div
                key={c.t}
                className="bg-white rounded-3xl p-7 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-secondary">{c.t}</h3>
                <p className="mt-2 text-sm text-ink/80 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Highlights"
            title="Highlights of Studying German Language in Caspia Overseas"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((c) => (
              <div
                key={c.t}
                className="flex gap-4 items-start bg-white rounded-3xl p-7 shadow-sm ring-1 ring-black/5"
              >
                <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center" aria-hidden>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-ink/85 leading-relaxed">
                  <strong className="text-secondary">{c.t}</strong> {c.d}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto space-y-4 text-ink/85 leading-relaxed">
            <p>
              {"By choosing Caspia Overseas Studies, you are not just selecting an institute, but a holistic enabler for your academic and professional aspirations in Germany. Step into the world of the German language with the best partner by your side – Caspia Overseas Studies, Kerala."}
            </p>
            <p>
              {"At Caspia Overseas Studies, we understand that learning a language is not just about the classroom experience. That’s why we aim to provide the best German Language class es, and a range of support services including visa assistance, accommodation support, and cultural orientation, to help our students settle in and make the most of their time in Kochi."}
            </p>
            <p>
              {"Our institute is located in a convenient and accessible location in Kochi, providing students with easy access to transportation, amenities, and cultural attractions. We have state-of-the-art facilities, including modern classrooms, a well-equipped library, and computer labs, to enhance the learning experience of our students."}
            </p>
            <p>
              {"Whether you are looking to learn German for personal or professional reasons, Caspia Overseas Studies is the ideal choice for anyone seeking the best German Language Classes and a high-quality education in Kochi. Contact us today to learn more about our courses and how we can help you achieve your German language learning goals."}
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto">
            <Image
              src="/images/2023/11/flag-germany-germany-state-symbol-germany-flag-e1700221259996.jpg"
              alt="Study in Germany"
              width={500}
              height={333}
              sizes="(max-width: 896px) 100vw, 896px"
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ============ REGISTER NOW ============ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Admissions" title="Register Now" />
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm ring-1 ring-black/5">
            <FormEmbed />
          </div>
        </div>
      </section>

      {/* ============ EXPLORE ============ */}
      <section className="bg-secondary text-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Explore New Horizons: Study Abroad with Caspia
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA label="Register Today" href="https://bit.ly/3NpzrDU" />
            <PrimaryCTA
              label="Contact Us"
              href="/contact-caspia-overseas-studies/"
              className="bg-white/10 hover:bg-white/20 ring-1 ring-white/30 shadow-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}
