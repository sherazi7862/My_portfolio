import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const timeline = [
  {
    date: 'FEB 2023 — DEC 2024',
    role: 'Instructor',
    org: 'The Leads Academy, Abbottabad',
    points: [
      'Taught Python fundamentals, OOP, and simple data structures to new learners',
      'Delivered web development classes covering HTML, CSS, and JavaScript',
      'Provided ICT and digital literacy training to a broader community audience',
    ],
  },
  {
    date: 'OCT 2025',
    role: 'Digital Transformation Conference — Vision 2025',
    org: 'RCCI, Rawalpindi',
    points: ['Attended sessions on digitalization, industry trends, and automation'],
  },
  {
    date: 'DEC 2024',
    role: 'DevFest Pakistan',
    org: 'Community tech conference',
    points: ['Talks and workshops spanning AI, mobile, web, and cloud development'],
  },
  {
    date: 'JUL 2024',
    role: 'Metrix Pakistan Youth Summit',
    org: 'UET Abbottabad',
    points: [
      'Large youth- and tech-focused summit centered on leadership and community involvement',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <SectionHeading num="04" eyebrow="Path so far" title="Experience & involvement" />
      <div className="relative ml-2 border-l border-border pl-8">
        {timeline.map((t, i) => (
          <Reveal key={t.role} delay={i * 0.06}>
            <div className="relative mb-11 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_12px_var(--primary)]" />
              <span className="font-mono text-xs tracking-wider text-accent">
                {t.date}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-semibold">
                {t.role}
              </h3>
              <span className="text-sm text-muted-2">{t.org}</span>
              <ul className="mt-3 space-y-1.5">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-muted-2"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
