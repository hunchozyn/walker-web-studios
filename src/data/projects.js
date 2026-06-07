// Single source of truth for all portfolio projects.
// Update this file when work is added/removed.

export const projects = [
  {
    slug: 'gran-torino',
    name: 'Gran Torino',
    category: 'Restaurant',
    location: 'Williamsburg, Brooklyn',
    tagline: 'A 20-year-old Italian restaurant, redesigned for the way people actually find restaurants in 2026.',
    summary: 'Full redesign of a beloved Williamsburg Italian institution. Editorial layout, menu architecture, reservation flow, and a story page that finally tells the room what it is.',
    liveUrl: 'https://gran-torino-nyc.netlify.app',
    liveLabel: 'View live mockup',
    year: '2026',
    accent: '#7a2818',
    palette: ['#1a0f0a', '#7a2818', '#d4a574', '#faf3e8'],
    stack: ['React', 'Vite', 'Tailwind', 'Netlify'],
    status: 'Mockup — pitched to owner',
  },
  {
    slug: 'rise-exteriors',
    name: 'Rise Exteriors',
    category: 'Trades — Roofing & Exteriors',
    location: 'West Chicago, IL',
    tagline: 'A 28-year-old roofing contractor moved off a buggy Yola site onto a fast, trust-first static build.',
    summary: '17 pages of pure HTML/CSS/JS — services hub, service detail pages, project gallery, service-area pages, about, contact. Brand palette pulled from the actual logo. Schema markup on every page. Fast loads, real code, $0 hosting forever.',
    liveUrl: 'https://rise-exteriors-preview.netlify.app',
    liveLabel: 'View live preview',
    year: '2026',
    accent: '#506080',
    palette: ['#10131a', '#506080', '#c8a046', '#f6f4ef'],
    stack: ['HTML', 'CSS', 'JS', 'Netlify'],
    status: 'Pre-launch — pending real photos & reviews',
  },
  {
    slug: 'fasig',
    name: 'Fasig Company',
    category: 'Heavy equipment & trailers',
    location: 'Walton, KY',
    tagline: 'A family-owned trailer & truck dealership in northern Kentucky, reimagined as a real digital storefront.',
    summary: 'Mockup for the family business — moves Fasig off a dated WordPress-style template onto a navy-and-rust editorial layout. Inventory-forward, with real photography in the design language and a service / parts / financing structure that mirrors how customers actually shop.',
    liveUrl: '/preview/fasig',
    liveLabel: 'View live mockup',
    year: '2026',
    accent: '#1d3557',
    palette: ['#0a1018', '#1d3557', '#c1502e', '#f4eee3'],
    stack: ['React', 'Vite', 'Tailwind', 'Netlify'],
    status: 'Mockup — internal review',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
