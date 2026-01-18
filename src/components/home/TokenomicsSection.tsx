import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Token distribution data
const tokenData = [
  {
    name: "Community & Ecosystem",
    percentage: 35,
    color: "#06b6d4",
    items: ["Airdrop", "Staking Rewards", "Liquidity Mining", "Ecosystem Grants"]
  },
  {
    name: "Investors",
    percentage: 28,
    color: "#8b5cf6",
    items: ["Seed Round", "Series A/B", "Public Sale"]
  },
  {
    name: "Team & Development",
    percentage: 19,
    color: "#ec4899",
    items: ["Team & Advisors", "Development Fund"]
  },
  {
    name: "Governance & Liquidity",
    percentage: 18,
    color: "#22c55e",
    items: ["Treasury/DAO", "Liquidity (DEX+CEX)"]
  },
];

const TokenomicsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);

  // Mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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

  // Ring configurations - BIGGER & THICKER for larger center
  const rings = [
    { size: 340, width: 8, color: tokenData[0].color, direction: 1, speed: 35 },
    { size: 270, width: 7, color: tokenData[1].color, direction: -1, speed: 28 },
    { size: 200, width: 6, color: tokenData[2].color, direction: 1, speed: 22 },
    { size: 130, width: 5, color: tokenData[3].color, direction: -1, speed: 16 },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 overflow-hidden"
    >
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes spin-slow-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slow-ccw {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .ring-spin-cw {
          animation: spin-slow-cw var(--speed) linear infinite;
        }
        .ring-spin-ccw {
          animation: spin-slow-ccw var(--speed) linear infinite;
        }
      `}</style>

      {/* Mouse tracking glow */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-700 z-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          opacity: 0,
          filter: 'blur(40px)',
        }}
      />

      {/* NAVY CAPSULE CONTAINER - MATCHING SMART CONTRACT BUILDER WIDTH */}
      <div
        className="relative mx-4 md:mx-8 overflow-hidden"
        style={{
          background: '#0c1222',
          borderRadius: '40px',
          border: '1px solid rgba(59, 130, 246, 0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 60px rgba(59, 130, 246, 0.08)',
        }}
      >
        {/* Inner ambient glows */}
        <div
          className="absolute -top-20 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10 py-16 px-8 md:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-5 py-2 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
              Supply & Distribution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>MPC Token</span> Tokenomics
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The economic engine powering the Megapayer ecosystem.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

            {/* LEFT: Token Reactor with Real Coin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[380px] h-[380px] flex-shrink-0"
            >
              {/* Ambient glow behind everything */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
                  filter: 'blur(30px)',
                  animation: 'pulse-glow 4s ease-in-out infinite',
                }}
              />

              {/* Concentric Neon Rings - BIGGER & THICKER */}
              {rings.map((ring, index) => (
                <div
                  key={index}
                  className={`absolute left-1/2 top-1/2 rounded-full ${ring.direction === 1 ? 'ring-spin-cw' : 'ring-spin-ccw'}`}
                  style={{
                    width: ring.size,
                    height: ring.size,
                    '--speed': `${ring.speed}s`,
                    border: `${ring.width}px solid transparent`,
                    borderTopColor: ring.color,
                    borderRightColor: ring.color,
                    borderBottomColor: hoveredRing === index ? ring.color : 'transparent',
                    boxShadow: `
                      0 0 20px ${ring.color},
                      0 0 45px ${ring.color}90,
                      0 0 70px ${ring.color}50,
                      inset 0 0 20px ${ring.color}25
                    `,
                    filter: hoveredRing === index ? `drop-shadow(0 0 25px ${ring.color})` : 'none',
                    opacity: hoveredRing !== null && hoveredRing !== index ? 0.35 : 1,
                    transition: 'opacity 0.3s, filter 0.3s, border-color 0.3s',
                  } as React.CSSProperties}
                />
              ))}

              {/* CENTER: Real Token Image - FIXED CENTER */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="relative w-24 h-24 md:w-28 md:h-28"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.5)) drop-shadow(0 0 40px rgba(234, 179, 8, 0.3))',
                  }}
                >
                  <Image
                    src="/images/mpc.png"
                    alt="MPC Token"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Data List */}
            <div className="space-y-5 flex-1 max-w-md">
              {tokenData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredRing(index)}
                  onMouseLeave={() => setHoveredRing(null)}
                  className="relative pl-5 py-4 cursor-pointer group rounded-r-xl transition-all duration-300"
                  style={{
                    background: hoveredRing === index ? 'rgba(255,255,255,0.04)' : 'transparent',
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  {/* Hover glow */}
                  {hoveredRing === index && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                      style={{
                        boxShadow: `0 0 15px ${item.color}, 0 0 30px ${item.color}`,
                      }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {item.name}
                      </h4>
                      <div className="text-sm text-gray-500">
                        {item.items.join(' • ')}
                      </div>
                    </div>

                    <div
                      className="text-4xl md:text-5xl font-black transition-all duration-300"
                      style={{
                        color: item.color,
                        textShadow: hoveredRing === index ? `0 0 30px ${item.color}` : 'none',
                      }}
                    >
                      {item.percentage}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/token/mpc"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-400 border border-purple-500/30 hover:border-purple-400/60 transition-all group"
            >
              Learn More About $MPC
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
