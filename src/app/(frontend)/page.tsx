import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Services } from '@/components/sections/services'
import { WhyGossan } from '@/components/sections/why-gossan'
import { Process } from '@/components/sections/process'
import { Industries } from '@/components/sections/industries'
import { Results } from '@/components/sections/results'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import {
  getCaseStudies,
  getHome,
  getIndustries,
  getServices,
  getSiteSettings,
  getTestimonials,
} from '@/lib/content'

// Content is CMS-driven; render per request so edits appear without a rebuild.
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [home, settings, services, industries, testimonials, caseStudies] = await Promise.all([
    getHome(),
    getSiteSettings(),
    getServices(),
    getIndustries(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <>
      <Hero hero={home.hero} />
      <TrustBar stats={home.trustStats} />
      <Services services={services} />
      <WhyGossan
        heading={home.differentiatorsHeading}
        intro={home.differentiatorsIntro}
        items={home.differentiators}
      />
      <Process heading={home.processHeading} intro={home.processIntro} steps={home.processSteps} />
      <Industries industries={industries} />
      <Results testimonials={testimonials} caseStudies={caseStudies} />
      <About />
      <Contact cta={home.cta} settings={settings} />
    </>
  )
}
