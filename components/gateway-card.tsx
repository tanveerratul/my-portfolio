import Link from 'next/link'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'

type Variant = 'logic' | 'creative'

interface GatewayCardProps {
  href: string
  title: string
  subtitle: string
  icon: LucideIcon
  variant: Variant
}

const styles: Record<
  Variant,
  {
    glow: string
    ring: string
    iconWrap: string
    iconColor: string
    grid: string
    label: string
  }
> = {
  logic: {
    glow: 'group-hover:shadow-[0_0_60px_-12px_var(--color-logic)]',
    ring: 'group-hover:border-logic/60',
    iconWrap: 'bg-logic/10 group-hover:bg-logic/20',
    iconColor: 'text-logic',
    grid: 'group-hover:opacity-100',
    label: 'group-hover:text-logic',
  },
  creative: {
    glow: 'group-hover:shadow-[0_0_60px_-12px_var(--color-creative)]',
    ring: 'group-hover:border-creative/60',
    iconWrap: 'bg-creative/10 group-hover:bg-creative/20',
    iconColor: 'text-creative',
    grid: 'group-hover:opacity-100',
    label: 'group-hover:text-creative',
  },
}

export function GatewayCard({
  href,
  title,
  subtitle,
  icon: Icon,
  variant,
}: GatewayCardProps) {
  const s = styles[variant]

  return (
    <Link
      href={href}
      className={`group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] ${s.ring} ${s.glow}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${s.grid}`}
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(circle at 30% 0%, black, transparent 70%)',
        }}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${s.iconWrap}`}
        >
          <Icon className={`h-6 w-6 ${s.iconColor}`} aria-hidden="true" />
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          aria-hidden="true"
        />
      </div>

      <div className="relative mt-10">
        <h2
          className={`font-display text-2xl font-semibold tracking-tight text-foreground transition-colors duration-500 ${s.label}`}
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </Link>
  )
}
