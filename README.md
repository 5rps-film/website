# [5 Requests Per Second](https://www.5rps.jp)

Official bilingual website for the animated feature film _5 Requests Per
Second / 秒速5リクエスト_.

The canonical production URL is [www.5rps.jp](https://www.5rps.jp). The source
lives in the standalone [`5rps-film/website`](https://github.com/5rps-film/website)
repository. The film-production repository exposes this checkout through its
`04_website` symlink, but website commits and branches belong to this repository.

<a href="https://www.instagram.com/5requestspersecond/" target="_blank"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram"></a>
<a href="https://discord.gg/cWae4TfR" target="_blank"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
<a href="https://www.x.com/5rps-film" target="_blank"><img src="https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white" alt="X"></a>

## Stack

- Next.js 14 App Router, React, and TypeScript
- Tailwind CSS with the film-specific design system in `css/tailwind.css`
- Contentlayer and MDX for bilingual production news
- Vercel deployment from `main`
- Umami analytics when `NEXT_UMAMI_ID` is configured

## Requirements

- Node.js 24
- pnpm 9.15.x
- GNU Make 4.x or newer if using the Makefile shortcuts

## Local development

Before changing the site, read [`AGENTS.md`](./AGENTS.md). It defines the
design system, localization rules, metadata conventions, and validation
workflow.

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The local site is available at <http://localhost:3000>.

Equivalent Makefile shortcuts are available:

```bash
make install
make dev
```

## Project map

- `app/`: routes, page composition, route metadata, robots, and sitemap
- `components/`: reusable interface and interaction components
- `layouts/`: news-post and listing layouts
- `css/tailwind.css`: shared visual system and responsive rules
- `data/news/`: bilingual MDX news sources
- `data/localizedPosts.ts`: localized news-list titles and summaries
- `data/localizedTags.ts`: localized public tag labels
- `data/siteMetadata.js`: canonical host and site-wide metadata
- `public/static/images/`: public film imagery
- `scripts/rss.mjs`: RSS and tag-feed generation

## Search and generated outputs

The canonical host is `https://www.5rps.jp`. Canonical URLs, Open Graph data,
JSON-LD, `robots.txt`, the sitemap, and RSS feeds must all use that host.

`pnpm build` generates the Contentlayer documents and then refreshes these
tracked public artifacts:

- `public/feed.xml`
- `public/search.json`
- `public/tags/*/feed.xml`

Draft posts must remain absent from public routes, pagination, search, RSS,
tag feeds, and the sitemap.

## Validation

Run the checks documented in [`AGENTS.md`](./AGENTS.md):

```bash
pnpm exec prettier --check <changed-files>
pnpm exec tsc --noEmit
pnpm build
```

The build currently emits the homepage, Story, Media, News, About, Tags,
individual news posts, pagination, `robots.txt`, and `sitemap.xml`.

## Deployment

Pushing `main` to `origin` triggers the production Vercel deployment. Normal
delivery is:

```bash
git push origin main
```

The Makefile command runs a production build before pushing its selected
branch:

```bash
make deploy BRANCH=main
```

Do not push or deploy unless the task explicitly authorizes it.
