import { ContactForm } from './contact-form'
import type { HomeContent, SiteSettings } from '@/lib/types'

export function Contact({
  cta,
  settings,
}: {
  cta: HomeContent['cta']
  settings: SiteSettings
}) {
  return (
    <section id="contact" className="bg-sand-light py-24">
      <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">Get started</span>
          <h2 className="heading-display text-3xl sm:text-4xl">{cta.heading}</h2>
          <p className="text-lg leading-relaxed text-ink/70">{cta.body}</p>

          <div className="mt-2 flex flex-col gap-4">
            <ContactRow label="Email" value={settings.email} href={`mailto:${settings.email}`} />
            <ContactRow
              label="Phone"
              value={settings.phone}
              href={`tel:${settings.phone.replace(/[^\d+]/g, '')}`}
            />
          </div>

          <ul className="mt-4 flex flex-col gap-3">
            {[
              'A quantified read on your freight within one week',
              'No obligation and no long-term contract to start',
              'You keep the analysis whether or not we work together',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="10" cy="10" r="8" />
                  <path d="m6.5 10.5 2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-3 text-ink/80">
      <span className="text-xs font-semibold uppercase tracking-wider text-teal-500">{label}</span>
      <span className="font-medium group-hover:text-teal-700">{value}</span>
    </a>
  )
}
