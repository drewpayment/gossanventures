import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { WhyGossan } from '@/components/sections/why-gossan'
import { CtaBand } from '@/components/sections/cta-band'
import { home } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Gossan Ventures is a senior-led logistics advisory and brokerage — national-3PL capability with the transparency and accountability of a true partner.',
}

const values = [
  { k: 'Senior-led', v: 'Every account owned by a principal — no rotating junior desk.' },
  { k: 'Open-book', v: 'Transparent margins and clean invoices, every time.' },
  { k: 'Independent', v: 'Carrier-agnostic. We answer to your numbers, not a network quota.' },
  { k: 'Accountable', v: 'We report against your KPIs and stand behind them.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Gossan"
        title="Named for the signal that marks hidden value"
        intro="In geology, a gossan is the rust-colored outcrop that signals a rich ore deposit beneath the surface. For centuries, prospectors learned to read it to find the value everyone else walked past."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink/75">
            <p>
              That is how we approach logistics. The value in your supply chain is already there — buried in your invoices,
              your lanes, your carrier mix, and your service exceptions. Most shippers never get to it because their broker
              is built to move the next load, not to read the signals.
            </p>
            <p>
              Gossan Ventures was founded to be the alternative: a senior-led advisory and brokerage that combines the
              capability of a national 3PL with the transparency and accountability of a true partner. No call centers, no
              mystery margins, no being the last to know.
            </p>
            <p>
              We are deliberately built to stay close to the work. Principals own accounts. Pricing is open-book. We are
              carrier-agnostic, so our advice serves your network rather than a quota. And because we run freight every
              day, our strategy is grounded in what actually happens on the road — not a whiteboard.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item.k} className="rounded-2xl border border-teal-100 bg-cloud p-6">
                <p className="font-display text-base font-semibold text-teal">{item.k}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyGossan
        heading={home.differentiatorsHeading}
        intro={home.differentiatorsIntro}
        items={home.differentiators}
      />

      <CtaBand />
    </>
  )
}
