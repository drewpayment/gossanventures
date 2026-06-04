import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getSiteSettings } from '@/lib/content'

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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const title = `${settings.companyName} — Logistics & Supply Chain Advisory`
  const description =
    'Mid-market shippers get national-3PL capability with boutique accountability. Freight brokerage, managed transportation, supply chain consulting, and freight audit — senior-led and transparent.'

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${settings.companyName}`,
    },
    description,
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
      title,
      description,
      url: siteUrl,
      siteName: settings.companyName,
      type: 'website',
      images: [{ url: '/brand/gossan-logo.jpg', width: 1206, height: 1192, alt: settings.companyName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    icons: {
      icon: '/brand/gossan-logo.jpg',
    },
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cloud">
        <SiteHeader companyName={settings.companyName} />
        <main>{children}</main>
        <SiteFooter settings={settings} />
      </body>
    </html>
  )
}
