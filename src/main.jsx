import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import GranTorino from './pages/work/GranTorino.jsx'
import RiseExteriors from './pages/work/RiseExteriors.jsx'
import Fasig from './pages/work/Fasig.jsx'
import FasigMockup from './pages/FasigMockup.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper: nav + footer around every page */}
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/work/gran-torino" element={<GranTorino />} />
          <Route path="/work/rise-exteriors" element={<RiseExteriors />} />
          <Route path="/work/fasig" element={<Fasig />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Mockup page is full-bleed — no nav/footer wrapper */}
        <Route path="/preview/fasig" element={<FasigMockup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
