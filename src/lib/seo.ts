import { siteSettings } from './site'
import type { Insight, ServiceDetail } from './types'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')

export const absoluteUrl = (path = '') => `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

const ORG_ID = `${siteUrl}/#organization`
const logoUrl = absoluteUrl('/brand/gossan-logo.jpg')

export function organizationSchema() {
  const sameAs = [siteSettings.linkedinUrl].filter(Boolean) as string[]
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteSettings.legalName,
    alternateName: siteSettings.companyName,
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    email: siteSettings.email,
    telephone: siteSettings.phone,
    description:
      'Senior-led logistics and supply chain advisory and freight brokerage for mid-market shippers — national-3PL capability with boutique accountability.',
    areaServed: 'US',
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteSettings.companyName,
    url: siteUrl,
    publisher: { '@id': ORG_ID },
  }
}

export function serviceSchema(service: ServiceDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    areaServed: 'US',
    provider: { '@id': ORG_ID },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function articleSchema(post: Insight) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    url: absoluteUrl(`/insights/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/insights/${post.slug}`),
    author: { '@type': 'Organization', name: siteSettings.companyName, url: siteUrl },
    publisher: { '@id': ORG_ID },
    image: logoUrl,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
