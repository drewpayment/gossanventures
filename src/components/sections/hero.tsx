import Image from 'next/image'
import { ButtonLink } from '../ui'
import type { HomeContent } from '@/lib/types'

export function Hero({ hero }: { hero: HomeContent['hero'] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-seafoam-soft via-cloud to-cloud">
      <div className="absolute inset-0 bg-contours opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-seafoam/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-px relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="flex flex-col gap-7 animate-fade-up">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="heading-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {hero.headingLead}{' '}
            <span className="text-teal">{hero.headingHighlight}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70">{hero.subheading}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={hero.primaryCtaHref}>{hero.primaryCtaLabel}</ButtonLink>
            <ButtonLink href={hero.secondaryCtaHref} variant="secondary">
              {hero.secondaryCtaLabel}
            </ButtonLink>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/55">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400" /> Senior-led accounts
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400" /> Transparent pricing
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400" /> No minimums
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 -rotate-3 rounded-4xl bg-teal/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-4xl border border-teal-100 bg-white p-8 shadow-lift">
            <Image
              src="/brand/gossan-logo.jpg"
              alt="Gossan Ventures LLC logo"
              width={1206}
              height={1192}
              priority
              className="mx-auto h-auto w-full max-w-xs"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-teal-100 bg-cloud px-5 py-4 shadow-card sm:block">
            <p className="font-display text-2xl font-bold text-teal">12–24%</p>
            <p className="text-xs font-medium uppercase tracking-wider text-ink/55">typical freight savings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
