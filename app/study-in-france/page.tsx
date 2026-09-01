import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

const seo = {
  title: "Study in France - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Study in France, a nation celebrated for its cultural heritage and academic prowess, with the expert assistance of Caspia Overseas Studies, Kerala.",
  path: "/study-in-france/",
  image: "/images/2023/11/France-2.png",
  imageAlt: "Study in France with Caspia Overseas Studies",
};

export const metadata: Metadata = pageMetadata(seo);

const data: CountryData = {
  seo: { ...seo, countryName: "France" },
  heroTitle: "Study in France",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/France-2.png",
    alt: "",
    width: 1007,
    height: 640,
  },
  sections: [
    {
      heading: "Study in France - Discover the Allure",
      paragraphs: [
        "France, a nation celebrated for its cultural heritage and academic prowess, with the expert assistance of Caspia Overseas Studies, a leading study abroad consultancy based in Kochi, Kerala. France offers a blend of historical marvels and cutting-edge fashion and art, set against the backdrop of its bustling capital, Paris, and the serene landscapes of its countryside.",
      ],
    },
    {
      heading: "Academic Opportunities in France:",
      bullets: [
        "France boasts top-tier educational programs in fields like aviation, tourism, engineering, and business.",
        "Universities in France are acclaimed for their high academic standards and government-subsidized tuition, benefiting domestic and international students alike.",
      ],
    },
    {
      heading: "Living Expenses:",
      paragraphs: [
        "France offers an affordable cost of living for students, significantly reduced due to government subsidies.",
      ],
    },
    {
      heading: "Quick Facts About France:",
      variant: "facts",
      bullets: [
        "Population: Approximately 67 million (2019)",
        "Capital: Paris",
        "Nationality: Predominantly French citizens, with a vibrant community of foreign nationals",
        "Currencies: Euro (EUR) and CFP Franc (XPF)",
      ],
    },
    {
      heading: "Why Choose France for Your Higher Education?",
      bullets: [
        "The French education system is renowned for its excellence, efficiency, and the prestige of its degree programs.",
        "Universities set in picturesque locations with state-of-the-art facilities.",
        "The chance to immerse in French culture while enjoying a diverse, cosmopolitan academic environment.",
        "Growing popularity among Indian students, with thousands choosing France for their studies each year.",
      ],
    },
    {
      heading: "The Education Landscape in France:",
      bullets: [
        "Over 82 state-run universities, five Catholic universities, and numerous private institutes.",
        "The esteemed Grande Ecoles, comparable to Ivy League institutions.",
        "Degree paths include the License (Bachelor’s), Master’s, and Ph.D.",
      ],
    },
    {
      heading: "Eligibility and Academic Calendar:",
      bullets: [
        "A minimum of 12 years of schooling is required, comparable to the French Ecole system.",
        "The academic year typically runs from September to June.",
      ],
    },
    {
      heading: "Advantages of Studying in France through Caspia Overseas Studies:",
      bullets: [
        "Experience France’s cosmopolitan society with a plethora of cultures and perspectives.",
        "Academic exposure in a nation known for its intellectual tradition and innovation.",
      ],
    },
    {
      heading: "Career Prospects Post-Graduation:",
      bullets: [
        "France’s dynamic economy offers vast opportunities for graduates across various sectors.",
      ],
      paragraphs: [],
    },
    {
      paragraphs: [
        "Embark on an enriching academic journey in the heart of Europe with Caspia Overseas Studies. Our seasoned counselors in Kochi will navigate you through the process of realizing your educational ambitions in France, ensuring a smooth and informed transition to student life in one of the world’s most esteemed academic destinations. Contact Caspia Overseas Studies to begin crafting your future in a country where tradition and modernity converge to create unparalleled educational experiences.",
      ],
    },
    {
      heading: "Want to Study in France? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive French job market post-study.",
      ],
      paragraphs: [],
    },
    {
      paragraphs: [
        "Want to study in France? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/nivelles.jpg",
        alt: "Study in France",
        width: 1600,
        height: 844,
      },
    },
  ],
  callback: { heading: "Want to Study in France? Get A Callback!" },
};

export default function StudyInFrancePage() {
  return <CountryPage data={data} />;
}
