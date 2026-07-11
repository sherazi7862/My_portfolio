export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center font-mono text-xs text-muted-2 sm:flex-row sm:text-left">
        <p>© 2026 Syed Muhammad Shahid · Abbottabad, Pakistan</p>
        <a
          href="mailto:shahid.sherazi.se.aust@gmail.com"
          className="transition-colors hover:text-foreground"
        >
          shahid.sherazi.se.aust@gmail.com
        </a>
      </div>
    </footer>
  )
}
