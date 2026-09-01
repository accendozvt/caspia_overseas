import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

const seo = {
  title: "Study in Finland - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Embark on a transformative educational journey and study in Finland and experience a country that excels in innovation, academic excellence, and quality of life.",
  path: "/study-in-finland/",
  image: "/images/2025/01/Finland.png",
  imageAlt: "Study in Finland with Caspia Overseas Studies",
};

export const metadata: Metadata = pageMetadata(seo);

const data: CountryData = {
  seo: { ...seo, countryName: "Finland" },
  heroTitle: "Study in Finland",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2025/01/Finland-1024x651.png",
    alt: "Map of Finland beside a smiling student pointing towards it",
    width: 1024,
    height: 651,
  },
  sections: [
    {
      heading: "Study in Finland: A Gateway to Exceptional Education and Innovation",
      paragraphs: [
        "Renowned for its breathtaking natural landscapes and cutting-edge innovation, Finland is one of Europe’s most modern and forward-thinking nations. With an education system that consistently ranks among the best globally, Finland has become a prime destination for international students drawn by the academic excellence of Finnish universities and the country’s high standard of living.",
      ],
    },
    {
      heading: "Why Study in Finland?",
      paragraphs: [
        "The Finnish education system stands out for its multi-disciplinary approach that blends self-directed learning, critical thinking, and problem-solving. Students can choose from universities focused on academic research or Universities of Applied Sciences (UAS) that emphasize practical, career-oriented learning. Finnish universities provide state-of-the-art facilities, including high-tech labs, well-stocked libraries, and advanced infrastructure, ensuring students receive a world-class education. Scholarships are widely available, with universities and UAS institutions offering various funding options for international students.",
      ],
    },
    {
      heading: "Quick Facts About Studying in Finland",
      variant: "facts",
      bullets: [
        "Global Recognition: 7 universities ranked among the top 500 globally (QS World Rankings 2024).",
        "Post-Study Opportunities: Up to 1 year of post-study work visa.",
        "Diverse Choices: 13 universities and 22 UAS institutions with 500+ English-taught degree programs.",
        "Affordable Options: Competitive tuition fees and numerous scholarship opportunities.",
        "International Appeal: Finland hosts over 20,000 international students and offers pathways to permanent residency.",
        "Top Student City: Helsinki is one of Europe’s most popular student hubs.",
      ],
    },
    {
      heading: "Popular Courses in Finland",
      courses: [
        "Agriculture & Forestry",
        "Business & Finance",
        "Engineering & Construction",
        "Healthcare",
        "Information Technology",
      ],
      image: {
        src: "/images/2025/01/118.jpg",
        alt: "Aerial view of a castle with a green-domed tower on an island beside a harbour town",
        width: 1000,
        height: 666,
      },
    },
    {
      heading: "Careers & Industry Insights",
      paragraphs: [
        "Finland boasts a highly industrialized economy, with its largest sectors being services, manufacturing, and refining. Key industries include electronics, machinery, automobiles, forestry, and energy. Career prospects are especially promising in fields like software engineering, nursing, early childhood education, medicine, accounting, and law. As a member of global organizations such as the United Nations, Council of Europe, and World Trade Organization, Finland offers students access to a robust and globally connected job market. Finland’s stellar reputation for quality of life, education, and innovation ensures that graduates are well-prepared for success.",
      ],
    },
    {
      heading: "Want to Study in Finland? Choose Caspia Overseas Studies, Kochi",
      paragraphs: [
        "Embark on a transformative educational journey and study in Finland and experience a country that excels in innovation, academic excellence, and quality of life.",
      ],
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive Finland job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in The USA? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
    },
    {
      heading: "Study in Finland FAQs",
      image: {
        src: "/images/2025/01/2922494_27108-scaled.jpg",
        alt: "Study in Finland",
        width: 1600,
        height: 844,
      },
    },
  ],
  callback: { heading: "Want to Study in Finland? Get A Callback!" },
};

export default function StudyInFinlandPage() {
  return <CountryPage data={data} />;
}
