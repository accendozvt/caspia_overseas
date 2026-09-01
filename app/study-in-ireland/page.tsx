import type { Metadata } from "next";
import CountryPage, { type CountryData } from "@/components/country/CountryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Study in Ireland - Caspia Overseas Studies - No.1 in Kerala",
  description:
    "Study in Ireland with Caspia Overseas Studies, Kochi's premier consultancy, offering expert guidance for your academic journey in this history-rich nation.",
  path: "/study-in-ireland/",
  image: "/images/2023/11/Ireland.png",
  imageAlt: "Study in Ireland with Caspia Overseas Studies",
});

const data: CountryData = {
  heroTitle: "Study in Ireland",
  registerHref: "https://bit.ly/3NpzrDU",
  enquireHref:
    "https://api.whatsapp.com/send?phone=919446511115&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20higher%20education%20opportunities%20in%20Germany",
  heroImage: {
    src: "/images/2023/11/Ireland.png",
    alt: "",
    width: 1007,
    height: 640,
  },
  sections: [
    {
      heading: "Study in Ireland & enhance on your career journey",
      paragraphs: [
        "Caspia Overseas Studies, the premier educational consultancy in Kochi, Kerala, offers expert guidance for students aspiring to study in Ireland, an island steeped in history and rich in culture, divided into the Republic of Ireland and Northern Ireland, part of the UK.",
      ],
    },
    {
      heading: "Key Intake Sessions for Irish Institutions:",
      bullets: ["Primary Intake: September", "Alternative Intakes: January, May"],
    },
    {
      heading: "Estimated Living Expenses in Ireland:",
      bullets: [
        "Annual range: €7,000 to €11,000, varying by city and lifestyle choices.",
      ],
    },
    {
      heading: "Tuition Costs for Higher Education:",
      bullets: [
        "Master’s Degree Programs: Approximately €8,500 to €13,000 per year.",
        "Diploma/Certificate Programs: Roughly €7,000 to €10,000 per year.",
      ],
    },
    {
      heading: "Quick Facts About Ireland:",
      variant: "facts",
      bullets: [
        "Renowned for its hospitable and secure environment.",
        "Ranked 11th in the Global Innovation Index (2018).",
        "Home to over 1,000 multinational corporations, positioning Ireland as a European nexus for global business.",
        "Ireland has been named among the World’s Friendliest Countries by Lonely Planet.",
        "Official Languages: Irish and English",
        "Currency: Euro (EUR)",
        "Capital City: Dublin",
        "Population: Approximately 4.9 million",
      ],
    },
    {
      heading: "Advantages of Pursuing Education in Ireland:",
      bullets: [
        "Ireland’s educational system is globally recognized, attracting a diverse international student body.",
        "In 2016, the Irish Ministry of Education introduced incentives to make Ireland a top choice for international higher education.",
        "Irish universities boast a blend of historic grandeur with contemporary educational standards.",
      ],
    },
    {
      heading: "Unique Benefits of Studying in Ireland",
      bullets: [
        "Work and Study: Students may work up to 20 hours per week during term time and up to 40 hours per week during vacations.",
        "Historical and Scenic Campuses: Irish universities offer a serene, movie-like backdrop for education.",
        "Exceptional Research Opportunities: Irish institutions are known for cutting-edge research across various disciplines.",
        "Global Alumni Network: Study alongside a diverse cohort of international students and build lifelong connections.",
      ],
    },
    {
      heading: "Eligibility Requirements for Irish Institutions:",
      bullets: [
        "Completion of secondary education or equivalent for undergraduate programs.",
        "Proficiency in English, evidenced by IELTS or TOEFL scores, with specific requirements varying by institution.",
        "Proof of financial support for the initial year of study.",
      ],
    },
    {
      heading: "Streamlined Application Process through Caspia Overseas Studies:",
      bullets: [
        "Fast and efficient admission procedures.",
        "Comprehensive support for document submission, including academic records (contact our office for a full checklist).",
        "Quick processing by institutions, generally within 1-2 weeks.",
        "Guidance through the pre-visa approval and payment process with the Irish Embassy.",
      ],
    },
    {
      paragraphs: [
        "Embarking on your Irish educational venture is made seamless with Caspia Overseas Studies. From choosing the right institution to navigating the visa process, our expert consultants in Kochi ensure that your transition to studying in Ireland is smooth and successful. Contact us to begin your journey to the Emerald Isle, where academic excellence meets cultural richness.",
      ],
    },
    {
      heading: "Want to Study in Ireland? Choose Caspia Overseas Studies, Kochi",
      bullets: [
        "Trusted Education Consultant: Leading the way in overseas education consulting in Kerala.",
        "Personalized Support: From selecting universities to post-graduation plans, receive tailored assistance.",
        "Career-Focused Approach: Gain insights into thriving in the competitive Irish job market post-study.",
      ],
    },
    {
      paragraphs: [
        "Want to Study in Ireland? Contact Caspia Overseas Studies in Kochi, Kerala, today and take the first step towards an enriching educational experience in France, where potential meets opportunity.",
      ],
      image: {
        src: "/images/2023/11/25150989_flag_20-768x385.jpg",
        alt: "study in ireland",
        width: 768,
        height: 385,
      },
    },
  ],
  callback: { heading: "Want to Study in Ireland? Get A Callback!" },
};

export default function StudyInIrelandPage() {
  return <CountryPage data={data} />;
}
