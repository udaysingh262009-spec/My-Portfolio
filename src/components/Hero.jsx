import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload, FaPython, FaReact, FaGitAlt, FaDatabase, FaBrain, FaCode } from 'react-icons/fa6'
import { SiFastapi } from 'react-icons/si'
import { projects } from '../data/projects'
import CyberpunkPortraitBackground from './CyberpunkPortraitBackground'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  // Floating Badges Positioned snugly around Large Circular Image Frame
  const leftBadges = [
    { name: 'Python', desc: 'AI & ML', icon: FaPython, color: 'text-yellow-400', pos: '-top-2 -left-2 sm:-top-4 sm:-left-6' },
    { name: 'FastAPI', desc: 'Backend', icon: SiFastapi, color: 'text-emerald-400', pos: 'top-1/3 -left-4 sm:top-1/3 sm:-left-8' },
    { name: 'React.js', desc: 'Frontend', icon: FaReact, color: 'text-cyan-400', pos: 'bottom-10 -left-2 sm:bottom-12 sm:-left-6' },
  ]

  const rightBadges = [
    { name: 'MySQL', desc: 'Database', icon: FaDatabase, color: 'text-blue-400', pos: '-top-2 -right-2 sm:-top-4 sm:-right-6' },
    { name: 'Machine Learning', desc: 'AI', icon: FaBrain, color: 'text-purple-400', pos: 'top-1/3 -right-4 sm:top-1/3 sm:-right-8' },
    { name: 'Git & GitHub', desc: 'Version Control', icon: FaGitAlt, color: 'text-orange-400', pos: 'bottom-10 -right-2 sm:bottom-12 sm:-right-6' },
  ]

  // Dynamic Statistics Cards
  const stats = [
    { num: `${projects.length}`, label: 'Projects Built' },
    { num: '3+', label: 'Tech Stacks' },
    { num: 'AI', label: 'Machine Learning' },
    { num: '100%', label: 'Passion' },
  ]

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] pt-[52px] pb-4 px-4 sm:px-8 lg:px-12 z-10 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full max-w-[1650px] mx-auto my-auto relative z-10">
        
        {/* COLUMN 1 (LEFT): Text Content & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start space-y-4 text-left z-20 lg:-translate-y-3 lg:translate-x-3"
        >
          {/* Top Greeting Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-gray-200 shadow-md">
              <span className="animate-bounce">👋</span>
              <span>Hi, I'm Uday Singh</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
          </motion.div>

          {/* Headline & Subtitle */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-['Sora'] tracking-tight text-white leading-[1.08]">
              Computer Engineering <br />
              <span className="text-gradient-emerald">Student</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-['Sora'] text-gray-300">
              Passionate About AI & Web Development
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-lg">
            I build modern, <span className="text-emerald-400 font-semibold">scalable</span> and <span className="text-emerald-400 font-semibold">intelligent digital products</span> that solve real world problems using code & AI.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-[#060B11] bg-emerald-glow-btn rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>View Projects</span>
              <FaArrowRight size={15} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-gray-200 glass-panel rounded-xl border border-white/10 hover:border-emerald-400/50 hover:text-white transition-all duration-300"
            >
              <span>Download Resume</span>
              <FaDownload size={15} className="text-emerald-400" />
            </Link>
          </motion.div>

          {/* 4 Stats Grid Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3 pt-2 w-full max-w-lg">
            {stats.map((st, i) => (
              <div key={i} className="glass-panel p-3 rounded-2xl border border-emerald-500/15 text-center hover:border-emerald-400/30 transition-colors">
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-['Sora']">{st.num}</div>
                <div className="text-[10px] sm:text-xs text-gray-400 leading-tight mt-0.5">{st.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* COLUMN 2 (RIGHT): LARGE GLOWING NEON GREEN CIRCULAR HERO PORTRAIT FRAME */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-2 z-20">
          
          {/* Background Matrix Code Layer */}
          <CyberpunkPortraitBackground />

          {/* Deep Green Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] lg:w-[480px] h-[340px] sm:h-[440px] lg:h-[480px] bg-emerald-500/25 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

          {/* FLOATING LARGE CIRCULAR HERO PORTRAIT CONTAINER */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 flex items-center justify-center"
          >
            {/* Glowing Neon Green Dual Ring Circle Frame */}
            <div className="relative w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full p-2 bg-gradient-to-b from-[#00FF9D] via-emerald-500/40 to-transparent shadow-[0_0_80px_rgba(0,255,157,0.45)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_110px_rgba(0,255,157,0.6)] group">
              
              {/* Inner Circular Portrait Window (Pure #060B11 Dark Background) */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/50 relative shadow-2xl bg-[#060B11]">
                
                {/* Perfect Seamless Dark Theme Profile Photo */}
                <img
                  src="/uday_profile_perfect.png"
                  onError={(e) => { e.target.src = '/uday_profile.jpg' }}
                  alt="Uday Singh Portrait"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.06] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Smooth Dark Gradient Blend */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060B11] via-[#060B11]/70 to-transparent pointer-events-none z-20"></div>

                {/* Inner Border Glow */}
                <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-20"></div>
              </div>
            </div>

            {/* Left Floating Badges */}
            {leftBadges.map((b, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${b.pos} z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 glass-panel rounded-2xl border border-emerald-500/30 shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform`}
              >
                <b.icon className={`${b.color}`} size={16} />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white leading-tight">{b.name}</div>
                  <div className="text-[8px] text-gray-400 leading-none">{b.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Right Floating Badges */}
            {rightBadges.map((b, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${b.pos} z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 glass-panel rounded-2xl border border-emerald-500/30 shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform`}
              >
                <b.icon className={`${b.color}`} size={16} />
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white leading-tight">{b.name}</div>
                  <div className="text-[8px] text-gray-400 leading-none">{b.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Status Pill Overlapping Chest Area */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-5 py-2.5 glass-panel rounded-2xl border border-emerald-500/35 text-xs font-medium text-gray-200 shadow-2xl backdrop-blur-xl whitespace-nowrap">
              <FaCode className="text-emerald-400" size={13} />
              <span>Live to Build • <strong className="text-emerald-400 font-extrabold">Dream • Code • Create</strong></span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
