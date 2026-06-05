import Link from 'next/link'

/**
 * A crisp, scalable emblem that echoes the Gossan Ventures logo
 * (circle horizon, rising sun, coastal tree). Used in the header and footer
 * so the brand stays sharp at any size; the full raster logo is showcased
 * in the hero.
 */
export function Emblem({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="#1C5F6E" strokeWidth="1.6" />
      {/* water */}
      <path d="M5 26a19 19 0 0 0 38 0Z" fill="#9FD0CE" opacity="0.55" />
      {/* sun */}
      <circle cx="16" cy="24" r="4" fill="#EAD78A" />
      {/* horizon */}
      <path d="M6 26h36" stroke="#1C5F6E" strokeWidth="1.2" strokeLinecap="round" />
      {/* dune */}
      <path d="M7 34c6-5 13-6 19-3s9 3 14 1" fill="none" stroke="#E6D7AE" strokeWidth="2.4" strokeLinecap="round" />
      {/* tree */}
      <path d="M30 31V20" stroke="#143C44" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M30 12c3 1.5 6 2.5 8 2.5-1.5 2-4 3-6.5 3 2.5 1 5 1 7 .3-1.8 2.2-4.6 3.2-7.5 2.7 1.8 1.6 4 2.4 6.2 2.3-2.2 1.8-5 2.4-7.7 1.7"
        fill="#1C5F6E"
      />
      <path
        d="M30 12c-3 1.5-6 2.5-8 2.5 1.5 2 4 3 6.5 3-2.5 1-5 1-7 .3 1.8 2.2 4.6 3.2 7.5 2.7"
        fill="#2E7A85"
      />
    </svg>
  )
}

export function BrandLockup({
  companyName,
  href = '/',
  className = '',
  variant = 'dark',
}: {
  companyName: string
  href?: string
  className?: string
  variant?: 'dark' | 'light'
}) {
  const word = variant === 'light' ? 'text-white' : 'text-ink'
  const sub = variant === 'light' ? 'text-seafoam-light' : 'text-teal-500'
  return (
    <Link href={href} className={`group flex items-center gap-3 ${className}`} aria-label={`${companyName} home`}>
      <Emblem className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-[0.14em] ${word}`}>GOSSAN</span>
        <span className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.34em] ${sub}`}>
          Ventures
        </span>
      </span>
    </Link>
  )
}
