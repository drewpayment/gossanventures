import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Process } from '@/components/sections/process'
import { CtaBand } from '@/components/sections/cta-band'
import { Icon } from '@/components/icon'
import { services } from '@/lib/services'
import { home } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Freight brokerage, managed transportation, supply chain consulting, and freight audit & procurement — senior-led, transparent, and accountable to your numbers.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Everything a national 3PL does — without the bureaucracy"
        intro="Four core capabilities, one senior team. Engage us for a single tough lane or hand us your entire transportation function. Either way, you get transparency, accountability, and no lock-in."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-20">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col gap-5 rounded-3xl border border-teal-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-seafoam-soft text-teal-700 transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink">{service.title}</h2>
                  <p className="text-sm text-teal-600">{service.tagline}</p>
                </div>
              </div>

              <p className="leading-relaxed text-ink/70">{service.summary}</p>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <li key={cap.title} className="flex items-start gap-2 text-sm text-ink/75">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
                    {cap.title}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${service.slug}`}
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700 transition-all hover:gap-2.5 hover:text-teal-900"
              >
                Explore {service.title}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Process heading={home.processHeading} intro={home.processIntro} steps={home.processSteps} />

      <CtaBand />
    </>
  )
}
