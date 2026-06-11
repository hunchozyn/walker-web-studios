import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-cream border-b-2 border-ink' : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl tracking-tight uppercase">
            Walker Web Studios™
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/#work" className="text-ink hover:text-rust transition-colors">
            Work
          </a>
          <a href="/#services" className="text-ink hover:text-rust transition-colors">
            Services
          </a>
          <a href="/#about" className="text-ink hover:text-rust transition-colors">
            About
          </a>
          <a
            href="/#contact"
            className="brutal-btn inline-flex items-center px-4 py-2 bg-highlight text-ink"
          >
            GET IN TOUCH
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="round" />
                <path d="M3 17h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t-2 border-b-2 border-ink">
          <nav className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
            <a href="/#work" className="py-2">Work</a>
            <a href="/#services" className="py-2">Services</a>
            <a href="/#about" className="py-2">About</a>
            <a
              href="/#contact"
              className="brutal-btn py-2 inline-flex items-center justify-center px-4 bg-highlight text-ink"
            >
              GET IN TOUCH
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
