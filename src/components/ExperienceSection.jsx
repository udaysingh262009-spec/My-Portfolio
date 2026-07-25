import { FaBriefcase, FaCalendar, FaLocationDot } from 'react-icons/fa6'

const experiences = [
  {
    role: 'Full Stack & AI Developer',
    company: 'Personal Projects & Freelance',
    duration: '2024 - Present',
    location: 'India',
    desc: 'Engineered web applications, REST APIs with FastAPI, React single-page apps, and computer vision models using Python and OpenCV.',
    highlights: ['React 19 & Vite', 'FastAPI & Python', 'AI Model Integration', 'MySQL & MongoDB'],
  },
  {
    role: 'Computer Engineering (Diploma)',
    company: 'Polytechnic Institute',
    duration: 'Pursuing (2024 - 2026)',
    location: 'India',
    desc: 'Studying core computer science engineering, data structures, algorithms, operating systems, database management, and software architecture.',
    highlights: ['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Object-Oriented Programming'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-300">
          <FaBriefcase size={12} />
          <span>My Career Path</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white">
          Work & Academic <span className="text-gradient-emerald">Experience</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          A summary of my hands-on technical development experience and academic foundation.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 text-left">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 shadow-2xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white font-['Sora']">
                  {exp.role}
                </h3>
                <span className="text-sm font-semibold text-emerald-400">
                  {exp.company}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel border border-white/10">
                  <FaCalendar className="text-emerald-400" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-panel border border-white/10">
                  <FaLocationDot className="text-emerald-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
              {exp.desc}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
