import { SectionHeading } from '../ui'
import type { CaseStudy, Testimonial } from '@/lib/types'

export function Results({
  testimonials,
  caseStudies,
}: {
  testimonials: Testimonial[]
  caseStudies: CaseStudy[]
}) {
  return (
    <section id="results" className="bg-seafoam-soft py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Results"
          title="Measured by your numbers, not ours"
          intro="Real engagements, real outcomes. We report against the metrics that move your P&L."
        />

        {caseStudies.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="flex flex-col gap-6 rounded-3xl border border-teal-100 bg-white p-8 shadow-card">
                <div className="flex flex-col gap-2">
                  {cs.client ? (
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-500">{cs.client}</span>
                  ) : null}
                  <h3 className="font-display text-xl font-semibold text-ink">{cs.title}</h3>
                </div>

                <div className="grid gap-4 text-sm leading-relaxed text-ink/70">
                  <p>
                    <span className="font-semibold text-ink">Challenge — </span>
                    {cs.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">What we did — </span>
                    {cs.solution}
                  </p>
                </div>

                {cs.metrics.length > 0 ? (
                  <div className="mt-auto grid grid-cols-3 gap-4 border-t border-teal-100 pt-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-1">
                        <span className="font-display text-2xl font-bold text-teal">{m.value}</span>
                        <span className="text-xs leading-snug text-ink/55">{m.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {testimonials.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author + t.quote} className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-card">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-seafoam" fill="currentColor" aria-hidden="true">
                  <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6c0-1 1-2 2-2h2V7Zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-4c0-1 1-2 2-2h2V7Z" />
                </svg>
                <blockquote className="text-sm leading-relaxed text-ink/80">“{t.quote}”</blockquote>
                <figcaption className="mt-auto border-t border-teal-100 pt-4 text-sm">
                  <span className="font-semibold text-ink">{t.author}</span>
                  {t.role ? <span className="block text-ink/55">{t.role}</span> : null}
                  {t.company ? <span className="block text-ink/55">{t.company}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
