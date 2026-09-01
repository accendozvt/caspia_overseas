import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

const seo = {
  title: "Study in The USA - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Caspia Overseas Studies, Kochi's elite educational consultancy, provides unparalleled guidance for Indian students aspiring to study in the USA.",
  path: "/study-in-the-usa/",
  image: "/images/2023/11/USA.png",
  imageAlt: "Study in the USA with Caspia Overseas Studies",
};

export const metadata: Metadata = pageMetadata(seo);

const data: CountryData = {
  seo: { ...seo, countryName: "the USA" },
  heroTitle: "Study in United States of America",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/USA.png",
    alt: "",
    width: 1007,
    height: 640,
  },
  sections: [
    {
      heading: "Pursue academic brilliance with an education in the United States",
      paragraphs: [
        "United States, a global pioneer in higher education and home to a remarkable array of top-ranked universities. Caspia Overseas Studies, Kochi’s elite educational consultancy, provides unparalleled guidance for Indian students aspiring to study in the USA.",
      ],
    },
    {
      heading: "Why Study in the USA?",
      paragraphs: [
        "The United States of America stands at the forefront of academic excellence, housing nearly 50 of the top 200 universities globally. With its institutions featuring prominently in all major international rankings, the USA continues to be a magnet for students seeking superior education.",
        "American universities are revered for their substantial contributions to research and innovation, owning numerous patents and regularly unveiling transformative advancements. These campuses become arenas where ambitious minds can engage with Nobel laureates and thought leaders across various disciplines.",
        "The diversity in educational offerings is unparalleled, presenting students with the flexibility to explore a multitude of fields. This is especially pronounced in the breadth and depth of Research-Centric Science and Technology Courses that attract a vast number of international candidates, looking to carve their niche in groundbreaking work.",
      ],
    },
    {
      heading: "Advantages of U.S. Education for Indian Students:",
      bullets: [
        "World-Leading Institutions: Immerse in an educational system that includes institutions like MIT, Stanford, and Harvard, which are incubators of excellence and innovation.",
        "Cutting-edge Research: Access to state-of-the-art facilities and opportunities to contribute to research that’s pushing the boundaries of science and technology.",
        "Cultural Diversity: Engage with a melting pot of cultures that enriches the educational experience and prepares students for global citizenship.",
        "Career Opportunities: Graduates from U.S. universities are highly sought after, with career opportunities across various industries and potential for high earning growth.",
        "Support for International Students: Extensive support systems are in place for international students, from orientation to job placement services.",
      ],
    },
    {
      heading: "Application Process:",
      paragraphs: [
        "Navigating the U.S. university application process can be complex, but Caspia Overseas Studies simplifies it for Indian students. We guide you through every step, from selecting the right universities and courses to preparing your applications and essays. We’ll also assist with standardized test preparations, such as the SAT, ACT, GRE, GMAT, and TOEFL, ensuring you meet the requirements of your desired institutions.",
      ],
    },
    {
      heading: "Visa Guidance:",
      paragraphs: [
        "Securing a U.S. student visa can be daunting, but with our expert advice, the process becomes transparent and manageable. We’ll help you gather the necessary documentation, prepare for the visa interview, and understand the regulations surrounding study and post-study work opportunities in the U.S.",
      ],
    },
    {
      heading: "Scholarships and Financial Aid:",
      paragraphs: [
        "Understanding the financial aspect of studying abroad is crucial. We provide insights into the various scholarships and financial aid options available to Indian students, helping you fund your education and minimize the financial burden.",
      ],
    },
    {
      heading: "Post-Graduation Opportunities:",
      paragraphs: [
        "With the U.S. being a hub for innovation and industry, post-graduation job prospects for international students are promising. We offer guidance on Optional Practical Training (OPT) and navigating the H1-B visa process for those looking to start their careers in the USA.",
        "Caspia Overseas Studies is committed to turning your dream of studying in the USA into a reality. Contact us in Kochi to embark on your journey to an enriching education and a prosperous career path.",
      ],
    },
    {
      heading: "Want to Study in The USA? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive US job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in The USA? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/american-flag-united-states-america-768x404.jpg",
        alt: "Study in the USA",
        width: 768,
        height: 404,
      },
    },
  ],
  callback: { heading: "Want to Study in The USA? Get A Callback!" },
};

export default function StudyInTheUsaPage() {
  return <CountryPage data={data} />;
}
