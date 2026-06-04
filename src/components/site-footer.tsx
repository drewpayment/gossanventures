import { BrandLockup } from './brand-mark'
import type { SiteSettings } from '@/lib/types'

const FOOTER_NAV = [
  {
    title: 'Capabilities',
    links: [
      { label: 'Freight Brokerage', href: '#services' },
      { label: 'Managed Transportation', href: '#services' },
      { label: 'Supply Chain Consulting', href: '#services' },
      { label: 'Freight Audit & Procurement', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Gossan', href: '#why' },
      { label: 'Our Process', href: '#process' },
      { label: 'Industries', href: '#industries' },
      { label: 'Results', href: '#results' },
    ],
  },
]

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear()
  const location = [settings.city, settings.region].filter(Boolean).join(', ')

  return (
    <footer className="bg-ink text-seafoam-light">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <BrandLockup companyName={settings.companyName} variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-seafoam-light/70">
              {settings.tagline}
            </p>
            {settings.linkedinUrl ? (
              <a
                href={settings.linkedinUrl}
                className="inline-flex w-fit items-center gap-2 text-sm text-seafoam-light/80 hover:text-white"
              >
                LinkedIn →
              </a>
            ) : null}
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-seafoam">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-seafoam-light/75 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-seafoam">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-seafoam-light/75">
              <li>
                <a href={`mailto:${settings.email}`} className="transition-colors hover:text-white">
                  {settings.email}
                </a>
              </li>
              <li>
                <a href={`tel:${settings.phone.replace(/[^\d+]/g, '')}`} className="transition-colors hover:text-white">
                  {settings.phone}
                </a>
              </li>
              {location ? <li>{location}</li> : null}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-seafoam-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.legalName}. All rights reserved.
          </p>
          <p>Independent logistics advisory — not affiliated with any third-party carrier or broker named herein.</p>
        </div>
      </div>
    </footer>
  )
}
