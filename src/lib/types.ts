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

export interface Service {
  title: string
  slug?: string
  icon: IconName
  summary: string
  features: string[]
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

export interface Stat {
  value: string
  label: string
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
