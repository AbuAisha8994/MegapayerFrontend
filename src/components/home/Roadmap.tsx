import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Roadmap data
const roadmapData = [
  { quarter: "Q2 2025", title: "Launch", items: ["Seed Sale", "Airdrop", "Community"] },
  { quarter: "Q3 2025", title: "Products", items: ["Wallet", "DEX", "NFT Beta"] },
  { quarter: "Q4 2025", title: "Mainnet", items: ["CEX Listing", "NFT Live", "P2P"] },
  { quarter: "Q1 2026", title: "Scale", items: ["Mobile", "Bridge", "Partners"] },
];

const Roadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !glowRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    glowRef.current.style.left = `${e.clientX - rect.left - 150}px`;
    glowRef.current.style.top = `${e.clientY - rect.top - 150}px`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 overflow-hidden"
      id="roadmap"
      style={{ background: '#050508' }}
    >
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes flowDot {
          0% { offset-distance: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .flow-dot {
          offset-path: var(--path);
          animation: flowDot var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
        .neon-cube {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Adım 1: Dijital Örümcek Ağı (Spider Web) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>

          {/* Paths for flowing dots */}
          <path id="path1" d="M 100,150 Q 400,100 700,200" fill="none" />
          <path id="path2" d="M 500,80 Q 600,200 900,150" fill="none" />
          <path id="path3" d="M 200,400 Q 500,350 800,450" fill="none" />
          <path id="path4" d="M 300,100 L 300,500" fill="none" />
          <path id="path5" d="M 600,80 L 600,520" fill="none" />
          <path id="path6" d="M 900,100 L 900,500" fill="none" />
        </defs>

        {/* Ferah ağ çizgileri - Thin web lines */}
        <g stroke="url(#webGrad)" strokeWidth="1" fill="none" opacity="0.5">
          {/* Horizontal curves */}
          <path d="M 0,150 Q 300,100 600,180 T 1200,150" />
          <path d="M 0,300 Q 400,250 800,320 T 1200,300" />
          <path d="M 0,450 Q 350,400 700,470 T 1200,450" />

          {/* Vertical lines */}
          <line x1="200" y1="50" x2="200" y2="550" opacity="0.3" />
          <line x1="400" y1="50" x2="400" y2="550" opacity="0.3" />
          <line x1="600" y1="50" x2="600" y2="550" opacity="0.3" />
          <line x1="800" y1="50" x2="800" y2="550" opacity="0.3" />
          <line x1="1000" y1="50" x2="1000" y2="550" opacity="0.3" />

          {/* Diagonal connections */}
          <line x1="200" y1="150" x2="400" y2="300" opacity="0.2" />
          <line x1="400" y1="300" x2="600" y2="150" opacity="0.2" />
          <line x1="600" y1="300" x2="800" y2="450" opacity="0.2" />
          <line x1="800" y1="300" x2="1000" y2="150" opacity="0.2" />
        </g>

        {/* Akan ışık noktaları - Flowing light dots */}
        {[
          { path: 'path1', dur: '5s', delay: '0s', color: '#06b6d4' },
          { path: 'path2', dur: '6s', delay: '1s', color: '#8b5cf6' },
          { path: 'path3', dur: '7s', delay: '2s', color: '#06b6d4' },
          { path: 'path4', dur: '8s', delay: '0.5s', color: '#ec4899' },
          { path: 'path5', dur: '6s', delay: '1.5s', color: '#8b5cf6' },
          { path: 'path6', dur: '7s', delay: '2.5s', color: '#06b6d4' },
        ].map((dot, i) => (
          <circle
            key={i}
            r="4"
            fill={dot.color}
            className="flow-dot"
            style={{
              '--path': `url(#${dot.path})`,
              '--duration': dot.dur,
              '--delay': dot.delay,
              filter: `drop-shadow(0 0 6px ${dot.color})`,
            } as React.CSSProperties}
          />
        ))}
      </svg>

      {/* Adım 2: Neon Küpler (CSS-only 3D) */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: '8%', top: '15%', delay: 0 },
          { left: '92%', top: '15%', delay: 0.5 },
          { left: '5%', top: '75%', delay: 1 },
          { left: '95%', top: '75%', delay: 1.5 },
          { left: '50%', top: '10%', delay: 0.3 },
          { left: '50%', top: '85%', delay: 0.8 },
        ].map((cube, i) => (
          <div
            key={i}
            className="absolute neon-cube"
            style={{
              left: cube.left,
              top: cube.top,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${cube.delay}s`,
            }}
          >
            <div
              className="w-6 h-6 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                border: '1px solid rgba(6, 182, 212, 0.5)',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 10px rgba(255,255,255,0.1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Adım 3: Mouse Takip Eden Işık Huzmesi */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.15) 30%, transparent 70%)',
          opacity: 0,
          filter: 'blur(20px)',
        }}
      />

      {/* Adım 4: Roadmap Kartları (Havada Asılı) */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 border border-cyan-500/40 rounded-full text-cyan-400 text-sm mb-6">
            🚀 2025-2026 Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Megapayer{" "}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Roadmap
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Building the future of decentralized finance, one block at a time.
          </p>
        </motion.div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.quarter}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Connection line */}
              {index < roadmapData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-cyan-500/50 to-purple-500/50" />
              )}

              {/* Floating Card */}
              <div
                className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'rgba(5, 5, 15, 0.8)',
                  boxShadow: '0 0 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent 70%)',
                }} />

                <div className="relative z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.quarter.includes('2025')
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-purple-500/20 text-purple-400'
                    }`}>
                    {item.quarter}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

                  <ul className="space-y-2">
                    {item.items.map((task, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-2" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/whitepaper/roadmap"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/60 transition-all group"
          >
            View Full Roadmap
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
