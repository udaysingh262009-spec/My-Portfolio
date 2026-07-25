import { motion } from 'framer-motion'

export default function CyberpunkPortraitBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
      
      {/* 1. Large Ambient Green Radial Backlight Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] rounded-full bg-emerald-500/20 blur-[130px]"
      />

      {/* 2. Cyber Grid Pattern & Matrix Binary Drift */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {[
        { text: '01001001', top: '5%', left: '2%' },
        { text: '11010010', top: '15%', right: '4%' },
        { text: '01100001', bottom: '15%', left: '4%' },
        { text: '10101100', bottom: '25%', right: '4%' },
      ].map((bin, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: bin.top, left: bin.left, right: bin.right }}
          className="absolute font-mono text-xs text-emerald-400 font-bold tracking-widest pointer-events-none"
        >
          {bin.text}
        </motion.span>
      ))}

      {/* 3. AI Neural Network Nodes & SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 500 500">
        <line x1="70" y1="110" x2="210" y2="170" stroke="#00FF9D" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="430" y1="130" x2="320" y2="200" stroke="#00FF9D" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="90" y1="390" x2="210" y2="320" stroke="#00FF9D" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="410" y1="370" x2="310" y2="290" stroke="#00FF9D" strokeWidth="1.5" strokeDasharray="4 4" />

        <circle cx="70" cy="110" r="4.5" fill="#00FF9D" className="animate-pulse" />
        <circle cx="430" cy="130" r="4.5" fill="#00FF9D" className="animate-pulse" />
        <circle cx="90" cy="390" r="4.5" fill="#00FF9D" className="animate-pulse" />
        <circle cx="410" cy="370" r="4.5" fill="#00FF9D" className="animate-pulse" />
      </svg>

      {/* 4. PROMINENT & HIGHLY VISIBLE FLOATING CODE MATRIX */}
      <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none font-mono text-xs text-emerald-300 opacity-70 select-none overflow-hidden">
        
        {/* Top Left Code Window: React.jsx */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="self-start text-left space-y-1 glass-panel p-2.5 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(0,255,157,0.2)] max-w-[240px] backdrop-blur-md"
        >
          <div className="flex items-center gap-1.5 pb-1 border-b border-emerald-500/20 text-[10px] text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>React.jsx</span>
          </div>
          <div className="text-[11px] leading-tight space-y-0.5">
            <div><span className="text-purple-400 font-bold">import</span> React <span className="text-purple-400 font-bold">from</span> <span className="text-yellow-300">'react'</span>;</div>
            <div><span className="text-blue-400 font-bold">const</span> [<span className="text-emerald-300 font-bold">app</span>] = useState(<span className="text-yellow-300">'active'</span>);</div>
          </div>
        </motion.div>

        {/* Top Right Code Window: api.py */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="self-end text-right space-y-1 glass-panel p-2.5 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(0,255,157,0.2)] max-w-[250px] backdrop-blur-md"
        >
          <div className="flex items-center justify-end gap-1.5 pb-1 border-b border-emerald-500/20 text-[10px] text-emerald-400 font-bold">
            <span>api.py</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="text-[11px] leading-tight space-y-0.5">
            <div><span className="text-purple-400 font-bold">from</span> fastapi <span className="text-purple-400 font-bold">import</span> FastAPI</div>
            <div><span className="text-blue-400 font-bold">async def</span> <span className="text-emerald-300 font-bold">ai_predict</span>():</div>
          </div>
        </motion.div>

        {/* Bottom Left Code Window: database.sql */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="self-start text-left space-y-1 glass-panel p-2.5 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(0,255,157,0.2)] max-w-[240px] backdrop-blur-md"
        >
          <div className="flex items-center gap-1.5 pb-1 border-b border-emerald-500/20 text-[10px] text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>database.sql</span>
          </div>
          <div className="text-[11px] leading-tight space-y-0.5">
            <div><span className="text-purple-400 font-bold">SELECT</span> * <span className="text-purple-400 font-bold">FROM</span> developer;</div>
            <div className="text-gray-400">$ git push origin main</div>
          </div>
        </motion.div>

        {/* Bottom Right Code Window: response.json */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="self-end text-right space-y-1 glass-panel p-2.5 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(0,255,157,0.2)] max-w-[230px] backdrop-blur-md"
        >
          <div className="flex items-center justify-end gap-1.5 pb-1 border-b border-emerald-500/20 text-[10px] text-emerald-400 font-bold">
            <span>response.json</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div className="text-[11px] leading-tight space-y-0.5">
            <div>{'{'} <span className="text-emerald-300 font-bold">"status"</span>: <span className="text-yellow-300 font-bold">200</span>, <span className="text-emerald-300 font-bold">"dev"</span>: <span className="text-yellow-300 font-bold">"Uday"</span> {'}'}</div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
