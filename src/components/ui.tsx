import Link from 'next/link'
import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-teal text-white shadow-card hover:bg-teal-700 hover:shadow-lift hover:-translate-y-0.5',
  secondary: 'bg-white text-teal-700 ring-1 ring-teal-200 hover:ring-teal-400 hover:-translate-y-0.5',
  ghost: 'text-teal-700 hover:text-teal-900',
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: { variant?: Variant } & ComponentProps<'button'>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  className?: string
}) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="heading-display text-3xl sm:text-4xl">{title}</h2>
      {intro ? <p className="text-lg leading-relaxed text-ink/70">{intro}</p> : null}
    </div>
  )
}
