import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Study in New Zealand | Caspia Overseas Studies",
  description:
    "Study in New Zealand with Caspia Overseas Studies: world-class education, globally recognized qualifications, and an exceptional quality of life await.",
  path: "/study-in-new-zealand/",
  image: "/images/2025/01/New-Zealand.png",
  imageAlt: "Study in New Zealand with Caspia Overseas Studies",
});

const data: CountryData = {
  heroTitle: "Study in New Zealand",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2025/01/New-Zealand-1024x651.png",
    alt: "",
    width: 1024,
    height: 651,
  },
  sections: [
    {
      heading: "Why This is the Perfect Time to Study in New Zealand",
      paragraphs: [
        "New Zealand is renowned for its world-class education system, globally recognized qualifications, and exceptional quality of life. This island nation is not only home to breathtaking natural landscapes and vibrant cities but also offers a welcoming and safe environment for international students. With practical, hands-on teaching approaches, New Zealand equips students with real-world skills that enhance their global employability. The country’s universities rank among the top 3% globally, and all eight state-funded universities are consistently listed in the world’s top 500.",
      ],
    },
    {
      heading: "Why Choose to Study in New Zealand?",
      bullets: [
        "Globally Recognized Education: Degrees based on the prestigious British Education System ensure wide international acceptance.",
        "Practical Learning Approach: A hands-on curriculum prepares students with the skills needed for today’s job market.",
        "Post-Study Work Benefits: Up to three years of post-study work visa, with promising pathways to permanent residency.",
        "Affordable Tuition & Scholarships: Lower tuition fees, complemented by a variety of scholarships, make education accessible.",
        "Diverse Institutions: Choose from 8 universities, 16 Institutes of Technology and Polytechnics (ITPs), and 550 Private Training Establishments (PTEs).",
      ],
    },
    {
      heading: "Careers & Industry Insights",
      paragraphs: [
        "New Zealand is one of the Asia-Pacific region’s most prosperous nations, driven by thriving industries such as Engineering, IT, Business, Hospitality, and Health Services. With one of the most globalized economies and a growing IT sector, the country offers excellent career opportunities for skilled graduates. Whether you’re exploring agriculture, finance, or cutting-edge technology, New Zealand promises a high standard of living and a peaceful lifestyle.",
      ],
    },
    {
      heading: "Popular Courses to Study inNew Zealand",
      courses: [
        "Agriculture & Forestry",
        "Business & Finance",
        "Engineering & Construction",
        "Healthcare",
        "Information Technology",
      ],
      image: {
        src: "/images/2025/01/5533.jpg",
        alt: "",
        width: 1000,
        height: 563,
      },
    },
    {
      heading: "Key Highlights",
      bullets: [
        "Ranked as the top English-speaking country for preparing students for the future (The Economist, 2019).",
        "Member of the Lisbon Recognition Convention, meaning qualifications are accepted in over 50 countries.",
        "Over 20,000 international students from 160+ countries choose New Zealand annually.",
      ],
    },
    {
      paragraphs: [
        "Explore your opportunities and Study New Zealand! With affordable tuition, global recognition, and endless career possibilities, this is the right time to take your education abroad.",
      ],
    },
    { heading: "Faq's" },
    {
      heading: "Want to Study in New Zealand? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive New Zealand job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in New Zealand? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2025/01/2922505_27119-scaled.jpg",
        alt: "Study in New Zealand",
        width: 1600,
        height: 844,
      },
    },
  ],
  callback: { heading: "Want to Study in New Zealand? Get A Callback!" },
};

export default function StudyInNewZealandPage() {
  return <CountryPage data={data} />;
}
