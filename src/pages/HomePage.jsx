import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#060B11] flex items-center justify-center overflow-hidden">
      {/* FIXED VIEWPORT BACKGROUND MOUNTAIN WALLPAPER (TOTAL TOUCH BOTTOM EDGE) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/black_mountains.jpg"
          alt="Black Mountain Landscape"
          className="w-full h-full object-cover object-bottom opacity-85 filter contrast-125 brightness-110"
        />
        {/* Soft Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#060B11]/50"></div>
      </div>

      <Hero />
    </div>
  )
}
