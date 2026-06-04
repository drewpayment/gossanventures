import { SectionHeading } from '../ui'

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-px grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About Gossan"
          title="Named for the signal that marks hidden value"
        />

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink/75">
          <p>
            In geology, a <span className="font-semibold text-teal-700">gossan</span> is the rust-colored outcrop on the
            surface that signals a rich ore deposit beneath. For centuries, prospectors learned to read it to find the
            value everyone else walked past.
          </p>
          <p>
            That is how we approach logistics. The value in your supply chain is already there — buried in your invoices,
            your lanes, your carrier mix, and your service exceptions. Most shippers never get to it because their broker
            is built to move the next load, not to read the signals.
          </p>
          <p>
            Gossan Ventures was founded to be the alternative: a senior-led advisory and brokerage that combines the
            capability of a national 3PL with the transparency and accountability of a true partner. No call centers, no
            mystery margins, no being the last to know. Just experienced people who treat your freight like it’s their own
            business — and prove the value in the numbers.
          </p>

          <div className="mt-2 grid gap-6 sm:grid-cols-3">
            {[
              { k: 'Senior-led', v: 'Every account owned by a principal' },
              { k: 'Open-book', v: 'Transparent margins, clean invoices' },
              { k: 'Independent', v: 'Carrier-agnostic, on your side' },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-teal-100 bg-cloud p-5">
                <p className="font-display text-base font-semibold text-teal">{item.k}</p>
                <p className="mt-1 text-sm text-ink/65">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
