import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string
  crumbs?: Crumb[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-seafoam-soft via-cloud to-cloud">
      <div className="absolute inset-0 bg-contours opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-seafoam/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative py-16 lg:py-20">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink/50">
            {crumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-teal-700">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ink/70">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="flex max-w-3xl flex-col gap-5 animate-fade-up">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="heading-display text-4xl leading-[1.08] sm:text-5xl">{title}</h1>
          {intro ? <p className="max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p> : null}
          {children}
        </div>
      </div>
    </section>
  )
}
