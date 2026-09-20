# Website Maintainer Guide

This file applies to the entire website repository. Also follow the parent
production repository instructions when this project is reached through the
`04_website` symlink.

## Product and working scope

- This is the bilingual official website for the anime feature film
  _5 Requests Per Second / 秒速5リクエスト_.
- The canonical public host is `https://www.5rps.jp`. The apex domain redirects
  to `www`; all canonical URLs, social metadata, and structured data must use
  the `www` host.
- The canonical source repository is `git@github.com:5rps-film/website.git`.
  The production repository's `04_website` path is a symlink to this standalone
  checkout. Run Git commands in this repository and do not assume that the
  parent production branch includes website commits.
- Vercel deploys the production site from `main`.
- Keep website work inside this repository. Do not inspect screenplay,
  storyboard, or production folders unless the task explicitly requires a
  specific cross-reference.
- Preserve existing authored copy, imagery, and user changes. Do not invent
  film strategy, character positioning, or thematic meaning.

## Stack and important locations

- Node.js 24, pnpm 9.15.x, Next.js 14 App Router, React, TypeScript, Tailwind,
  Contentlayer, and MDX.
- Routes and page composition: `app/`.
- Reusable UI: `components/`.
- Post layouts: `layouts/`.
- Design-system and responsive CSS: `css/tailwind.css`.
- Localized interface copy: `data/strings.ts` and other `data/localized*.ts`
  modules.
- Site identity and canonical host: `data/siteMetadata.js`.
- Shared page metadata: `app/seo.tsx`; site-wide metadata and JSON-LD:
  `app/layout.tsx`.
- Crawl discovery: `app/robots.ts` and `app/sitemap.ts`.
- Public imagery: `public/static/images/`. Reference it from the browser as
  `/static/images/<filename>` and verify the file exists before use.

## Design system

Use the existing CSS custom properties instead of introducing isolated colors:

- `--paper` and `--paper-hi`: warm light surfaces and text on dark surfaces.
- `--ink`: primary charcoal text and dark sections.
- `--graphite`: secondary copy.
- `--rule`: borders and dividers.
- `--wine` and `--request-red`: actions, selected states, and restrained
  accents.
- `--indigo` is available but should not become a large section background
  without explicit design direction.

Maintain the film-site character: warm paper, charcoal, restrained red, strong
editorial spacing, and imagery that remains the visual focus. Avoid generic
SaaS UI, arbitrary gradients, bright Tailwind palette utilities, and starter
template dark-mode classes. The app theme can be dark while a page surface is
light, so article and light-page colors must be explicit.

## Typography and bilingual behavior

- Space Grotesk is the stable Latin display and body face.
- Japanese display type uses the existing Mincho stack; Japanese body copy uses
  the existing Gothic stack.
- Never allow short Japanese titles or semantic units to break between
  characters. Wrap them in `.compound` or authored no-break spans.
- For the film title, preserve the authored groups `秒速` and `5リクエスト`.
- Do not apply `white-space: nowrap` to long Japanese prose. Use the scoped
  Japanese line-breaking rules already present in `css/tailwind.css`.
- Check EN and JA at desktop and mobile widths whenever text or layout changes.

## Localization

- Use `useLocale()` and existing localized data helpers. Do not hard-code an
  English-only label on a public page.
- The localized site title comes from `t("siteTitle")`.
- New external-link labels must state that they open a new tab in both EN and
  JA when the behavior may surprise the user.
- Preserve `lang` synchronization in `LocaleProvider`.

## Journal ownership

Production journals and news for 5RPS are authored and published on Maru-Ani,
with clear 5RPS titles and tags. Keep this film microsite limited to film
identity, story, media, and about content.

## Search and discovery

- Treat conventional search fundamentals as the source of truth for search
  engines and AI search features. Do not add `llms.txt`, special AI-only
  markup, or duplicate machine-targeted copy.
- Give every indexable route a precise title, description, canonical URL, and
  social image. Keep canonical and Open Graph URLs aligned.
- Use absolute `https://www.5rps.jp/...` URLs in Open Graph data and JSON-LD.
- Preserve the site-level Organization, WebSite, and Movie graph. Structured
  data must describe visible, accurate film-site content.

## Components and interaction

- Prefer reusable components for repeated surfaces such as trailer cards,
  locale controls, headers, and social links.
- External links use `target="_blank"` with `rel="noopener noreferrer"` and a
  clear accessible label.
- The official trailer currently opens on YouTube in a new tab because inline
  playback is unavailable (YouTube error 153). Do not restore an iframe without
  verifying production playback and CSP behavior.
- Keep keyboard focus visible, mobile navigation trapped while open, reduced
  motion respected, and interactive targets at least 44px where practical.
- At the hamburger breakpoint, keep the EN/JA selector inside the mobile menu;
  do not duplicate it in the compact header.
- Use `next/image` with explicit dimensions and responsive `sizes`. Portraits
  and logos should declare intentional `object-fit` and `object-position`.

## Responsive QA

At minimum, verify:

- 320-360px mobile: header, locale switch, Japanese titles, cards, footer, and
  absence of horizontal overflow.
- 768-800px transition: navigation, grids, media, and article layout.
- 1280px+ desktop: hero composition, readable line lengths, and image crops.
- All user-visible routes in both locales when shared CSS or navigation changes.

Known route families include `/`, `/story`, `/media`, `/about`, and the 404
surface. Journals and news are maintained on Maru-Ani; legacy links redirect
there.

## Validation

Run checks proportional to the change. For normal frontend changes, use:

```bash
pnpm exec prettier --check <changed-files>
pnpm exec tsc --noEmit
pnpm build
```

`pnpm lint` is not currently a reliable non-interactive check because the repo
does not contain a committed ESLint configuration. Do not report it as passed.
The production build should generate the expected film route families.

When browser QA is available, inspect the real rendered pages rather than
relying only on source review. Capture both locales and relevant breakpoints.
If browser tooling is blocked, state the limitation and distinguish static
verification from visual verification.

## Change hygiene

- Read the current source before editing; this repository may contain user
  changes not yet committed.
- Keep changes scoped. Do not reformat unrelated files or replace established
  visual identity.
- Do not commit, push, deploy, or open a pull request unless the user explicitly
  asks.
- Production delivery is a push to `origin/main`, which Vercel deploys. A
  feature-branch push is not a production release.
- Discord reports are opt-in. Do not send one unless the user explicitly asks
  for a Discord update.
