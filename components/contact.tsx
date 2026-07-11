'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Mail, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { GithubIcon } from '@/components/icons/github-icon'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface p-8 text-center md:p-14">
          <span className="mb-3 block font-mono text-xs tracking-[0.2em] text-accent">
            08 · Get in touch
          </span>
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Open to software engineering and AI/ML roles, internships, and
            interesting collaborations. Reach out any time.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 grid max-w-2xl gap-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-2 focus:border-primary-soft focus:ring-2 focus:ring-primary/25"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-2 focus:border-primary-soft focus:ring-2 focus:ring-primary/25"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project…"
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-2 focus:border-primary-soft focus:ring-2 focus:ring-primary/25"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#2563eb] px-6 py-3.5 font-mono text-sm text-primary-foreground shadow-[0_10px_34px_-8px_rgba(61,107,255,0.55)] transition-transform hover:-translate-y-0.5"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent!
                </>
              ) : status === 'error' ? (
                <>
                  <span className="text-red-300">Failed to send. Try again?</span>
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-8">
            <a
              href="mailto:shahid.sherazi.se.aust@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-primary-soft hover:bg-surface-strong"
            >
              <Mail className="h-4 w-4 text-accent" /> Email
            </a>
            <a
              href="https://wa.me/923095646758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-primary-soft hover:bg-surface-strong"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
            </a>
            <a
              href="https://github.com/sherazi7862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-primary-soft hover:bg-surface-strong"
            >
              <GithubIcon className="h-4 w-4 text-accent" /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
