import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from '@/lib/og'
import { siteSettings } from '@/lib/site'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Gossan Ventures — Logistics & Supply Chain Advisory'

export default function Image() {
  return ogImage({
    eyebrow: 'Logistics & Supply Chain Advisory',
    title: siteSettings.tagline,
  })
}
