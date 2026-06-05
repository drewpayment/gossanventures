import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { siteSettings } from '@/lib/site'
import { organizationSchema, websiteSchema } from '@/lib/seo'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteSettings.companyName} — Logistics & Supply Chain Advisory`,
    template: `%s — ${siteSettings.companyName}`,
  },
  description:
    'Mid-market shippers get national-3PL capability with boutique accountability. Freight brokerage, managed transportation, supply chain consulting, and freight audit — senior-led and transparent.',
  keywords: [
    'logistics consulting',
    'freight brokerage',
    'managed transportation',
    'supply chain consulting',
    '3PL alternative',
    'freight audit',
    'CH Robinson alternative',
  ],
  openGraph: {
    title: `${siteSettings.companyName} — Logistics & Supply Chain Advisory`,
    description:
      'National-3PL capability with boutique accountability — senior-led, transparent freight and supply chain advisory for mid-market shippers.',
    url: siteUrl,
    siteName: siteSettings.companyName,
    type: 'website',
    images: [{ url: '/brand/gossan-logo.jpg', width: 1206, height: 1192, alt: siteSettings.companyName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteSettings.companyName} — Logistics & Supply Chain Advisory`,
    description:
      'National-3PL capability with boutique accountability — senior-led, transparent freight and supply chain advisory.',
  },
  icons: {
    icon: '/brand/gossan-logo.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cloud">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader companyName={siteSettings.companyName} />
        <main>{children}</main>
        <SiteFooter settings={siteSettings} />
      </body>
    </html>
  )
}
