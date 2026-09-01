# Technical SEO Report — caspiaedu.com

Caspia Overseas Studies · Next.js 16 App Router, static export (`output: "export"`) · Apache on Hostinger shared hosting

---

## 1. Headline result

**Accessibility, Best Practices and SEO are 100 on all 76 public pages.** Performance is 100 on desktop for every template except one, and 89–99 on mobile for every page except one — both exceptions are the same third-party form embed, explained in §6.

Measured with Lighthouse against the production build served over a plain static server: **90 runs** — all 76 public pages on mobile, plus one representative of each of the 14 distinct page templates on desktop.

| Category | Mobile (76 pages) | Desktop (14 templates) |
|---|---|---|
| Accessibility | **100** on 76/76 | **100** on 14/14 |
| Best Practices | **100** on 76/76 | **100** on 14/14 |
| SEO | **100** on 76/76 | **100** on 14/14 |
| Performance | median **95**, range 65–99 | median **100**, 13/14 at 100 |

Core Web Vitals, mobile:

| Metric | Median | Range | Notes |
|---|---|---|---|
| LCP | 2.96s | 1.86s – 8.79s | the 8.79s outlier is the form page |
| CLS | **0.000** | 0.000 – 0.066 | **75 of 76 pages are exactly 0** |
| TBT | 58ms | 34ms – 393ms | |

### Before and after

The Phase 0 baseline covered 12 pages (24 runs). Like-for-like:

| | Baseline (mobile) | Final (mobile) |
|---|---|---|
| Performance | 79–96, median 89 | 89–99 median 95 (excl. form page) |
| Accessibility | 90–100, median 96 | **100 everywhere** |
| Best Practices | 96–100, median 100 | **100 everywhere** |
| SEO | 92–100, median 100 | **100 everywhere** |

| | Baseline (desktop) | Final (desktop) |
|---|---|---|
| Performance | 83–100, median 100 | **100 on 13/14** |
| Accessibility | 90–96, median 96 | **100 everywhere** |
| Best Practices | **96 on every page** | **100 everywhere** |

---

## 2. Real defects found and fixed

These were live bugs, not just missing optimizations. Listing them because they are the substance of the work.

| # | Defect | Impact | Where |
|---|---|---|---|
| 1 | **Every nav-link hover returned 404.** Next.js requests the RSC payload at `__next.<route>.__PAGE__.txt`; the build writes it to `__next.<route>/__PAGE__.txt` — same content, different path encoding. | Console error on every page → Best Practices capped at 96 sitewide | `scripts/fix-segment-prefetch-paths.js` |
| 2 | **The blogs page lazy-loaded its own LCP element.** The featured post image had `loading="lazy"`, so the browser deliberately deferred the one image that defines the metric. | Mobile LCP 3.9s on that page | `app/blogs/page.tsx` |
| 3 | **Homepage shipped 2.7 MB of banner PNGs**, all four mounted at once. | Desktop performance 83 | image pipeline + `BannerCarousel` |
| 4 | **28 `<Image>` elements had no `sizes`.** The header logo fetched a 640w variant to draw an 80px logo on all 76 pages. | ~1.2 MB of oversized images | across app/ and components/ |
| 5 | **The 404 page carried contradictory robots directives** — Next's own `noindex` plus the layout's inherited `index, follow`. | conflicting crawler signals | `app/not-found.tsx` |
| 6 | **Duplicate `<title>` across two pages** (the Nursing service page and a nursing blog post). | keyword cannibalisation | post frontmatter |
| 7 | **Unrendered authoring shorthand published live**: `[BTN/LINK: "DM us "GREEN"…" -> https://wa.me/…]` shown as raw text, with the trailing `]` breaking the WhatsApp link. | broken link + visible markup | one blog post |
| 8 | **34 blog posts skipped heading levels** (`##` → `####`). | Accessibility 98 on 34 pages | fixed in the Markdown renderer |
| 9 | **Comparison tables had unheadered row labels** — a blank top-left `<th>` left the label column with no header. | `td-has-header` failure | fixed in the Markdown renderer |
| 10 | **Blog body images bypassed `next/image` entirely** — bare `<img>`, no dimensions, no lazy-loading, no WebP. | layout shift + payload | `lib/posts.ts` |
| 11 | **Third-party form injected three a11y defects** into our DOM: an unlabelled 1600×400 banner image, an `<h3>` directly under our `<h1>`, and a 3.76:1 required-field asterisk. | Accessibility 93 on the form page | `components/FormEmbed.tsx`, `globals.css` |
| 12 | **`npx eslint` had been failing** since the build scripts were added. | broken lint gate | `eslint.config.mjs` |

---

## 3. What was implemented, by phase

**Phase 1 — Core meta.** Every page has charset, viewport, `lang`, a unique title, a unique description, a self-referencing absolute canonical, robots and theme-color. All 76 titles are unique, 45–64 chars; all 76 descriptions unique, 136–167 chars.

**Phase 2 — Social.** A branded 1200×630 OG card (WebP 25 KB + PNG fallback). Because Next.js does not deep-merge `openGraph`/`twitter` between layout and page, a page defining its own block silently dropped `type`/`siteName`/`locale`. All 27 metadata files now build through one `pageMetadata()` helper, so the full OG + Twitter set is emitted everywhere — verified 0 issues across 76 pages, with real per-image dimensions from a build-time manifest.

**Phase 3 — Crawl surface.** `sitemap.xml` (76 URLs, all absolute, all trailing-slash, no duplicates, every one resolving to a built page), `robots.txt` allowing all crawlers including AI crawlers, plus `llms.txt` and `llms-full.txt`. The link index is generated from each page's own metadata, so it cannot drift.

**Phase 4 — Structured data.** One linked entity graph rather than dozens of duplicates. Previously the Organization was re-inlined on all 76 pages and the blog template inlined a *second* copy as the Article author/publisher. Now: `Organization` (`EducationalOrganization` + `LocalBusiness`, with the confirmed legal name) and `WebSite` are emitted once and referenced by `@id`; every page carries a page entity, `BreadcrumbList` on all 75 non-home pages, `Service` on 16 guidance pages, `Course` on the language-classes page, `Article` on 50 posts, `FAQPage` merged onto the page node. **0 parse errors, 0 dangling `@id` references.**

**Phase 5 — On-page.** Alt text written for 12 images by actually viewing each one; skip-to-content link; favicon/apple-icon/manifest generated from the master logo; branded 404 and a new self-contained 500 page.

**Phase 6 — Performance.** Static export has no image optimizer, so a build-time pipeline pre-generates WebP variants (366 files) and a custom `next/image` loader maps requests onto them via a manifest — falling back to the original for anything unknown, never upscaling. The four hero banners went 284/1114/320/1002 KB → 48/67/68/36 KB (79–96% smaller). DM Sans trimmed from five weights to two (it only ever renders bold/extrabold).

**Phase 7 — Accessibility.** 378 failing contrast nodes → 0. The brand orange is 2.43:1 on white but **5.33–7.39:1 on the dark hero**, so darkening it globally would have created new failures; instead two darker steps (`#b85005` for text on light, `#c35505` for button fills) carry only the cases where contrast applies, and the brand orange is untouched.

**Phase 8 — Hosting.** `.htaccess` for canonical origin (http and www → apex in a *single* hop), error documents with real status codes, security headers, compression, and caching split by whether filenames are content-hashed.

---

## 4. Verification performed

| Check | Result |
|---|---|
| Clean rebuild from scratch (`.next`, `out`, generated images all deleted) | succeeds; regenerated image manifest byte-identical to the committed one |
| `npx tsc --noEmit` | clean |
| `npx eslint` | clean |
| Lighthouse, 90 runs | see §1 |
| Internal links + assets, all 80 built pages | 3,542 links + 4,246 asset references — **1 broken** (see §5) |
| In-page anchors | 0 missing |
| External links | 11 unique, all resolve |
| Contrast sweep, 16 templates / 1,295 text nodes | 0 failures |
| Structural a11y (alt, link names, button names) | 0 issues across 78 pages |
| OG/Twitter completeness | 0 issues across 76 pages |
| JSON-LD | 0 parse errors, 0 dangling `@id` |
| Sitemap | 76 URLs, all absolute, all resolve, 0 duplicates |
| Titles / descriptions | 0 duplicates, all within target length |

---

## 5. Manual actions required

Ordered by priority. Items 1 and 2 need doing; the rest are improvements.

### 1. Supply the missing brochure PDF — one broken link on the homepage

The homepage "Download Nursing Handbook → Download Now" button points at:

```
https://caspiaedu.com/wp-content/uploads/2023/04/Brochure.pdf
```

That is a leftover WordPress path. The file does not exist in the export, so **this link will 404 once the new site is live.** It is the only broken internal link on the site.

Either upload the PDF to `public/` and update the link in `app/page.tsx`, or tell me where it should point and I will change it. I did not repoint it myself because only you know what that button is meant to deliver.

### 2. Deploy, then verify the Apache config

The `.htaccess` could not be executed locally — there is no Apache in the dev environment — so the redirects, headers and cache rules are **written from spec and reviewed, not proven**. After uploading `out/` to `public_html`:

```bash
bash scripts/verify-deployment.sh
```

It checks the canonical redirects, the single-hop rule, the real 404 status, every security header, compression, cache headers and the SEO endpoints, and exits non-zero if anything is wrong.

**Before uploading:** check whether `public_html` already contains an `.htaccess`. Hostinger sometimes places one there, and uploading `out/` will overwrite it. If one exists, merge rather than replace.

### 3. Submit to Google Search Console

Not done — it needs your account. Add `https://caspiaedu.com` as a property, verify (an HTML-file token can be dropped into `public/`, or use DNS), then submit `https://caspiaedu.com/sitemap.xml`. Also request indexing for the homepage to speed up first crawl.

### 4. Strengthen the LocalBusiness data

The Organization schema deliberately omits **street address, postal code, geo coordinates, opening hours and price range** — none exist anywhere in the repo, and structured data must not assert facts the site cannot back up. Supplying them would materially improve the local-business result. Branch addresses would also let each of the five locations become its own `LocalBusiness` entity.

### 5. Decide on HSTS scope

Currently `max-age=31536000` with no `includeSubDomains` and no `preload`. Both are hard to reverse, and `includeSubDomains` would break any subdomain (webmail, cPanel) not already HTTPS-only. Once you have confirmed every subdomain is HTTPS, add them.

### 6. Consider the form embed's performance cost

The registration page scores **65 mobile / 88 desktop** — the only page below 89. This is entirely FormFacade's own assets on their domain: **1.1 MB served uncompressed**, 437 KB of unminified JS, 412 KB of non-modern images. Nothing in this codebase can compress or minify them; I added a preconnect (~180 ms back) and that is the ceiling from our side. If that page matters commercially, the options are asking FormFacade to enable compression or replacing it with a self-hosted form.

### 7. Analytics

No analytics is installed (per your instruction). When you want GA4 or similar, it should be added via `next/script` with `strategy="afterInteractive"` so it does not regress the scores.

---

## 6. Known limitations

**Mobile performance does not reach 100, and this is structural rather than a missing optimisation.** On a typical page LCP is ~3.0s of which ~2.8s is *Render Delay*, with Load Delay and Load Time both at **0 ms** — nothing is waiting on the network; the main thread is busy. About 55% of each page's HTML (107 KB on the homepage) is the inline RSC payload the App Router emits, and parsing plus hydrating that under Lighthouse's 4× CPU throttle is what defers the paint. Closing that gap means shipping less content per page, which is a content and design decision rather than a technical fix. Mobile currently sits at a median of 95.

**One page has non-zero CLS** (the form page, 0.066 — still inside the "good" threshold of 0.1). The embed renders ~2,700 px tall against a 480 px reserved placeholder. Reserving the true height would eliminate the shift but leave a very large blank area while the third-party script loads, which is a worse experience for a marginal gain on a metric that already passes.

**A full Content-Security-Policy is not enforced** — only `frame-ancestors`. The registration form injects its own scripts, styles and images from a third-party domain, and a strict policy would break it.

---

## 7. Reproducing these numbers

```bash
npm run build                 # prebuild generates images; postbuild writes llms-full.txt + prefetch aliases
npx serve out -l 4173         # note: NO -s flag — it would serve index.html for every route
npx lighthouse http://localhost:4173/ --preset=desktop --only-categories=performance,accessibility,best-practices,seo
```

Helper scripts: `npm run images` (WebP variants), `npm run icons` (favicon set), `npm run og:dimensions` (OG image manifest), `bash scripts/verify-deployment.sh` (post-deploy checks).

Raw Lighthouse JSON for all 90 runs is in `seo-audit/final/` (gitignored).
