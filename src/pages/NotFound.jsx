import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-32 px-6 text-center">
      <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted mb-6">
        404
      </p>
      <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8 max-w-2xl mx-auto">
        That page is{' '}
        <span className="font-display-italic text-rust">not here.</span>
      </h1>
      <p className="text-muted mb-12 max-w-md mx-auto">
        It may have moved, or it may never have existed. Either way, head home and start over.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream hover:bg-rust transition-colors font-medium"
      >
        Back to home
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  )
}
