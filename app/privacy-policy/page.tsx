import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy & Data Protection | Caspia Overseas" },
  description:
    "Read the Caspia Overseas Studies privacy policy: what personal information we collect on caspiaedu.com, how it's used, disclosed, and kept secure.",
  alternates: { canonical: "/privacy-policy/" },
};

const sections: { heading: string; text: string }[] = [
  {
    heading: "Information We Collect",
    text: "We collect information that you provide to us when you use the Site or communicate with us, such as your name, email address, phone number, and any other information you provide. We also collect information automatically through the use of cookies and other tracking technologies, such as your IP address, browser type, and operating system.",
  },
  {
    heading: "Use of Information",
    text: "We use the information we collect to operate and improve the Site, to respond to your inquiries, to provide you with information about our services, and to communicate with you about your account or any services you have requested.",
  },
  {
    heading: "Disclosure of Information",
    text: "We may disclose your personal information to third-party service providers who help us operate the Site or provide services to you, such as email providers or web hosting companies. We may also disclose your personal information if required to do so by law, or if we believe in good faith that such disclosure is necessary to comply with legal processes or to protect our rights or property.",
  },
  {
    heading: "Third-Party Links",
    text: "The Site may contain links to third-party websites or services that are not owned or controlled by Caspia. We are not responsible for the privacy practices or content of those websites or services, and we encourage you to review the privacy policies of those third parties.",
  },
  {
    heading: "Security",
    text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "Changes to this Privacy Policy",
    text: "We may update this Privacy Policy from time to time, and we will post the updated version on the Site. If we make any material changes, we will notify you by email or by posting a notice on the Site.",
  },
  {
    heading: "Contact Us",
    text: "If you have any questions or concerns about this Privacy Policy, please contact us at info@caspiaedu.com or +91 9446 511 115.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle={site.name} cta={false} />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose-caspia">
            <p>
              {"This Privacy Policy outlines how Caspia Overseas Studies (“Caspia,” “we,” “us,” or “our”) collects, uses, and discloses your personal information when you use our website, www.caspiaedu.com (the “Site”), or interact with us in any other way, such as by email or phone."}
            </p>
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
