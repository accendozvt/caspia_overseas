import type { Metadata } from "next";
import {
  AusbildungProgramPage,
  type AusbildungPageData,
} from "@/components/ausbildung/AusbildungProgramPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "IT Ausbildung in Germany | Caspia Overseas Studies",
  description:
    "Skip the B.Tech debt: Germany's IT Ausbildung pays €1,100-€1,400 monthly with zero tuition fees, launching Kerala tech enthusiasts into a paid German IT career.",
  path: "/information-technology-ausbildung-caspia-overseas-kochi/",
  type: "article",
});

const data: AusbildungPageData = {
  heroTitle: "Study Ausbildung in Information Technology in Germany",
  headline: "IT Ausbildung in Germany: Launch Your Tech Career with a Monthly Salary (2026)",
  subheadline:
    "Earn €1,100 - €1,400 Monthly Stipend | Zero Tuition Fees | The Smart B.Tech Alternative",
  intro: [
    "Are you a tech enthusiast in Kerala wondering if you really need to spend 4 years and lakhs of rupees on an engineering degree? In Germany, the answer is No.",
    "The IT Ausbildung (Vocational Training for IT Specialists) is Germany's premier pathway for tech talent. It is a Dual Training Program where you don't pay tuition fees: instead, top German tech companies pay you a monthly salary to learn coding, networking, and system administration.",
    "At Caspia Overseas Studies, recognized as the best German consultancy in Kerala, we specialize in placing students into these high-demand IT roles. From mastering German at our Vyttila campus to securing your contract, we build your bridge to Europe’s Silicon Valley.",
  ],
  heroCta: { label: "Check Eligibility for IT", href: "https://wa.me/919446511115" },
  heroImage: {
    src: "/images/2023/04/man-using-digital-tablet-with-global-network-connection-technology-hologram.jpg",
    alt: "IT Specialist Ausbildung Germany",
    width: 1000,
    height: 545,
  },
  sections: [
    {
      kind: "cards",
      tone: "mist",
      title: "Why IT Ausbildung is Better than a Traditional Degree (2026)",
      lead: [
        'In 2026, German companies prefer "Doers" over "Thinkers." Here is why Indian students are switching to Ausbildung:',
      ],
      cards: [
        {
          title: "1. Highest Stipend in the Market",
          paragraphs: ["IT apprentices are the highest-paid trainees in Germany."],
          bullets: [
            "1st Year: ~ €1,050 – €1,150 / month",
            "2nd Year: ~ €1,150 – €1,250 / month",
            "3rd Year: ~ €1,250 – €1,400 / month",
          ],
        },
        {
          title: "2. Blocked Account Waiver",
          paragraphs: [
            "The standard German student visa requires a €11,904 Blocked Account.",
            "The Caspia Advantage: Since IT stipends are often higher than the minimum cost of living (€1,048/month in 2026), most of our IT students receive a Full or Partial Waiver on the Blocked Account. You move to Germany with almost zero upfront investment.",
          ],
        },
        {
          title: "3. Real-World Coding",
          paragraphs: [
            "You don't just study theory. You work on live servers, debug real code, and manage actual cyber-security threats from Day 1.",
          ],
        },
      ],
    },
    {
      kind: "cards",
      tone: "white",
      title: "The 4 Major IT Specializations in Germany",
      lead: [
        'Germany recently updated its IT training regulations. You aren\'t just an "IT Guy"; you are a specialist. We help you choose the right stream:',
      ],
      cols: 2,
      cards: [
        {
          title: "1. Fachinformatiker für Anwendungsentwicklung",
          subtitle: "(App Development)",
          paragraphs: [
            "The Coder: You build software, mobile apps, and internal tools using Java, C#, Python, or Swift.",
          ],
          bullets: [
            "Focus: Backend/Frontend development, database management (SQL), and UI/UX testing.",
            "Career Goal: Software Engineer, Full Stack Developer.",
          ],
        },
        {
          title: "2. Fachinformatiker für Systemintegration",
          subtitle: "(System Integration)",
          paragraphs: [
            "The Admin: You are the backbone of the company. You configure servers, manage Cloud (AWS/Azure) infrastructure, and solve hardware/network issues.",
          ],
          bullets: [
            "Focus: Networking, Virtualization, Cyber Security, and Hardware troubleshooting.",
            "Career Goal: System Administrator, DevOps Engineer, Cloud Architect.",
          ],
        },
        {
          title: "3. Fachinformatiker für Daten- und Prozessanalyse",
          subtitle: "(Data Analyst)",
          paragraphs: [
            "The Strategist: A newer profile for 2026. You analyze big data to optimize business processes.",
          ],
          bullets: [
            "Focus: SEO, Data Mining, ERP Systems (SAP), and Business Intelligence.",
            "Career Goal: Data Analyst, SAP Consultant.",
          ],
        },
        {
          title: "4. Fachinformatiker für Digitale Vernetzung",
          subtitle: "(Digital Networking)",
          paragraphs: [
            'The IoT Expert: You connect machines to the internet (Internet of Things). Crucial for Germany\'s "Industry 4.0" manufacturing sector.',
          ],
          bullets: [
            "Focus: Cyber-Physical Systems, Automation, and Industrial Networking.",
            "Career Goal: IoT Engineer, Smart Factory Specialist.",
          ],
        },
      ],
    },
    {
      kind: "cards",
      tone: "mist",
      title: "Eligibility: Do You Fit the Profile?",
      lead: [
        "Competition for IT spots is high. To apply through Caspia Overseas, the best German language institute in Kerala, you need:",
      ],
      cards: [
        {
          title: "1. Academic Qualification",
          bullets: [
            "Plus Two (12th Pass): Science stream (Computer Science/Maths) is highly preferred.",
            "Diploma Holders: 3-Year Polytechnic Diploma holders in CS/Electronics have an excellent chance.",
            "Marks: Strong grades in Math and Physics are crucial.",
          ],
        },
        {
          title: "2. German Language (The Dealbreaker)",
          paragraphs: [
            "Requirement: Level B2 is mandatory.",
            'Why? You need to understand technical instructions in German. "Server Down" is easy, but explaining why it is down in German requires skill.',
            "Solution: Join Caspia’s German language classes in Kochi. We include technical IT vocabulary (Fachsprache) in our curriculum.",
          ],
        },
        {
          title: "3. GitHub / Portfolio",
          paragraphs: [
            "For developers, we highly recommend having a GitHub profile with small projects. It proves your passion to German employers.",
          ],
        },
      ],
    },
    {
      kind: "career",
      tone: "white",
      title: "Career Path & Salary After Graduation",
      lead: ["Once you pass your final IHK exam, you are a certified Fachinformatiker."],
      blocks: [
        {
          title: "Starting Salary (2026)",
          paragraphs: ["€3,200 – €3,800 Gross/Month (approx. ₹2.8 - ₹3.4 Lakhs)."],
        },
        {
          title: "Career Growth",
          bullets: [
            "Senior Developer: €60,000 – €80,000 / year.",
            "Freelancer: IT Freelancers in Germany charge €80 - €100 per hour.",
            "Further Studies: You can pursue a Bachelor’s in Computer Science later if you wish.",
          ],
        },
      ],
      image: {
        src: "/images/2023/04/open-your-mind-world-codebreaking-portrait-focused-young-programmer-working-his-computer-office-during-night.jpg",
        alt: "Career Growth in IT Germany",
        width: 698,
        height: 1000,
      },
    },
    {
      kind: "steps",
      tone: "dark",
      title: "Step-by-Step Application Process",
      steps: [
        "1. Profile Assessment: Visit Caspia Overseas in Vyttila. We evaluate your logical reasoning and math skills.",
        '2. Intensive German Training: Enroll in our A1-B2 batches. We focus on "Workplace German" to ensure you crack the interview.',
        "3. Portfolio Building: We help you polish your CV and GitHub portfolio to stand out against local German applicants.",
        '4. Interview Training: We conduct technical mock interviews in German (e.g., "Explain Object-Oriented Programming in German").',
        "5. Visa & Relocation: Once hired, we manage your Visa filing, Blocked Account waiver, and flight arrangements.",
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions (FAQ)",
  faqLead: "Optimized for Google Voice Search & Answer Engines",
  faq: [
    {
      q: "Is IT Ausbildung better than B.Tech?",
      a: "It depends. B.Tech is academic; Ausbildung is practical. If you want to start earning at age 19 and avoid student debt, Ausbildung is the superior choice.",
    },
    {
      q: "How much does an IT apprentice earn in Germany?",
      a: "In 2026, IT stipends range from €1,050 to €1,400 per month. This is significantly higher than nursing or hospitality stipends.",
    },
    {
      q: "Do I need a Blocked Account?",
      a: "If your stipend is above €1,048/month, you likely do not need a blocked account. Caspia helps verify your contract to ensure this waiver.",
    },
    {
      q: "Is coding taught in German?",
      a: "The coding keywords (if, else, while) are in English, but the office communication, documentation, and exams are 100% in German. You need B2 level proficiency.",
    },
    {
      q: "Can I apply with a Commerce background?",
      a: "It is difficult but possible if you have a strong personal portfolio (e.g., apps you built) or a Diploma in Computer Applications (DCA).",
    },
    {
      q: "Is there an age limit?",
      a: "Ideally 18 to 28 years. However, older candidates with relevant IT experience (e.g., 2 years work exp) are highly valued.",
    },
    {
      q: "Can I work part-time?",
      a: "Yes, up to 10 hours/week. But IT training is mentally demanding, so we recommend focusing on your studies.",
    },
    {
      q: "Which city is best for IT in Germany?",
      a: "Munich, Berlin, and Hamburg are the tech hubs. However, smaller cities often pay just as well and have lower living costs.",
    },
    {
      q: "Can I bring my family?",
      a: "Not immediately. Once you finish the 3-year training and get a full-time job, you can apply for a Family Reunion Visa.",
    },
    {
      q: "Does Caspia provide IT-specific German classes?",
      a: "Yes. Our institute teaches you terms like Schnittstelle (Interface), Datenbank (Database), and Quellcode (Source Code).",
    },
    {
      q: "How long is the course?",
      a: "Standard duration is 3 years. If you have a B.Tech or Diploma, you can shorten it to 2 or 2.5 years.",
    },
    {
      q: "Is the degree recognized worldwide?",
      a: "Yes. The German IHK Certificate is the gold standard for vocational training globally.",
    },
    {
      q: "Can I do a Master's after Ausbildung?",
      a: "Yes, but you usually need a Bachelor's first. However, some universities accept experienced professionals without a Bachelor's into specific Master's programs.",
    },
    {
      q: "Do I need IELTS?",
      a: "No. The entire program is in German. You need a Goethe/Telc B2 Certificate.",
    },
    {
      q: "What if I fail the exam?",
      a: "You have 2 chances to retake the final exam. The training company usually extends your contract until you pass.",
    },
    {
      q: "Is math required?",
      a: "Yes. You don't need advanced calculus, but strong logical and arithmetic skills are essential for coding and networking.",
    },
    {
      q: "Can I switch companies during training?",
      a: "It is possible but difficult. You need a valid reason (e.g., company bankruptcy). It's better to choose the right company from the start with Caspia's help.",
    },
    {
      q: "Are there jobs for English speakers?",
      a: "After graduation, yes. But for the Ausbildung training itself, German is mandatory.",
    },
    {
      q: "Why choose Caspia Overseas?",
      a: "We are one of the few consultancies in Kerala that understands the technical requirements of the IT industry. We don't just send applications; we build tech profiles.",
    },
    {
      q: "How do I start?",
      a: "Contact Caspia Overseas today. We will assess your logic and language skills and enroll you in the next batch.",
    },
  ],
  closing: {
    title: "Code Your Future in Germany",
    paragraphs: [
      "Don't be just another engineering graduate looking for a job. Become a specialist that German companies fight to hire. Join the Best German Language Institute in Kerala and start your IT journey today.",
    ],
    contactHeading: "Contact Caspia Overseas Studies:",
    contactLines: [
      "Call: +91 9446 511 115 | 79944 76446",
      "Visit: Vyttila, Kochi (Branches in Perinthalmanna, Kodungallur, Cherthala, Perumbavoor)",
    ],
    ctas: [
      { label: "Check Eligibility for IT", href: "https://wa.me/919446511115" },
      { label: "Register for German Demo Class", href: "https://wa.me/919446511115" },
    ],
  },
  footImage: {
    src: "/images/2023/04/Layer-3-e1680957652753.png",
    alt: "Overseas Consultancy and Study Abroad in Kochi",
    width: 733,
    height: 959,
  },
};

export default function InformationTechnologyAusbildungPage() {
  return <AusbildungProgramPage data={data} />;
}
