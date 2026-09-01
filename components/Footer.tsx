import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const quickLinks = [
  { label: "About Us", href: "/the-best-german-language-training-in-kerala/" },
  { label: "German Language Classes", href: "/german-language-classes/" },
  { label: "Study in Germany", href: "/study-in-germany/" },
  { label: "Nursing Ausbildung", href: "/nursing-ausbildung-in-germany/" },
  { label: "Courses", href: "/courses/" },
  { label: "Blog", href: "/blogs/" },
  { label: "Contact", href: "/contact-caspia-overseas-studies/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

const destinations = [
  { label: "Germany", href: "/study-in-germany/" },
  { label: "United Kingdom", href: "/study-in-the-uk/" },
  { label: "USA", href: "/study-in-the-usa/" },
  { label: "Canada", href: "/study-in-canada/" },
  { label: "Ireland", href: "/study-in-ireland/" },
  { label: "France", href: "/study-in-france/" },
  { label: "Australia", href: "/study-in-australia/" },
  { label: "Malta", href: "/study-in-malta/" },
  { label: "Finland", href: "/study-in-finland/" },
  { label: "New Zealand", href: "/study-in-new-zealand/" },
];

const socials = [
  { label: "Facebook", href: site.social.facebook, d: "M13.5 9H16l.5-3h-3V4.5c0-1 .3-1.5 1.6-1.5H16.5V0h-2.6C10.9 0 10 1.6 10 4.3V6H7.5v3H10v9h3.5V9z" },
  { label: "Twitter", href: site.social.twitter, d: "M18 1.7c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9C14.5.4 13.5 0 12.5 0 10.5 0 8.9 1.6 8.9 3.6c0 .3 0 .6.1.8C6 4.3 3.3 2.9 1.5.7c-.3.5-.5 1.2-.5 1.8 0 1.3.6 2.4 1.6 3-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.2 3.2 2.9 3.6-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.4 1.8 2.5 3.4 2.5-1.2 1-2.8 1.6-4.5 1.6H.3c1.6 1 3.5 1.6 5.5 1.6 6.7 0 10.3-5.5 10.3-10.3v-.5c.7-.5 1.3-1.2 1.9-2z" },
  { label: "Instagram", href: site.social.instagram, d: "M9 1.6c2.4 0 2.7 0 3.7.1.9 0 1.4.2 1.7.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7 0 1 .1 1.3.1 3.7s0 2.7-.1 3.7c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.1-.8.3-1.7.3-1 0-1.3.1-3.7.1s-2.7 0-3.7-.1c-.9 0-1.4-.2-1.7-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.3-.3-.8-.3-1.7 0-1-.1-1.3-.1-3.7s0-2.7.1-3.7c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1-.1 1.3-.1 3.7-.1zM9 0C6.6 0 6.3 0 5.3.1c-1 0-1.6.2-2.2.4-.6.2-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.6-.2.6-.4 1.2-.4 2.2C0 6.3 0 6.6 0 9s0 2.7.1 3.7c0 1 .2 1.6.4 2.2.2.6.6 1.1 1.1 1.6.5.5 1 .8 1.6 1.1.6.2 1.2.4 2.2.4 1 0 1.3.1 3.7.1s2.7 0 3.7-.1c1 0 1.6-.2 2.2-.4.6-.2 1.1-.6 1.6-1.1.5-.5.8-1 1.1-1.6.2-.6.4-1.2.4-2.2 0-1 .1-1.3.1-3.7s0-2.7-.1-3.7c0-1-.2-1.6-.4-2.2-.2-.6-.6-1.1-1.1-1.6-.5-.5-1-.8-1.6-1.1-.6-.2-1.2-.4-2.2-.4C11.7 0 11.4 0 9 0zm0 4.4C6.5 4.4 4.4 6.5 4.4 9S6.5 13.6 9 13.6 13.6 11.5 13.6 9 11.5 4.4 9 4.4zm0 7.6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm4.8-8.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z" },
  { label: "YouTube", href: site.social.youtube, d: "M17.6 4.2c-.2-.8-.8-1.4-1.6-1.6C14.6 2.2 9 2.2 9 2.2s-5.6 0-7 .4c-.8.2-1.4.8-1.6 1.6C0 5.6 0 8.5 0 8.5s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 7 .4 7 .4s5.6 0 7-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3zM7.2 11.2V5.8l4.7 2.7-4.7 2.7z" },
  { label: "LinkedIn", href: site.social.linkedin, d: "M4 18H.3V6H4v12zM2.1 4.4C.9 4.4 0 3.5 0 2.3 0 1 .9.1 2.1.1s2.1.9 2.1 2.2c0 1.2-.9 2.1-2.1 2.1zM18 18h-3.7v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V18H6.4V6H10v1.6C10.5 6.7 11.7 5.7 13.5 5.7c3.7 0 4.5 2.5 4.5 5.7V18z" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Image
            src="/images/2021/09/Caspia-Squ-White-Transp-2.png"
            alt="Caspia Overseas Studies"
            width={90}
            height={90}
            sizes="80px"
            className="h-20 w-auto mb-4"
          />
          <p className="text-white/70 text-sm leading-relaxed">
            Professional language institute &amp; overseas educational consultants:
            comprehensive training, guidance and placement for your global career.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-secondary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="font-bold text-lg mb-4">Study Abroad</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {destinations.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={site.phoneHref} className="hover:text-accent transition-colors">
                {site.phone}
              </a>
              <br />
              {site.altPhones}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <span className="text-white font-semibold">Address</span>
              <br />
              {site.address}
              <br />
              {site.branches.join(" | ")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/60">
          © Caspia Overseas - {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
