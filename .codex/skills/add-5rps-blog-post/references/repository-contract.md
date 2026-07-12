# Repository contract

## Current content model

- Store posts at `data/news/YYYYMMDD-short-slug.mdx`.
- Use one frontmatter block with an English canonical `title` and `summary` for Contentlayer.
- Put public body copy in matching `<LocalizedContent locale="en">` and `<LocalizedContent locale="ja">` blocks.
- Add the post slug, EN/JA list titles, and EN/JA summaries to `data/localizedPosts.ts`.
- Add new public tag translations to `data/localizedTags.ts`.
- Use `authors: ["s"]` for a signed Sho post when authorship is supported by the source and requested context.
- Default to `draft: true` during preparation.

## Frontmatter example

```yaml
---
title: English List Title
date: "2026-07-12"
tags: ["production"]
authors: ["s"]
draft: true
summary: A concrete one-sentence description of the update.
images:
  - https://storage.googleapis.com/example/path/hero-hash.webp
---
```

Include `images` only when a verified public hero URL exists. Follow the current schema in `contentlayer.config.ts` if it changes.

## Content boundaries

- Preserve authored film copy and established terminology.
- Do not infer story meaning or production strategy from visual files.
- Do not expose local filesystem paths, EXIF location data, private notes, credentials, or unpublished materials in MDX or media metadata.
- Keep originals out of Git unless the user explicitly asks and the repository policy permits it.
- Use browser paths `/static/images/<filename>` only for verified files already under `public/static/images/`.

## Rich media

Inspect `components/MDXComponents.tsx` before authoring. Only names registered there are available to MDX. Prefer an existing component over raw HTML. New components must:

- be reusable;
- provide accessible labels and visible keyboard focus where interactive;
- use explicit dimensions or an intentional aspect ratio;
- avoid autoplay with sound;
- respect reduced motion;
- work on narrow mobile screens;
- keep captions and credits localizable.

Use native controls and `playsInline` for direct video. Default `preload` to `metadata`; do not eagerly download every video in a long post.

## Git and publication

- Editing files creates a draft; it does not authorize a commit.
- A commit does not authorize a push.
- A push may trigger Vercel, so treat it as a deployment action requiring explicit user instruction.
- Never send a newsletter as a side effect of publishing a post.
