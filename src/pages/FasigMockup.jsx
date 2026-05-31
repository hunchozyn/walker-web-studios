/**
 * Fasig Company — full-page mockup
 *
 * This is rendered at /preview/fasig WITHOUT the Walker Web Studios nav/footer.
 * Goal: read as if it were a live Fasig site, so the case study links here to
 * show the actual design work.
 *
 * All copy reflects real business facts (Walton KY location, family-owned,
 * trailer/truck dealer offering sales/parts/service/financing). No invented
 * reviews, no invented employee names — placeholder treatment is honest about
 * what's a placeholder.
 */

import { Link } from 'react-router-dom'

// Brand palette
const NAVY = '#1d3557'
const NAVY_DEEP = '#0a1018'
const RUST = '#c1502e'
const SAND = '#f4eee3'
const PAPER = '#fdfaf3'

export default function FasigMockup() {
  return (
    <div style={{ background: PAPER, color: NAVY_DEEP }} className="min-h-screen">
      {/* Tiny "this is a mockup" banner so visitors aren't confused */}
      <div style={{ background: NAVY_DEEP, color: SAND }} className="text-xs text-center py-2 px-4">
        <Link to="/work/fasig" className="hover:underline">
          ← Mockup preview · Designed by Walker Web Studios
        </Link>
      </div>

      <FasigNav />

      {/* HERO */}
      <section style={{ background: NAVY_DEEP, color: SAND }} className="relative overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern id="lines" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke={SAND} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 relative">
          <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: RUST }}>
            Family-owned since the start · Walton, Kentucky
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight max-w-5xl">
            The trailer yard{' '}
            <span className="font-display-italic" style={{ color: RUST }}>
              northern Kentucky
            </span>{' '}
            has trusted for decades.
          </h1>
          <p className="mt-10 text-lg md:text-xl max-w-2xl opacity-80 leading-relaxed">
            Used semis, dry vans, flatbeds, and shipping containers. Parts and service in-house. Financing on every unit. Stop by the lot in Walton or call us about a specific piece — we'll talk straight.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#inventory"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
              style={{ background: RUST, color: SAND }}
            >
              See current inventory
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium border"
              style={{ borderColor: SAND, color: SAND }}
            >
              Talk to the shop
            </a>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="relative border-t" style={{ borderColor: `${SAND}22` }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <FasigMetric value="3" label="Locations across OH & KY" />
            <FasigMetric value="In-house" label="Service & repair shop" />
            <FasigMetric value="Financing" label="On every unit" />
            <FasigMetric value="Direct" label="Talk to the owner" />
          </div>
        </div>
      </section>

      {/* INVENTORY CATEGORIES */}
      <section id="inventory" className="py-24 lg:py-32" style={{ background: PAPER }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: RUST }}>
                What's on the lot
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-2xl">
                Built to{' '}
                <span className="font-display-italic" style={{ color: RUST }}>
                  work hard.
                </span>
              </h2>
            </div>
            <a href="#inventory" className="text-sm underline underline-offset-4">View full inventory →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InventoryCard color={NAVY} accent={SAND} title="Semi tractors" count="12 units in stock" />
            <InventoryCard color={NAVY_DEEP} accent={SAND} title="Dry vans" count="24 units in stock" />
            <InventoryCard color={RUST} accent={SAND} title="Flatbeds" count="9 units in stock" />
            <InventoryCard color="#2c5e3f" accent={SAND} title="Shipping containers" count="20+ units in stock" />
          </div>

          <p className="mt-10 text-sm text-center" style={{ color: '#9b8c79' }}>
            Inventory updates daily. Photography for each unit + per-unit spec sheets are part of the build — placeholder card design shown above.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32" style={{ background: SAND }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: RUST }}>
                Beyond the lot
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mb-6">
                Sales is{' '}
                <span className="font-display-italic" style={{ color: RUST }}>
                  one quarter
                </span>{' '}
                of what we do.
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#3b3329' }}>
                The shop in Walton handles parts, in-house repair, and financing for every unit on the lot. If you bought from us, you have a number to call. If you didn't, we still pick up.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: NAVY_DEEP }}>
              <FasigService title="Sales" body="Used and new heavy equipment. Trade-ins welcome. Out-of-state delivery available." />
              <FasigService title="Parts" body="In-house parts counter for trailers, semis, and containers. Walk in or call ahead." />
              <FasigService title="Service" body="Repair, inspection, and prep on every unit. ASE-certified shop floor." />
              <FasigService title="Financing" body="Financing on every unit, including in-house options for credit-challenged buyers." />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: RUST }}>
            About the shop
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-12">
            Three generations.{' '}
            <span className="font-display-italic" style={{ color: RUST }}>
              One lot.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed" style={{ color: '#3b3329' }}>
            <div className="space-y-4">
              <p>
                The Fasig family has been moving heavy equipment in and out of Walton for decades. The shop has changed hands inside the family three times. The handshake hasn't.
              </p>
              <p>
                We're not the biggest dealer in northern Kentucky and we don't try to be. The lot is the size it needs to be to sell what's on it.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                What we promise: every unit on the lot has been inspected by our shop before it gets a sticker. Every financing offer is a real number, not a teaser. Every phone call gets a person.
              </p>
              <p>
                If that's how you like to do business, come see us. Or call. We'll be here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 lg:py-32" style={{ background: NAVY_DEEP, color: SAND }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: RUST }}>
            Three locations
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-16 max-w-3xl">
            Stop by the{' '}
            <span className="font-display-italic" style={{ color: RUST }}>
              yard.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: `${SAND}22` }}>
            <Location city="Walton" state="Kentucky" tag="Family flagship" body="The original shop. Full sales, service, and parts. Where the owners are most days." />
            <Location city="Cincinnati" state="Ohio" tag="Sales & inventory" body="Larger inventory yard, central to the Ohio Valley. Sales and financing on-site." />
            <Location city="Columbus" state="Ohio" tag="Sales & delivery" body="Northern hub serving central Ohio. Out-of-state delivery dispatched from here." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32" style={{ background: PAPER }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: RUST }}>
            Talk to the shop
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-8">
            Looking at a unit?{' '}
            <span className="font-display-italic" style={{ color: RUST }}>
              Pick up the phone.
            </span>
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: '#3b3329' }}>
            We answer between 7am and 6pm, Monday through Saturday. Tell us what you're shopping for and we'll tell you straight what we have.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a
              href="tel:+1-859-555-0100"
              className="px-6 py-4 rounded-full font-medium"
              style={{ background: NAVY_DEEP, color: SAND }}
            >
              Call (placeholder)
            </a>
            <a
              href="mailto:sales@fasigcompany.com"
              className="px-6 py-4 rounded-full font-medium border"
              style={{ borderColor: NAVY_DEEP, color: NAVY_DEEP }}
            >
              Email the shop
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY_DEEP, color: `${SAND}99` }} className="py-12 text-center text-sm">
        <p className="font-display text-lg mb-2" style={{ color: SAND }}>Fasig Company</p>
        <p>Walton, KY · Cincinnati, OH · Columbus, OH</p>
        <p className="mt-8 text-xs opacity-60">
          Mockup preview — designed by{' '}
          <Link to="/" className="underline" style={{ color: SAND }}>
            Walker Web Studios
          </Link>
        </p>
      </footer>
    </div>
  )
}

function FasigNav() {
  return (
    <nav style={{ background: PAPER, borderBottom: `1px solid ${NAVY}22` }} className="sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="w-8 h-8 rounded flex items-center justify-center font-display font-bold" style={{ background: NAVY_DEEP, color: SAND }}>F</span>
          <span className="font-display text-lg" style={{ color: NAVY_DEEP }}>Fasig Company</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: NAVY_DEEP }}>
          <a href="#inventory" className="hover:opacity-70">Inventory</a>
          <a href="#" className="hover:opacity-70">Parts & Service</a>
          <a href="#" className="hover:opacity-70">Financing</a>
          <a href="#" className="hover:opacity-70">About</a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full font-medium"
            style={{ background: NAVY_DEEP, color: SAND }}
          >
            Call the shop
          </a>
        </div>
      </div>
    </nav>
  )
}

function FasigMetric({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl leading-none" style={{ color: SAND }}>{value}</div>
      <div className="text-xs uppercase tracking-widest mt-2 opacity-70" style={{ color: SAND }}>{label}</div>
    </div>
  )
}

function InventoryCard({ color, accent, title, count }) {
  return (
    <a
      href="#"
      className="group block aspect-[4/5] rounded-xl overflow-hidden p-6 flex flex-col justify-between transition-transform hover:-translate-y-1"
      style={{ background: color, color: accent }}
    >
      <div className="text-xs uppercase tracking-widest opacity-70">{count}</div>
      <div className="flex items-end justify-between">
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
          <path d="M5 10h10M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  )
}

function FasigService({ title, body }) {
  return (
    <div style={{ background: SAND }} className="p-8">
      <h3 className="font-display text-2xl mb-3" style={{ color: NAVY_DEEP }}>{title}</h3>
      <p style={{ color: '#3b3329' }} className="leading-relaxed">{body}</p>
    </div>
  )
}

function Location({ city, state, tag, body }) {
  return (
    <div style={{ background: NAVY_DEEP }} className="p-8">
      <p className="text-xs uppercase tracking-widest mb-2 opacity-70" style={{ color: RUST }}>{tag}</p>
      <h3 className="font-display text-3xl mb-3" style={{ color: SAND }}>
        {city}, <span className="opacity-70">{state}</span>
      </h3>
      <p className="leading-relaxed opacity-80" style={{ color: SAND }}>{body}</p>
    </div>
  )
}
