import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

const seo = {
  title: "Study in Australia - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Study in Australia with Caspia Overseas Studies: expert guidance on world-class universities, post-study work visas, and English-speaking campus life.",
  path: "/study-in-australia/",
  image: "/images/2023/11/Australia.png",
  imageAlt: "Study in Australia with Caspia Overseas Studies",
};

export const metadata: Metadata = pageMetadata(seo);

const data: CountryData = {
  seo: { ...seo, countryName: "Australia" },
  heroTitle: "Study in Australia",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/Australia-1024x651.png",
    alt: "Map of Australia beside a smiling student holding books and giving a thumbs up",
    width: 1024,
    height: 651,
  },
  sections: [
    {
      heading:
        "Embarking on an Educational Journey to Australia with Caspia Overseas Studies",
      paragraphs: [
        "Explore the vast opportunities awaiting in Australia, the majestic Commonwealth comprising the Australian mainland, Tasmania, and numerous islands. Known for its expansive landscapes and vibrant cities like Sydney, Melbourne, Brisbane, Perth, and Adelaide, Australia is a beacon for students seeking a world-class education in an English-speaking nation.",
      ],
    },
    {
      heading: "Why Study in Australia?",
      bullets: [
        "Primary Intake Seasons: Secure your seat in February/March or explore limited programs in July/August and November.",
        "Affordable Living Costs: Thrive as a student with manageable expenses, ensuring a balanced life.",
        "Competitive Tuition Fees: Invest in your future with undergraduate and postgraduate programs priced for accessibility.",
        "High-Quality Education: Choose from a range of coveted courses in technology, management, and accountancy, recognized for government employment and higher education in India.",
      ],
    },
    {
      heading: "Application and Admission Guidance",
      paragraphs: [
        "Embark on your educational quest with a straightforward, two-stage admission process guided by Caspia Overseas Studies. From submitting applications to receiving your electronic confirmation of enrollment (ECOE), our team in Kochi is ready to assist you every step of the way.",
      ],
    },
    {
      heading: "Streamlined Visa Assistance",
      paragraphs: [
        "Navigate the visa process effortlessly with our expert advice, from documentation to maintaining Overseas Student Health Cover (OSHC). Caspia Overseas Studies stands by you, ensuring you meet all requirements for a successful study experience in Australia.",
      ],
    },
    {
      heading: "Post-Study Work Opportunities",
      paragraphs: [
        "Maximize your educational investment with opportunities to work part-time during your studies and full-time post-graduation. With Caspia Overseas Studies, unveil the path to a Skilled Migrant Category visa, opening doors to potential permanent residency in Australia.",
      ],
    },
    {
      heading: "Tailored Career Services",
      paragraphs: [
        "Leverage the Careers Offices at Australian Universities and TAFE institutions, enhancing your employment prospects. For students engaged in a two-year Master’s program, full-time work for spouses is an additional benefit.",
      ],
    },
    {
      heading: "Skilled Migration Eligibility",
      paragraphs: [
        "Post-graduation, step into the Australian workforce with a two-year work permit. Caspia Overseas Studies provides comprehensive advice on qualifying for Skilled Migrant Category points, meeting the necessary criteria for those under 45 with a commendable level of English and relevant skilled work experience.",
      ],
    },
    {
      heading: "Want to Study in Australia? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive Australian job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in Australia? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in Australia, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/2922502_27116-scaled-e1700221414254.jpg",
        alt: "Study in Australia",
        width: 500,
        height: 264,
      },
    },
  ],
  callback: { heading: "Want to Study in Australia? Get A Callback!" },
};

export default function StudyInAustraliaPage() {
  return <CountryPage data={data} />;
}
