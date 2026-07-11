import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FileText, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'Flutter Cross-Platform Development',
    org: 'Certificate — E Hunar Mand Pakistan',
    date: 'NOV 2024 — JAN 2025',
    file: '/certificates/flutter-cross-platform.pdf',
  },
  {
    title: '1st Prize — Entrepreneur Fest',
    org: 'University session, 2022',
    date: 'MAY 2022',
    file: '/certificates/entrepreneur-fest.pdf',
  },
  {
    title: 'Python Pro Bootcamp',
    org: 'Udemy — Dr. Angela Yu',
    date: 'COMPLETED 2024',
    file: '/certificates/python-bootcamp.pdf',
  },
  {
    title: 'Digital Marketing & Virtual Assistance',
    org: 'DigiSkills.pk',
    date: 'FEB — AUG 2022',
    file: '/certificates/virtual-assistant.pdf',
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <SectionHeading
        num="07"
        eyebrow="Credentials"
        title="Certificates"
        desc="Professional certifications and achievements that validate my skills and expertise."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-white/[0.015] p-6 transition-[box-shadow,border-color] duration-300 hover:border-accent/35 hover:shadow-[0_24px_60px_-20px_rgba(52,230,207,0.3)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(52,230,207,0.2),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>

              <span className="font-mono text-xs tracking-wider text-accent">
                {cert.date}
              </span>

              <h3 className="mb-1 mt-2 font-display text-lg font-semibold">
                {cert.title}
              </h3>

              <p className="mb-5 text-sm text-muted-foreground">
                {cert.org}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-primary-soft"
              >
                View Certificate <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}