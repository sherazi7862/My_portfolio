import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Training } from '@/components/training'
import { Education } from '@/components/education'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Page() {
  return (
    <main className="relative">
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      {/* subtle dotted grid backdrop */}
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-40 -top-40 z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(61,107,255,0.28),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-52 -right-40 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(52,230,207,0.18),transparent_70%)] blur-3xl"
      />

      <SiteNav />
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Training />
        <Education />
        <Certificates />
        <Contact />
        <SiteFooter />
      </div>
    </main>
  )
}
