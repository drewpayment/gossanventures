import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/sections/cta-band'
import { Icon } from '@/components/icon'
import { ButtonLink } from '@/components/ui'
import { JsonLd } from '@/components/json-ld'
import { getRelatedServices, getService, services } from '@/lib/services'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: service.title,
    description: service.summary,
    openGraph: { title: service.title, description: service.summary },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.related)

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={service.title}
        title={service.heroHeadline}
        intro={service.heroSubhead}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.title }]}
      >
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get a free assessment</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            All services
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview + outcomes */}
      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Overview</span>
            {service.overview.map((para) => (
              <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-ink/75">
                {para}
              </p>
            ))}
          </div>

          <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-lg font-semibold text-ink">What it delivers</h2>
            <dl className="mt-5 flex flex-col gap-5">
              {service.outcomes.map((o) => (
                <div key={o.label} className="flex flex-col gap-1 border-t border-teal-100 pt-4 first:border-0 first:pt-0">
                  <dt className="font-display text-3xl font-bold text-teal">{o.value}</dt>
                  <dd className="text-sm text-ink/60">{o.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-sand-light py-20">
        <div className="container-px">
          <h2 className="heading-display text-3xl sm:text-4xl">What’s included</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-sand-deep bg-sand-deep sm:grid-cols-2">
            {service.capabilities.map((cap) => (
              <div key={cap.title} className="flex flex-col gap-3 bg-cloud p-8">
                <h3 className="font-display text-lg font-semibold text-ink">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="heading-display text-3xl sm:text-4xl">Questions, answered</h2>
          <dl className="flex flex-col divide-y divide-teal-100 border-y border-teal-100">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="flex flex-col gap-2 py-6">
                <dt className="font-display text-lg font-semibold text-ink">{faq.question}</dt>
                <dd className="leading-relaxed text-ink/70">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 ? (
        <section className="bg-seafoam-soft py-20">
          <div className="container-px">
            <h2 className="heading-display text-2xl sm:text-3xl">Often paired with</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-seafoam-soft text-teal-700 group-hover:bg-teal group-hover:text-white">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  )
}
