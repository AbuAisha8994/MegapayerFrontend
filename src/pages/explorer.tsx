import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

const ExplorerPage = () => {
  const featuresRef = useRef(null);
  const toolsRef = useRef(null);
  const statsRef = useRef(null);

  // Mouse tracking for scanner highlight
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isToolsInView = useInView(toolsRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      {/* Mouse-Following Glow */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-100"
        style={{
          left: mousePos.x - 100,
          top: mousePos.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 60%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
        }}
      />

      <Head>
        <title>Megapayer Explorer | Blockchain Analytics Platform</title>
        <meta
          name="description"
          content="Comprehensive blockchain explorer and analytics platform that provides real-time data, transaction tracking, and network visualization for the Megapayer ecosystem."
        />
      </Head>

      {/* Holographic Blockchain Scanner Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#030308' }}>
        {/* CSS Keyframes */}
        <style jsx>{`
          @keyframes grid-pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
          @keyframes scanner-beam {
            0% { top: 0; }
            50% { top: calc(100% - 4px); }
            100% { top: 0; }
          }
          @keyframes digital-rain {
            0% { background-position: 0 0; }
            100% { background-position: 0 200px; }
          }
          @keyframes cell-flash {
            0%, 90%, 100% { background: transparent; }
            95% { background: rgba(0, 240, 255, 0.2); }
          }
          @keyframes hex-fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.15; }
          }
        `}</style>

        {/* Data Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Pulsing Grid Cells */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`cell-${i}`}
            className="absolute"
            style={{
              left: `${5 + (i % 5) * 22}%`,
              top: `${10 + Math.floor(i / 5) * 22}%`,
              width: '48px',
              height: '48px',
              border: '1px solid rgba(0, 240, 255, 0.15)',
              animation: `cell-flash ${3 + (i % 5) * 0.4}s ease-in-out ${(i % 7) * 0.5}s infinite`,
            }}
          />
        ))}

        {/* Digital Rain Effect (CSS Gradient Mask) */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              rgba(0, 240, 255, 0.3) 0px,
              transparent 2px,
              transparent 20px
            )`,
            animation: 'digital-rain 3s linear infinite',
            maskImage: 'linear-gradient(to right, transparent, black 30%, black)',
          }}
        />

        {/* Hex Code Overlay */}
        <div
          className="absolute left-0 top-0 w-1/4 h-full opacity-10 pointer-events-none font-mono text-xs text-cyan-400 overflow-hidden"
          style={{ animation: 'hex-fade 4s ease-in-out infinite' }}
        >
          {['b9a5fb94', 'c4e7d2a1', '3f8bc156', 'a2d41e89', 'f7c3a0b5', '6e29d8c4', '8ab7f123', 'd5c9e6a7', '1f4b8c2d', '9e3a7d56', 'c8f21b45', '2d6e9a73', 'a1b4c7d8', '5f8e2c91', 'e3d6a9b2', '7c4f1d85', 'b2e8c45a', '4a9d3f67', 'f1c8b2e4', '6d3a5c98', '8e7b4f21', '3c5a9d76', 'a4f2c8b1', '5b1e7d43', 'c9a3f586', '2f6c4a89', 'd8b5e172', '7a4c9f35', 'e621ad84', '9f8c2b57'].map((hex, i) => (
            <div key={`hex-${i}`} className="whitespace-nowrap" style={{ marginTop: `${i * 25}px`, marginLeft: `${(i % 3) * 20}px` }}>
              0x{hex}...
            </div>
          ))}
        </div>

        {/* Scanner Beam */}
        <div
          className="absolute left-0 right-0 h-1 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, #00f0ff 20%, #8a2be2 50%, #00f0ff 80%, transparent)',
            boxShadow: '0 0 30px #00f0ff, 0 0 60px #8a2be2',
            animation: 'scanner-beam 4s ease-in-out infinite',
          }}
        />

        {/* Scanner Highlight Zone (follows beam) */}
        <div
          className="absolute left-0 right-0 h-20 z-5 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 240, 255, 0.05), transparent)',
            animation: 'scanner-beam 4s ease-in-out infinite',
          }}
        />

        {/* Center Content - Glassmorphism Search */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center bg-cyan-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 font-mono text-sm">BLOCKCHAIN SCANNER v2.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Megapayer</span> Explorer
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time blockchain analytics, transaction tracking, and network visualization
            </p>
          </motion.div>

          {/* Glassmorphism Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div
              className="p-1 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(138, 43, 226, 0.3))',
              }}
            >
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'rgba(5, 5, 15, 0.8)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-mono"
                    placeholder="Search by Address / Txn Hash / Block / Token..."
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg font-medium text-white"
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                    }}
                  >
                    Scan
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">13.8M</div>
                    <div className="text-xs text-cyan-400 font-mono">TRANSACTIONS</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">$4.1B</div>
                    <div className="text-xs text-purple-400 font-mono">MARKET CAP</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-green-400">12 GWEI</div>
                    <div className="text-xs text-gray-400 font-mono">GAS PRICE</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">8.1M</div>
                    <div className="text-xs text-cyan-400 font-mono">LATEST BLOCK</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6 text-gray-500 font-mono text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span>Network Active • 156 TPS</span>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 text-cyan-400/50 font-mono text-xs">
          <div>SCAN: ACTIVE</div>
          <div>MODE: REALTIME</div>
        </div>
        <div className="absolute top-8 right-8 text-purple-400/50 font-mono text-xs text-right">
          <div>BLOCKS: SYNCED</div>
          <div>LATENCY: &lt;100ms</div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 mb-6">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-blue-500 font-medium">
                Transparent Data
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Visualize <span className="text-gradient">Blockchain Data</span>{" "}
              with Precision
            </h2>
            <p className="text-xl text-gray-300">
              Megapayer Explorer provides transparent, real-time access to all
              blockchain activities, ensuring complete visibility into
              transactions, blocks, and smart contract interactions.
            </p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Real-Time Analytics
              </h3>
              <p className="text-gray-300">
                Track network activity, transaction volumes, gas fees, and other
                key metrics with millisecond precision and automatic updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Advanced Search
              </h3>
              <p className="text-gray-300">
                Find any blockchain entity instantly with our intelligent search
                system that supports addresses, transactions, blocks, tokens,
                and contracts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Multi-Chain Support
              </h3>
              <p className="text-gray-300">
                Access data across all Megapayer-compatible blockchains from a
                single interface, with clear cross-chain transaction tracking.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Tools Section */}
      <section id="analytics-tools" className="py-24 bg-dark" ref={toolsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isToolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Left content */}
            <div className="lg:col-span-2">
              <div className="mb-6 p-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">Powerful</span> Analysis Tools
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Our explorer provides advanced tools for users, developers,
                  and businesses to gain deeper insights into blockchain
                  activities.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="bg-dark/50 p-6 rounded-xl border border-blue-500/20">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      For Enterprise Users
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="p-1 bg-blue-500/20 rounded-full mt-1 mr-3">
                          <svg
                            className="w-3 h-3 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Custom dashboards with key metrics
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-blue-500/20 rounded-full mt-1 mr-3">
                          <svg
                            className="w-3 h-3 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Automated compliance reporting
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="p-1 bg-blue-500/20 rounded-full mt-1 mr-3">
                          <svg
                            className="w-3 h-3 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Advanced API access with high rate limits
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visualization mockup */}
            <div className="lg:col-span-3">
              <div className="bg-dark/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl h-full">
                {/* Mock explorer interface header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-blue-400 font-semibold mr-2">
                        Megapayer
                      </span>
                      <span className="text-white font-semibold">Explorer</span>
                    </div>
                    <div className="space-x-1 flex">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>

                {/* Mock dashboard content */}
                <div className="p-6">
                  {/* Search bar */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="w-full bg-dark/30 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Search by Address / Txn Hash / Block / Token"
                      disabled
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-1">PRICE</div>
                      <div className="text-lg font-bold text-white">$41.23</div>
                      <div className="text-xs text-green-400">+2.5%</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-1">
                        TRANSACTIONS
                      </div>
                      <div className="text-lg font-bold text-white">13.8M</div>
                      <div className="text-xs text-blue-400">+156 / sec</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-1">
                        MARKET CAP
                      </div>
                      <div className="text-lg font-bold text-white">$4.1B</div>
                      <div className="text-xs text-green-400">+3.2%</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-xs text-gray-400 mb-1">GAS</div>
                      <div className="text-lg font-bold text-white">
                        12 GWEI
                      </div>
                      <div className="text-xs text-green-400">Low</div>
                    </div>
                  </div>

                  {/* Blocks and transactions tabs */}
                  <div className="border-b border-gray-700 mb-6">
                    <div className="flex">
                      <button className="px-6 py-3 text-blue-400 border-b-2 border-blue-400 font-medium">
                        Latest Blocks
                      </button>
                      <button className="px-6 py-3 text-gray-400">
                        Latest Transactions
                      </button>
                    </div>
                  </div>

                  {/* Recent blocks table */}
                  <div className="overflow-hidden rounded-lg border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead className="bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Block
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Age
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Txn
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Validator
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Gas Used
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900 divide-y divide-gray-800">
                        {[1, 2, 3].map((item) => (
                          <tr key={item} className="hover:bg-gray-800/50">
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-400">
                              8,142,{item * 3 + 10}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {item} mins ago
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              {42 + item * 7}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">
                              <span className="text-blue-400">
                                0x72e...{item}f3a
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 text-right">
                              {(59 + item * 3).toFixed(2)}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section
        ref={statsRef}
        className="py-24 bg-gradient-to-b from-dark/95 to-dark/80"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 mb-6">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <span className="text-blue-500 font-medium">Key Metrics</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Unmatched <span className="text-gradient">Analytics</span>{" "}
              Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Our blockchain explorer delivers the most comprehensive data
              analysis tools in the industry, enabling users to make informed
              decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">99.99%</h3>
              <p className="text-gray-400 font-medium mb-2">Uptime</p>
              <p className="text-gray-300 text-sm">
                Enterprise-grade reliability ensures you never miss critical
                blockchain data
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">&lt; 500ms</h3>
              <p className="text-gray-400 font-medium mb-2">Latency</p>
              <p className="text-gray-300 text-sm">
                Lightning-fast data retrieval for real-time blockchain insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p className="text-gray-400 font-medium mb-2">Chains Supported</p>
              <p className="text-gray-300 text-sm">
                Comprehensive multi-chain support with perfect cross-chain
                transaction tracking
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-400 font-medium mb-2">API Endpoints</p>
              <p className="text-gray-300 text-sm">
                Feature-rich API for developers to build powerful blockchain
                applications
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl border border-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Advanced Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-blue-500/20 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-500"
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
                  <div>
                    <h4 className="font-semibold">
                      Smart Contract Verification
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Automatically verify and interact with deployed smart
                      contracts. View source code, ABI, and contract
                      interactions directly in the explorer.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-blue-500/20 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-500"
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
                  <div>
                    <h4 className="font-semibold">Token Tracker</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Comprehensive tracking for all token standards with
                      transfer history, holder analytics, and market data
                      integration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-blue-500/20 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-500"
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
                  <div>
                    <h4 className="font-semibold">Visual Analytics</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Beautiful, interactive charts and visualizations for
                      understanding complex blockchain data at a glance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl border border-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                For Developers
              </h3>

              <div className="bg-gray-900/80 rounded-lg p-4 mb-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs mr-2">
                    GET
                  </span>
                  <span className="font-mono">
                    /api/v1/accounts/{`{address}`}/transactions
                  </span>
                </div>
                <pre className="text-xs overflow-x-auto text-gray-300 font-mono">
                  {`{
  "status": "success",
  "data": {
    "transactions": [
      {
        "hash": "0x1a2b3c...",
        "blockNumber": 8142310,
        "timestamp": 1677854401,
        "from": "0xabcd...",
        "to": "0x1234...",
        "value": "1.25 MPC",
        "gasUsed": 21000
      },
      ...
    ]
  }
}`}
                </pre>
              </div>

              <p className="text-gray-300 mb-4">
                Integrate blockchain data directly into your applications with
                our robust API. Perfect for building wallets, DApps, and
                analytics platforms.
              </p>

              <Link
                href="/developers/explorer-api"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View API Documentation</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/70">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Start Exploring the Blockchain
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Dive into the data-rich world of Megapayer blockchain with our
              powerful explorer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={{
                  pathname: "/coming-soon",
                  query: {
                    product: "Megapayer Explorer",
                    returnUrl: "/explorer",
                  },
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Launch Explorer
              </Link>
              <Link
                href={{
                  pathname: "/coming-soon",
                  query: {
                    product: "Explorer API",
                    returnUrl: "/explorer",
                  },
                }}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                API Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExplorerPage;
