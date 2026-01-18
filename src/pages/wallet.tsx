import { useRef, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

const WalletPage = () => {
  const neuralRef = useRef(null);
  const securityRef = useRef(null);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const isNeuralInView = useInView(neuralRef, { once: true, amount: 0.3 });
  const isSecurityInView = useInView(securityRef, { once: true, amount: 0.3 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setTiltX(-y);
    setTiltY(x);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltX(0);
    setTiltY(0);
  }, []);

  const blockchains = [
    { name: "Bitcoin", symbol: "BTC", color: "#F7931A" },
    { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
    { name: "Solana", symbol: "SOL", color: "#14F195" },
    { name: "Cardano", symbol: "ADA", color: "#0033AD" },
    { name: "Avalanche", symbol: "AVAX", color: "#E84142" },
    { name: "Polkadot", symbol: "DOT", color: "#E6007A" },
    { name: "Cosmos", symbol: "ATOM", color: "#2E3148" },
    { name: "Near", symbol: "NEAR", color: "#00C08B" },
    { name: "Polygon", symbol: "MATIC", color: "#8247E5" },
    { name: "Arbitrum", symbol: "ARB", color: "#28A0F0" },
  ];

  return (
    <Layout>
      <Head>
        <title>Megapayer Universal Wallet | Multi-Chain Asset Management</title>
        <meta
          name="description"
          content="Megapayer's Universal Crypto Wallet supports 50+ blockchains with self-custody and seamless multi-chain asset management."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes flow-dot {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes card-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(138, 43, 226, 0.3); }
        }
        .neon-title {
          text-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(138, 43, 226, 0.3);
        }
        .glass-card:hover {
          border-color: rgba(0, 240, 255, 0.4);
          box-shadow: 0 0 40px rgba(0, 240, 255, 0.2);
        }
      `}</style>

      {/* HERO SECTION - The Holographic Interface */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050505' }}>
        {/* Ambient Glows */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 50%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 50%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                Universal Crypto Wallet
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  One Wallet.
                </span>
                <br />
                <span className="text-white neon-title">Infinite Chains.</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-lg">
                Manage your Bitcoin, Ethereum, Solana, and 50+ chains in one
                non-custodial fortress. Your keys, your crypto, your control.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/coming-soon?product=Wallet&returnUrl=/wallet"
                  className="relative px-8 py-4 font-bold rounded-xl overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                      padding: '2px',
                    }}
                  />
                  <div
                    className="absolute inset-[2px] rounded-[10px] bg-[#050505] group-hover:bg-transparent transition-all duration-300"
                  />
                  <span className="relative z-10 text-white flex items-center gap-2">
                    <span>📥</span> Download Now
                  </span>
                </Link>

                <Link
                  href="/whitepaper/wallet"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                >
                  View Security Audit
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: Holographic Card with Parallax Tilt */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '1000px' }}
            >
              {/* Background Glow */}
              <div
                className="absolute w-[350px] h-[400px] rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(138, 43, 226, 0.2) 0%, transparent 60%)',
                  filter: 'blur(50px)',
                }}
              />

              {/* Frosted Glass Card */}
              <div
                className="absolute w-[320px] h-[200px] rounded-2xl transition-transform duration-200"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0, 240, 255, 0.1)',
                  transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(50px)`,
                }}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-bold text-lg">MEGAPAYER</div>
                      <div className="text-gray-400 text-sm">Universal Wallet</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Total Balance</div>
                    <div className="text-white font-bold text-2xl">$124,582.90</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-gray-400 text-xs">•••• •••• •••• 4829</div>
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                      style={{ background: 'rgba(0, 255, 157, 0.2)', color: '#00ff9d' }}
                    >
                      🛡️ Protected
                    </div>
                  </div>
                </div>
              </div>

              {/* Holographic Phone Screen behind */}
              <div
                className="absolute w-[200px] h-[380px] rounded-2xl -z-10 transition-transform duration-200"
                style={{
                  background: 'rgba(10, 10, 20, 0.9)',
                  border: '2px solid rgba(0, 240, 255, 0.3)',
                  boxShadow: '0 0 40px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.05)',
                  transform: `rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg) translateX(80px) translateY(-20px)`,
                }}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="text-cyan-400 text-xs font-mono">Live</span>
                  </div>
                  {/* Mock price ticker */}
                  <div className="space-y-2 flex-1">
                    {["BTC", "ETH", "SOL"].map((coin, i) => (
                      <div key={coin} className="flex justify-between items-center p-2 rounded bg-white/5">
                        <span className="text-white text-xs">{coin}</span>
                        <span className="text-green-400 text-xs">+{(2 + i * 1.3).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-auto flex items-center justify-center gap-2 p-2 rounded-lg"
                    style={{ background: 'rgba(0, 255, 157, 0.15)' }}
                  >
                    <span style={{ color: '#00ff9d' }}>🛡️</span>
                    <span className="text-xs" style={{ color: '#00ff9d' }}>Assets Protected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: UNIFIED KEY SYSTEM - The Neural Core */}
      <section ref={neuralRef} className="py-24 overflow-hidden" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isNeuralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Unified Key</span> Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              One master seed secures all your assets across every blockchain
            </p>
          </motion.div>

          {/* Neural Core Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isNeuralInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Center Master Seed */}
            <div
              className="absolute w-24 h-24 rounded-full flex items-center justify-center z-10"
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                boxShadow: '0 0 60px rgba(0, 240, 255, 0.5), 0 0 100px rgba(138, 43, 226, 0.3)',
              }}
            >
              <span className="text-4xl">🔑</span>
            </div>

            {/* Connection Lines and Blockchain Nodes */}
            {blockchains.map((chain, i) => {
              const angle = (i * 36 - 90) * (Math.PI / 180);
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div key={chain.symbol}>
                  {/* Laser line */}
                  <div
                    className="absolute left-1/2 top-1/2 h-px origin-left"
                    style={{
                      width: radius,
                      transform: `rotate(${i * 36 - 90}deg)`,
                      background: `linear-gradient(90deg, ${chain.color}, transparent)`,
                      animation: `pulse-line 2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                  {/* Blockchain node */}
                  <div
                    className="absolute w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      background: `rgba(${parseInt(chain.color.slice(1, 3), 16)}, ${parseInt(chain.color.slice(3, 5), 16)}, ${parseInt(chain.color.slice(5, 7), 16)}, 0.2)`,
                      border: `2px solid ${chain.color}`,
                      boxShadow: `0 0 20px ${chain.color}40`,
                    }}
                  >
                    <span className="text-white text-xs font-bold">{chain.symbol}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <p className="text-center text-gray-500 mt-8">
            Universal Key Derivation System (UKDS) - One seed, all blockchains
          </p>
        </div>
      </section>

      {/* SECTION 3: SUPPORTED CHAINS - Infinite Marquee */}
      <section className="py-16 overflow-hidden" style={{ background: '#050505' }}>
        <h3 className="text-center text-2xl font-bold text-white mb-12">50+ Supported Blockchains</h3>

        {/* Row 1 - Left scroll */}
        <div className="relative mb-6">
          <div
            className="flex gap-8"
            style={{ animation: 'marquee-left 30s linear infinite', width: 'max-content' }}
          >
            {[...blockchains, ...blockchains].map((chain, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full hover:scale-110 transition-transform cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: chain.color }}
                />
                <span className="text-white font-medium">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right scroll */}
        <div className="relative">
          <div
            className="flex gap-8"
            style={{ animation: 'marquee-right 35s linear infinite', width: 'max-content' }}
          >
            {[...blockchains.reverse(), ...blockchains].map((chain, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full hover:scale-110 transition-transform cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: chain.color }}
                />
                <span className="text-white font-medium">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SECURITY & FUTURE - Bento Glass Cards */}
      <section ref={securityRef} className="py-24" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSecurityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Enterprise-Grade <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Security</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quantum Secure",
                desc: "Post-quantum cryptography ready. Future-proof key derivation resistant to quantum computing attacks.",
                icon: "🔐",
              },
              {
                title: "Biometric Auth",
                desc: "Face ID, Touch ID, and advanced biometric security with on-device secure enclave.",
                icon: "👁️",
              },
              {
                title: "Multi-Signature",
                desc: "Require multiple approvers for high-value transactions. Perfect for organizations.",
                icon: "✍️",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSecurityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-10 rounded-3xl transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center text-5xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1))',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Take Control of Your Digital Assets
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Download Megapayer Universal Wallet and experience the future of self-custody.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/coming-soon?product=Android%20Wallet&returnUrl=/wallet"
                className="px-8 py-4 font-bold rounded-xl text-white flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                }}
              >
                <span>📱</span> Android
              </Link>
              <Link
                href="/coming-soon?product=iOS%20Wallet&returnUrl=/wallet"
                className="px-8 py-4 font-bold rounded-xl text-white flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                }}
              >
                <span>🍎</span> iOS
              </Link>
              <Link
                href="/whitepaper/wallet"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                Read Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WalletPage;
