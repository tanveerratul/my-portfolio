import Link from 'next/link'
import { ArrowLeft, Code2 } from 'lucide-react'

export default function EngineeringPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-logic/10 blur-[120px]"
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-logic/10">
        <Code2 className="h-7 w-7 text-logic" aria-hidden="true" />
      </div>
      <h1 className="relative mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Logical Side
      </h1>
      <p className="relative mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        Engineering &amp; coding projects live here. This gateway is ready for
        your case studies.
      </p>
      <Link
        href="/"
        className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-logic/60 hover:text-logic"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back home
      </Link>
    </main>
  )
}
