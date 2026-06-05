import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Services } from '@/components/sections/services'
import { WhyGossan } from '@/components/sections/why-gossan'
import { Process } from '@/components/sections/process'
import { Industries } from '@/components/sections/industries'
import { Results } from '@/components/sections/results'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { caseStudies, home, industries, siteSettings, testimonials } from '@/lib/site'
import { services } from '@/lib/services'

export default function HomePage() {
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
      <Contact cta={home.cta} settings={siteSettings} />
    </>
  )
}
