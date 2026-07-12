import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";

export const metadata: Metadata = {
  title: {
    absolute: "Study in The UK - Caspia Overseas Studies - No.1 in Kerala",
  },
  description:
    "Study in the UK, a historic and vibrant island nation comprised of England, Scotland, Wales, and Northern Ireland, with the tailored guidance of Caspia Overseas Studies, Kochi's premier study abroad consultants.",
  alternates: { canonical: "/study-in-the-uk/" },
  openGraph: {
    title: "Study in The UK - Caspia Overseas Studies - No.1 in Kerala",
    description:
      "Study in the UK, a historic and vibrant island nation comprised of England, Scotland, Wales, and Northern Ireland, with the tailored guidance of Caspia Overseas Studies, Kochi's premier study abroad consultants.",
    images: ["/images/2023/11/Banner-01-scaled-1.png"],
  },
};

const data: CountryData = {
  heroTitle: "Study in United Kingdom",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/Banner-01-scaled-1.png",
    alt: "",
    width: 1007,
    height: 640,
  },
  sections: [
    {
      heading: "Embark on a prestigious educational journey in the United Kingdom",
      paragraphs: [
        "United Kingdom, a historic and vibrant island nation comprised of England, Scotland, Wales, and Northern Ireland, with the tailored guidance of Caspia Overseas Studies, Kochi’s premier study abroad consultants.",
      ],
    },
    {
      heading: "Study in the UK - Intakes and Costs:",
      bullets: [
        "Primary Intake: September/October.",
        "Secondary Intakes: January/February and May, with some universities offering rolling admissions.",
        "Average Living Expenses: £600 – £800 per month outside London, and £800 – £1000 within London.",
        "Tuition Fees:Undergraduate: £8,000 – £15,000 per annum.Postgraduate: £10,000 – £25,000 per annum.MBA: £9,000 – £15,000 per annum.",
      ],
    },
    {
      heading: "Fast Facts - UK Insight:",
      variant: "facts",
      bullets: [
        "Comprises an area of 242,900 square kilometers.",
        "A central figure in global politics and economy.",
        "Population exceeding 63 million.",
        "Capital city: London; other major cities include Manchester, Birmingham, and Glasgow.",
        "Official language: English; Currency: Sterling Pound (GBP).",
      ],
    },
    {
      heading: "Why Study in the UK with Caspia Overseas Studies:",
      bullets: [
        "Universities with global recognition and prestigious academic heritage.",
        "The availability of a 2-year Post-Study Work Permit.",
        "Dependent visa options with full work rights.",
        "A blend of practical knowledge and multicultural experiences.",
        "Research-oriented and innovative infrastructure.",
        "A faculty that stands among the world’s best.",
      ],
    },
    {
      heading: "Distinctive UK Education System:",
      bullets: [
        "An education approach unique from US universities.",
        "Students earn degrees in 3-4 years, with honors for exceptional performance.",
        "Similarities with the Indian education system make it easier for Indian students to adapt.",
        "Varied university types including Collegiate, City, and Campus universities, each with their own distinctive atmosphere.",
      ],
    },
    {
      heading: "Studying in the UK - Advantages:",
      bullets: [
        "Degrees from the UK bolster one’s resume with a globally acknowledged educational background.",
        "Permission to work up to 20 hours weekly during term-time enhances practical learning.",
        "Exceptional research facilities across a multitude of disciplines.",
      ],
    },
    {
      heading: "Dual Degree Programs:",
      paragraphs: [
        "Opportunity to pursue joint degree programs, combining disciplines like engineering and management, or art history and architecture.",
      ],
    },
    {
      heading: "Application Process:",
      bullets: [
        "A 2-stage admission process requiring submission of academic records, work experience, and personal documentation.",
        "Admission decisions typically within 1-2 weeks.",
        "Issuance of CAS following tuition fee payment for visa application purposes.",
        "Ideal to initiate applications 2-3 months prior to program start date.",
      ],
    },
    {
      heading: "UK Visa Process:",
      bullets: [
        "Online application followed by a physical submission of detailed academic and financial records.",
        "Personal visa application submission is required.",
        "Recent introduction of visa interview and medical examinations.",
        "The entire visa process generally concludes within about 3 weeks.",
      ],
    },
    {
      heading: "Work Opportunities Post-Study:",
      bullets: [
        "20 hours of part-time work per week during terms and full-time during holidays for students.",
        "Spouses eligible to work for courses longer than a year.",
        "Tier 2 visa route for graduate-level jobs with registered companies post-graduation.",
        "Post-course completion, a 2-year stay back option to secure a permanent job for Tier 2 eligibility.",
      ],
    },
    {
      paragraphs: [
        "Caspia Overseas Studies in Kochi is dedicated to helping you navigate every aspect of your academic ambitions in the UK. From choosing the right university and course to the visa application process, our experts are here to ensure you seize the full potential of an education in the United Kingdom. Contact us to start your journey to a world-class education and a bright career ahead.",
      ],
    },
    {
      heading: "Want to Study in The UK? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive UK job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in The UK? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/19528011_1-768x468.jpg",
        alt: "Study in the UK",
        width: 768,
        height: 468,
      },
    },
  ],
  callback: { heading: "Want to Study in The UK? Get A Callback!" },
};

export default function StudyInTheUkPage() {
  return <CountryPage data={data} />;
}
