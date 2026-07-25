import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop screens (width >= 1024px)
    if (window.innerWidth < 1024) return

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.dataset.cursor === 'pointer'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible || typeof window === 'undefined' || window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Small Glowing Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#00FF9D] rounded-full pointer-events-none z-50 shadow-[0_0_12px_#00FF9D]"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Larger Smooth Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#00FF9D]/40 pointer-events-none z-50"
        animate={{
          x: mousePos.x - (isHovered ? 24 : 18),
          y: mousePos.y - (isHovered ? 24 : 18),
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          backgroundColor: isHovered ? 'rgba(0, 255, 157, 0.08)' : 'rgba(0, 255, 157, 0.02)',
          borderColor: isHovered ? '#00FF9D' : 'rgba(0, 255, 157, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.3 }}
      />
    </>
  )
}
