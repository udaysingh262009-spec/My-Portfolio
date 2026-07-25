import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import CustomCursor from './components/CustomCursor'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="relative min-h-screen bg-[#060B11] text-gray-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-['Inter'] flex flex-col justify-between">
        {/* Ambient Lighting & Glow */}
        <BackgroundEffects />

        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
