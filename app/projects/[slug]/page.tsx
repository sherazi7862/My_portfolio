import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/github-icon'
import { projects, getProjectBySlug } from '@/lib/projects-data'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  return {
    title: `${project.title} — Syed Muhammad Shahid`,
    description: project.desc,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 -top-40 z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(61,107,255,0.28),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-52 -right-40 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(52,230,207,0.18),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        {/* back link */}
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to projects
        </Link>

        {/* header */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-white/5 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <div className="mt-3 flex flex-wrap gap-4 font-mono text-sm text-muted-2">
            <span>{project.year}</span>
            <span className="text-border">·</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* description */}
        <div className="mb-16 max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.longDesc}
          </p>
        </div>

        {/* links */}
        {project.link && (
          <div className="mb-16 flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#2563eb] px-6 py-3.5 font-mono text-sm text-primary-foreground shadow-[0_10px_34px_-8px_rgba(61,107,255,0.55)] transition-transform hover:-translate-y-0.5"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        {/* two-column layout for details */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* features */}
          <div>
            <h2 className="mb-5 font-display text-xl font-semibold">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* highlights */}
          <div>
            <h2 className="mb-5 font-display text-xl font-semibold">Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-soft" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* tech stack */}
        <div className="mt-16">
          <h2 className="mb-6 font-display text-xl font-semibold">Tech Stack</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.techStack.map((stack) => (
              <div
                key={stack.category}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* back link bottom */}
        <div className="mt-20 border-t border-border pt-10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  )
}