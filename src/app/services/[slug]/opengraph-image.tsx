import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from '@/lib/og'
import { getService, services } from '@/lib/services'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Gossan Ventures — Service'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  return ogImage({
    eyebrow: service?.tagline ?? 'Capabilities',
    title: service?.title ?? 'Services',
  })
}
