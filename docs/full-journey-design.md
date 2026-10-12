# 5RPS full journey

Source baseline: 9c7aa73. Reviewed the owner's supplied scroll recording (chronological contact sheet and editorial/closing frames) and the live Palomino journey through the Chrome extension on 12 October 2026.

## Reference observations

The reference changes composition as the viewer moves: full-screen cinematic identity; a compact transition; an image stage with different visual scales; grounded dense information; three-column editorial rows; a quieter human section; monumental closing typography; a bright navigable footer. Its grid remains coherent even while density changes. The white loader, hidden intermediate animation states, client logos, business metrics, service claims and testimonials are not part of this adaptation.

## Exact content mapping and sequence

1. **Identity:** existing meeting-room still; the film title in three English lines or the authored Japanese 秒速 / 5リクエスト groups, both Japanese lines left-aligned; translation, verified animated-feature/in-progress status, trailer action.
2. **Compact transition:** a useful in-page journey rail to Trailer, Story, Characters and Production. It replaces the reference's client strip with navigation, not fake affiliations.
3. **Trailer stage:** monumental localized trailer invitation followed by a nearly full-width 16:9 still/link. Opens the verified YouTube URL in a new tab; no iframe or fabricated moving footage.
4. **Story world:** the first existing synopsis paragraph is the main reading rail beside the Story heading. Existing office-presentation and hearing-room stills sit on a seven/five-column image composition with aligned lower edges. The second existing synopsis paragraph follows at larger reading scale, with a Story link. No added plot, theme or quote.
5. **Characters:** four editorial rows rather than repeated cards. Each has a deliberate portrait crop at left, exact name and authored description in the main column, and exact role plus a working character-detail link in the third column. Portraits/descriptions/roles come from data/characterData.ts.
6. **Production:** a bright, quieter introduction followed by a three-column contributor grid. Exact names, avatars and occupations come from the five current data/authors/\*.mdx files and data/localizedAuthors.ts, passed through Contentlayer rather than reauthored. The sixth grid position is the existing localized Maru-Ani production-journal pathway, not an invented metric or credit.
7. **Follow:** a monumental, actionable invitation to follow the film's production on the verified Instagram account, with existing Discord and journal pathways. The action supplies meaning to the large type.
8. **Footer:** bright navigation, official social/contact pathways and a large 5RPS wordmark with the existing film image inside its letterforms. The image is a reused still, not third-party media.

All public narrative comes from the current 5RPS synopsis/character/author data. TEGAKI wording is excluded; source-history presence does not establish attribution. No runtime, genre, awards, release date, fake numbers or decorative numbered/date microkickers.

## Grid and hierarchy

Use one responsive gutter and 12-column content grid. The trailer stage is intentionally large; story imagery has two coordinated scales; characters use dense three-column rows; production uses a grounded three-column grid; closing type spans the grid. Section gaps use the shared scale, with compact transitions and reading pauses tied to real content. Dark film sections lead into light production, a dark closing invitation and light footer.

## Motion

- Masked film-title entrances establish reading order; Japanese always uses the same left edge.
- The trailer frame grows gently into the grid as it enters, using a scroll-linked scale with a static full-width fallback.
- The story image stage has small opposing image movement, bounded inside the composition; it remains an honest still.
- Character rows reveal their image mask, narrative and role in a short coordinated sequence, rather than applying one generic fade to the whole page.
- Contributor cells enter in a small stagger; closing invitation and footer wordmark use masked type entrances.
- A requestAnimationFrame scroll handler updates only the handful of compositional stages and header tone. No scroll interception, loader, custom cursor or continuous ticker. All content is visible without motion JavaScript, and reduced motion removes transforms/animations.

## Mobile

Keep the same content order. Trailer remains 16:9. The story images stack in authored order, without desktop offset. Character rows become image/name/description/role blocks, not horizontal carousels. Production grid becomes one column. Closing type scales to semantic phrase groups, and all Japanese text stays left-aligned. Locale controls remain inside the focus-trapped mobile menu. Shared Story/Media/About/404 pages receive matching navigation, gutter and type treatment.

Primary agent owns formatting, required TypeScript/build checks, Git and release. Local rendered review is bounded to the full homepage journey in EN/JA at desktop/mobile plus key navigation/motion states and affected shared-page composition.

## Rendered review and delivery scope

Chrome extension review covered desktop EN through the trailer/story stage, editorial character rows, loaded contributor grid and closing transition; desktop JA hero and trailer hierarchy; the 320px JA hero, left-aligned title groups, menu locale controls, Escape closure and the real Kakeru Story destination. The resulting Story destination has matching client/document widths (305px after scrollbar deduction from the requested 320px viewport) and the expected kakeru-haruyama ID. Header tone transitions and the specific title/image/row/contributor/closing motion were observed during scroll.

An OS reduced-motion preference exercise, a complete mobile EN journey, the intermediate 768-800px transition and separate Media/About/404 route sweeps were not performed. Those layouts and static motion states are implemented in source. The primary agent judged the bounded review sufficient to proceed to release.

Two initial screenshot exports were rejected as evidence: a full-page capture had unloaded offscreen lazy images and a mid-page fixed header; another export included blank canvas outside the surface. They were removed. Retained reviewed browser-surface evidence is desktop-en-production.jpg (loaded exact contributors), desktop-en-closing.jpg (closing stage), and mobile-ja-hero.jpg (left-aligned semantic title groups), under the task evidence folder in the monorepo .artifacts directory. The primary agent owns final production proof and the Discord release report. No local Discord report was posted for this pass.

The isolated next dev preview on port 3198, unified exec session 79428, was stopped with Ctrl-C and returned exit code 0 before handoff. No tests, builds, Git mutations or deployment were performed by the UI worker.
