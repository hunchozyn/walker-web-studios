import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-24 border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="font-display text-2xl text-cream block mb-3 uppercase">
              Walker Web Studios™
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Custom websites for small businesses with character. Built honestly. Hosted forever.
            </p>
          </div>

          <div>
            <h4 className="font-display text-highlight text-sm uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#work" className="hover:text-highlight transition-colors">Work</a></li>
              <li><a href="/#services" className="hover:text-highlight transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-highlight transition-colors">About</a></li>
              <li><a href="/#contact" className="hover:text-highlight transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-highlight text-sm uppercase tracking-widest mb-4">
              Get in touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:nate@walkerwebstudios.com"
                  className="hover:text-highlight transition-colors"
                >
                  nate@walkerwebstudios.com
                </a>
              </li>
              <li className="text-cream/60">Working everywhere.</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-cream/15 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Walker Web Studios. All rights reserved.</p>
          <p className="font-display uppercase tracking-widest">Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  )
}
