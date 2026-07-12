---
name: add-5rps-blog-post
description: Turn a user-provided folder of unstructured notes, images, GIFs, audio, and videos into a reviewed bilingual EN/JA production-update post for the 5 Requests Per Second website. Use when Codex must inventory and organize finished production material, create visually lossless web-compressed media derivatives, draft or revise a Medium-like long-form news post in Sho's house style, update the repository's MDX and localization records, optionally upload approved derivatives to configured GCS storage, and validate both locales without publishing automatically.
---

# Add a 5RPS blog post

Create one evidence-based bilingual production update from an explicit input folder. Keep text and metadata in Git. Keep large media outside Git when approved object storage is configured.

## Load required guidance

1. Read the repository `AGENTS.md` completely.
2. Read [references/repository-contract.md](references/repository-contract.md).
3. Read [references/writing-style.md](references/writing-style.md).
4. Read [references/media-compression.md](references/media-compression.md) before preparing any media.
5. Read current posts in `data/news/`, `data/localizedPosts.ts`, and `data/localizedTags.ts` before drafting.
6. Read media-component source before using nonstandard MDX elements. Never invent an MDX component.

## Establish scope

- Accept only a folder the user identifies for this post.
- Do not inspect adjacent screenplay, storyboard, or production folders unless the user explicitly includes them.
- Treat all source files as read-only. Generate derivatives in a temporary working directory.
- Check `git status` before editing. Preserve unrelated and user-authored changes.
- Do not upload, commit, push, deploy, send email, or publish unless the user explicitly requests that action.
- If the folder may contain private, licensed, embargoed, or third-party material and publication rights are unclear, prepare an inventory and ask for direction before uploading or drafting it as public fact.

## Inventory the folder

Recursively list files and classify each as:

- factual source: notes, logs, transcripts, dates, links, or authored copy;
- publishable-media candidate: image, animation, audio, or video;
- supporting artifact: diagrams, exports, contact sheets, or metadata;
- duplicate or derivative;
- unknown or excluded.

Capture filenames, file types, byte sizes, image dimensions, and media duration when tools are available. Use file hashes to identify exact duplicates. Do not infer chronology from filenames alone when embedded metadata or notes disagree.

Create a private working inventory in the response or temporary directory. Do not add the inventory to the repository unless the user requests it.

## Derive the story from evidence

Identify:

- the completed action or concrete news;
- what changed since the prior public update;
- the next specific production step;
- the strongest 3 to 8 media items that explain the work;
- dates, names, tools, locations, credits, links, and numbers supported by the folder;
- gaps that would require invention.

Prefer a focused post over a dump of every file. Exclude redundant media and explain material omissions in the handoff. Never invent film strategy, character positioning, production progress, quotations, dates, or thematic meaning.

## Plan media

- Preserve source files.
- Create compressed web derivatives by default using the selected scripts in `/Users/computer/Desktop/dev/tools/Scripts`; follow [references/media-compression.md](references/media-compression.md).
- Perform all conversion on temporary copies. Never run a compressor against the source folder.
- Prefer the smallest verified derivative that remains visually faithful and preserves required dimensions, transparency, animation, duration, and audio.
- Prefer an MP4 or WebM loop over a large GIF when the rendered component supports it.
- Use broadly compatible H.264/AAC MP4 for direct browser playback.
- Generate a poster image for video when possible.
- Record accurate alt text, caption, credit, dimensions, duration, and source filename.
- Record original and derivative byte sizes in the private media inventory.
- Use content-hashed immutable object names when uploading.
- Read [references/gcs-media.md](references/gcs-media.md) before any GCS action.
- Use the configured `5rps-film-public-media` bucket and the post-prefix rules in that reference.
- Never place unapproved or unpublished material in the bucket because every object is publicly readable.

## Draft English first

Lead with the concrete update. Use the provided evidence to explain the process, decisions, obstacles, and next step. Match Sho's conversational technical voice without reproducing sentences from reference articles.

For a substantial post, prefer this loose rhythm when the material supports it:

1. A direct update and why it matters to this stage of production.
2. A concrete behind-the-scenes example.
3. Media placed next to the paragraph it explains.
4. A specific observation, constraint, or adjustment.
5. The next production action.

Do not force an introduction-body-conclusion template, table of contents, recap, numbered framework, CTA, or minimum length. Short evidence should produce a short post.

## Write Japanese as authored Japanese

Write a matching Japanese post from the same facts and intent, not a sentence-by-sentence translation. Use natural public production Japanese in restrained `です・ます` form unless the source is explicitly a signed personal message. Name the completed action first and use precise terms such as `脚本`, `絵コンテ`, `予告編`, and `公開`.

Keep the production voice collective. Prefer natural subject omission, using `私たち` only when the actor would otherwise be unclear; never imply team size. Preserve technical density, candid opinions, and dry humor instead of explaining them away. Adapt paragraph rhythm for Japanese and avoid explanatory overtranslation. Use established vocabulary such as `アニマティック`, `演出`, `リポジトリ`, `レビューアプリ`, and `エージェント`. Keep headings concise and natural.

Keep EN and JA equivalent in claims, media, credits, and links. Small structural differences are acceptable when they improve natural reading. Protect short Japanese semantic units with existing `.compound` or authored no-break spans. Never apply no-wrap behavior to long prose.

End both locales with a restrained invitation to the project Discord using `https://discord.gg/cWae4TfR`; it must be the final line of the post.

## Implement the post

1. Create `data/news/YYYYMMDD-short-slug.mdx` using the repository's existing frontmatter and `LocalizedContent` structure.
2. Add localized list title and summary to `data/localizedPosts.ts`.
3. Add only genuinely new public tags to `data/localizedTags.ts`.
4. Use existing media and link components. If the required rich-media surface does not exist, implement the smallest reusable accessible component in scope, then test it in both locales.
5. For external links, use the repository's accessible new-tab behavior and bilingual labels where required.
6. Keep the post as a draft unless the user clearly asks for publication-ready state.

## Run editorial checks

Run:

```bash
python3 .codex/skills/add-5rps-blog-post/scripts/check_post_style.py <post.mdx>
```

Then review manually for:

- unsupported claims, numbers, quotes, dates, and credits;
- EN/JA factual parity;
- copied wording from reference articles;
- repetitive transitions and equal-length paragraphs;
- unnatural Japanese syntax or broken short compounds;
- missing alt text, captions, dimensions, posters, or link context;
- em dashes in authored prose.

The scanner is a guardrail, not proof of writing quality. Rewrite every flagged passage in context.

## Validate the website

For normal post changes, run:

```bash
pnpm exec prettier --check <changed-files>
pnpm exec tsc --noEmit
pnpm build
```

When browser QA is available, inspect EN and JA at 320 to 360 px, 768 to 800 px, and 1280 px or wider. Check media loading, captions, controls, focus, Japanese wrapping, and horizontal overflow. State clearly when rendered browser QA was unavailable.

## Hand off

Report:

- the post path and draft status;
- the story angle supported by the input;
- media selected, excluded, uploaded, or still awaiting URLs;
- unresolved factual, credit, or privacy questions;
- validation completed and any limitations.

Do not describe the draft as published unless the live production URL was explicitly deployed and verified.
