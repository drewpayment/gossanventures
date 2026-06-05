import type { Insight } from './types'

export const insights: Insight[] = [
  {
    slug: 'five-places-shippers-overpay-for-freight',
    title: 'Five places mid-market shippers overpay for freight — and how to find them',
    excerpt:
      'Freight overspend rarely shows up as one big line item. It hides in accessorials, mode mismatches, and rates that quietly drift above market. Here is where to look first.',
    category: 'Cost',
    date: '2026-05-12',
    author: 'Gossan Ventures',
    role: 'Advisory Team',
    readMinutes: 6,
    body: [
      {
        paragraphs: [
          'When a CFO asks why freight cost is up, the honest answer is usually “a dozen small things, not one big thing.” That is exactly why overspend is so hard to kill — no single invoice looks wrong. But add the small things up across a year and you are often looking at double-digit savings sitting in plain sight.',
          'Here are the five places we find the most money when we audit a mid-market freight book.',
        ],
      },
      {
        heading: '1. Accessorials nobody is checking',
        paragraphs: [
          'Detention, reweighs, liftgates, redelivery, limited-access fees — accessorials are where invoices quietly inflate. They are often applied inconsistently, sometimes incorrectly, and almost never audited line by line.',
          'A disciplined audit against your contracted accessorial schedule routinely recovers real money and, just as importantly, changes carrier behavior once they know you are checking.',
        ],
      },
      {
        heading: '2. The wrong mode on the lane',
        paragraphs: [
          'Freight that should consolidate into a truckload moves as multiple LTL shipments. Lanes that could go intermodal stay on the highway at a premium. Mode decisions made for one set of conditions persist long after those conditions change.',
        ],
      },
      {
        heading: '3. Rates that drifted above market',
        paragraphs: [
          'Contracted rates are a snapshot in time. If you have not run a structured bid in eighteen months, some of your lanes are almost certainly priced above where the market sits today — and the carriers benefiting from it have no incentive to mention it.',
        ],
      },
      {
        heading: '4. Invoices that don’t match the contract',
        paragraphs: [
          'Reweighs, reclasses, duplicate bills, and rates that simply do not match the agreement are common at volume. Without line-item audit coverage, these slip through accounts payable unnoticed.',
        ],
      },
      {
        heading: '5. Paying for capacity you don’t use well',
        paragraphs: [
          'Dedicated capacity that runs half empty, minimums you rarely hit, and a carrier base that no longer fits your network all quietly tax every shipment. The fix is usually a better-matched mix of asset, brokered, and dedicated capacity.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'You do not need a six-month project to find these. Twelve months of invoices and a lane list are enough to produce a quantified read in about a week. The hard part is not the analysis — it is having the time and the incentive to do it honestly.',
        ],
      },
    ],
    related: ['when-to-outsource-your-transportation-function', 'the-hidden-cost-of-the-mega-broker'],
  },
  {
    slug: 'when-to-outsource-your-transportation-function',
    title: 'When to outsource your transportation function (and when not to)',
    excerpt:
      'Managed transportation can give a growing shipper enterprise discipline without enterprise headcount. But it is not for everyone. Here is how to tell where you sit.',
    category: 'Strategy',
    date: '2026-04-22',
    author: 'Gossan Ventures',
    role: 'Advisory Team',
    readMinutes: 7,
    body: [
      {
        paragraphs: [
          'There is an awkward middle stage in a shipper’s growth: freight has become too complex to run off spreadsheets and tribal knowledge, but not yet large enough to justify a full in-house logistics team and an enterprise TMS. Decisions in this stage get expensive.',
          'Managed transportation exists to bridge that gap — an outside team runs your day-to-day transportation function as an extension of your business. The question is whether you are actually in the gap, or on one side of it.',
        ],
      },
      {
        heading: 'Signs you’re ready to outsource',
        bullets: [
          'Freight decisions are bottlenecked on one or two overloaded people.',
          'You lack reliable visibility into on-time performance and cost per lane.',
          'Your routing guide is informal — or does not exist — and compliance drifts.',
          'You are paying for a TMS you do not have time to run well.',
          'Growth or seasonality regularly outpaces your ability to cover freight.',
        ],
      },
      {
        heading: 'Signs you should keep it in-house — for now',
        bullets: [
          'Your volume is small enough that a single capable coordinator covers it comfortably.',
          'Transportation is a core competitive differentiator you want to own end to end.',
          'You already have a mature team, TMS, and carrier program performing well.',
        ],
      },
      {
        heading: 'The lock-in question',
        paragraphs: [
          'The real fear with outsourcing is losing control — handing over your carrier relationships and data and never getting them back. That is a feature of the old 4PL model, not a law of nature.',
          'Done right, managed transportation keeps you owning your relationships and your data. The provider operates transparently, reports against your KPIs, and earns the work continuously. You should be able to bring the function back in-house whenever you choose. If a provider’s model depends on trapping you, that tells you what you need to know.',
        ],
      },
      {
        heading: 'A practical test',
        paragraphs: [
          'Ask what one point of freight performance is worth to your business — in service, in working capital, in customer retention. If the answer is meaningful and your current setup cannot reliably deliver it, the gap is real, and outsourcing the execution while keeping the control is usually the cheapest way across it.',
        ],
      },
    ],
    related: ['five-places-shippers-overpay-for-freight', 'building-a-routing-guide-that-holds'],
  },
  {
    slug: 'building-a-routing-guide-that-holds',
    title: 'Building a routing guide that actually holds',
    excerpt:
      'A routing guide only saves money if people follow it. Most fail not on design but on enforcement. Here is what separates a guide that holds from a binder nobody opens.',
    category: 'Operations',
    date: '2026-03-18',
    author: 'Gossan Ventures',
    role: 'Advisory Team',
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          'A routing guide is the playbook for who hauls what, at what price, under what service level. On paper, every shipper has one. In practice, most are out of date, partially followed, and quietly costing money through off-guide spot moves and inconsistent decisions.',
          'The difference between a guide that works and one that gathers dust is rarely the design. It is the discipline around it.',
        ],
      },
      {
        heading: 'Make compliance measurable',
        paragraphs: [
          'You cannot enforce what you do not measure. Track routing-guide compliance as a hard number — what percentage of loads went to the primary carrier at the contracted rate — and review it on a cadence. The moment compliance becomes visible, it starts to improve.',
        ],
      },
      {
        heading: 'Build in a waterfall, not a single point of failure',
        paragraphs: [
          'Primary carriers decline loads. A guide that names only one carrier per lane breaks the first time capacity tightens. A proper waterfall — primary, secondary, tertiary, then a controlled spot process — keeps freight moving without defaulting to the most expensive option by accident.',
        ],
      },
      {
        heading: 'Keep it current',
        paragraphs: [
          'Markets move. A guide priced for last year’s conditions invites off-guide exceptions because the rates no longer feel real to the people using it. Refresh it on a schedule and after any structural change in your network or volume.',
        ],
      },
      {
        heading: 'Give it an owner',
        paragraphs: [
          'Guides decay without an owner who watches compliance, manages the carrier relationships behind it, and updates it as conditions change. Whether that owner sits inside your team or is your managed-transportation partner, someone has to be accountable for the number.',
        ],
      },
    ],
    related: ['when-to-outsource-your-transportation-function', 'five-places-shippers-overpay-for-freight'],
  },
  {
    slug: 'the-hidden-cost-of-the-mega-broker',
    title: 'The hidden cost of the mega-broker model',
    excerpt:
      'National brokers win on scale and technology. But the same model that makes them efficient creates real, quantifiable costs for the mid-market shipper. Here is the trade-off.',
    category: 'Market',
    date: '2026-02-09',
    author: 'Gossan Ventures',
    role: 'Advisory Team',
    readMinutes: 6,
    body: [
      {
        paragraphs: [
          'The largest freight brokers are formidable for good reasons: enormous carrier networks, deep technology, and the balance-sheet strength to weather any market. For some shippers, that scale is exactly right.',
          'But scale is a strategy, and every strategy has a cost. For mid-market shippers, the very things that make the mega-broker efficient can work against you.',
        ],
      },
      {
        heading: 'You become one of thousands',
        paragraphs: [
          'At volume, your freight is one account on a junior rep’s board. The model is built to move loads efficiently in aggregate, not to know your customers, your tolerances, or why a particular delivery matters. When something goes wrong, you often find out last.',
        ],
      },
      {
        heading: 'Margins you can’t see',
        paragraphs: [
          'Closed-book pricing is standard. You are quoted a number; what sits between that number and the carrier’s pay is the broker’s business, not yours to see. That is a defensible model — but it means you cannot tell a sharp rate from a soft one without doing the work yourself.',
        ],
      },
      {
        heading: 'Rigidity dressed as process',
        paragraphs: [
          'Volume minimums, fixed workflows, and layers of account management between you and the people actually touching your freight are efficient for the broker. For a shipper that needs flexibility and a straight answer, they are friction.',
        ],
      },
      {
        heading: 'The mid-market alternative',
        paragraphs: [
          'None of this means scale is bad — it means the fit matters. A senior-led partner can give you the capability you need (vetted capacity, real visibility, disciplined process) with the things the mega-broker model cannot: one accountable contact, open-book pricing, and no lock-in.',
          'The right question is not “who is biggest?” It is “whose model is built around my freight?” For a lot of mid-market shippers, the honest answer is not the name everyone recognizes.',
        ],
      },
    ],
    related: ['five-places-shippers-overpay-for-freight', 'when-to-outsource-your-transportation-function'],
  },
]

const byDateDesc = (a: Insight, b: Insight) => (a.date < b.date ? 1 : -1)

export function getAllInsights(): Insight[] {
  return [...insights].sort(byDateDesc)
}

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug)
}

export function getRelatedInsights(slugs: string[] = []): Insight[] {
  return slugs.map((slug) => getInsight(slug)).filter((i): i is Insight => Boolean(i))
}

export function formatInsightDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
