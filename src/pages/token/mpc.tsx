import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

// Animated feature box component
type FeatureBoxProps = {
  title: string;
  children: React.ReactNode;
  delay?: number;
};

const FeatureBox = ({ title, children, delay = 0 }: FeatureBoxProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
};

// Check mark list item component
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mb-4">
    <div className="shrink-0 mt-1 mr-3">
      <div className="p-1 bg-primary/20 rounded-full">
        <svg
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <span className="text-gray-300">{children}</span>
  </div>
);

const MPCTokenPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mouse tracking for neon glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      {/* Mouse-Following Neon Glow */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(138, 43, 226, 0.1) 30%, transparent 60%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />
      <Head>
        <title>MPC Token | Megapayer Cryptocurrency</title>
        <meta
          name="description"
          content="MPC (Megapayer Coin) is a high-efficiency digital asset designed for secure value storage, fast transactions, and scalable utility within modern digital economies."
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient">$MPC</span> Token
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              A high-efficiency digital asset designed for secure value storage,
              fast transactions, and scalable utility within modern digital
              economies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://sale.megapayer.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Join MPC Presale
              </a>
              <a
                href="#tokenomics"
                className="px-6 py-3 bg-dark/50 border border-white/10 text-white rounded-lg hover:bg-dark/70 transition-all duration-300"
              >
                View Tokenomics
              </a>
            </div>
          </motion.div>

          {/* High-Speed Quantum Tunnel - 3D Cinematic Scene */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            {/* CSS Keyframes */}
            <style jsx>{`
              @keyframes grid-flow {
                0% { transform: rotateX(60deg) translateY(0); }
                100% { transform: rotateX(60deg) translateY(100px); }
              }
              @keyframes laser-pulse {
                0%, 100% { opacity: 0.7; box-shadow: 0 0 20px #00f0ff, 0 0 40px #8a2be2, 0 0 60px #00f0ff; }
                50% { opacity: 1; box-shadow: 0 0 30px #00f0ff, 0 0 60px #8a2be2, 0 0 100px #00f0ff; }
              }
              @keyframes token-float {
                0%, 100% { transform: translateY(0) rotateY(0deg); }
                50% { transform: translateY(-15px) rotateY(180deg); }
              }
              @keyframes token-glow-3d {
                0%, 100% { box-shadow: 0 0 40px rgba(255,215,0,0.7), 0 0 80px rgba(0,240,255,0.5), 0 0 120px rgba(138,43,226,0.3); }
                50% { box-shadow: 0 0 60px rgba(255,215,0,1), 0 0 120px rgba(0,240,255,0.8), 0 0 180px rgba(138,43,226,0.5); }
              }
              @keyframes warp-speed {
                0% { transform: translateX(100vw) scale(0.2); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateX(-100vw) scale(1.5); opacity: 0; }
              }
              @keyframes tunnel-ring {
                0% { transform: translateZ(-500px) scale(3); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateZ(100px) scale(0.5); opacity: 0; }
              }
              @keyframes side-streak {
                0% { transform: translateX(50vw); opacity: 0; }
                20% { opacity: 0.8; }
                100% { transform: translateX(-50vw); opacity: 0; }
              }
            `}</style>

            {/* Scene Container with 3D Perspective */}
            <div
              className="relative w-full h-[500px] overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #000000 0%, #050510 50%, #0a0a20 100%)',
                perspective: '1000px',
                perspectiveOrigin: '50% 30%',
              }}
            >
              {/* 3D Tilted Grid Floor */}
              <div
                className="absolute bottom-0 left-[-50%] w-[200%] h-[400px]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 240, 255, 0.15) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(0, 240, 255, 0.15) 2px, transparent 2px)
                  `,
                  backgroundSize: '100px 100px',
                  transformOrigin: 'center bottom',
                  animation: 'grid-flow 2s linear infinite',
                }}
              />

              {/* Tunnel Rings (Depth Effect) */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={`ring-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    width: '300px',
                    height: '300px',
                    border: `2px solid ${i % 2 === 0 ? 'rgba(0, 240, 255, 0.2)' : 'rgba(138, 43, 226, 0.2)'}`,
                    animation: 'tunnel-ring 3s linear infinite',
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
              ))}

              {/* Ambient Glow Center */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(0, 240, 255, 0.1) 0%, rgba(138, 43, 226, 0.05) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Laser Beam - Center Line */}
              <div
                className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent 5%, #00f0ff 20%, #8a2be2 50%, #00f0ff 80%, transparent 95%)',
                  animation: 'laser-pulse 1.5s ease-in-out infinite',
                }}
              />

              {/* Warp Speed Particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`warp-${i}`}
                  className="absolute h-[2px] rounded-full"
                  style={{
                    top: `${15 + Math.random() * 70}%`,
                    width: `${80 + Math.random() * 120}px`,
                    background: `linear-gradient(90deg, transparent, ${i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#8a2be2' : '#ffffff'}, transparent)`,
                    animation: 'warp-speed 1.5s linear infinite',
                    animationDelay: `${i * 0.12}s`,
                    opacity: 0.7,
                  }}
                />
              ))}

              {/* Side Streaks */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={`streak-${i}`}
                  className="absolute w-[200px] h-[1px]"
                  style={{
                    top: `${20 + i * 12}%`,
                    background: i % 2 === 0
                      ? 'linear-gradient(90deg, transparent, #00f0ff, transparent)'
                      : 'linear-gradient(90deg, transparent, #8a2be2, transparent)',
                    animation: 'side-streak 0.8s linear infinite',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}

              {/* THE HERO - Centered Token with Chase Cam Effect */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{
                  animation: 'token-float 4s ease-in-out infinite',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Token Glow Aura */}
                <div
                  className="absolute inset-[-20px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
                    filter: 'blur(20px)',
                  }}
                />

                {/* Token Image */}
                <div
                  className="w-40 h-40 rounded-full overflow-hidden relative"
                  style={{
                    animation: 'token-glow-3d 2s ease-in-out infinite',
                  }}
                >
                  <img
                    src="/images/mpc.png"
                    alt="MPC Token"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Speed Indicator Badge */}
                <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: 'rgba(0, 240, 255, 0.2)',
                    border: '1px solid rgba(0, 240, 255, 0.5)',
                    color: '#00f0ff',
                  }}
                >
                  QUANTUM TRANSFER
                </div>
              </div>

              {/* HUD Elements */}
              <div className="absolute top-6 left-8 text-cyan-400 font-mono text-xs opacity-60">
                <div>VELOCITY: QUANTUM</div>
                <div>LATENCY: &lt;1ms</div>
              </div>

              <div className="absolute top-6 right-8 text-right font-mono text-xs">
                <div className="text-green-400">● NETWORK ACTIVE</div>
                <div className="text-gray-500">TPS: 50,000+</div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 font-mono text-sm">
                HIGH-SPEED BLOCKCHAIN TRANSFER
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What is MPC Token */}
            <FeatureBox title="What is MPC Token?" delay={0.1}>
              <p className="mb-4">
                MPC (Megapayer Coin) is more than just a cryptocurrency. It's
                positioned as a reliable payment method and investment asset
                that bridges the gap between usability and long-term value.
              </p>
              <p>
                Designed to support both everyday usage and long-term holding,
                MPC combines the best aspects of digital currencies into a
                versatile tool for any digital portfolio.
              </p>
            </FeatureBox>

            {/* Purpose and Utility */}
            <FeatureBox title="Purpose and Utility" delay={0.2}>
              <p className="mb-4">
                The core purpose of MPC is to enable seamless, low-cost, and
                instant value transfers between users, businesses, and
                institutions.
              </p>
              <div className="mt-4 space-y-2">
                <CheckItem>
                  <span className="font-bold">Store of Value:</span> Designed to
                  retain value over time, ideal for long-term investors.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Payment Method:</span> Ultra-fast
                  confirmation and low fees make it suitable for daily
                  transactions.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Peer-to-Peer Transactions:</span>{" "}
                  Enables secure, direct, and transparent digital exchanges.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Investment Vehicle:</span>{" "}
                  Carefully structured tokenomics offer strong growth potential.
                </CheckItem>
              </div>
            </FeatureBox>

            {/* Supply & Tokenomics */}
            <FeatureBox title="Supply & Tokenomics" delay={0.3}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    100,000,000
                  </div>
                  <div className="text-gray-400">Total fixed supply</div>
                </div>
              </div>

              <p className="mb-4">
                MPC has a fixed total supply of 100 million tokens, ensuring
                scarcity and supporting a deflationary model. No additional
                tokens will ever be minted, making MPC a truly finite digital
                asset.
              </p>
              <p>
                The release schedule is strategically planned to maintain price
                stability, protect early adopters, and gradually open access to
                new participants.
              </p>
            </FeatureBox>

            {/* Transparency & Accessibility */}
            <FeatureBox title="Transparency & Accessibility" delay={0.4}>
              <p className="mb-4">
                Every MPC transaction is recorded on-chain, offering full
                transparency and traceability. The token can be accessed via
                user-friendly wallets and integrated into various platforms with
                ease.
              </p>
              <p>
                No third parties are required—transactions are conducted
                securely and autonomously. This simplicity makes MPC an ideal
                starting point for users who are new to digital assets, while
                also providing the technical reliability demanded by seasoned
                investors.
              </p>
            </FeatureBox>
          </div>

          {/* Value Proposition */}
          <div className="mt-16" ref={sectionRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Value Proposition &{" "}
                <span className="text-gradient">Growth Potential</span>
              </h2>
              <p className="text-xl text-gray-300">
                MPC is not built for short-term speculation, but for long-term
                digital value creation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fixed Supply</h3>
                  <p className="text-gray-400">
                    Helps protect against inflation and maintains scarcity.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Low Fees</h3>
                  <p className="text-gray-400">
                    Enables cost-efficient transactions at scale.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fast Settlement</h3>
                  <p className="text-gray-400">
                    Instant confirmation for time-sensitive transfers.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Security</h3>
                  <p className="text-gray-400">
                    Encrypted and verifiable by blockchain technology.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">User Friendly</h3>
                  <p className="text-gray-400">
                    Easily integrated into mobile and desktop wallets.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Investor-Oriented</h3>
                  <p className="text-gray-400">
                    Designed with sustainability and long-term value in mind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tokenomics Section with ID for linking */}
          <div id="tokenomics" className="mt-24 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MPC <span className="text-gradient">Tokenomics</span>
              </h2>
              <p className="text-xl text-gray-300">
                The structured vesting model ensures a balanced token flow,
                while maintaining investor confidence.
              </p>
            </motion.div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* Simple pie chart representation */}
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-t-[#4F46E5] border-r-[#10B981] border-b-[#F59E0B] border-l-[#8B5CF6] animate-spin-slow opacity-70"></div>
                    <div className="absolute inset-8 rounded-full bg-dark flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          100M
                        </div>
                        <div className="text-sm text-gray-400">
                          Total Supply
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-center">
                  <div className="space-y-5">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#00f0ff] mr-2"></div>
                          <span className="font-semibold text-white">Community & Ecosystem</span>
                        </div>
                        <span className="font-bold text-[#00f0ff] text-xl">35%</span>
                      </div>
                      <div className="text-xs text-gray-400 ml-5">Airdrop • Staking Rewards • Liquidity Mining • Ecosystem Grants</div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#8a2be2] mr-2"></div>
                          <span className="font-semibold text-white">Investors</span>
                        </div>
                        <span className="font-bold text-[#8a2be2] text-xl">28%</span>
                      </div>
                      <div className="text-xs text-gray-400 ml-5">Seed Round • Series A/B • Public Sale</div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#ff00aa] mr-2"></div>
                          <span className="font-semibold text-white">Team & Development</span>
                        </div>
                        <span className="font-bold text-[#ff00aa] text-xl">19%</span>
                      </div>
                      <div className="text-xs text-gray-400 ml-5">Team & Advisors • Development Fund</div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#00ff9d] mr-2"></div>
                          <span className="font-semibold text-white">Governance & Liquidity</span>
                        </div>
                        <span className="font-bold text-[#00ff9d] text-xl">18%</span>
                      </div>
                      <div className="text-xs text-gray-400 ml-5">Treasury/DAO • Liquidity (DEX+CEX)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-10 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join the $MPC Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience a digital asset designed for genuine utility, with
              strong fundamentals and limited supply.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://sale.megapayer.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Participate in Presale
              </a>
              <Link
                href="/whitepaper/mpc-coin"
                className="px-6 py-3 bg-dark/50 border border-white/10 text-white rounded-lg hover:bg-dark/70 transition-all duration-300"
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

export default MPCTokenPage;
