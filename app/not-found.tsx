import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryCTA, WhatsAppCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-7xl font-extrabold text-primary/20">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-secondary">
          Page Not Found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryCTA label="Go to Homepage" href="/" />
          <WhatsAppCTA label="Talk to Us" />
        </div>
        <p className="mt-8 text-sm text-muted">
          Or explore our{" "}
          <Link href="/german-language-classes/" className="text-blue underline">
            German language classes
          </Link>{" "}
          and{" "}
          <Link href="/blogs/" className="text-blue underline">
            articles
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
