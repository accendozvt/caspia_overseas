"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      {/* Top bar */}
      <div className="bg-secondary text-white text-xs md:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between gap-4">
          <p className="truncate">
            <span className="hidden sm:inline">The Best German Language Classes in Kerala · </span>
            Vyttila, Kochi
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a href={site.phoneHref} className="hover:text-accent transition-colors">
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden md:inline hover:text-accent transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link href="/" className="shrink-0" aria-label="Caspia Overseas Studies: Home">
            <Image
              src={site.logoSquare}
              alt="Caspia Overseas Studies"
              width={300}
              height={300}
              priority
              // Renders at 56px tall (80px on lg). Without `sizes` the 1x/2x srcset is
              // derived from width={300} and a 640w variant is fetched on every page.
              sizes="80px"
              className="h-14 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-ink hover:text-primary hover:bg-mist transition-colors"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="text-muted group-hover:text-primary" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 min-w-56">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm hover:bg-mist hover:text-primary transition-colors ${
                            pathname === child.href ? "text-primary font-semibold" : "text-ink"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold hover:text-primary hover:bg-mist transition-colors ${
                    pathname === item.href ? "text-primary" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/german-nursing-registration/"
              className="px-4 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Register Today
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-sm font-bold text-white bg-orange-strong hover:brightness-110 transition-all"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-secondary hover:bg-mist"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-mist bg-white max-h-[75vh] overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-4 py-3 space-y-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-ink hover:bg-mist"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <ChevronDown className={expanded === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  {expanded === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-ink hover:bg-mist hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-ink hover:bg-mist hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex gap-2 pt-3 pb-2">
              <Link
                href="/german-nursing-registration/"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-bold text-white bg-primary"
              >
                Register Today
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-bold text-white bg-orange-strong"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
