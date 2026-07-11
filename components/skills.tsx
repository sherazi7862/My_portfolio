import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Code2, Cpu, Layers, Boxes } from 'lucide-react'

const groups = [
  {
    icon: Code2,
    cat: 'Languages',
    title: 'Core programming',
    chips: ['Python', 'C++', 'Dart', 'HTML / CSS'],
  },
  {
    icon: Cpu,
    cat: 'AI / ML',
    title: 'Machine learning',
    chips: ['TensorFlow', 'PyTorch', 'OpenAI API', 'DeepSeek', 'LLMs'],
  },
  {
    icon: Layers,
    cat: 'Web / Mobile',
    title: 'Applications',
    chips: ['Flutter UI', 'Flask', 'Firebase'],
  },
  {
    icon: Boxes,
    cat: 'Concepts',
    title: 'Foundations',
    chips: ['OOP', 'Pandas / CSV', 'REST APIs & JSON'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <SectionHeading
        num="02"
        eyebrow="Toolkit"
        title="Skills & technologies"
        desc="The languages, frameworks, and concepts I reach for most, spanning applied ML, backend, and mobile."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface-strong">
              <g.icon className="mb-5 h-5 w-5 text-accent" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">
                {g.cat}
              </span>
              <h3 className="mb-4 mt-2 font-display text-lg font-semibold">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-border bg-white/5 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
