import { Icon } from '../icon'
import { SectionHeading } from '../ui'
import type { Differentiator } from '@/lib/types'

export function WhyGossan({
  heading,
  intro,
  items,
}: {
  heading: string
  intro: string
  items: Differentiator[]
}) {
  return (
    <section id="why" className="bg-sand-light py-24">
      <div className="container-px">
        <SectionHeading eyebrow="Why Gossan" title={heading} intro={intro} />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-sand-deep bg-sand-deep sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 bg-cloud p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
