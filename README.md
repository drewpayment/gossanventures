# Gossan Ventures — Marketing Site

Marketing site for **Gossan Ventures LLC**, a senior-led logistics & supply chain
advisory and freight brokerage. Built with **Next.js (App Router)** and **Tailwind CSS**,
deployable to **Vercel**.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, trust stats, services, why-us, process, industries, results, about, contact |
| `/services` | Capabilities overview |
| `/services/[slug]` | Service detail (freight brokerage, managed transportation, supply chain consulting, freight audit) |
| `/insights` | Articles listing |
| `/insights/[slug]` | Individual article |
| `/about` | The Gossan story + values |
| `/contact` | Contact form + details |

## Content

All copy lives in plain TypeScript modules under `src/lib/` — no CMS or database:

- `src/lib/site.ts` — company details, homepage copy, stats, differentiators, process, industries, testimonials, case studies
- `src/lib/services.ts` — service definitions (powers cards + detail pages)
- `src/lib/insights.ts` — articles

Edit those files to change content; pages are statically generated at build time.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Optional: `cp .env.example .env` and set `NEXT_PUBLIC_SITE_URL` for correct
absolute URLs in SEO/OG metadata.

## Contact form (Resend)

The form (`src/app/actions.ts`) emails submissions via [Resend](https://resend.com).
Set these env vars in production (and in `.env` locally to test real sending):

- `RESEND_API_KEY` — your Resend API key
- `LEAD_TO_EMAIL` — inbox that receives enquiries
- `LEAD_FROM_EMAIL` — a verified sender, e.g. `Gossan Ventures <leads@yourdomain.com>`

Without `RESEND_API_KEY`, submissions are logged server-side and the form still
returns success (handy for local dev). The lead's email is set as `reply-to`, so
you can reply directly from your inbox.

## SEO

- `src/app/sitemap.ts` → `/sitemap.xml` (all pages incl. services + articles)
- `src/app/robots.ts` → `/robots.txt`
- JSON-LD structured data: Organization + WebSite (sitewide), Service + FAQ +
  Breadcrumb (service pages), BlogPosting + Breadcrumb (articles)

Set `NEXT_PUBLIC_SITE_URL` so canonical/OG/sitemap URLs are absolute and correct.

## Deploy to Vercel

1. Push to GitHub and import the repo in Vercel (framework auto-detected).
2. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
3. Deploy.

## Brand

Palette and type are derived from the Gossan Ventures logo and tokenized in
`tailwind.config.ts` (deep teal, seafoam, warm sand, sunrise). Display type is
Fraunces; body is Inter.
