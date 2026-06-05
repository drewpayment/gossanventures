import type { ServiceDetail } from './types'

export const services: ServiceDetail[] = [
  {
    slug: 'freight-brokerage',
    icon: 'truck',
    title: 'Freight Brokerage',
    tagline: 'FTL & LTL capacity, sourced right',
    summary:
      'Reliable capacity for full-truckload and less-than-truckload freight, sourced from a vetted carrier bench and matched to your lanes, timelines, and service standards.',
    heroHeadline: 'Capacity you can count on — without the load-board roulette',
    heroSubhead:
      'We place your freight with qualified, insured carriers chosen for your lanes and standards — not whoever is cheapest today. Then we stay on it until it delivers.',
    overview: [
      'The national brokers move freight at volume, which means your shipment is one of thousands on a junior rep’s board. When a truck falls through or a delivery slips, you are the last to know. We built our brokerage to work the opposite way.',
      'Every account is owned by a senior broker who knows your freight, your customers, and your tolerances. We source capacity from a curated bench of vetted carriers, tender proactively, and manage exceptions before they become your problem — so you get the reliability of a dedicated fleet with the flexibility of the open market.',
    ],
    capabilities: [
      {
        title: 'Dry van, reefer, flatbed & specialized',
        description:
          'Coverage across all standard equipment plus temperature-controlled, oversized, and project freight.',
      },
      {
        title: 'Spot & contracted lanes',
        description:
          'Quick-turn spot coverage when you need it, and committed lane pricing to protect your core network from volatility.',
      },
      {
        title: 'Rigorous carrier vetting',
        description:
          'Authority, insurance, safety scores, and performance history checked before a carrier ever touches your freight.',
      },
      {
        title: 'Proactive track & trace',
        description:
          'Real-time visibility and exception alerts — we flag risk early and communicate before you have to ask.',
      },
    ],
    outcomes: [
      { value: '98.7%', label: 'on-time delivery' },
      { value: '< 1 hr', label: 'quote turnaround on most lanes' },
      { value: '100%', label: 'carriers vetted & insured' },
    ],
    faqs: [
      {
        question: 'Do you require minimum volumes?',
        answer:
          'No. We cover a single tough lane or your entire freight book. We earn the next load on performance, not a volume contract that locks you in.',
      },
      {
        question: 'How do you price?',
        answer:
          'Open book. You see the carrier cost and our margin on every load. No mystery accessorials, no surprise invoices.',
      },
      {
        question: 'What if a truck falls through?',
        answer:
          'We carry backup capacity on your core lanes and a senior broker re-covers immediately — and you hear about it from us first, with a plan attached.',
      },
    ],
    related: ['managed-transportation', 'freight-audit'],
  },
  {
    slug: 'managed-transportation',
    icon: 'network',
    title: 'Managed Transportation',
    tagline: 'Your transportation function, run by us',
    summary:
      'Outsource the day-to-day running of your transportation function. We operate as an extension of your team — planning, tendering, tracking, and reporting end to end.',
    heroHeadline: 'A transportation department without the headcount',
    heroSubhead:
      'We run your routing guide, tender your freight, manage exceptions, and report on the numbers that matter — so your team can focus on the business instead of chasing trucks.',
    overview: [
      'Growing shippers hit a wall: freight is too complex to run off spreadsheets, but not yet large enough to justify a full in-house logistics team and an enterprise TMS. Managed transportation closes that gap.',
      'We become your transportation department. We design and enforce a routing guide, onboard the right carriers, tender freight daily, and stay on top of every exception. You get enterprise-grade discipline and visibility, a single accountable team, and reporting that ties directly to your cost and service goals — without hiring, licensing software, or losing control.',
    ],
    capabilities: [
      {
        title: 'Routing guide design & enforcement',
        description:
          'A documented playbook for who hauls what, at what price, under what service level — and the discipline to keep everyone to it.',
      },
      {
        title: 'TMS setup & carrier onboarding',
        description:
          'We stand up or integrate a transportation management system and bring your carriers onto it, so everything runs from one source of truth.',
      },
      {
        title: 'Daily tender & track-and-trace',
        description:
          'We tender freight, confirm pickups, and monitor in transit every day — escalating exceptions before they hit your customers.',
      },
      {
        title: 'KPI dashboards & business reviews',
        description:
          'On-time, cost per mile, tender acceptance, and claims — reviewed with you each quarter with a plan to keep improving.',
      },
    ],
    outcomes: [
      { value: '12–24%', label: 'typical freight-spend reduction' },
      { value: '99%+', label: 'routing-guide compliance' },
      { value: '0', label: 'new headcount required' },
    ],
    faqs: [
      {
        question: 'Do we have to switch our TMS?',
        answer:
          'No. We work in your existing TMS, recommend and stand up a new one, or run our own — whatever fits your stage and budget.',
      },
      {
        question: 'How is this different from a 4PL lock-in?',
        answer:
          'You keep ownership of your carrier relationships and data. We operate transparently and you can take the function back in-house at any time. We earn the work continuously.',
      },
      {
        question: 'How quickly can you take over?',
        answer:
          'Most transitions run six to eight weeks from assessment to full daily management, phased so nothing breaks along the way.',
      },
    ],
    related: ['supply-chain-consulting', 'freight-brokerage'],
  },
  {
    slug: 'supply-chain-consulting',
    icon: 'compass',
    title: 'Supply Chain Consulting',
    tagline: 'Fix the network, not just the load',
    summary:
      'Strategic advisory that fixes the network, not just the next load — from distribution footprint and mode optimization to carrier strategy and resilience planning.',
    heroHeadline: 'Strategy that pays for itself in the first quarter',
    heroSubhead:
      'We dig into your network, costs, and constraints, then hand you a clear, quantified roadmap — and the practical help to execute it, not a slide deck that gathers dust.',
    overview: [
      'Most logistics problems are network problems wearing a freight-cost disguise. Distribution centers in the wrong place, the wrong mode on the wrong lane, a carrier base that no longer fits the business — these quietly tax every shipment you make.',
      'Our consulting practice starts with the data: lanes, volumes, costs, service obligations, and constraints. We model the alternatives, quantify the trade-offs between cost, service, and resilience, and give you a prioritized roadmap with the numbers behind it. Then, unlike a pure strategy firm, we can help you execute — because we run freight every day.',
    ],
    capabilities: [
      {
        title: 'Network & distribution modeling',
        description:
          'Where your DCs, cross-docks, and inventory should sit to balance cost, speed, and resilience against real demand.',
      },
      {
        title: 'Mode & lane optimization',
        description:
          'Truckload vs. LTL vs. intermodal, consolidation opportunities, and lane rationalization that cut cost without hurting service.',
      },
      {
        title: 'Carrier strategy & RFP design',
        description:
          'The right mix of asset, brokered, and dedicated capacity — and disciplined bid events that lock in durable rates.',
      },
      {
        title: 'Risk & resilience planning',
        description:
          'Backup capacity, supplier and route diversification, and contingency playbooks for when disruption hits.',
      },
    ],
    outcomes: [
      { value: '1 wk', label: 'to a quantified opportunity read' },
      { value: '8–20%', label: 'modeled network savings' },
      { value: '100%', label: 'recommendations tied to your data' },
    ],
    faqs: [
      {
        question: 'Is this just a report?',
        answer:
          'No. Every recommendation is quantified and prioritized, and we can stay on to help you implement it — including running the freight if you want us to.',
      },
      {
        question: 'How long is a typical engagement?',
        answer:
          'An assessment delivers a quantified read within a week. Full network studies typically run four to eight weeks depending on scope.',
      },
      {
        question: 'Do you work with our existing 3PL?',
        answer:
          'Yes. We are carrier- and provider-agnostic. If your incumbents are the right answer, we will say so — and make them work harder for you.',
      },
    ],
    related: ['managed-transportation', 'freight-audit'],
  },
  {
    slug: 'freight-audit',
    icon: 'clipboard',
    title: 'Freight Audit & Procurement',
    tagline: 'Stop overpaying. Prove it.',
    summary:
      'Stop overpaying. We audit every invoice against contracted rates, recover what you are owed, and run disciplined procurement events that lock in durable savings.',
    heroHeadline: 'The savings hiding in your invoices and your bid',
    heroSubhead:
      'Most shippers leak money two ways: invoices that don’t match the contract, and rates that drift above market. We close both gaps — and put the recovered cash back on your P&L.',
    overview: [
      'Freight invoices are dense, high-volume, and error-prone. Reweighs, mis-applied accessorials, duplicate bills, and rates that don’t match the agreement add up to real money — money most teams don’t have the hours to chase line by line.',
      'We audit every invoice against your contracted rates and accessorial rules, recover what you are owed, and feed the findings into smarter procurement. Then we run disciplined RFP events — benchmarked against the market — so your rates reflect current conditions instead of last year’s. The result is savings you can see and defend.',
    ],
    capabilities: [
      {
        title: 'Line-item invoice audit',
        description:
          'Every charge checked against contracted rates, fuel tables, and accessorial rules — overcharges flagged and recovered.',
      },
      {
        title: 'Accessorial & fuel validation',
        description:
          'Detention, reweighs, liftgates, and fuel surcharges verified so you only pay what you actually agreed to.',
      },
      {
        title: 'Competitive RFP & benchmarking',
        description:
          'Structured bid events with market benchmarking to make sure your rates are sharp and your award is optimal.',
      },
      {
        title: 'Contract negotiation & award',
        description:
          'We negotiate terms and optimize the award across carriers to balance price, capacity, and service.',
      },
    ],
    outcomes: [
      { value: '$214K', label: 'recovered in a recent engagement' },
      { value: '8–15%', label: 'typical procurement savings' },
      { value: '100%', label: 'invoice audit coverage' },
    ],
    faqs: [
      {
        question: 'How are you paid for audit work?',
        answer:
          'We can work on a flat fee or a share of verified recoveries and savings — so engagements pay for themselves before you write a check.',
      },
      {
        question: 'Will an RFP disrupt our carrier relationships?',
        answer:
          'Handled well, it strengthens them. A clean, fair bid signals you are a serious shipper and gives your best carriers a reason to sharpen their pencils.',
      },
      {
        question: 'Can you audit historical invoices?',
        answer:
          'Yes. We routinely review prior periods to recover past overcharges, then put ongoing audit in place to stop the leakage going forward.',
      },
    ],
    related: ['supply-chain-consulting', 'freight-brokerage'],
  },
]

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return slugs.map((slug) => getService(slug)).filter((s): s is ServiceDetail => Boolean(s))
}
