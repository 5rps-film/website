# Composition review and rework

Reviewed 12 October 2026 against the live 5RPS homepage and Palomino reference using the Chrome extension. Source baseline: 2e971f1.

## Findings

- The reference succeeds through image scale, strong reading order and a shared alignment system. The present film site copies staggered title placement but leaves a large, undirected middle space and places title lettering across the characters' faces.
- Header, hero and section edges use separate gutters. Trailer width is an arbitrary 88%, section gaps vary independently, and even character cards move down by up to 160px. These gaps make the page feel disconnected.
- Repeated huge headings followed by isolated images flatten the hierarchy. The initial review incorrectly treated a statement in earlier Git history as 5RPS copy; the owner subsequently identified it as belonging to another film. It has been removed from both locales.
- The homepage ends without a production introduction or clear path into the production record. These are real existing materials that can give the composition substance.
- Shared route headings, body measure, media grids and credits need the same spacing rules. The 404 surface still carries unrelated blue template styling.

## Implementation

1. Use one responsive outer gutter, one capped content width and a small shared spacing scale. All header, hero, section, route and footer edges align.
2. Anchor the hero title lower in the film image and make its reading order deliberate. Keep bilingual semantic title groups with Japanese left-aligned, add the existing production status, and retain clear trailer and story actions.
3. Compose the trailer as a heading/copy rail beside a large image, use the verified 5RPS synopsis heading, and pair synopsis with the office still on a shared grid.
4. Replace arbitrary character offsets with a balanced gallery; use verified character descriptions to establish meaningful narrative detail.
5. Add a production section using existing About copy and existing media pathways. Give the footer navigational purpose. Apply the same grid and hierarchy to Story, Media, About and 404.
6. Keep masked title entrances and short one-time reveals. Introduce image-specific reveals only where they support the image sequence; keep final content visible without JavaScript and respect reduced motion.

No new film facts, assets, dependencies, awards, release dates or decorative numbered labels. Trailer remains an external YouTube link. The primary agent owns required formatting/build checks, Git and release. Purposeful visual review covers changed desktop/mobile composition and bilingual title behavior; this is not a full regression sweep.

## Rendered review and handoff

Chrome extension review covered the live reference and baseline, then the isolated local homepage at desktop and 320px in EN/JA. Reviewed the desktop trailer/story pairing, mobile character/production flow, mobile navigation with locale selection, and the desktop Media composition. Observed and corrected a legacy 320px wordmark size and adjusted the mobile hero crop toward the visible character. Japanese title groups remain intact; the observed 320px page has matching document/client widths with no horizontal overflow.

Shared Story/About/404 styling is implemented from the existing components but has not received a separate route-by-route visual sweep. Reduced motion behavior is retained in source; a browser preference exercise was not performed. No new media were generated. Required formatting, TypeScript/build checks and production verification are owned by the primary agent. Final release evidence and the completed Discord visual report should use the integrated deployed page.
