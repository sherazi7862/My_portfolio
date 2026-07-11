'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight, BookOpen, Lock } from 'lucide-react'
import { projects } from '@/lib/projects-data'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-white/[0.015] p-8 transition-[box-shadow,border-color] duration-300 hover:border-primary/35 hover:shadow-[0_24px_60px_-20px_rgba(61,107,255,0.4)]"
      style={{ willChange: 'transform' }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(61,107,255,0.25),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="font-mono text-xs text-muted-2">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mb-3 mt-3 font-display text-xl font-semibold">
        {project.title}
      </h3>
      <p className="mb-5 min-h-16 text-sm text-muted-foreground">
        {project.desc}
      </p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-white/5 px-2.5 py-1 font-mono text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-primary-soft"
          >
            View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-2">
            <Lock className="h-3.5 w-3.5" /> Source on request
          </span>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <BookOpen className="h-3.5 w-3.5" /> View Details
        </Link>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <SectionHeading
        num="03"
        eyebrow="Selected work"
        title="Projects"
        desc="A mix of coursework, self-driven builds, and internship work — including live repositories on GitHub."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
