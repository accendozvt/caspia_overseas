import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Study in Malta - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Study in Malta with Caspia Overseas Studies: enjoy affordability, Schengen access, and vibrant culture while building your European academic future.",
  path: "/study-in-malta/",
  image: "/images/2025/01/Malta.png",
  imageAlt: "Study in Malta with Caspia Overseas Studies",
});

const data: CountryData = {
  heroTitle: "Study in Malta",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2025/01/Malta-1024x651.png",
    alt: "",
    width: 1024,
    height: 651,
  },
  sections: [
    {
      heading:
        "Embarking on an Educational Journey to Malta with Caspia Overseas Studies",
      paragraphs: [
        "Malta has emerged as a sought-after destination for international students due to its prime location in the heart of the Mediterranean, affordable education, and access to the Schengen visa. Boasting the fastest growth rate of international student enrollment in 2018, Malta has surpassed traditional destinations like the UK, USA, and Australia. Combining a rich cultural heritage with modern education, Malta offers a high-quality learning experience that blends tradition and innovation.",
      ],
    },
    {
      heading: "Why Choose to Study in Malta?",
      paragraphs: [
        "Malta is one of the most cost-effective study destinations in the world. With English as an official language, international students can enjoy a seamless academic journey in a bilingual environment. By studying in Malta, students gain access to a Schengen visa, enabling them to travel across 27 European nations, including Germany, France, and Italy. The island’s picturesque climate and natural beauty also make it ideal for outdoor activities like hiking, diving, and water sports. Alongside its world-class education, Malta provides a vibrant extracurricular lifestyle.Malta, a gem in the Mediterranean Sea, is increasingly becoming a preferred destination for international students due to its affordable education and strategic location. With a diverse blend of rich history, culture, and modern innovation, Malta offers students a unique learning experience. English being an official language makes it easier for international students to adapt and excel. The country’s education system adheres to European standards, ensuring globally recognized qualifications. Studying in Malta also provides the added benefit of access to a Schengen visa, enabling students to travel across 27 European countries. Whether it’s the breathtaking landscapes, the vibrant student life, or the career opportunities in industries like tourism, gaming, and finance, Malta offers a perfect balance of education and lifestyle for students looking to build a bright future.",
      ],
    },
    {
      heading: "Quick Facts About Studying in Malta",
      variant: "facts",
      bullets: [
        "Affordable living and tuition fees.",
        "Access to Schengen Nations for travel.",
        "Scholarships are available for international students.",
        "Part-time work opportunities of up to 20 hours per week.",
        "English as the official language.",
        "More than 200 academic programs are offered.",
        "One-year post-study work visa for graduates.",
      ],
    },
    {
      heading: "Popular Courses to Study in Malta",
      courses: [
        "Medicine",
        "Business and Management",
        "Computer Science and Information Technology",
        "Tourism and Hospitality",
        "Entrepreneurship",
        "Forestry & Fishery",
        "Education & Teaching",
        "Social & Behavioral Sciences",
        "Transport & Logistics",
      ],
      image: {
        src: "/images/2025/01/4025.jpg",
        alt: "",
        width: 1000,
        height: 667,
      },
    },
    {
      heading: "Careers & Industry Insights",
      paragraphs: [
        "Malta is one of the fastest-growing economies in the European Union, with an industrialized and service-based economic structure. Students benefit from numerous part-time job opportunities in sectors like tourism, hospitality, the iGaming industry, and social media management. The diverse economy ensures a wide range of professional prospects after graduation, making Malta an excellent destination for career growth.",
      ],
    },
    {
      heading: "Want to Study in Malta? Choose Caspia Overseas Studies, Kochi",
      paragraphs: [
        "Study in Malta with Caspia Overseas Studies: enjoy affordability, Schengen access, and vibrant culture while building your European academic future.",
      ],
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive Maltese job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in Malta? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
    },
    {
      heading: "Faq's",
      image: {
        src: "/images/2025/01/Asset-1@2x.png",
        alt: "Study in Malta",
        width: 1600,
        height: 1067,
      },
    },
  ],
  callback: { heading: "Want to Study in Malta? Get A Callback!" },
  postSections: [{ heading: "Post-Study Work Opportunities" }],
};

export default function StudyInMaltaPage() {
  return <CountryPage data={data} />;
}
