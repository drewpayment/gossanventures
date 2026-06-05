import { SectionHeading } from '../ui'
import type { ProcessStep } from '@/lib/types'

export function Process({
  heading,
  intro,
  steps,
}: {
  heading: string
  intro: string
  steps: ProcessStep[]
}) {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-cloud">
      <div className="absolute inset-0 bg-contours opacity-[0.12]" aria-hidden="true" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Method"
          title={heading}
          intro={intro}
          className="[&_.eyebrow]:text-seafoam [&_h2]:text-white [&_p]:text-seafoam-light/80"
        />

        <ol className="mt-16 grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-seafoam/40 font-display text-lg font-bold text-seafoam">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="hidden h-px flex-1 bg-gradient-to-r from-seafoam/40 to-transparent md:block" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-seafoam-light/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
