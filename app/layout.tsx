import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { siteGraph } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// DM Sans: the closest open Google Fonts match to Google Sans (geometric, friendly)
const googleSans = DM_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Best German Language Classes in Kerala - Caspia Overseas Studies",
    template: "%s - Caspia Overseas Studies",
  },
  description:
    "Discover the best German language classes in Kerala, offering immersive learning experiences. Master German with Kerala's premier language institution.",
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "./",
  },
};

export const viewport: Viewport = {
  themeColor: "#584f82",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${googleSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Sitewide Organization + WebSite. Every page's own graph references these by @id. */}
        <JsonLd data={siteGraph()} />
        {/* Lets keyboard users jump past the nav. Styles live in globals.css (.skip-link). */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
