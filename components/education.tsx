import { Reveal } from '@/components/reveal'

function ListCard({
  date,
  title,
  children,
}: {
  date?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
      {date && (
        <span className="font-mono text-xs tracking-wider text-accent">
          {date}
        </span>
      )}
      <h4 className="mb-1 mt-1.5 font-display text-lg font-semibold">{title}</h4>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <Reveal>
        <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-accent">
          06 · Education
        </span>
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard date="JAN 2022 — JAN 2026" title="BS Software Engineering">
            <p>
              Abbottabad University of Science & Technology · Final grade
              75%
            </p>
            <p className="mt-2.5">
              Major coursework: Programming Fundamentals, OOP, Data Structures
              & Algorithms, HCI, Software Engineering, Natural Language
              Processing, Computer Networks, Software Design &
              Architecture, Information Security, Agentic AI.
            </p>
          </ListCard>
          <ListCard title="Recommendations">
            <p>
              <strong className="text-foreground">Dr. Asim Zeb</strong> —
              Assistant Professor, Dept. of Computer Science, AUST
            </p>
            <p className="mt-2.5">
              <strong className="text-foreground">Dr. Gohar Zaman</strong> —
              Assistant Professor, Dept. of Computer Science, AUST
            </p>
            <p className="mt-2.5 text-xs text-muted-2">
              Contact details available on request.
            </p>
          </ListCard>
        </div>
      </Reveal>
    </section>
  )
}
