const items = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'LLMs',
  'Flutter',
  'Flask',
  'Firebase',
  'OpenAI API',
  'Computer Vision',
  'Agentic AI',
  'C++',
  'REST APIs',
]

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-surface/40 py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
      <div className="flex min-w-full shrink-0 animate-marquee items-center gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-medium text-muted-2"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
