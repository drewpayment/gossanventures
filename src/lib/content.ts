import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

import {
  defaultCaseStudies,
  defaultHome,
  defaultIndustries,
  defaultServices,
  defaultSiteSettings,
  defaultTestimonials,
} from './defaults'
import type {
  CaseStudy,
  HomeContent,
  IconName,
  Industry,
  Service,
  SiteSettings,
  Testimonial,
} from './types'

/**
 * Returns an initialized Payload client, or null if the CMS isn't configured
 * (no DB / secret) or fails to connect. Every consumer falls back to the
 * default content so the site always renders.
 */
async function getClient() {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    return null
  }
  try {
    return await getPayload({ config })
  } catch (err) {
    console.warn('[content] Payload unavailable, using default content:', (err as Error).message)
    return null
  }
}

const asIcon = (value: unknown): IconName => (value as IconName) || 'compass'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nonEmpty = <T>(arr: T[] | undefined | null, fallback: T[]): T[] =>
  arr && arr.length > 0 ? arr : fallback

export async function getSiteSettings(): Promise<SiteSettings> {
  const payload = await getClient()
  if (!payload) return defaultSiteSettings
  try {
    const g = (await payload.findGlobal({ slug: 'site-settings' })) as Record<string, unknown>
    return {
      companyName: (g.companyName as string) || defaultSiteSettings.companyName,
      legalName: (g.legalName as string) || defaultSiteSettings.legalName,
      tagline: (g.tagline as string) || defaultSiteSettings.tagline,
      email: (g.email as string) || defaultSiteSettings.email,
      phone: (g.phone as string) || defaultSiteSettings.phone,
      city: (g.city as string) || defaultSiteSettings.city,
      region: (g.region as string) || defaultSiteSettings.region,
      linkedinUrl: (g.linkedinUrl as string) || defaultSiteSettings.linkedinUrl,
    }
  } catch {
    return defaultSiteSettings
  }
}

export async function getHome(): Promise<HomeContent> {
  const payload = await getClient()
  if (!payload) return defaultHome
  try {
    const g = (await payload.findGlobal({ slug: 'home-page' })) as Record<string, any>
    const hero = g.hero || {}
    const cta = g.cta || {}
    return {
      hero: {
        eyebrow: hero.eyebrow || defaultHome.hero.eyebrow,
        headingLead: hero.headingLead || defaultHome.hero.headingLead,
        headingHighlight: hero.headingHighlight || defaultHome.hero.headingHighlight,
        subheading: hero.subheading || defaultHome.hero.subheading,
        primaryCtaLabel: hero.primaryCtaLabel || defaultHome.hero.primaryCtaLabel,
        primaryCtaHref: hero.primaryCtaHref || defaultHome.hero.primaryCtaHref,
        secondaryCtaLabel: hero.secondaryCtaLabel || defaultHome.hero.secondaryCtaLabel,
        secondaryCtaHref: hero.secondaryCtaHref || defaultHome.hero.secondaryCtaHref,
      },
      trustStats: nonEmpty(
        (g.trustStats || []).map((s: any) => ({ value: s.value, label: s.label })),
        defaultHome.trustStats,
      ),
      differentiatorsHeading: g.differentiatorsHeading || defaultHome.differentiatorsHeading,
      differentiatorsIntro: g.differentiatorsIntro || defaultHome.differentiatorsIntro,
      differentiators: nonEmpty(
        (g.differentiators || []).map((d: any) => ({
          icon: asIcon(d.icon),
          title: d.title,
          description: d.description,
        })),
        defaultHome.differentiators,
      ),
      processHeading: g.processHeading || defaultHome.processHeading,
      processIntro: g.processIntro || defaultHome.processIntro,
      processSteps: nonEmpty(
        (g.processSteps || []).map((p: any) => ({ title: p.title, description: p.description })),
        defaultHome.processSteps,
      ),
      cta: {
        heading: cta.heading || defaultHome.cta.heading,
        body: cta.body || defaultHome.cta.body,
        buttonLabel: cta.buttonLabel || defaultHome.cta.buttonLabel,
      },
    }
  } catch {
    return defaultHome
  }
}

export async function getServices(): Promise<Service[]> {
  const payload = await getClient()
  if (!payload) return defaultServices
  try {
    const res = await payload.find({ collection: 'services', sort: 'order', limit: 50 })
    const docs: Service[] = (res.docs as any[]).map((d) => ({
      title: d.title,
      slug: d.slug,
      icon: asIcon(d.icon),
      summary: d.summary,
      features: (d.features || []).map((f: any) => f.feature).filter(Boolean),
    }))
    return nonEmpty(docs, defaultServices)
  } catch {
    return defaultServices
  }
}

export async function getIndustries(): Promise<Industry[]> {
  const payload = await getClient()
  if (!payload) return defaultIndustries
  try {
    const res = await payload.find({ collection: 'industries', sort: 'order', limit: 50 })
    const docs: Industry[] = (res.docs as any[]).map((d) => ({
      name: d.name,
      icon: asIcon(d.icon),
      description: d.description,
    }))
    return nonEmpty(docs, defaultIndustries)
  } catch {
    return defaultIndustries
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const payload = await getClient()
  if (!payload) return defaultTestimonials
  try {
    const res = await payload.find({ collection: 'testimonials', sort: 'order', limit: 50 })
    const docs: Testimonial[] = (res.docs as any[]).map((d) => ({
      quote: d.quote,
      author: d.author,
      role: d.role,
      company: d.company,
    }))
    return nonEmpty(docs, defaultTestimonials)
  } catch {
    return defaultTestimonials
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const payload = await getClient()
  if (!payload) return defaultCaseStudies
  try {
    const res = await payload.find({ collection: 'case-studies', sort: 'order', limit: 50 })
    const docs: CaseStudy[] = (res.docs as any[]).map((d) => ({
      title: d.title,
      client: d.client,
      industry: d.industry,
      challenge: d.challenge,
      solution: d.solution,
      metrics: (d.metrics || []).map((m: any) => ({ value: m.value, label: m.label })),
    }))
    return nonEmpty(docs, defaultCaseStudies)
  } catch {
    return defaultCaseStudies
  }
}
