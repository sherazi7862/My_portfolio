import { Reveal } from '@/components/reveal'
import { MapPin, GraduationCap, BrainCircuit } from 'lucide-react'

const facts = [
  { icon: MapPin, label: 'Abbottabad, Pakistan' },
  { icon: GraduationCap, label: 'BS Software Engineering, 2022–2026' },
  { icon: BrainCircuit, label: 'Focus: AI / ML Applications' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <div className="grid items-center gap-14 md:grid-cols-[280px_1fr]">
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="h-56 w-56 animate-[float_6s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_32%_28%,#bcd4ff,#3b6bff_40%,#12275f_78%,#0b1020_100%)] shadow-[0_0_90px_-10px_rgba(61,107,255,0.55),inset_-14px_-14px_40px_rgba(0,0,0,0.4)]" />
            <div className="absolute -inset-4 animate-[spin_18s_linear_infinite] rounded-full border border-primary/25" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 block font-mono text-xs tracking-[0.2em] text-accent">
            01 · About
          </span>
          <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Grounded in fundamentals, curious about frontier AI.
          </h2>
          <p className="mb-4 max-w-xl text-pretty text-muted-foreground">
            I&apos;m a final-year{' '}
            <strong className="font-semibold text-foreground">
              Software Engineering
            </strong>{' '}
            student at Abbottabad University of Science &amp; Technology, focused
            on{' '}
            <strong className="font-semibold text-foreground">
              Artificial Intelligence &amp; Machine Learning applications
            </strong>
            . My work sits at the intersection of solid software engineering —
            data structures, system design, security — and applied ML: LLMs,
            agentic AI, and computer vision.
          </p>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Alongside my degree, I&apos;ve spent almost two years as an{' '}
            <strong className="font-semibold text-foreground">instructor</strong>
            , teaching Python, OOP, and web development to new learners — which
            keeps me sharp on the fundamentals while I build production-style
            projects on the side.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {facts.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted-foreground"
              >
                <f.icon className="h-3.5 w-3.5 text-accent" />
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  )
}
