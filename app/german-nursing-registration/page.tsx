import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import FormEmbed from "@/components/FormEmbed";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "German Nursing Registration | Caspia Overseas Studies",
  description:
    "Register for German nursing Ausbildung guidance with Caspia Overseas Studies, Kochi's leading institute for German language courses and career placement.",
  path: "/german-nursing-registration/",
});

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
