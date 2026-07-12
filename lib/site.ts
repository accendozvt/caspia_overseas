export const site = {
  name: "Caspia Overseas Studies",
  tagline: "The Best German Language Classes in Kerala",
  url: "https://caspiaedu.com",
  phone: "+91 9446 511 115",
  phoneHref: "tel:+919446511115",
  altPhones: "79944 76446 | 80788 86668",
  email: "info@caspiaedu.com",
  whatsapp:
    "https://wa.me/919446511115?text=i%20want%20to%20know%20more%20about%20German%20language%20classes%20and%20processing",
  whatsappPlain: "https://wa.me/919446511115",
  address: "Vyttila, Kochi",
  branches: ["Perinthalmanna", "Kodungallur", "Cherthala", "Perumbavoor"],
  logo: "/images/2020/05/Caspia-Logo-V2-Transp.png",
  logoSquare: "/images/2023/01/Caspia-Squ.png",
  social: {
    facebook: "https://www.facebook.com/caspiaoverseas/",
    twitter: "https://twitter.com/CaspiaOverseas",
    instagram: "https://www.instagram.com/caspiaoverseas/",
    youtube: "https://www.youtube.com/@caspiaoverseas",
    linkedin: "https://www.linkedin.com/company/79485732/",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/the-best-german-language-training-in-kerala/" },
  {
    label: "Study Abroad",
    href: "#",
    children: [
      { label: "Germany", href: "/study-in-germany/" },
      { label: "UK", href: "/study-in-the-uk/" },
      { label: "USA", href: "/study-in-the-usa/" },
      { label: "Canada", href: "/study-in-canada/" },
      { label: "Ireland", href: "/study-in-ireland/" },
      { label: "France", href: "/study-in-france/" },
      { label: "Australia", href: "/study-in-australia/" },
      { label: "Malta", href: "/study-in-malta/" },
      { label: "Finland", href: "/study-in-finland/" },
      { label: "New Zealand", href: "/study-in-new-zealand/" },
    ],
  },
  { label: "German Language", href: "/german-language-classes/" },
  {
    label: "Ausbildung",
    href: "#",
    children: [
      { label: "Nursing", href: "/nursing-ausbildung-in-germany/" },
      { label: "Logistics", href: "/logistics-ausbildung-program-caspia-overseas-kochi/" },
      {
        label: "Hospitality & Tourism",
        href: "/hospitality-and-tourism-ausbildung-caspia-overseas-kochi/",
      },
      {
        label: "Information Technology",
        href: "/information-technology-ausbildung-caspia-overseas-kochi/",
      },
      {
        label: "Automotive & Engineering",
        href: "/automotive-and-engineering-ausbildung-caspia-overseas-kochi/",
      },
      {
        label: "Anesthesia Technical Assistant",
        href: "/anesthesia-technical-assistant-ausbildung-caspia-overseas-kochi/",
      },
    ],
  },
  { label: "Blog", href: "/blogs/" },
  { label: "Contact", href: "/contact-caspia-overseas-studies/" },
];
