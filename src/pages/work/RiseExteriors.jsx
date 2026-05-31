import CaseStudy from '../../components/CaseStudy.jsx'
import { getProject } from '../../data/projects.js'

export default function RiseExteriors() {
  return (
    <CaseStudy
      project={getProject('rise-exteriors')}
      problem={[
        "Rise Exteriors is a 28-year-old roofing, siding, gutter, and window contractor in West Chicago. The owner, Paul, runs the business on craft and word-of-mouth. The website was on Yola — visible bugs, broken filters, fake-feeling stock imagery, and trust signals buried below the fold.",
        "For a trades contractor, the website is the first time most leads ever experience the brand. It needs to load fast, look credible, and put licensing and reviews where the eye actually lands.",
      ]}
      approach={[
        "Different stack from my React projects — this one is pure static HTML, CSS, and JavaScript. No build pipeline. Right tool for the job: roofing marketing site, low update cadence, no interactivity beyond a contact form. Static HTML loads in under 500ms, costs $0 to host, and won't break when a framework version bumps.",
        "Brand palette pulled directly from the existing logo (navy + gold), not invented. 17 pages: home, services hub, four service-detail pages, projects, about, contact, service-areas hub, four city-specific pages, plus the legal pages. JSON-LD schema on every page so Google understands the business structure.",
        "Trust signals are loaded first: license number, BBB, manufacturer certifications, project count, real review quotes. The 'Recent Projects' page is the page that closes deals — built so Paul can drop in a photo and a one-line caption with no developer involvement.",
      ]}
      outcome={[
        "Site is built and deployed to Netlify, pending real customer photos and reviews from Paul before going truly live. Self-rated 7/10 in current state, projected 9/10 once the real assets land. Replacement for a Yola site that scored 4–6.5 depending on which features you counted.",
        "On-deck: claim the Netlify deploy, point the domain, plug in GTM, embed the Pipedrive form, push to Google Business Profile.",
      ]}
      callout="Right tool for the job. Static HTML for a roofing site is not a downgrade — it's the right answer."
    />
  )
}
