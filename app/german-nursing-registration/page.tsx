import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import FormEmbed from "@/components/FormEmbed";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/jsonld";

const seo = {
  title: "German Nursing Registration | Caspia Overseas Studies",
  description:
    "Register for German nursing Ausbildung guidance with Caspia Overseas Studies, Kochi's leading institute for German language courses and career placement.",
  path: "/german-nursing-registration/",
};

export const metadata: Metadata = pageMetadata(seo);

export default function GermanNursingRegistrationPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          ...seo,
          breadcrumbs: [
            { name: "German Nursing Registration", path: "/german-nursing-registration/" },
          ],
        })}
      />

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
