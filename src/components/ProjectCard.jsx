import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaCode, FaLaptopCode, FaBrain, FaImages, FaXmark, FaChevronLeft, FaChevronRight, FaLock } from 'react-icons/fa6'

export default function ProjectCard({ project }) {
  const { title, description, image, gallery, tech = [], github, category } = project

  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const imageList = gallery && gallery.length > 0 ? gallery : (image ? [image] : [])
  const currentImage = imageList[activeImgIndex] || image

  const handleNextImage = (e) => {
    e.stopPropagation()
    setActiveImgIndex((prev) => (prev + 1) % imageList.length)
  }

  const handlePrevImage = (e) => {
    e.stopPropagation()
    setActiveImgIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
  }

  const getCategoryIcon = (cat) => {
    if (cat === 'AI & ML') return FaBrain
    if (cat === 'Full Stack') return FaLaptopCode
    return FaCode
  }

  const CategoryIcon = getCategoryIcon(category)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl flex flex-col justify-between group hover:border-emerald-400/50 hover:shadow-[0_15px_45px_rgba(0,255,157,0.15)] transition-all duration-500"
      >
        {/* Clean Card Header Screen View */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#0A121A] via-[#060B11] to-[#04080D] border-b border-emerald-500/15">
          
          {image ? (
            <div
              className="relative w-full h-full cursor-pointer group/img flex items-center justify-center p-1.5"
              onClick={() => setLightboxOpen(true)}
            >
              {/* Primary Main Clean Screenshot */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain rounded-xl group-hover/img:scale-[1.03] transition-transform duration-500 filter brightness-[0.98] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B11]/80 via-transparent to-black/30 pointer-events-none"></div>

              {/* Category Pill & Screenshots Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                  {category}
                </span>

                {imageList.length > 1 && (
                  <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] font-mono font-bold text-gray-200 border border-white/20 flex items-center gap-1.5 shadow-md group-hover/img:border-emerald-400/60 transition-colors">
                    <FaImages size={11} className="text-emerald-400" />
                    <span>View Screenshots ({imageList.length})</span>
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 h-full flex flex-col justify-between relative">
              {/* Ambient Background Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/35 transition-colors"></div>

              {/* Window Dots & Category Badge */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                  {category}
                </span>
              </div>

              {/* Icon Banner */}
              <div className="flex items-center gap-2.5 relative z-10">
                <div className="p-2.5 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                  <CategoryIcon size={20} />
                </div>
                <div className="font-mono text-[11px] text-gray-400">
                  <span className="text-emerald-400 font-bold">project</span>.config.js
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Card Body (Balanced Font Sizes) */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4 text-left">
          <div className="space-y-2">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold font-['Sora'] text-white group-hover:text-emerald-300 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-xs font-light leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies Badges */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links (GitHub Repository & Demo Status Badge) */}
            <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/10">
              <a
                href={github || 'https://github.com/udaysingh262009-spec?tab=repositories'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold text-[#060B11] bg-emerald-glow-btn rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
              >
                <FaGithub size={15} />
                <span>View GitHub Code</span>
              </a>

              <div
                className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 text-[11px] font-mono font-semibold text-gray-400 glass-panel rounded-xl border border-white/10"
                title="Live Demo Hosting Upcoming"
              >
                <FaLock size={10} className="text-emerald-400" />
                <span>Demo Soon</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal with Full-Screen Screenshot Carousel Slider */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Viewport Top Right Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#00FF9D]/40 text-white hover:text-[#00FF9D] hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] bg-black/80 font-semibold text-xs"
              aria-label="Close modal and go back"
            >
              <FaXmark size={16} className="text-emerald-400" />
              <span>Back / Close</span>
            </button>

            {/* Modal Lightbox Content Container */}
            <div
              className="relative max-w-6xl w-full max-h-[90vh] rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-2xl p-3 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Inner Window Top Bar Close Button */}
              <div className="w-full flex items-center justify-between px-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setLightboxOpen(false)} title="Close"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs font-mono text-gray-300 font-bold ml-2">{title} Preview</span>
                </div>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-emerald-400 hover:scale-110 transition-transform"
                  aria-label="Close preview"
                >
                  <FaXmark size={16} />
                </button>
              </div>

              {/* Screenshot View Container */}
              <div className="relative w-full h-[62vh] sm:h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-[#060B11] mt-2 p-2">
                <img
                  src={currentImage}
                  alt={title}
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Left & Right Carousel Slider Arrows */}
                {imageList.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      aria-label="Previous screenshot"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel border border-white/20 text-white hover:text-emerald-400 hover:scale-110 transition-all shadow-2xl bg-black/70"
                    >
                      <FaChevronLeft size={16} />
                    </button>

                    <button
                      onClick={handleNextImage}
                      aria-label="Next screenshot"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel border border-white/20 text-white hover:text-emerald-400 hover:scale-110 transition-all shadow-2xl bg-black/70"
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Thumbnail Gallery Selector & Indicator */}
              {imageList.length > 1 && (
                <div className="w-full pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
                  <div className="text-xs font-mono text-emerald-400 font-bold">
                    {title} • Step {activeImgIndex + 1} of {imageList.length}
                  </div>

                  {/* Thumbnail Previews Bar */}
                  <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
                    {imageList.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`w-14 h-9 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-[#0A121A] ${
                          activeImgIndex === idx
                            ? 'border-[#00FF9D] scale-105 shadow-[0_0_12px_#00FF9D]'
                            : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
