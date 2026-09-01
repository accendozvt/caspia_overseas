import type { Metadata } from "next";
import {
  AusbildungProgramPage,
  type AusbildungPageData,
} from "@/components/ausbildung/AusbildungProgramPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Automotive Ausbildung in Germany | Caspia Overseas",
  description:
    "Build machines and earn euros with Germany's Automotive & Engineering Ausbildung: €1,100-€1,400 monthly stipend, zero tuition fees, in the world's car-making capital.",
  path: "/automotive-and-engineering-ausbildung-caspia-overseas-kochi/",
  type: "article",
});

const data: AusbildungPageData = {
  heroTitle: "Study Automotive and Engineering Ausbildung in Germany",
  headline: "Automotive & Engineering Ausbildung in Germany: Build Machines, Earn Euros (2026)",
  subheadline:
    'Earn €1,100 - €1,400 Monthly Stipend | Zero Tuition Fees | The "Car Nation" Experience',
  intro: [
    "Germany is the birthplace of the automobile and the world's factory floor. From Mercedes-Benz to Siemens, German engineering is legendary. But they have a problem: their workforce is retiring.",
    "In 2026, German industry is desperate for young technical talent from India. The Automotive and Engineering Ausbildung is your paid entry ticket into this elite sector. It is a Dual Vocational Training program where you don't pay to study: you get paid to work on the latest engines, robots, and CNC machines.",
    "At Caspia Overseas Studies, recognized as the best German consultancy in Kerala, we specialize in placing technical students into these high-demand roles. From mastering technical German at our Vyttila campus to securing your contract, we engineer your success.",
  ],
  heroCta: { label: "Check Eligibility for Engineering", href: "https://wa.me/919446511115" },
  heroImage: {
    src: "/images/2023/04/robots-car-plant.jpg",
    alt: "Automotive Engineering Ausbildung Germany Robots",
    width: 667,
    height: 1000,
  },
  sections: [
    {
      kind: "cards",
      tone: "mist",
      title: "Why Engineering Ausbildung? (The 2026 Advantage)",
      lead: ["This isn't just a mechanic course. This is high-tech engineering training."],
      cards: [
        {
          title: "1. Highest Industrial Stipends",
          paragraphs: [
            "Engineering apprentices are paid according to the IG Metall union tariffs, which are the highest in Germany.",
          ],
          bullets: [
            "1st Year: ~ €1,150 / month",
            "2nd Year: ~ €1,250 / month",
            "3rd Year: ~ €1,400 / month",
          ],
        },
        {
          title: "2. Blocked Account Waiver",
          paragraphs: [
            "The Caspia Advantage: In 2026, the German student visa requires a €11,904 Blocked Account. However, since Engineering stipends are often above €1,048/month, many of our students receive a Full Waiver on the Blocked Account. You save ~₹11 Lakhs upfront.",
          ],
        },
        {
          title: "3. Future-Proof Skills",
          paragraphs: [
            "You won't just learn about petrol engines. The 2026 curriculum focuses on E-Mobility (Electric Vehicles), Industry 4.0 (Robotics), and 3D Printing.",
          ],
        },
      ],
    },
    {
      kind: "cards",
      tone: "white",
      title: "Top 5 Engineering Programs in Demand",
      lead: [
        "Germany has specific titles for these roles. We help you choose the one that fits your skills.",
      ],
      cols: 3,
      cards: [
        {
          title: "1. Kraftfahrzeugmechatroniker",
          subtitle: "(Automotive Mechatronics Technician)",
          paragraphs: [
            "The Car Doctor: You don't just fix tires. You diagnose complex electronic systems, calibrate sensors for lane-assist, and work on High-Voltage Systems for Electric Cars (EVs).",
          ],
          bullets: [
            "Career Goal: Master Mechanic (KFZ-Meister) or Service Manager.",
            "Duration: 3.5 Years.",
          ],
        },
        {
          title: "2. Mechatroniker",
          subtitle: "(Mechatronics Technician)",
          paragraphs: [
            "The Hybrid: The perfect mix of Mechanics + Electronics + IT. You build and maintain industrial robots and automated production lines.",
          ],
          bullets: [
            "Career Goal: Automation Engineer or Robot Programmer.",
            "Duration: 3.5 Years.",
          ],
        },
        {
          title: "3. Industriemechaniker",
          subtitle: "(Industrial Mechanic)",
          paragraphs: [
            "The Builder: You install, maintain, and repair massive industrial machinery. If a production line stops, you are the hero who fixes it.",
          ],
          bullets: [
            "Career Goal: Maintenance Manager or Production Head.",
            "Duration: 3.5 Years.",
          ],
        },
        {
          title: "4. Zerspanungsmechaniker",
          subtitle: "(Cutting Machine Operator / CNC)",
          paragraphs: [
            "The Precisionist: You program CNC machines to cut metal parts with micron-level accuracy. Essential for aerospace and medical device manufacturing.",
          ],
          bullets: [
            "Career Goal: CNC Programmer or Quality Control Manager.",
            "Duration: 3.5 Years.",
          ],
        },
        {
          title: "5. Elektroniker für Automatisierungstechnik",
          subtitle: "(Electronics Technician for Automation)",
          paragraphs: [
            "The Brains: You wire the control cabinets and program the PLCs (Programmable Logic Controllers) that run factories.",
          ],
          bullets: [
            "Career Goal: Electrical Engineer or Project Manager.",
            "Duration: 3.5 Years.",
          ],
        },
      ],
    },
    {
      kind: "cards",
      tone: "mist",
      title: "Eligibility: Do You Fit the Profile?",
      lead: [
        "German Engineering is rigorous. To apply through Caspia Overseas, the best German language institute in Kerala, you need:",
      ],
      cards: [
        {
          title: "1. Academic Qualification",
          bullets: [
            "Plus Two (12th Pass): Science Stream (PCM) is highly preferred.",
            "Diploma Holders: 3-Year Polytechnic Diploma (Mechanical/Auto/Electrical) holders are the top candidates.",
            "B.Tech Dropouts: This practical path is a perfect second chance.",
          ],
        },
        {
          title: "2. German Language (Technical)",
          paragraphs: [
            "Requirement: Level B2 is Non-Negotiable.",
            "Why? Safety. If you misunderstand a voltage warning, you could cause an accident.",
            "Solution: Join Caspia’s German language classes in Kochi. We teach you technical terms like Drehmoment (Torque).",
          ],
        },
        {
          title: "3. Aptitude",
          paragraphs: ["Strong logical thinking and manual dexterity (good with hands)."],
        },
      ],
    },
    {
      kind: "career",
      tone: "white",
      title: "Career Path & Salary After Graduation",
      lead: ["Once you pass your final IHK Exam, you are a certified specialist."],
      blocks: [
        {
          title: "Starting Salary (2026)",
          paragraphs: ["€3,000 – €3,800 Gross/Month (approx. ₹2.7 - ₹3.4 Lakhs)."],
        },
        {
          title: "Career Growth",
          bullets: [
            "Industriemeister (Industrial Master): Eligible after 2 years. Allows you to train others and manage teams.",
            "Techniker (State Certified Technician): A 2-year upgrade course that makes you equal to a Bachelor’s degree holder.",
            "University: You can study Mechanical Engineering (Maschinenbau) directly.",
          ],
        },
      ],
      image: {
        src: "/images/2023/04/engineer-inspecting-apprentices-their-workstations.jpg",
        alt: "Engineering Career Path in Germany",
        width: 1000,
        height: 667,
      },
    },
    {
      kind: "steps",
      tone: "dark",
      title: "Step-by-Step Application Process",
      steps: [
        "1. Technical Assessment: Visit Caspia Overseas in Vyttila. We assess your mechanical aptitude and math basics.",
        '2. Intensive German Training: Enroll in our A1-B2 batches. We use diagrams and technical manuals to teach you "Engineering German."',
        "3. Portfolio Creation: We help you draft a CV highlighting your practical projects.",
        '4. Company Interview: We arrange interviews with German engineering firms. We prepare you for technical questions (e.g., "How does a 4-stroke engine work?").',
        "5. Visa & Departure: Once you sign the contract, we handle the Visa filing and flight arrangements.",
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions (FAQ)",
  faqLead: "Optimized for Google Voice Search & Answer Engines",
  faq: [
    {
      q: "Is Automotive Ausbildung free for Indian students?",
      a: "Yes. There are no tuition fees. It is a job-training program where the company (e.g., BMW, Local Workshop) pays you a monthly stipend.",
    },
    {
      q: "Can I work at BMW or Mercedes?",
      a: 'Yes, but competition is high. Big brands receive thousands of applications. We also apply to "Hidden Champions": smaller German companies that are world leaders and eager to hire Indians.',
    },
    {
      q: "Do I need a Blocked Account?",
      a: "If your gross stipend is above €1,048/month (2026 rules), you typically get a waiver. Engineering stipends are usually high enough to qualify for this!",
    },
    {
      q: "Is Physics/Maths required?",
      a: "Yes. You need to calculate gear ratios, voltage drops, and cutting speeds. Good grades in 12th/Diploma Maths & Physics are essential.",
    },
    {
      q: "Can Diploma holders apply?",
      a: "Yes! Polytechnic Diploma holders are the ideal candidates because you already have hands-on skills. You might even get a shortened training period (2.5 years).",
    },
    {
      q: "Is B1 German enough?",
      a: "No. For engineering, B2 is mandatory. The vocational school exams are 100% in German and involve complex technical theory.",
    },
    {
      q: "Is the job physically demanding?",
      a: "Yes. You will stand for long hours, lift heavy parts, and get your hands dirty with oil and grease. It is hard work, but rewarding.",
    },
    {
      q: "Can I work part-time?",
      a: "Yes, up to 10 hours/week. However, engineering studies are tough, so we advise focusing on passing your exams.",
    },
    {
      q: 'What is "Mechatronics"?',
      a: 'It is the combination of Mechanical, Electrical, and IT skills. It is the most "future-proof" career because every modern machine uses all three.',
    },
    {
      q: "Can I bring my family?",
      a: "Not immediately. Once you finish the 3.5-year training and get a full-time job, you can apply for a Family Reunion Visa.",
    },
    {
      q: "Does Caspia provide Technical German classes?",
      a: "Yes. Our institute in Vyttila teaches specific modules on tools, safety signs, and machine parts in German.",
    },
    {
      q: "Is there an age limit?",
      a: "Ideally 18 to 28 years. However, older candidates with relevant experience (e.g., worked as a mechanic in Gulf) are highly valued.",
    },
    {
      q: "Are there jobs for English speakers?",
      a: "After graduation, maybe. But for the Ausbildung training itself, German is mandatory.",
    },
    {
      q: "How long is the course?",
      a: "Most engineering programs are 3.5 years long because they are complex.",
    },
    {
      q: "Why choose Caspia Overseas?",
      a: "We are the best German consultancy in Kerala because we understand the technical requirements. We check if your skills match the German standards before applying.",
    },
    {
      q: "How long does the visa process take?",
      a: "Once you have the contract, the visa approval typically takes 4 to 8 weeks.",
    },
    {
      q: "Is it recognized in India?",
      a: 'The German "Gesellenbrief" (Journeyman Certificate) is respected worldwide, usually more than a generic Indian degree.',
    },
    {
      q: "Can girls apply for Mechanical Ausbildung?",
      a: "Absolutely. Germany actively encourages women in STEM. There are even special initiatives to hire female engineers.",
    },
    {
      q: "What if I fail the exam?",
      a: "You have 2 chances to retake the final exam. The company usually extends your contract until you pass.",
    },
    {
      q: "How do I start?",
      a: "Contact Caspia Overseas today. We will assess your technical aptitude and enroll you in the next German language batch.",
    },
  ],
  closing: {
    title: "Engineer Your Future in Germany",
    paragraphs: [
      "Don't just read about German cars: build them. Join the Best German Language Institute in Kerala and start your high-tech engineering career today.",
    ],
    contactHeading: "Contact Caspia Overseas Studies:",
    contactLines: [
      "Call: +91 9446 511 115 | 79944 76446",
      "Visit: Vyttila, Kochi (Branches in Perinthalmanna, Kodungallur, Cherthala, Perumbavoor)",
    ],
    ctas: [
      { label: "Check Eligibility for Engineering", href: "https://wa.me/919446511115" },
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

export default function AutomotiveEngineeringAusbildungPage() {
  return <AusbildungProgramPage data={data} />;
}
