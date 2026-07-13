import type { ReactNode } from 'react'

export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  // Simple wrapper — no framer-motion scroll listeners that cause mobile lag
  return <div className={className}>{children}</div>
}