import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/sections/cta-band'
import { formatInsightDate, getAllInsights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Practical perspective on freight cost, supply chain strategy, and getting more from your transportation function — from the Gossan Ventures advisory team.',
}

export default function InsightsPage() {
  const posts = getAllInsights()
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Straight talk on freight, cost, and supply chain strategy"
        intro="No fluff and no jargon — practical perspective for shippers who want to spend less, ship better, and stop being the last to know."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
      />

      <section className="py-16">
        <div className="container-px">
          {featured ? (
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid gap-8 rounded-4xl border border-teal-100 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2 lg:p-10"
            >
              <div className="flex aspect-[16/10] items-center justify-center rounded-3xl bg-gradient-to-br from-teal to-teal-800 bg-contours">
                <span className="font-display text-6xl font-bold text-white/90">G</span>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                  <span className="rounded-full bg-seafoam-soft px-3 py-1 text-teal-700">{featured.category}</span>
                  <span className="text-ink/45">Featured</span>
                </div>
                <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="leading-relaxed text-ink/70">{featured.excerpt}</p>
                <div className="mt-1 flex items-center gap-3 text-sm text-ink/50">
                  <span>{formatInsightDate(featured.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readMinutes} min read</span>
                </div>
              </div>
            </Link>
          ) : null}

          {rest.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col gap-4 rounded-3xl border border-teal-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="w-fit rounded-full bg-seafoam-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-teal-800">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-ink/50">
                    <span>{formatInsightDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand
        heading="Prefer a conversation to a blog post?"
        body="Tell us about your freight and we’ll give you a straight, quantified read — usually within a week."
        buttonLabel="Talk to us"
      />
    </>
  )
}
