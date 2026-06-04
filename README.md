# Gossan Ventures — Marketing Site

Marketing site for **Gossan Ventures LLC**, a senior-led logistics & supply chain
advisory and freight brokerage. Built with **Next.js (App Router)**, **Tailwind CSS**,
and **Payload CMS 3** (MongoDB), deployable to **Vercel**.

## Architecture

One Next.js app, two route groups:

- `src/app/(frontend)` — the public marketing site.
- `src/app/(payload)` — the Payload admin UI (`/admin`) and REST/GraphQL API.

All page copy is editable in the CMS. Until a database is connected, the site
renders polished **default content** from `src/lib/defaults.ts`, so it always looks
complete.

### What's editable in `/admin`

| Area | Type | Location |
| --- | --- | --- |
| Hero, trust stats, differentiators, process, closing CTA | Global | **Home Page** |
| Company name, contact details, tagline | Global | **Site Settings** |
| Services (FTL/LTL, Managed, Consulting, Audit) | Collection | **Services** |
| Industries | Collection | **Industries** |
| Testimonials | Collection | **Testimonials** |
| Case studies | Collection | **Case Studies** |
| Contact-form submissions | Collection | **Leads** (Inbox) |

## Local development

1. Copy env and fill it in:

   ```bash
   cp .env.example .env
   ```

   - `PAYLOAD_SECRET` — `openssl rand -base64 32`
   - `DATABASE_URI` — a MongoDB connection string (local or MongoDB Atlas)

2. Install and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open:
   - Site → http://localhost:3000
   - CMS → http://localhost:3000/admin (create the first admin user on first visit)

> The site runs **without** a database too — it just serves the default content
> and the contact form is disabled until `DATABASE_URI` / `PAYLOAD_SECRET` are set.

## Useful scripts

```bash
npm run dev                # start dev server
npm run build              # production build
npm run generate:types     # regenerate src/payload-types.ts from collections
npm run generate:importmap # regenerate the admin import map (after adding custom components)
```

## Deploying to Vercel

1. Push to GitHub and import the repo in Vercel.
2. Add environment variables in the Vercel project:
   - `PAYLOAD_SECRET`
   - `DATABASE_URI` (MongoDB Atlas connection string)
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
3. Deploy. Visit `/admin` to create the first user and start editing.

## Brand

Palette and type are derived from the Gossan Ventures logo and tokenized in
`tailwind.config.ts` (deep teal, seafoam, warm sand, sunrise). Display type is
Fraunces; body is Inter.
