import { ButtonLink } from '../ui'

export function CtaBand({
  heading = 'Let’s find what your freight is hiding.',
  body = 'Send us a recent freight invoice or your top lanes. Within a week we’ll show you where the savings and service gains are — no obligation.',
  buttonLabel = 'Get a free assessment',
  href = '/contact',
}: {
  heading?: string
  body?: string
  buttonLabel?: string
  href?: string
}) {
  return (
    <section className="py-20">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-4xl bg-teal px-8 py-14 text-center text-white shadow-lift sm:px-16">
          <div className="absolute inset-0 bg-contours opacity-[0.14]" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
            <p className="text-lg leading-relaxed text-seafoam-light/90">{body}</p>
            <ButtonLink href={href} variant="secondary" className="mt-2">
              {buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
