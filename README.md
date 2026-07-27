# jalu.dev

My portfolio website.

## Stack

- [Astro](https://astro.build) 7 — static output
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/vite`
- [Newsreader](https://github.com/productiontype/Newsreader) (OFL), latin
  subset, self-hosted

## Commands

| Command           | Does                                      |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Dev server on `localhost:4321`            |
| `npm run build`   | Static build into `dist/`                 |
| `npm run preview` | Serve the build locally                   |
| `npm run check`   | `astro check` — types and template errors |
| `npm run format`  | Prettier over the repo                    |

## How it's put together

All page copy lives in [`src/data/site.ts`](src/data/site.ts). Change it there,
not in the markup — the metadata and the visible text read from the same
object.

Design tokens live in the `@theme` block of
[`src/styles/global.css`](src/styles/global.css), which also carries a header
comment recording the design decisions.

Two conventions worth knowing before editing:

- **No width media queries.** Type is fluid via `clamp()` against the viewport
  and the layout is a single intrinsic column, so there are no breakpoints. The
  only `@media` rule in the project is `prefers-reduced-motion`.
- **Light and dark come from `light-dark()`**, driven by `color-scheme: light
dark`. There is no theme toggle and no `prefers-color-scheme` query — each
  colour token declares both values in one place.

## Regenerating `public/og.png`

The social card is a static PNG rendered from an SVG with Inkscape, using the
Newsreader TTF from
[google/fonts](https://github.com/google/fonts/tree/main/ofl/newsreader) via a
scoped `fontconfig`. It only needs redoing if the name, role or palette
changes. Colours in the SVG are the sRGB equivalents of the OKLCH tokens:
paper `#fbfaf6`, ink `#2b2520`, muted `#6e6862`, rule `#d7d4ce`, accent
`#a55535`.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). `public/CNAME`
points the Pages site at `www.jalu.dev` — do not delete it.
