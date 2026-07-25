import { useState } from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, 
  FaGitAlt, FaWrench
} from 'react-icons/fa6'
import { SiFastapi, SiPandas, SiNumpy } from 'react-icons/si'

const categories = ['All', 'Frontend', 'Backend', 'Data Science & AI', 'Tools']

const skillsList = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: '95%', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', category: 'Frontend', level: '92%', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', category: 'Frontend', level: '90%', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React.js', category: 'Frontend', level: '92%', icon: FaReact, color: 'text-cyan-400' },

  // Backend
  { name: 'Python', category: 'Backend', level: '90%', icon: FaPython, color: 'text-yellow-400' },
  { name: 'FastAPI', category: 'Backend', level: '88%', icon: SiFastapi, color: 'text-emerald-400' },

  // Data Science & AI
  { name: 'NumPy', category: 'Data Science & AI', level: '85%', icon: SiNumpy, color: 'text-blue-400' },
  { name: 'Pandas', category: 'Data Science & AI', level: '85%', icon: SiPandas, color: 'text-purple-400' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: '92%', icon: FaGitAlt, color: 'text-orange-400' },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 max-w-[1650px] mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <FaWrench size={12} />
          <span>My Technical Toolkit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white">
          Skills & <span className="text-gradient-emerald">Expertise</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Technologies and frameworks I specialize in to build modern, scalable, and intelligent software applications.
        </p>
      </div>

      {/* Main Skills Container */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/20 shadow-2xl space-y-8">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-emerald-glow-btn text-[#060B11] shadow-lg scale-105'
                  : 'text-gray-300 hover:text-white glass-panel border border-white/10 hover:border-emerald-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 text-left max-w-5xl mx-auto">
          {filteredSkills.map((sk) => (
            <div
              key={sk.name}
              className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-emerald-400/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <sk.icon className={`${sk.color} text-3xl group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-bold text-emerald-400 font-mono">{sk.level}</span>
              </div>
              
              <h3 className="text-base font-bold text-white font-['Sora'] mb-2 group-hover:text-emerald-300 transition-colors">
                {sk.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                  style={{ width: sk.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
