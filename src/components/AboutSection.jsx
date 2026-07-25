import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaLocationDot, FaHeart, FaBolt, FaArrowRight, FaCode } from 'react-icons/fa6'

export default function AboutSection() {
  const highlights = [
    { icon: FaGraduationCap, text: 'Computer Engineering Student' },
    { icon: FaLocationDot, text: 'From: India 🇮🇳' },
    { icon: FaHeart, text: 'Love to work on AI & Web Projects' },
    { icon: FaBolt, text: 'Always learning new technologies' },
  ]

  return (
    <section id="about" className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 z-10">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header (Balanced Scaled Font) */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-2.5 uppercase tracking-wider">
            <span>✨ Get To Know Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Sora'] text-white">
            About <span className="text-gradient-emerald">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* COLUMN 1 (LEFT): CLEAN GLOWING NEON GREEN CIRCULAR PORTRAIT FRAME */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-4"
          >
            {/* Deep Green Ambient Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[420px] lg:h-[460px] bg-emerald-500/25 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

            {/* FLOATING LARGE CIRCULAR PORTRAIT CONTAINER */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Glowing Neon Green Dual Ring Circle Frame */}
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full p-2.5 bg-gradient-to-b from-[#00FF9D] via-emerald-500/40 to-transparent shadow-[0_0_80px_rgba(0,255,157,0.45)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_110px_rgba(0,255,157,0.6)] group">
                
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
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060B11] via-[#060B11]/80 to-transparent pointer-events-none z-20"></div>

                  {/* Inner Border Glow */}
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-20"></div>
                </div>
              </div>

              {/* Status Pill Overlapping Chest Area */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-5 py-2.5 glass-panel rounded-2xl border border-emerald-500/35 text-xs font-medium text-gray-200 shadow-2xl backdrop-blur-xl whitespace-nowrap">
                <FaCode className="text-emerald-400" size={13} />
                <span>Engineering Student & <strong className="text-emerald-400 font-extrabold">Developer</strong></span>
              </div>

            </motion.div>

          </motion.div>

          {/* COLUMN 2 (RIGHT): Bio Text (Balanced Font Scaling) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start space-y-5 text-left"
          >
            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] text-white">
                Hi, I'm <span className="text-emerald-400">Uday Singh</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                I believe technology has the power to solve real-world problems. As a passionate <strong className="text-white font-semibold">Full Stack Developer</strong> and <strong className="text-emerald-400 font-semibold">AI learner</strong>, I'm constantly exploring new tools, frameworks, and ideas to build fast, responsive, and impactful applications. My goal is to create digital experiences that are both functional and visually engaging.
              </p>
            </div>

            {/* 4 Highlight Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-1">
              {highlights.map((h, index) => (
                <div key={index} className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 hover:border-emerald-400/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <h.icon size={16} />
                  </div>
                  <span className="text-xs font-medium text-gray-200">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Superpower Quote Pill */}
            <div className="glass-panel p-3.5 rounded-2xl border border-emerald-500/25 w-full bg-emerald-950/20">
              <p className="text-xs font-mono text-emerald-300 italic flex items-center gap-2">
                <span>⚡</span>
                <span>"Code is not just my skill, it's my Superpower!"</span>
              </p>
            </div>

            {/* Navigation CTA Button */}
            <div className="pt-1">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#060B11] bg-emerald-glow-btn rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Explore My Skills</span>
                <FaArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
