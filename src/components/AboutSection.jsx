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
    <section id="about" className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-14 z-10">
      <div className="max-w-[1650px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            <span>✨ Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white">
            About <span className="text-gradient-emerald">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMN 1 (LEFT): CLEAN GLOWING NEON GREEN CIRCULAR PORTRAIT FRAME WITH PERFECT BACKGROUND MATCHING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-6"
          >
            {/* Deep Green Ambient Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] lg:w-[540px] h-[380px] sm:h-[480px] lg:h-[540px] bg-emerald-500/25 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse"></div>

            {/* FLOATING LARGE CIRCULAR PORTRAIT CONTAINER */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Glowing Neon Green Dual Ring Circle Frame (480px x 480px) */}
              <div className="relative w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full p-2.5 bg-gradient-to-b from-[#00FF9D] via-emerald-500/40 to-transparent shadow-[0_0_90px_rgba(0,255,157,0.45)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_110px_rgba(0,255,157,0.6)] group">
                
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
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060B11] via-[#060B11]/80 to-transparent pointer-events-none z-20"></div>

                  {/* Inner Border Glow */}
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-20"></div>
                </div>
              </div>

              {/* Status Pill Overlapping Chest Area */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2.5 px-6 py-3 glass-panel rounded-2xl border border-emerald-500/35 text-xs sm:text-sm font-medium text-gray-200 shadow-2xl backdrop-blur-xl whitespace-nowrap">
                <FaCode className="text-emerald-400" size={14} />
                <span>Engineering Student & <strong className="text-emerald-400 font-extrabold">Developer</strong></span>
              </div>

            </motion.div>

          </motion.div>

          {/* COLUMN 2 (RIGHT): Bio Text, Highlights & Superpower Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold font-['Sora'] text-white">
                Hi, I'm <span className="text-emerald-400">Uday Singh</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                I believe technology has the power to solve real-world problems. As a passionate <strong className="text-white font-semibold">Full Stack Developer</strong> and <strong className="text-emerald-400 font-semibold">AI learner</strong>, I'm constantly exploring new tools, frameworks, and ideas to build fast, responsive, and impactful applications. My goal is to create digital experiences that are both functional and visually engaging.
              </p>
            </div>

            {/* 4 Highlight Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {highlights.map((h, index) => (
                <div key={index} className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3.5 hover:border-emerald-400/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <h.icon size={18} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-200">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Superpower Quote Pill */}
            <div className="glass-panel p-4 rounded-2xl border border-emerald-500/25 w-full bg-emerald-950/20">
              <p className="text-xs sm:text-sm font-mono text-emerald-300 italic flex items-center gap-2">
                <span>⚡</span>
                <span>"Code is not just my skill, it's my Superpower!"</span>
              </p>
            </div>

            {/* Navigation CTA Button */}
            <div className="pt-2">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#060B11] bg-emerald-glow-btn rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Explore My Skills</span>
                <FaArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
