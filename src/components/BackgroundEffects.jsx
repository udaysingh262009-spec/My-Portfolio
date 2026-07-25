import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#060B11]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

      {/* Top Center Huge Emerald Glow behind Hero Portrait */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-emerald-500/20 rounded-full blur-[160px]"
      />

      {/* Top Left Subtle Emerald Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-[140px]" />

      {/* Center Right Cyan Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-[150px]" />

      {/* Bottom Mountain Silhouette Graphic overlay */}
      <div className="absolute bottom-0 inset-x-0 h-96 opacity-25 bg-[radial-gradient(ellipse_at_bottom,#00FF9D_0%,transparent_70%)] pointer-events-none"></div>

      {/* Radial Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#060B11_95%)]"></div>
    </div>
  )
}
