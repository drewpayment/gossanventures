import type {
  CaseStudy,
  HomeContent,
  Industry,
  Service,
  SiteSettings,
  Testimonial,
} from './types'

/**
 * Default content. This is what renders before the CMS is connected, and it
 * also serves as a fallback for any section an editor leaves empty. Treat it
 * as the canonical "seed" copy for Gossan Ventures.
 */

export const defaultSiteSettings: SiteSettings = {
  companyName: 'Gossan Ventures',
  legalName: 'Gossan Ventures LLC',
  tagline: 'Enterprise logistics capability. Boutique accountability.',
  email: 'hello@gossanventures.com',
  phone: '(555) 010-2842',
  city: '',
  region: '',
  linkedinUrl: '',
}

export const defaultHome: HomeContent = {
  hero: {
    eyebrow: 'Logistics & Supply Chain Advisory',
    headingLead: 'The signals are already in your supply chain.',
    headingHighlight: 'We help you act on them.',
    subheading:
      'Gossan Ventures gives mid-market shippers the capabilities of a national 3PL — without the bureaucracy. Senior-led, transparent, and accountable to your numbers.',
    primaryCtaLabel: 'Get a free freight assessment',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'Explore capabilities',
    secondaryCtaHref: '#services',
  },
  trustStats: [
    { value: '$2B+', label: 'freight under management, career' },
    { value: '98.7%', label: 'on-time delivery across managed lanes' },
    { value: '12–24%', label: 'typical freight-spend reduction' },
    { value: '< 1 hr', label: 'average response, every business day' },
  ],
  differentiatorsHeading: 'Built to be the antidote to the mega-broker',
  differentiatorsIntro:
    'The national brokers run on volume and call centers. We run on senior expertise and straight answers. Here is what changes when you work with Gossan.',
  differentiators: [
    {
      icon: 'handshake',
      title: 'One senior point of contact',
      description:
        'You work directly with a principal who owns your account — not a rotating desk of junior reps reading from a script.',
    },
    {
      icon: 'search',
      title: 'Total cost transparency',
      description:
        'Open-book margins and clean invoices. You always know what you are paying the carrier and what you are paying us. No mystery fees, no billing surprises.',
    },
    {
      icon: 'compass',
      title: 'Advisors first, brokers second',
      description:
        'We fix the network, not just the next load. Every engagement starts by understanding your cost structure, service obligations, and constraints.',
    },
    {
      icon: 'anchor',
      title: 'No minimums, no lock-in',
      description:
        'No 10,000-order floors or rigid workflows. We scale to your volume and earn the next load on performance, not a contract that traps you.',
    },
    {
      icon: 'network',
      title: 'A vetted carrier bench',
      description:
        'A curated network of qualified, insured carriers — matched to your lanes and standards, not whoever is cheapest on the load board today.',
    },
    {
      icon: 'shield',
      title: 'Accountable to your metrics',
      description:
        'On-time percentage, cost per mile, tender acceptance, claims ratio — we report against the numbers that matter and stand behind them.',
    },
  ],
  processHeading: 'How we surface the value',
  processIntro:
    'A gossan is the rust-colored outcrop that signals an ore body beneath the surface — prospectors learned to read it to find the value others walked past. We read your operation the same way.',
  processSteps: [
    {
      title: 'Assess',
      description:
        'We analyze your lanes, invoices, and service requirements to map exactly where cost and risk are hiding. You get a clear, quantified picture — usually within a week.',
    },
    {
      title: 'Design',
      description:
        'We build the routing guide, carrier strategy, and mode mix that fit your network — balancing cost, service, and resilience instead of chasing the lowest sticker price.',
    },
    {
      title: 'Execute',
      description:
        'We source capacity, tender freight, and manage exceptions in real time — with proactive communication so you are never the last to know.',
    },
    {
      title: 'Optimize',
      description:
        'We review performance against your KPIs every period, recover billing errors, and keep tightening the network as your business changes.',
    },
  ],
  cta: {
    heading: 'Let’s find what your freight is hiding.',
    body: 'Send us a recent freight invoice or a list of your top lanes. Within a week we’ll show you where the savings and service gains are — no obligation, no sales theater.',
    buttonLabel: 'Start your assessment',
  },
}

export const defaultServices: Service[] = [
  {
    title: 'Freight Brokerage (FTL/LTL)',
    slug: 'freight-brokerage',
    icon: 'truck',
    summary:
      'Reliable capacity for full-truckload and less-than-truckload freight, sourced from a vetted carrier bench and matched to your lanes, timelines, and service standards.',
    features: [
      'Dry van, reefer, flatbed & specialized equipment',
      'Spot coverage and contracted lane commitments',
      'Carrier vetting, insurance & safety screening',
      'Real-time tracking and proactive exception management',
    ],
  },
  {
    title: 'Managed Transportation',
    slug: 'managed-transportation',
    icon: 'network',
    summary:
      'Outsource the day-to-day running of your transportation function. We operate as an extension of your team — planning, tendering, tracking, and reporting end to end.',
    features: [
      'Dedicated routing guide design & enforcement',
      'TMS setup, integration & carrier onboarding',
      'Daily tender management and track-and-trace',
      'KPI dashboards and quarterly business reviews',
    ],
  },
  {
    title: 'Supply Chain Consulting',
    slug: 'supply-chain-consulting',
    icon: 'compass',
    summary:
      'Strategic advisory that fixes the network, not just the next load — from distribution footprint and mode optimization to carrier strategy and resilience planning.',
    features: [
      'Network & distribution-center modeling',
      'Mode optimization and lane rationalization',
      'Carrier strategy & RFP / bid management',
      'Risk, resilience & contingency planning',
    ],
  },
  {
    title: 'Freight Audit & Procurement',
    slug: 'freight-audit',
    icon: 'clipboard',
    summary:
      'Stop overpaying. We audit every invoice against contracted rates, recover what you are owed, and run disciplined procurement events that lock in durable savings.',
    features: [
      'Line-item invoice audit & overcharge recovery',
      'Accessorial and fuel-surcharge validation',
      'Competitive RFP design and rate benchmarking',
      'Contract negotiation and award optimization',
    ],
  },
]

export const defaultIndustries: Industry[] = [
  {
    name: 'Food & Beverage',
    icon: 'truck',
    description: 'Temperature-controlled, time-sensitive freight with zero tolerance for spoilage or missed delivery windows.',
  },
  {
    name: 'Manufacturing & Industrial',
    icon: 'layers',
    description: 'Inbound raw materials and outbound finished goods kept in lockstep to protect production schedules.',
  },
  {
    name: 'Retail & Consumer Goods',
    icon: 'chart',
    description: 'Seasonal surges, tight retailer compliance windows, and omnichannel distribution handled with precision.',
  },
  {
    name: 'Building & Construction',
    icon: 'route',
    description: 'Flatbed, oversized, and project freight delivered to job sites on schedule and within budget.',
  },
  {
    name: 'Agriculture',
    icon: 'compass',
    description: 'Bulk, seasonal, and perishable agricultural freight moved with capacity you can count on at peak.',
  },
  {
    name: 'E-commerce & Fulfillment',
    icon: 'network',
    description: 'Middle-mile and replenishment freight that keeps fulfillment centers stocked and customers happy.',
  },
]

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      'We moved off a national broker and never looked back. Same capacity, far better communication, and we can actually see where our money goes.',
    author: 'Operations Director',
    role: 'Regional Food Distributor',
    company: '',
  },
  {
    quote:
      'Gossan rebuilt our routing guide and ran a clean bid. We took 19% out of our outbound freight in one quarter without touching service.',
    author: 'VP of Supply Chain',
    role: 'Consumer Products Manufacturer',
    company: '',
  },
  {
    quote:
      'They treat our freight like it’s their own business. When something goes sideways, I hear about it from them before it becomes my problem.',
    author: 'Logistics Manager',
    role: 'Industrial Equipment Maker',
    company: '',
  },
]

export const defaultCaseStudies: CaseStudy[] = [
  {
    title: 'Rebuilding a broken outbound network',
    client: 'Regional food & beverage distributor',
    industry: 'Food & Beverage',
    challenge:
      'A growing distributor was leaning on a national broker, paying premium spot rates on core lanes and absorbing frequent late deliveries with little visibility into why.',
    solution:
      'We assessed twelve months of invoices, designed a contracted routing guide with a vetted carrier bench, and took over daily tender management with proactive exception alerts.',
    metrics: [
      { value: '19%', label: 'freight spend reduction' },
      { value: '99.1%', label: 'on-time delivery' },
      { value: '6 wks', label: 'to full transition' },
    ],
  },
  {
    title: 'Recovering hidden overcharges',
    client: 'Mid-market industrial manufacturer',
    industry: 'Manufacturing',
    challenge:
      'A manufacturer suspected it was overpaying on LTL but lacked the time to audit thousands of invoices against contracted rates and accessorials.',
    solution:
      'We deployed a line-item freight audit, flagged systematic accessorial and reweigh errors, recovered past overcharges, and renegotiated the carrier agreement.',
    metrics: [
      { value: '$214K', label: 'overcharges recovered' },
      { value: '11%', label: 'lower contracted rates' },
      { value: '100%', label: 'invoice audit coverage' },
    ],
  },
]
