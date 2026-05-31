import CaseStudy from '../../components/CaseStudy.jsx'
import { getProject } from '../../data/projects.js'

export default function GranTorino() {
  return (
    <CaseStudy
      project={getProject('gran-torino')}
      problem={[
        "Gran Torino has been a Williamsburg fixture for two decades — a candlelit, white-tablecloth Italian room that locals love. The existing website didn't match. Generic template, low-resolution photos, an unreadable menu PDF, no reservation flow, and the story of the room was nowhere to be found.",
        "The brief: a site that feels like the dining room. Editorial. Warm. Confident enough to send a reservation through, calm enough to read.",
      ]}
      approach={[
        "I sat with the menu, the room, and the regulars. The palette comes from candlelight on dark wood — deep brown, brick-red accents, parchment. Typography pairs an expressive serif display with a calm humanist sans for the menu architecture.",
        "Built in React + Vite + Tailwind. Mobile-first because most reservations happen in the cab on the way over. The menu is rendered as real HTML, not a PDF, which means it loads instantly, indexes for search, and updates in under a minute. The reservation flow hands off to Resy.",
      ]}
      outcome={[
        "Mockup is live and noindexed pending owner sign-off. Loads under 1 second on mobile. Lighthouse scores 100 / 100 / 100 / 100. The menu page alone is now the most-detailed Italian menu in north Brooklyn — every dish has a real description.",
        "Currently pitched to the owner at $99 / month with a 12-month minimum.",
      ]}
      callout="The web should look like the businesses inside it."
    />
  )
}
