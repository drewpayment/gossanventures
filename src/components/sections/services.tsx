import Link from 'next/link'
import { Icon } from '../icon'
import { SectionHeading } from '../ui'
import type { ServiceDetail } from '@/lib/types'

export function Services({ services }: { services: ServiceDetail[] }) {
  return (
    <section id="services" className="py-24">
      <div className="container-px">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-spectrum logistics, run by people who answer the phone"
            intro="From a single tough lane to your entire transportation function — the same senior team, the same standards, the same accountability."
          />
          <Link
            href="/services"
            className="hidden shrink-0 text-sm font-semibold text-teal-700 hover:text-teal-900 sm:inline-flex"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-5 rounded-3xl border border-teal-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-seafoam-soft text-teal-700 transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
              </div>

              <p className="leading-relaxed text-ink/70">{service.summary}</p>

              <ul className="mt-1 grid gap-2.5 sm:grid-cols-2">
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

              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:gap-2.5 group-hover:text-teal-900">
                Learn more
                <span aria-hidden="true" className="transition-all">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/services" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
