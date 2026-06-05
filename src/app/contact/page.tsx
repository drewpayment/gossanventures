import type { Metadata } from 'next'
import { Contact } from '@/components/sections/contact'
import { siteSettings } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free, no-obligation freight assessment. Send us a recent invoice or your top lanes and we’ll show you where the savings and service gains are.',
}

const contactCta = {
  heading: 'Get a free freight assessment',
  body: 'Send us a recent freight invoice or a list of your top lanes. Within a week we’ll show you where the savings and service gains are — no obligation, no sales theater. Prefer to talk first? Use the details here and we’ll set up a call.',
  buttonLabel: 'Request my free assessment',
}

export default function ContactPage() {
  return (
    <div className="pt-8">
      <Contact cta={contactCta} settings={siteSettings} />
    </div>
  )
}
