# 5RPS design direction

Reference: https://palominoprod.com/en (12 October 2026).

## Plan

1. Establish the visual direction and motion rules before implementation.
2. Recompose the homepage and apply the same typography and spacing to Story,
   Media, About, navigation and footer. Remove decorative numbered kickers.
3. Format changed source, run the documented TypeScript and production build
   checks, push to canonical origin/main, confirm Vercel deployment and clean
   task-created outputs.

## Design

Use the reference's full-screen film imagery, staggered oversized typography,
quiet navigation and generous editorial spacing. Adapt those principles to the
existing 5RPS identity and authored content; do not copy its assets or copy.

The opening uses existing cleared 5RPS imagery behind an English title arranged
as three alternating lines, or Japanese title in the authored 秒速 / 5リクエスト
groups. The second language remains a readable translation. Trailer follows
immediately, then a single synopsis section and a spacious character gallery.
Keep warm paper, charcoal, restrained red and the existing Space Grotesk / Mincho
font system. Replace boxy action icons with plain directional arrows and rules.

No decorative section numbers, character indices, slash-date labels or tiny
uppercase category subtitles. Keep meaningful film copy, credits and copyright.
Use clear hierarchy through scale and space, with readable navigation/body type.

## Motion

Use short masked title entrances, one-time section reveals and restrained image
hover movement. One easing curve, no scroll hijacking, no custom cursor, no
forced loading animation, no continuous text ticker. IntersectionObserver only
animates visible content; content remains visible without JavaScript. Reduced
motion displays the final state with all movement disabled. The film still is
an honest still, not fabricated video footage.

## Boundaries

Preserve bilingual authored content, canonical metadata, existing film media,
YouTube new-tab trailer playback and Maru-Ani journal ownership. No new media,
dependencies, deployment configuration, public domain or film facts.
