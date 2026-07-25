import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa6'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[80px] z-50 transition-all duration-300 flex items-center ${
        scrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1700px] w-full mx-auto px-6 sm:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo: U/ Uday Singh */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 font-extrabold text-base shadow-[0_0_15px_rgba(0,255,157,0.2)] group-hover:scale-105 transition-transform">
              U/
            </div>
            <span className="text-2xl font-extrabold tracking-tight font-['Sora'] text-white group-hover:text-emerald-300 transition-colors">
              Uday Singh
            </span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 text-base font-semibold transition-colors duration-200 ${
                  isActive ? 'text-emerald-400 font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#00FF9D]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </motion.nav>

        {/* Right Action Icons & CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center gap-6"
        >
          {/* Social Icons (GitHub, LinkedIn, Email, Instagram) */}
          <div className="flex items-center gap-3 text-gray-300">
            <a
              href="https://github.com/udaysingh262009-spec?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 hover:text-emerald-400 transition-colors hover:scale-110"
            >
              <FaGithub size={19} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:text-emerald-400 transition-colors hover:scale-110"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href="mailto:udaysingh262009@gmail.com"
              aria-label="Email"
              className="p-2 hover:text-emerald-400 transition-colors hover:scale-110"
            >
              <FaEnvelope size={19} />
            </a>
            <a
              href="https://www.instagram.com/uday.__.02/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 hover:text-emerald-400 transition-colors hover:scale-110"
            >
              <FaInstagram size={19} />
            </a>
          </div>

          {/* Let's Connect Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 text-base font-bold text-[#060B11] bg-emerald-glow-btn rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            <span>Let's Connect</span>
            <FaPaperPlane size={14} />
          </Link>
        </motion.div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-emerald-500/20 px-6 py-6 absolute top-[80px] left-0 right-0"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold transition-colors ${
                    location.pathname === link.path
                      ? 'text-emerald-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-300">
                  <a href="https://github.com/udaysingh262009-spec?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                  <a href="mailto:udaysingh262009@gmail.com"><FaEnvelope size={20} /></a>
                  <a href="https://www.instagram.com/uday.__.02/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 bg-emerald-glow-btn text-[#060B11] font-extrabold rounded-xl text-sm"
                >
                  Let's Connect 🚀
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
