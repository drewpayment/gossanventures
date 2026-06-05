import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from '@/lib/og'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Gossan Ventures — Insights'

export default function Image() {
  return ogImage({
    eyebrow: 'Insights',
    title: 'Straight talk on freight, cost, and supply chain strategy',
  })
}
