# Website Agent Guide

## Scope

- This directory owns the official `5 Requests Per Second` website.
- Use repo agent `akiyamashoji` from `../99_team/08_website_developer.md`.
- Keep work inside `04_website/` unless the user asks for a specific cross-reference asset.

## Development

- Read this file before editing website code.
- Prefer existing Next.js, Contentlayer, Tailwind, and Pliny patterns before adding new dependencies.
- Keep public routes stable unless the user explicitly asks for a routing change.
- For i18n, all visible UI copy and news/blog content must have English and Japanese render paths.
- Default language behavior should follow the user's browser language: Japanese for `ja*`, English for `en*`, and English for every other language.

## Local Validation

- Before handoff, run the smallest useful validation for the change, usually `pnpm build`.
- For UI changes, start the local dev server and provide the URL for human testing.
- Check both English and Japanese states in-browser for changed pages.

## Release Gate

- Production deploys from Vercel on push to `main`.
- Do not push to `main` until local validation has passed and the human has tested the site locally.
- If a change needs a branch or PR, keep it off `main` until the human explicitly approves release.
