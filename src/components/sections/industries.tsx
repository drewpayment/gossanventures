import { Icon } from '../icon'
import { SectionHeading } from '../ui'
import type { Industry } from '@/lib/types'

export function Industries({ industries }: { industries: Industry[] }) {
  return (
    <section id="industries" className="py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries"
          title="Freight expertise tuned to your world"
          intro="We adapt our carrier strategy, equipment mix, and service design to the realities of your industry — not a one-size-fits-all playbook."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 transition-colors hover:border-teal-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-seafoam-soft text-teal-700">
                <Icon name={industry.icon} className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-base font-semibold text-ink">{industry.name}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
