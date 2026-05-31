import CaseStudy from '../../components/CaseStudy.jsx'
import { getProject } from '../../data/projects.js'

export default function Fasig() {
  return (
    <CaseStudy
      project={getProject('fasig')}
      problem={[
        "Fasig is a family-owned trailer and truck dealership in Walton, Kentucky — used semis, dry vans, flatbeds, containers, plus parts, service, and financing. The business is real, the inventory is real, the relationships are real. The website didn't reflect any of it.",
        "Generic template. Inventory presented like a spreadsheet. No story of the family behind the shop. No clear path from 'I need a flatbed' to 'here's the unit and the number to call.'",
      ]}
      approach={[
        "Editorial layout with a navy-and-rust palette pulled from the equipment yard itself. The hero leads with real photography of the lot, not stock semi-truck clip art. Inventory cards put price, key specs, photos, and a 'Call about this unit' CTA on equal footing — because that's how customers actually shop heavy equipment.",
        "Story pages woven into the navigation: about the family, about the shop, about service and financing. The website should feel like walking onto the lot and meeting someone who knows what they're talking about.",
        "Built in React + Vite + Tailwind. Inventory data structured so it can later wire into the dealership's existing Karmak ERP without rebuilding the front-end.",
      ]}
      outcome={[
        "Mockup is in internal review with family stakeholders. Goes live as the production Fasig site pending sign-off and a content pass for real inventory photography.",
      ]}
      callout="The website should feel like walking onto the lot."
    />
  )
}
