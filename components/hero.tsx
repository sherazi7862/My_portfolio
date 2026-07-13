'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/github-icon'
import { Magnetic } from '@/components/magnetic'
import { useEffect, useState, useRef } from 'react'

const HeroScene = dynamic(() => import('@/components/hero-scene'), {
  ssr: false,
})

export function Hero() {
  const [isMobile, setIsMobile] = useState(true) // default true to skip initial load
  const sceneLoaded = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mq.matches)

    if (!mq.matches) {
      sceneLoaded.current = true
    }

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <header className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-10">
      {/* 3D scene — desktop only (≥1024px) to avoid lag on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
      )}

      {/* soft vignette for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent" />

      {/* subtle gradient background for mobile (no 3D scene) */}
      {isMobile && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5" aria-hidden />
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* text content — left side */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-7 bg-accent" />
            Software Engineering · AI / ML
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl"
          >
            Syed Muhammad
            <br />
            <span className="text-gradient">Shahid</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-7 max-w-xl text-pretty text-lg text-muted-foreground"
          >
            Software Engineering graduate from Abbottabad, Pakistan, building
            intelligent applications — from conversational chatbots to on-device
            emotion recognition — and teaching the next wave of developers along
            the way.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#2563eb] px-6 py-3.5 font-mono text-sm text-primary-foreground shadow-[0_10px_34px_-8px_rgba(61,107,255,0.55)] transition-transform hover:-translate-y-0.5"
              >
                View projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://github.com/sherazi7862"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-primary-soft hover:bg-surface"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* profile picture — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0 -mt-16 md:-mt-28"
        >
          <div className="relative">
            {/* subtle gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary-soft opacity-30 blur-sm" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-background md:h-56 md:w-56">
              <Image
                src="/Images/profile pic.jpg"
                alt="Syed Muhammad Shahid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100px, 100px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-6 z-10 flex items-center gap-2.5 font-mono text-[0.7rem] text-muted-2 md:left-10">
        <span className="h-9 w-px animate-pulse bg-gradient-to-b from-muted-2 to-transparent" />
        Scroll
      </div>
    </header>
  )
}
