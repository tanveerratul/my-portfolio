import Image from 'next/image'
import { Code2, Brush } from 'lucide-react'
import { GatewayCard } from '@/components/gateway-card'

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-logic/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-creative/10 blur-[120px]"
      />

      <section className="relative flex w-full max-w-3xl flex-col items-center text-center">
        {/* Profile picture */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-logic/40 via-transparent to-creative/40 blur-md"
          />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border sm:h-36 sm:w-36">
            <Image
              src="/profile.png"
              alt="Portrait of the portfolio owner"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Intro */}
        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-logic" />
          Available for new work
        </p>
        <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          Hi, I bridge the gap between{' '}
          <span className="text-logic">logic</span> and{' '}
          <span className="text-creative">creativity</span>.
        </h1>
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Engineer by discipline, designer by instinct. Pick a side to explore
          the work.
        </p>

        {/* Gateway cards */}
        <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row">
          <GatewayCard
            href="/engineering"
            title="Logical Side"
            subtitle="Engineering & Coding Projects"
            icon={Code2}
            variant="logic"
          />
          <GatewayCard
            href="/creative"
            title="Creative Side"
            subtitle="Design & Video Editing"
            icon={Brush}
            variant="creative"
          />
        </div>
      </section>
    </main>
  )
}
