import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";

export const metadata: Metadata = {
  title: {
    absolute: "Study in Canada - Caspia Overseas Studies - No.1 in Kerala",
  },
  description:
    "Study in Canada, the world’s second-largest country, stretches from the Atlantic to the Pacific and into the Arctic Ocean.",
  alternates: { canonical: "/study-in-canada/" },
  openGraph: {
    title: "Study in Canada - Caspia Overseas Studies - No.1 in Kerala",
    description:
      "Study in Canada, the world’s second-largest country, stretches from the Atlantic to the Pacific and into the Arctic Ocean.",
    images: ["/images/2023/11/Canada.png"],
  },
};

const data: CountryData = {
  heroTitle: "Study in Canada",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/Canada.png",
    alt: "",
    width: 1007,
    height: 640,
  },
  sections: [
    {
      heading: "Discover Canada: Your Academic Destination with Caspia Overseas Studies",
      paragraphs: [
        "Canada, the world’s second-largest country, stretches from the Atlantic to the Pacific and into the Arctic Ocean. It’s a land renowned for its vast landscapes and rich cultural heritage. As a top-tier overseas education consultancy in Kochi, Kerala, Caspia Overseas Studies is your trusted guide to Canadian higher education.",
      ],
    },
    {
      heading: "Express Entry to Canada with Caspia Overseas Studies",
      paragraphs: [
        "Introduced on 1st January 2015, Canada’s Express Entry system is a pivotal point-based migration mechanism. Caspia Overseas Studies offers comprehensive assistance to navigate this system effectively.",
      ],
    },
    {
      heading: "Prime Intake Sessions in Canadian Institutions",
      bullets: [
        "Principal Intake: January",
        "Secondary Intakes: September, May/June for select courses",
      ],
    },
    {
      heading: "Living Expenses and Tuition Costs in Canada",
      bullets: [
        "Standard Living Cost: CAD 10,000 per annum (as per Canadian High Commission guidelines)",
        "Tuition Fees:Community Colleges: CAD $10,000 to $14,000 per annumUniversities: CAD $10,000 to $22,000 per annum",
      ],
    },
    {
      heading: "Fast Facts about Studying in Canada",
      variant: "facts",
      bullets: [
        "Capital City: Ottawa",
        "Post-graduation Stay Duration: Up to 3 years",
        "Part-time Work Rights: Up to 20 hours/week",
        "Average Living Expenses: Approximately $10,200/year",
        "Currency: Canadian Dollar (CAD)",
        "Languages: English and French",
      ],
    },
    {
      heading: "Why Choose Canada for Your Studies?",
      bullets: [
        "Canada offers cost-effective educational options within its fully decentralized system.",
        "The multicultural environment enriches student life and opens doors for international networking.",
        "Educational qualifications from Canada are globally acknowledged and respected.",
        "Potential immigration opportunities post-graduation through programs like the Express Entry system.",
        "Canadian degrees provide a robust platform for both academic and employment prospects.",
      ],
    },
    {
      heading: "Social and Immigration Advantages in Canada",
      bullets: [
        "The opportunity to live and work anywhere in Canada post-graduation.",
        "Pathway to Canadian citizenship after three years of residence.",
        "Investment and business ownership opportunities.",
        "Comprehensive social benefits including healthcare and education.",
      ],
    },
    {
      heading: "Caspia Overseas Studies: Simplifying Your Canadian Education Journey",
      paragraphs: ["Our application process is streamlined for efficiency:"],
      bullets: [
        "Apply with relevant academic documents and English proficiency proof.Visa processing under the SPP route is expedited with high success rates.",
      ],
    },
    {
      heading: "Canadian Immigration Categories and Work Opportunities",
      bullets: [
        "Skilled Workers, Professionals, and Students",
        "Business and Entrepreneur Programs",
        "Family Sponsorship",
        "Provincial Nominee Programs",
        "Quebec-Specific Skilled Worker Options",
      ],
    },
    {
      heading: "Benefits of Migrating to Canada",
      paragraphs: [
        "Canada’s social security system, economic stability, and high quality of life make it an attractive destination for migrants. Canadian immigration policies are designed to attract skilled talent based on criteria such as education, work experience, and language proficiency.",
      ],
    },
    {
      heading: "Why This is the Right Time to Study in Canada?",
      paragraphs: [
        "Canada has emerged as one of the most sought-after destinations for international students due to its world-class education system, affordable tuition fees, and diverse cultural experiences. With increasing post-study work opportunities and pathways to permanent residency, studying in Canada is more beneficial than ever. The country is consistently ranked for its high quality of life and offers globally recognized degrees in various disciplines. As universities introduce flexible admission criteria and hybrid learning options, now is the perfect time to make your dream of studying in Canada a reality. Take advantage of scholarships and government incentives designed to support international students today!",
      ],
    },
    {
      heading: "Caspia Overseas Studies: Your Pathway to Canadian Work Experience",
      bullets: [
        "Part-time work during studies and full-time during breaks.",
        "Post-graduation work permits aligned with your study program’s duration.",
        "Spousal work rights.",
        "Co-op programs for work experience and academic credit.",
      ],
    },
    {
      paragraphs: [
        "Caspia Overseas Studies in Kochi, Kerala, is dedicated to turning your Canadian academic and career aspirations into reality. With our expert guidance, your journey to a Canadian education and beyond is in safe hands.",
      ],
    },
    {
      heading: "Want to Study in Canada? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive Canadian job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in Canada? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/flag_of_canada.jpg",
        alt: "Study in Canada",
        width: 1600,
        height: 1000,
      },
    },
  ],
  callback: { heading: "Want to Study in Canada? Get A Callback!" },
};

export default function StudyInCanadaPage() {
  return <CountryPage data={data} />;
}
