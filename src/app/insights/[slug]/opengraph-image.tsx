import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from '@/lib/og'
import { getInsight, insights } from '@/lib/insights'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Gossan Ventures — Insight'

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getInsight(slug)
  return ogImage({
    eyebrow: post?.category ?? 'Insights',
    title: post?.title ?? 'Insights',
  })
}
