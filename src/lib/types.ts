export type IconName =
  | 'truck'
  | 'network'
  | 'route'
  | 'clipboard'
  | 'search'
  | 'shield'
  | 'refresh'
  | 'chart'
  | 'compass'
  | 'handshake'
  | 'layers'
  | 'anchor'

export interface Stat {
  value: string
  label: string
}

export interface Industry {
  name: string
  icon: IconName
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
}

export interface Metric {
  value: string
  label: string
}

export interface CaseStudy {
  title: string
  client?: string
  industry?: string
  challenge: string
  solution: string
  metrics: Metric[]
}

export interface Differentiator {
  icon: IconName
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface SiteSettings {
  companyName: string
  legalName: string
  tagline: string
  email: string
  phone: string
  city?: string
  region?: string
  linkedinUrl?: string
}

export interface HomeContent {
  hero: {
    eyebrow: string
    headingLead: string
    headingHighlight: string
    subheading: string
    primaryCtaLabel: string
    primaryCtaHref: string
    secondaryCtaLabel: string
    secondaryCtaHref: string
  }
  trustStats: Stat[]
  differentiatorsHeading: string
  differentiatorsIntro: string
  differentiators: Differentiator[]
  processHeading: string
  processIntro: string
  processSteps: ProcessStep[]
  cta: {
    heading: string
    body: string
    buttonLabel: string
  }
}

/* ---------- Services ---------- */

export interface ServiceCapability {
  title: string
  description: string
}

export interface Faq {
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  icon: IconName
  title: string
  /** Short label used in nav/cards. */
  tagline: string
  /** One- or two-sentence card description. */
  summary: string
  heroHeadline: string
  heroSubhead: string
  overview: string[]
  capabilities: ServiceCapability[]
  outcomes: Stat[]
  faqs: Faq[]
  related: string[]
}

/* ---------- Insights ---------- */

export type InsightCategory = 'Cost' | 'Strategy' | 'Operations' | 'Market'

export interface InsightSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface Insight {
  slug: string
  title: string
  excerpt: string
  category: InsightCategory
  date: string
  author: string
  role: string
  readMinutes: number
  body: InsightSection[]
  related?: string[]
}
