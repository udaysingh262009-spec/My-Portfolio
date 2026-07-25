import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa6'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'AI & ML', 'Full Stack', 'Web Apps']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-2.5 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <FaLaptopCode size={13} />
          <span>My Works & Case Studies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Sora'] text-white">
          Featured <span className="text-gradient-emerald">Projects</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto">
          Explore my latest full-stack web applications and AI-powered digital products built with modern tech stacks.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-emerald-glow-btn text-[#060B11] font-bold shadow-lg scale-105'
                : 'glass-panel text-gray-300 border border-white/10 hover:border-emerald-400/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Projects Grid (projects.map) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
