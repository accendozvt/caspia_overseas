import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import FormEmbed from "@/components/FormEmbed";

export const metadata: Metadata = {
  title: { absolute: "German Nursing Registration - Caspia Overseas Studies" },
  description:
    "Interested in learning German? Look no further than Caspia Overseas Studies, the best institute for German language courses in Kochi. Register Now!!",
  alternates: { canonical: "/german-nursing-registration/" },
  openGraph: {
    title: "German Nursing Registration - Caspia Overseas Studies",
    description:
      "Caspia Overseas Studies, the best institute for German language courses in Kochi, Kerala. We are the ideal choice for anyone seeking to learn German and achieve their language learning goals.",
    images: [
      "/images/2023/03/group-people-supporters-fans-germany-national-teams-with-painted-flag-face-happy-victory-emotions-fans-emotions-e1679831685718.jpg",
    ],
  },
};

export default function GermanNursingRegistrationPage() {
  return (
    <>
      <PageHero title="German Nursing Registration" cta={false} />

      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm ring-1 ring-black/5">
            <FormEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
