import type { Stat } from '@/lib/types'

export function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Key metrics" className="border-y border-teal-100 bg-white">
      <div className="container-px grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="font-display text-3xl font-bold text-teal sm:text-4xl">{stat.value}</span>
            <span className="text-sm leading-snug text-ink/60">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
