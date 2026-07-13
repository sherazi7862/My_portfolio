'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // On mobile, render a static bar to avoid scroll-driven animations
  if (isMobile) {
    return (
      <div
        className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-gradient-to-r from-primary via-primary-soft to-accent"
        aria-hidden
      />
    )
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-primary via-primary-soft to-accent"
      aria-hidden
    />
  )
}
