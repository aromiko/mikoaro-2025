# miko-aro.com

Personal site for Miko Aro, Frontend Web Developer.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, typed routes, fully static output)
- React 19
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- TypeScript (strict, `noUncheckedIndexedAccess`)
- ESLint 9 flat config (`eslint-config-next`), Prettier with import sorting + Tailwind class sorting

## Getting started

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev
```

## Scripts

| Script              | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Dev server on http://localhost:3000          |
| `npm run build`     | Production build                             |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | ESLint                                       |
| `npm run typecheck` | Generate route types, then `tsc --noEmit`    |
| `npm run format`    | Prettier (write)                             |
| `npm run check`     | lint + typecheck + format check (same as CI) |

## Project layout

```
src/
  app/                 Routes, metadata, sitemap.ts, robots.ts, globals.css
    assets/            Statically imported images (optimized by next/image)
  components/
    layout/            Header, footer, navigation
    sections/          Page sections (hero, banner, work timeline)
    ui/                shadcn/ui primitives
    theme/             next-themes provider + toggle
    icons/             Brand icons (no longer shipped by lucide)
  lib/
    site.ts            Site-wide config: URL, email, nav, social links
    data/              Page content
    types.ts           Shared content types
```

Content lives in `src/lib/data` as typed objects, so moving it to a CMS
(e.g. Contentful) later only means swapping those modules for fetchers that
return the same types.
