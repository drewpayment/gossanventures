'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BrandLockup } from './brand-mark'
import { ButtonLink } from './ui'

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Why Gossan', href: '/#why' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export function SiteHeader({ companyName }: { companyName: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-teal-100 bg-cloud/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        <BrandLockup companyName={companyName} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="primary" className="px-5 py-2.5">
            Get an assessment
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-teal-100 bg-cloud lg:hidden">
          <nav className="container-px flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-seafoam-soft hover:text-teal-800"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">
              Get an assessment
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
