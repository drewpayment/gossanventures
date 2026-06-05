import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from '@/lib/og'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Gossan Ventures — Services'

export default function Image() {
  return ogImage({
    eyebrow: 'Capabilities',
    title: 'Everything a national 3PL does — without the bureaucracy',
  })
}
