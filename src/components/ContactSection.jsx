import { motion } from 'framer-motion'
import { FaEnvelope, FaLocationDot, FaGithub, FaLinkedin, FaInstagram, FaCode, FaPaperPlane, FaClock } from 'react-icons/fa6'

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/udaysingh262009-spec?tab=repositories',
      handle: '@udaysingh262009-spec',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com',
      handle: 'Uday Singh',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:udaysingh262009@gmail.com',
      handle: 'udaysingh262009@gmail.com',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/uday.__.02/',
      handle: '@uday.__.02',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1500px] mx-auto z-10 space-y-10 text-center">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        {/* Live Availability Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-pill border border-emerald-500/40 text-xs font-semibold text-gray-200 shadow-[0_0_20px_rgba(0,255,157,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping"></span>
          <span className="text-emerald-400 font-bold">🟢 Available for Work & AI Projects</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Sora'] text-white tracking-tight">
          Let's <span className="text-gradient-emerald">Connect</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Looking for an AI & Web Developer? Feel free to reach out directly through any of the channels below!
        </p>
      </motion.div>

      {/* ULTRA-PREMIUM CONTACT CARDS GRID */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left"
      >
        {/* Email Direct Contact Card */}
        <motion.a
          href="mailto:udaysingh262009@gmail.com"
          whileHover={{ y: -4, scale: 1.01 }}
          className="relative p-5 sm:p-6 rounded-3xl glass-panel border border-emerald-500/25 shadow-2xl flex flex-col justify-between group overflow-hidden hover:border-[#00FF9D]/60 hover:shadow-[0_15px_40px_rgba(0,255,157,0.2)] transition-all duration-300"
        >
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-colors"></div>
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <FaEnvelope size={20} />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold px-2.5 py-0.5 rounded-full glass-pill border border-emerald-500/30">
                Direct Email
              </span>
            </div>

            <div>
              <h3 className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                Official Email Address
              </h3>
              <div className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                udaysingh262009@gmail.com
              </div>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400 relative z-10">
            <span>Send Email Message</span>
            <FaPaperPlane size={12} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.a>

        {/* Location & Time Zone Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="relative p-5 sm:p-6 rounded-3xl glass-panel border border-emerald-500/25 shadow-2xl flex flex-col justify-between group overflow-hidden hover:border-[#00FF9D]/60 hover:shadow-[0_15px_40px_rgba(0,255,157,0.2)] transition-all duration-300"
        >
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors"></div>
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                <FaLocationDot size={20} />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold px-2.5 py-0.5 rounded-full glass-pill border border-cyan-500/30">
                Location
              </span>
            </div>

            <div>
              <h3 className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                Based In
              </h3>
              <div className="text-sm sm:text-base font-bold text-white">
                India 🇮🇳 <span className="text-[11px] text-gray-400 font-normal font-mono">(UTC +5:30)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400 relative z-10">
            <span className="flex items-center gap-1.5">
              <FaClock size={11} />
              <span>Available Globally</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>
        </motion.div>
      </motion.div>

      {/* FLOATING GLASS SOCIAL MEDIA DOCK (4 CIRCULAR BUTTONS) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="pt-4 flex flex-col items-center justify-center space-y-4"
      >
        <div className="inline-flex items-center gap-4 sm:gap-5 p-3 rounded-full glass-panel border border-emerald-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          {socialLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target={s.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.name}
              title={`${s.name}: ${s.handle}`}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-panel border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00FF9D] hover:border-[#00FF9D]/70 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg group relative"
            >
              <s.icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* REAL HIGH-END DEVELOPER SIGNATURE FOOTER (Matching Front Hero Wording Exactly) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pt-10 border-t border-white/10 text-xs text-gray-400 font-mono space-y-2 max-w-3xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 text-gray-200">
          <FaCode className="text-emerald-400" size={14} />
          <span>Crafted with <strong className="text-white font-bold">Code & Passion</strong> by <strong className="text-emerald-400 font-bold">Uday Singh</strong></span>
        </div>

        <div className="text-gray-300 text-[11px] font-mono font-semibold">
          Computer Engineering Student • Passionate About AI & Web Development
        </div>

        <div className="text-gray-500 text-[10px] pt-0.5">
          © {new Date().getFullYear()} Uday Singh • Live to Build • <span className="text-emerald-400 font-semibold">Dream • Code • Create</span>
        </div>
      </motion.div>

    </section>
  )
}
