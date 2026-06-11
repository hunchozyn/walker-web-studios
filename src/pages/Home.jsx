import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="inline-block bg-highlight brutal-sm px-3 py-1 text-xs font-bold tracking-wide mb-8">
            OPEN FOR WORK — EST. 2026
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.98] tracking-tight max-w-5xl text-ink">
            Your competitor's site is ugly.{' '}
            <span className="bg-highlight px-3 inline-block">Yours doesn't have to be.</span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              We design and build custom websites for small businesses with real personality — restaurants, retail, family-owned trades. No templates. No drag-and-drop. Real code, fast loads, honest pricing.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#work"
              className="brutal-btn inline-flex items-center gap-2 px-6 py-3 bg-rust text-white"
            >
              SEE THE WORK
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="brutal-btn inline-flex items-center px-6 py-3 bg-cream-2 text-ink"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        {/* Hero metrics strip */}
        <div className="border-t-2 border-b-2 border-ink bg-cream-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Metric value="3" label="Live projects" />
            <Metric value="$99" label="/ month, all-in" />
            <Metric value="100%" label="Custom design" />
            <Metric value="0" label="Templates used" />
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-rust mb-4">
                Selected work
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-2xl">
                Three projects.{' '}
                <span className="bg-highlight px-2 inline-block">Three different worlds.</span>
              </h2>
            </div>
            <p className="text-muted max-w-md">
              Each site is built for the business inside it — not the agency template up the road.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ink text-cream py-24 lg:py-32 border-t-2 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-highlight mb-4">
                What we do
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-8">
                Custom design, modern build,{' '}
                <span className="bg-highlight text-ink px-2 inline-block">hosted forever.</span>
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed max-w-md">
                One subscription. One studio. The website your business should have always had.
              </p>
            </div>

            <div className="space-y-4">
              <Service
                number="01"
                title="Custom design"
                description="Every site is designed from scratch for your business. No Squarespace templates. No off-the-shelf themes. Your logo, your photography, your voice."
              />
              <Service
                number="02"
                title="Modern build"
                description="React, Vite, Tailwind. Real code, not page-builder spaghetti. Fast loads, mobile-first, SEO-ready out of the box."
              />
              <Service
                number="03"
                title="Hosted forever"
                description="$99 per month covers hosting, SSL, backups, security updates, and one hour of edits per month. 12-month minimum, no setup fees."
              />
              <Service
                number="04"
                title="Domain & email"
                description="We help you buy the right domain, set up DNS, and configure professional email forwarding so you@yourbusiness.com works on day one."
              />
              <Service
                number="05"
                title="SEO & analytics"
                description="Schema markup, sitemaps, Search Console, Google Business Profile, and analytics — wired up properly so you actually show up in local search."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-rust mb-6">
            About the studio
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-12">
            One designer.{' '}
            <span className="bg-highlight px-2 inline-block">A handful of clients at a time.</span>
          </h2>

          <div className="brutal bg-cream-2 p-8 md:p-12 grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-ink/80">
            <div className="space-y-4">
              <p>
                Walker Web Studios is a one-person studio I started in 2026. My name is Nate Walker. I build modern websites for small businesses across the country — restaurants, retail, family trades.
              </p>
              <p>
                I take on a handful of clients at a time. Each one gets a fully custom site, a real designer-developer they can text, and a stack that doesn't fall over when WordPress pushes an update.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                I care about the businesses I work with. My first three clients are a Williamsburg Italian restaurant, my girlfriend's dad's roofing company, and my own family's trailer dealership in northern Kentucky. None of them are abstractions.
              </p>
              <p>
                The web should look like the businesses inside it. That's the whole pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / PRICING */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-rust mb-4">
                How it works
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-8">
                $99 a month.{' '}
                <span className="bg-highlight px-2 inline-block">No setup fees.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
                One simple subscription that covers design, build, hosting, and ongoing edits. 12-month minimum. Cancel after that anytime.
              </p>

              <div className="brutal bg-cream-2 p-8">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-5xl">$99</span>
                  <span className="text-muted font-medium">/ month</span>
                </div>
                <ul className="space-y-3 text-ink/80">
                  <Bullet>Fully custom design — no templates</Bullet>
                  <Bullet>Modern build (React + Vite + Tailwind)</Bullet>
                  <Bullet>Hosting, SSL, backups, security updates</Bullet>
                  <Bullet>1 hour of content edits per month</Bullet>
                  <Bullet>Domain & professional email setup</Bullet>
                  <Bullet>SEO foundation + analytics wired up</Bullet>
                </ul>
                <p className="mt-6 text-xs text-muted">
                  12-month minimum. No setup fees. No surprises. Larger projects (e-commerce, custom apps) priced separately.
                </p>
              </div>
            </div>

            <ol className="space-y-6">
              <Step
                number="01"
                title="Discovery"
                description="A real conversation about your business, your customers, and what the site actually needs to do. Free."
              />
              <Step
                number="02"
                title="Design"
                description="You see a full mockup of the homepage before anything gets built. You approve the direction, or we iterate."
              />
              <Step
                number="03"
                title="Build"
                description="Modern code stack. Fast loads. Mobile-first. Real photography, real copy — no Lorem ipsum, no stock-image clichés."
              />
              <Step
                number="04"
                title="Launch"
                description="Domain configured, SSL active, analytics live, Google Business Profile claimed, sitemap submitted. You go live confident."
              />
              <Step
                number="05"
                title="Live"
                description="Ongoing hosting, updates, and edits. Text me when you change your hours, add a new service, or want a fresh photo on the homepage."
              />
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-rust mb-6">
            Start a project
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-8">
            Want a website that looks like{' '}
            <span className="bg-highlight px-2 inline-block">your business?</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Tell me about your business and what you're trying to do. I read every message and respond in under 24 hours.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="text-left space-y-6 brutal bg-cream-2 p-8 md:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Business name" name="business" />
            <Field
              label="Tell me about the project"
              name="message"
              as="textarea"
              required
            />

            <button
              type="submit"
              className="brutal-btn inline-flex items-center gap-2 px-6 py-3 bg-rust text-white cursor-pointer"
            >
              SEND IT
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="mt-10 text-sm text-muted">
            Or email me directly:{' '}
            <a
              href="mailto:nate@walkerwebstudios.com"
              className="text-ink font-medium underline underline-offset-4 decoration-2 hover:text-rust"
            >
              nate@walkerwebstudios.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-ink leading-none">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-muted mt-2">{label}</div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const reverse = index % 2 === 1
  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
        <Link to={`/work/${project.slug}`} className="block">
          <div
            className="aspect-[16/10] overflow-hidden brutal transition-transform group-hover:-translate-y-1"
            style={{ background: project.palette[0] }}
          >
            <div className="w-full h-full flex flex-col justify-between p-8 lg:p-12">
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-4xl md:text-5xl"
                  style={{ color: project.palette[3] }}
                >
                  {project.name}
                </span>
                <div className="flex gap-1.5">
                  {project.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 border-2 border-ink"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div style={{ color: project.palette[3] }} className="opacity-80 text-sm font-medium">
                  {project.category} · {project.location}
                </div>
                <div
                  className="font-display text-lg"
                  style={{ color: project.palette[2] }}
                >
                  {project.year}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-rust mb-3">
          {project.status}
        </p>
        <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4">
          {project.name}
        </h3>
        <p className="text-ink/70 leading-relaxed mb-6">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-bold px-3 py-1 border-2 border-ink bg-cream-2 text-ink"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-ink font-bold underline underline-offset-4 decoration-2 hover:text-rust transition-colors text-sm"
          >
            READ THE CASE STUDY
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

function Service({ number, title, description }) {
  return (
    <div className="border-2 border-cream/30 p-6 lg:p-8 hover:border-highlight transition-colors">
      <div className="flex items-baseline gap-6">
        <span className="font-display text-highlight text-xl">{number}</span>
        <div className="flex-1">
          <h3 className="font-display text-2xl mb-3 uppercase">{title}</h3>
          <p className="text-cream/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <li className="brutal-sm bg-cream-2 p-6 flex gap-6">
      <span className="font-display text-3xl text-rust shrink-0">{number}</span>
      <div>
        <h3 className="font-display text-xl mb-2 uppercase">{title}</h3>
        <p className="text-ink/70 leading-relaxed">{description}</p>
      </div>
    </li>
  )
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-rust shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 10l4 4L16 6" strokeLinecap="square" />
      </svg>
      <span>{children}</span>
    </li>
  )
}

function Field({ label, name, type = 'text', required, as }) {
  const baseInput =
    'w-full px-4 py-3 border-2 border-ink bg-cream-2 text-ink placeholder-muted/50 focus:border-rust focus:outline-none transition-colors'
  return (
    <label className="block">
      <span className="block text-sm font-bold text-ink mb-2 uppercase tracking-wide">
        {label} {required && <span className="text-rust">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={baseInput}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={baseInput}
        />
      )}
    </label>
  )
}
