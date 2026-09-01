import type { Metadata } from "next";
import {
  AusbildungProgramPage,
  type AusbildungPageData,
} from "@/components/ausbildung/AusbildungProgramPage";

export const metadata: Metadata = {
  title: {
    absolute: "Logistics Ausbildung in Germany | Caspia Overseas",
  },
  description:
    "Join Europe's logistics powerhouse with Germany's Logistics Ausbildung: €1,000-€1,300 monthly stipend, zero tuition fees, real DHL and DB Schenker-level training.",
  alternates: { canonical: "/logistics-ausbildung-program-caspia-overseas-kochi/" },
  openGraph: {
    type: "article",
    title: "Logistics Ausbildung in Germany | Caspia Overseas",
    description:
      "Join Europe's logistics powerhouse with Germany's Logistics Ausbildung: €1,000-€1,300 monthly stipend, zero tuition fees, real DHL and DB Schenker-level training.",
  },
};

const data: AusbildungPageData = {
  heroTitle: "Study Logistics Ausbildung in Germany",
  headline:
    "Logistics Ausbildung in Germany: Your Paid Ticket to Europe's Supply Chain Hub (2026)",
  subheadline:
    "Earn €1,000 - €1,300 Monthly Stipend | Zero Tuition Fees | No Blocked Account (Conditions Apply)",
  intro: [
    "Germany is the Logistics World Champion. From DHL to DB Schenker, German companies move the world. But they are facing a massive shortage of skilled workers. This is your opportunity.",
    "In 2026, Logistics Ausbildung in Germany is the smartest career move for students from Kerala. It is a Dual Vocational Training program where you don't pay tuition fees: instead, you get paid to learn. At Caspia Overseas Studies, we are the leaders in placing Indian students into these high-demand roles, providing end-to-end support from our Vyttila campus to your first day in Germany.",
  ],
  heroCta: { label: "Check Your Eligibility Free", href: "https://wa.me/919446511115" },
  heroImage: {
    src: "/images/2023/04/managers-visiting-storage-center-discussing-about-distribution-goals-year.jpg",
    alt: "Logistics Ausbildung Germany Warehouse",
    width: 1000,
    height: 667,
  },
  sections: [
    {
      kind: "cards",
      tone: "mist",
      title: "Why Choose Logistics Ausbildung? (The 2026 Advantage)",
      lead: [
        "Unlike general degrees, an Ausbildung makes you financially independent from Day 1.",
      ],
      cards: [
        {
          title: "1. High Stipend & Blocked Account Waiver",
          paragraphs: [
            "For 2026, the German Blocked Account requirement is €11,904.",
            "The Good News: Many Logistics Ausbildung contracts offer a stipend of €1,100+ per month. The Benefit: If your stipend covers the minimum cost of living, you may receive a Partial or Full Waiver on the Blocked Account. This saves you lakhs in upfront costs!",
          ],
        },
        {
          title: "2. Guaranteed Job Security",
          paragraphs: [
            "Germany is Europe's export giant. A qualification as a Fachkraft für Lagerlogistik (Warehouse Specialist) guarantees you a job in almost any city: Hamburg, Frankfurt, or Munich.",
          ],
        },
        {
          title: "3. PR Pathway",
          paragraphs: [
            "After completing your 3-year training, you can work for 2 years and become eligible for Permanent Residency (Niederlassungserlaubnis).",
          ],
        },
      ],
    },
    {
      kind: "cards",
      tone: "white",
      title: "Top 3 Logistics Ausbildung Profiles in Demand",
      lead: [
        'You aren\'t just a "driver." German logistics roles are highly technical. Here are the top courses for 2026:',
      ],
      cards: [
        {
          title: "1. Fachkraft für Lagerlogistik",
          subtitle: "(Warehouse Logistics Specialist)",
          paragraphs: [
            "Role: The mastermind of the warehouse. You plan storage zones using software, manage inventory with scanners, and organize international shipments.",
          ],
          bullets: ["2026 Stipend: €950 – €1,250 / Month.", "Duration: 3 Years."],
        },
        {
          title: "2. Kaufmann/-frau für Spedition",
          subtitle: "(Freight Forwarding Agent)",
          paragraphs: [
            "Role: The planner. You sit in an office, organizing truck/ship/train routes, handling customs paperwork, and negotiating prices with clients.",
          ],
          bullets: ["2026 Stipend: €1,000 – €1,300 / Month.", "Duration: 3 Years."],
        },
        {
          title: "3. Berufskraftfahrer",
          subtitle: "(Professional Driver)",
          paragraphs: [
            "Role: The mover. You learn to operate heavy trucks (LKW), handle hazardous materials (ADR), and manage route logistics.",
          ],
          bullets: ["2026 Stipend: €1,100 – €1,350 / Month.", "Duration: 3 Years."],
        },
      ],
    },
    {
      kind: "cards",
      tone: "mist",
      title: "Eligibility: Do You Fit the Profile?",
      lead: ["To apply through Caspia Overseas, you need:"],
      cards: [
        {
          title: "Academic Qualification",
          bullets: [
            "Plus Two (12th Pass) or Diploma.",
            "Commerce/Humanities/Science streams are all accepted.",
            "Minimum 50-60% marks recommended.",
          ],
        },
        {
          title: "German Language (Mandatory)",
          bullets: [
            "Level B1 is the Minimum, but B2 is Highly Preferred for 2026.",
            "Logistics requires fast communication on the walkie-talkie or phone. Weak German = No Contract.",
            "Solution: Join Caspia’s Intensive German Classes in Kerala to reach B2 level in 6-8 months.",
          ],
        },
        {
          title: "Age Limit",
          paragraphs: [
            "Ideally 18 to 28 years. (Employers prefer younger candidates for vocational training).",
          ],
        },
      ],
    },
    {
      kind: "career",
      tone: "white",
      title: "Salary & Career Growth",
      lead: [
        "During Training (Stipend): You earn monthly pocket money to cover rent and food.",
      ],
      stats: [
        { label: "Year 1", value: "~€1,050" },
        { label: "Year 2", value: "~€1,150" },
        { label: "Year 3", value: "~€1,300" },
      ],
      subheading: "After Graduation (Starting Salary 2026)",
      bullets: [
        "Gross Salary: €2,600 – €3,200 per month (approx. ₹2.5 Lakhs).",
        "Career Growth: You can upgrade to a Logistics Master (Logistikmeister) or study Supply Chain Management to earn €4,500+ per month.",
      ],
    },
    {
      kind: "steps",
      tone: "dark",
      title: "Step-by-Step Application Process",
      image: {
        src: "/images/2023/04/cargo-ship-container.jpg",
        alt: "Logistics Ausbildung Application Process",
        width: 511,
        height: 1000,
      },
      steps: [
        '1. Profile Evaluation: Visit Caspia Overseas in Kochi. We check if your 12th-grade marks meet the German "Abitur" equivalency.',
        "2. Learn German: Enroll in our A1-B2 batches. We focus on technical vocabulary (Fachsprache) used in warehouses and offices.",
        "3. Document Preparation: We create your Lebenslauf (CV) and Anschreiben (Cover Letter) in flawless German.",
        "4. Apply & Interview: We apply to verified German companies. You attend online interviews (we train you for these!).",
        "5. Visa & Departure: Once you sign the contract, we handle the Visa filing, Blocked Account waiver (if eligible), and flight bookings.",
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions (FAQ)",
  faqLead: "Optimized for Google Voice Search & Answer Engines",
  faq: [
    {
      q: "Is Logistics Ausbildung free for Indian students?",
      a: "Yes, there are no tuition fees. It is a job-training program where the company pays you a monthly stipend.",
    },
    {
      q: "Do I need a Blocked Account for Logistics Ausbildung?",
      a: "It depends on your stipend. In 2026, if your gross stipend is above €1,048/month, you generally do not need a blocked account. If it is lower, you only need to block the difference amount (Partial Blocked Account).",
    },
    {
      q: "Can I apply with a Commerce background?",
      a: "Absolutely! Logistics is one of the best fields for Commerce students. The Speditionskaufmann (Freight Forwarding) role involves calculations, planning, and business management.",
    },
    {
      q: "What is the minimum German level required?",
      a: "B1 is the absolute minimum, but top companies (DHL, DB Schenker) often reject B1 candidates. We strongly recommend reaching B2 Level at Caspia to guarantee a placement.",
    },
    {
      q: "Is the job physical/hard work?",
      a: "Fachkraft für Lagerlogistik involves some physical work (lifting, scanning), but also computer work. Speditionskaufmann is 100% desk/office work. Berufskraftfahrer involves driving.",
    },
    {
      q: "Can I study further after Ausbildung?",
      a: 'Yes! Germany’s education system is permeable. After your Ausbildung, you can study for a Bachelor’s in Supply Chain Management or obtain a "Meister" (Master Craftsman) title to become a manager.',
    },
    {
      q: "Does Caspia provide German classes for Logistics?",
      a: "Yes. Our institute in Vyttila, Kochi offers specialized German training that includes logistics vocabulary (e.g., Frachtbrief, Zollabfertigung), giving you an edge in interviews.",
    },
    {
      q: "What are the working hours during training?",
      a: "You work 40 hours per week. Usually, 3 days are in the company (practical) and 2 days are in the vocational school (theory).",
    },
    {
      q: "Can I work part-time?",
      a: "Yes, you can work up to 10 hours/week in a mini-job (e.g., food delivery, restaurant) to earn extra money, provided it doesn't affect your training.",
    },
    {
      q: "How long is the visa valid?",
      a: "The visa is valid for the full duration of your training (3 years). After that, you get a 12-month Job Search Visa or switch directly to a Work Visa.",
    },
  ],
  closing: {
    title: "Ready to Move to Germany?",
    paragraphs: [
      "Stop waiting. The supply chain never stops, and neither should your career. Join the Best German Consultancy in Kerala and secure your future in Europe's strongest economy.",
    ],
    contactHeading: "Contact Caspia Overseas Studies Today:",
    contactLines: [
      "Call: +91 9446 511 115 | 79944 76446",
      "Visit: Vyttila, Kochi (Branches in Perinthalmanna, Kodungallur, Cherthala, Perumbavoor)",
    ],
    ctas: [
      { label: "Check Your Eligibility Free", href: "https://wa.me/919446511115" },
      { label: "Register for German Class", href: "https://wa.me/919446511115" },
    ],
  },
  footImage: {
    src: "/images/2023/04/Layer-3-e1680957652753.png",
    alt: "Overseas Consultancy and Study Abroad in Kochi",
    width: 733,
    height: 959,
  },
};

export default function LogisticsAusbildungPage() {
  return <AusbildungProgramPage data={data} />;
}
