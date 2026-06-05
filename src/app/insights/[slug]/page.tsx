import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/sections/cta-band'
import {
  formatInsightDate,
  getInsight,
  getRelatedInsights,
  insights,
} from '@/lib/insights'

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getInsight(slug)
  if (!post) return { title: 'Article not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getInsight(slug)
  if (!post) notFound()

  const related = getRelatedInsights(post.related)

  return (
    <>
      <article>
        {/* Header */}
        <header className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-seafoam-soft via-cloud to-cloud">
          <div className="absolute inset-0 bg-contours opacity-60" aria-hidden="true" />
          <div className="container-px relative py-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink/50">
              <Link href="/" className="hover:text-teal-700">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/insights" className="hover:text-teal-700">
                Insights
              </Link>
            </nav>
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="w-fit rounded-full bg-seafoam-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                {post.category}
              </span>
              <h1 className="heading-display text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{post.title}</h1>
              <p className="text-lg leading-relaxed text-ink/70">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-ink/55">
                <span className="font-medium text-ink/75">{post.author}</span>
                <span aria-hidden="true">·</span>
                <span>{formatInsightDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readMinutes} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-px py-16">
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            {post.body.map((section, i) => (
              <section key={i} className="flex flex-col gap-4">
                {section.heading ? (
                  <h2 className="heading-display text-2xl text-ink">{section.heading}</h2>
                ) : null}
                {section.paragraphs?.map((para) => (
                  <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-ink/80">
                    {para}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="flex flex-col gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 24)} className="flex items-start gap-3 text-lg leading-relaxed text-ink/80">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-2 h-4 w-4 shrink-0 text-teal-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m4 10.5 4 4 8-9" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="mt-4 rounded-3xl border border-teal-100 bg-sand-light p-8 text-center">
              <p className="font-display text-xl font-semibold text-ink">See how this applies to your freight</p>
              <p className="mt-2 text-ink/70">A quantified read on your network, usually within a week.</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-teal-700 hover:shadow-lift"
              >
                Get a free assessment →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 ? (
        <section className="bg-seafoam-soft py-20">
          <div className="container-px">
            <h2 className="heading-display text-2xl sm:text-3xl">Keep reading</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/insights/${r.slug}`}
                  className="group flex flex-col gap-3 rounded-3xl border border-teal-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="w-fit rounded-full bg-seafoam-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {r.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-teal-800">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  )
}
