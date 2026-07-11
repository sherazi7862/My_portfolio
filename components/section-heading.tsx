import { Reveal } from '@/components/reveal'

export function SectionHeading({
  num,
  eyebrow,
  title,
  desc,
}: {
  num: string
  eyebrow: string
  title: string
  desc?: string
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <span className="mb-3 block font-mono text-xs tracking-[0.2em] text-accent">
        {num} · {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 max-w-xl text-pretty text-muted-foreground">{desc}</p>
      )}
    </Reveal>
  )
}
