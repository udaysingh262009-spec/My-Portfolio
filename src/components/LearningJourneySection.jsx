import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaServer, FaBrain, FaRocket } from 'react-icons/fa6'

export default function LearningJourneySection() {
  const steps = [
    {
      year: 'Step 1',
      title: 'Programming Foundations',
      subtitle: 'HTML, CSS & JavaScript Fundamentals',
      description: 'Mastered web markup, responsive design principles, DOM manipulation, and core programming logic.',
      icon: FaCode,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    },
    {
      year: 'Step 2',
      title: 'Full Stack & Modern Web',
      subtitle: 'React.js & Tailwind CSS Architecture',
      description: 'Built dynamic user interfaces, single-page applications, component-based architectures, and modern glassmorphic styling.',
      icon: FaLaptopCode,
      skills: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      year: 'Step 3',
      title: 'Backend Engineering & APIs',
      subtitle: 'Python, FastAPI & Database Integration',
      description: 'Developed RESTful APIs, data validation schemas, database integration with MySQL & SQLite, and server backend logic.',
      icon: FaServer,
      skills: ['Python', 'FastAPI', 'MySQL', 'Git & GitHub'],
    },
    {
      year: 'Step 4',
      title: 'AI & Data Science Exploration',
      subtitle: 'NumPy, Pandas & Machine Learning',
      description: 'Explored data analysis, array computations, image diagnostic algorithms, and AI integration into web applications.',
      icon: FaBrain,
      skills: ['NumPy', 'Pandas', 'OpenCV', 'AI Integration'],
    },
    {
      year: 'Step 5',
      title: 'Real-World Production Applications',
      subtitle: 'Building Scalable Full-Stack & AI Solutions',
      description: 'Engineered production applications like KrishiMitra-Ai (Farmer Assistant AI) and Quick Hire (Local Worker Hiring Platform).',
      icon: FaRocket,
      skills: ['KrishiMitra-Ai', 'Quick Hire', 'Portfolio App'],
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-14 max-w-[1600px] mx-auto z-10 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          <FaRocket size={12} />
          <span>Growth & Milestones</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Sora'] text-white">
          Learning <span className="text-gradient-emerald">Journey</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          My roadmap from computer engineering fundamentals to full-stack engineering and AI integration.
        </p>
      </div>

      {/* Timeline Grid Roadmap */}
      <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 lg:ml-12 pl-6 sm:pl-10 space-y-8 text-left">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Icon Circle */}
            <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-10 h-10 rounded-full bg-[#060B11] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(0,255,157,0.4)] group-hover:scale-110 transition-transform">
              <step.icon size={15} />
            </div>

            {/* Glass Content Card */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-emerald-500/20 shadow-xl space-y-2.5 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full glass-pill text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30">
                  {step.year}
                </span>
                <span className="text-[11px] text-gray-400 font-mono font-medium">{step.subtitle}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-['Sora'] text-white group-hover:text-emerald-300 transition-colors">
                {step.title}
              </h3>

              <p className="text-gray-300 text-xs font-light leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1.5">
                {step.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-300 font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
