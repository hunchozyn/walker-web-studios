import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function CaseStudy({ project, problem, approach, outcome, callout }) {
  const others = projects.filter((p) => p.slug !== project.slug)

  return (
    <article>
      {/* HERO */}
      <section
        className="border-b border-line"
        style={{
          background: `linear-gradient(180deg, ${project.palette[0]} 0%, ${project.palette[1]} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-80"
            style={{ color: project.palette[3] }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to work
          </Link>

          <p
            className="font-sans text-sm uppercase tracking-[0.25em] mb-6 opacity-70"
            style={{ color: project.palette[3] }}
          >
            {project.category} · {project.location}
          </p>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl"
            style={{ color: project.palette[3] }}
          >
            {project.name}
          </h1>

          <p
            className="mt-10 text-xl md:text-2xl max-w-3xl leading-snug opacity-80"
            style={{ color: project.palette[3] }}
          >
            {project.tagline}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                style={{
                  background: `${project.palette[3]}22`,
                  color: project.palette[3],
                  border: `1px solid ${project.palette[3]}33`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-cream-2 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <Fact label="Client" value={project.name} />
          <Fact label="Year" value={project.year} />
          <Fact label="Status" value={project.status} />
          <Fact label="Stack" value={project.stack.join(' · ')} />
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-16">
          <Block label="The problem" body={problem} />
          <Block label="The approach" body={approach} />
          <Block label="The outcome" body={outcome} />

          {callout && (
            <aside
              className="rounded-2xl p-8 lg:p-10 border"
              style={{
                background: `${project.accent}10`,
                borderColor: `${project.accent}33`,
              }}
            >
              <p className="font-display-italic text-2xl leading-snug" style={{ color: project.accent }}>
                "{callout}"
              </p>
            </aside>
          )}

          <div className="pt-8 border-t border-line">
            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream hover:bg-rust transition-colors font-medium"
            >
              {project.liveLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12L12 4M12 4H6M12 4v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* OTHER WORK */}
      <section className="border-t border-line bg-cream-2/60 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted mb-6">
            More work
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-line hover:shadow-lg transition-shadow"
                style={{
                  background: `linear-gradient(135deg, ${p.palette[0]} 0%, ${p.palette[1]} 100%)`,
                }}
              >
                <div className="p-8 flex flex-col justify-between aspect-[2/1]">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl" style={{ color: p.palette[3] }}>
                      {p.name}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: p.palette[3] }} className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 10h10M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-sm opacity-70" style={{ color: p.palette[3] }}>
                    {p.category} · {p.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

function Fact({ label, value }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted mb-2">{label}</div>
      <div className="text-ink">{value}</div>
    </div>
  )
}

function Block({ label, body }) {
  return (
    <section>
      <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted mb-4">
        {label}
      </p>
      <div className="text-lg leading-relaxed text-ink/85 space-y-4">
        {Array.isArray(body) ? body.map((p, i) => <p key={i}>{p}</p>) : <p>{body}</p>}
      </div>
    </section>
  )
}
