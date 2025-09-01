Dieses Projekt ist ein Next.js App Router Setup mit Tailwind v4, shadcn/ui, Framer Motion und System-Theming.

## Schnellstart

Entwicklungsserver starten:

```bash
pnpm dev
```

Öffne [http://localhost:3000](http://localhost:3000).

Hauptseite liegt in `src/app/page.tsx`.

Fonts via `next/font` (Geist Sans/Mono) sind bereits integriert.

## Stack
- Next.js 15 (App Router, RSC)
- Tailwind v4 (`@theme` Variablen), `tailwindcss-animate`
- shadcn/ui (Button, Card, Navigation Menu, Input, Separator)
- Framer Motion (Page Transitions)
- next-themes (Dark/Light/System)

## Struktur
- `src/app/layout.tsx`: Metadata, Provider, Layout, Header/Footer
- `src/app/template.tsx`: Page Transitions
- `src/app/(pages)`: `page.tsx`, `features/page.tsx`, `contact/page.tsx`
- `src/components/ui/*`: shadcn/ui Komponenten
- `src/components/site/*`: Header/Footer
- `src/app/robots.ts`, `src/app/sitemap.ts`: SEO-Basics

## Designhinweise
- Trendfarben mit sanftem Neon‑Glow über radiale Gradients (OKLCH).
- Respektiert `prefers-reduced-motion` via Framer Motion Defaults.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Regeln
Siehe `/.cursorrules`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
