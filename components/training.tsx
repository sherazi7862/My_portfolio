import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award, Smartphone, Users, Clock, BadgeCheck } from 'lucide-react'

const highlights = [
  {
    icon: Clock,
    title: '3-month blended program',
    text: 'Onsite physical classes combined with mentorship, soft-skills training, and job-placement support.',
  },
  {
    icon: Smartphone,
    title: 'Cross-platform mobile development',
    text: 'Building native and cross-platform apps for iOS and Android using Swift, Kotlin, and Flutter.',
  },
  {
    icon: Users,
    title: 'Merit-based selection',
    text: 'Free, government-funded training under the Prime Minister\u2019s Youth Programme, awarded on merit via an entry test.',
  },
]

const curriculum = [
  'Swift',
  'Kotlin',
  'Flutter',
  'iOS Development',
  'Android Development',
  'UI/UX for Mobile',
  'Soft Skills',
]

export function Training() {
  return (
    <section id="training" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <SectionHeading
        num="05"
        eyebrow="In progress"
        title="IBM-certified mobile app development"
        desc="Currently enrolled in NAVTTC's flagship Blended International IT Trainings program under the Prime Minister's Youth Skill Development Programme."
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 via-surface to-accent/5 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(61,107,255,0.25),transparent_70%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 font-mono text-xs text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Currently enrolled
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  <BadgeCheck className="h-3.5 w-3.5 text-accent" />
                  IBM Professional Certificate
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-balance md:text-3xl">
                Blended International IT Trainings (BIITT)
              </h3>
              <p className="mt-2 font-mono text-sm text-muted-2">
                NAVTTC · Prime Minister&apos;s Youth Skill Development Programme
              </p>
              <p className="mt-5 text-pretty text-muted-foreground">
                A fully funded, industry-aligned training designed to produce
                job-ready mobile developers. On completion, the program awards an
                internationally recognised{' '}
                <strong className="font-semibold text-foreground">
                  IBM professional certification
                </strong>
                , validating hands-on skills in modern mobile application
                development.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {curriculum.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-border bg-white/5 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-border bg-background/40 p-6 backdrop-blur">
              <Award className="h-10 w-10 text-accent" />
              <div>
                <p className="font-display text-lg font-semibold">IBM Certified</p>
                <p className="font-mono text-xs text-muted-2">On completion</p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-5 border-t border-border pt-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title}>
                <h.icon className="mb-3 h-5 w-5 text-accent" />
                <h4 className="font-display text-base font-semibold">{h.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
