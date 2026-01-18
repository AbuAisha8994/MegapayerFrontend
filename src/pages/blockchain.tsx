import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

const BlockchainPage = () => {
  const featuresRef = useRef(null);
  const architectureRef = useRef(null);
  const developerRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isArchitectureInView = useInView(architectureRef, { once: true, amount: 0.3 });
  const isDeveloperInView = useInView(developerRef, { once: true, amount: 0.3 });

  // Features data
  const features = [
    {
      icon: "⚡",
      title: "High-Speed Transactions",
      description: "Optimized block times and transaction confirmation speeds. Minimum latency, maximum performance.",
    },
    {
      icon: "🧠",
      title: "AI-Powered Development",
      description: "Developers can create smart contracts and integrate projects into the chain by simply giving commands.",
    },
    {
      icon: "🌍",
      title: "Web3-Friendly Infrastructure",
      description: "Optimized for NFT, DApp, and DeFi projects with built-in tools and resources.",
    },
    {
      icon: "♻️",
      title: "Low Transaction Fees",
      description: "Transaction fees are kept low while maintaining a balanced revenue model for validators and stakers through SPoS.",
    },
  ];

  // Architecture benefits
  const architectureBenefits = [
    {
      title: "Security First",
      description: "Multi-layered security protocols and constant monitoring protect against threats while maintaining decentralization.",
    },
    {
      title: "Scalability Solutions",
      description: "Layer-2 integration and dynamic sharding enable the network to handle millions of transactions per day.",
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Built-in bridges and protocols allow seamless interaction with multiple blockchain networks.",
    },
    {
      title: "Energy Efficiency",
      description: "Our Shared Proof of Stake consensus uses a fraction of the energy compared to traditional Proof of Work systems.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Megapayer Chain | Next-Gen Web3 Infrastructure</title>
        <meta
          name="description"
          content="Megapayer Chain is a next-generation blockchain infrastructure focused on speed, scalability, and security, powering the future of Web3."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes block-fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(6, 182, 212, 0.5); box-shadow: 0 0 15px rgba(6, 182, 212, 0.3); }
          50% { border-color: rgba(139, 92, 246, 0.5); box-shadow: 0 0 25px rgba(139, 92, 246, 0.4); }
        }
        .block-stream {
          animation: block-fall var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
        .neon-title {
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* HERO SECTION - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050508' }}>
        {/* Abstract Blockchain Stream - CSS Only */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
          {/* Falling wireframe blocks */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute block-stream"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                width: `${20 + (i % 3) * 10}px`,
                height: `${20 + (i % 3) * 10}px`,
                '--duration': `${6 + (i % 5) * 2}s`,
                '--delay': `${i * 0.8}s`,
                border: '2px solid',
                borderColor: i % 2 === 0 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(139, 92, 246, 0.6)',
                boxShadow: i % 2 === 0
                  ? '0 0 15px rgba(6, 182, 212, 0.4), inset 0 0 10px rgba(6, 182, 212, 0.1)'
                  : '0 0 15px rgba(139, 92, 246, 0.4), inset 0 0 10px rgba(139, 92, 246, 0.1)',
                background: 'transparent',
              } as React.CSSProperties}
            />
          ))}

          {/* Vertical connection lines */}
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                Next-Generation Infrastructure
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 neon-title">
                <span className="text-white">Megapayer</span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Chain
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A next-generation blockchain infrastructure developed with a focus on speed,
                scalability, and security. Flexible for developers, accessible for users,
                sustainable for investors.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/developers/getting-started"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Start Building
                </Link>
                <Link
                  href="/whitepapers"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                >
                  Read Whitepaper
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-4 gap-6 mt-16"
            >
              {[
                { value: "3s", label: "Block Time" },
                { value: "10K+", label: "TPS" },
                { value: "$0.001", label: "Avg Fee" },
                { value: "99.99%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-24" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Key <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our blockchain technology is designed to meet the demands of
              modern decentralized applications while ensuring exceptional user experience.
            </p>
          </motion.div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & SPoS Section */}
      <section id="architecture" className="py-24" style={{ background: '#050508' }} ref={architectureRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <span style={{
                  background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Shared Proof of Stake</span> (SPoS)
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Megapayer Chain's security and efficiency are ensured by our
                specially designed SPoS consensus model that balances
                decentralization with performance.
              </p>

              <div
                className="rounded-xl p-6 mb-8"
                style={{
                  background: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">How SPoS Works</h3>
                <ul className="space-y-4">
                  {[
                    "Validators are selected based on reputation, stake amount, and historical performance",
                    "Block rewards are distributed across validators and delegators using a fair allocation algorithm",
                    "Network governance includes both token holders and validators in a weighted voting system",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="p-1 bg-cyan-500/20 rounded-full mr-3 mt-1.5">
                        <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Architectural Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-white/10"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <h4 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Features Section */}
      <section id="developer" className="py-24" style={{ background: '#0a0a14' }} ref={developerRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Developer <span style={{
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-400">
              The smart contract development process is simplified for developers of all experience levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI-Powered Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="p-6" style={{ background: 'rgba(6, 182, 212, 0.05)' }}>
                <h3 className="text-2xl font-bold mb-2 text-white">AI-Powered Development</h3>
                <p className="text-gray-400">Using just text commands, users can create:</p>
              </div>

              <div className="p-6 space-y-6">
                {[
                  { title: "Tokens", desc: "Easily create MPC-20 standard tokens with customizable parameters." },
                  { title: "NFT Collections", desc: "Launch NFT collections with metadata storage solutions." },
                  { title: "Decentralized Applications", desc: "Build complete DApps with front-end templates." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="p-2 bg-cyan-500/20 rounded-full mr-4 mt-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/10">
                <Link
                  href="/developers/getting-started"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all"
                >
                  Try Builder →
                </Link>
              </div>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div
                className="rounded-2xl overflow-hidden border border-white/10"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <div className="px-4 py-3 border-b border-white/10 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 font-mono">
                    AI Smart Contract Generator
                  </div>
                </div>

                <div className="p-6 font-mono text-sm h-64 overflow-auto">
                  <div className="text-gray-500">megapayer@ai:~$</div>
                  <div className="text-green-400 mb-4">ai-contract build</div>
                  <div className="text-cyan-400 mb-4">» Create a staking contract with 7% APY</div>
                  <div className="text-purple-400">» Generating smart contract...</div>
                  <div className="mt-4 p-4 rounded bg-black/50">
                    <div className="text-gray-500">// Generated by Megapayer AI</div>
                    <div><span className="text-purple-400">pragma</span> solidity ^0.8.17;</div>
                    <div className="mt-2"><span className="text-purple-400">contract</span> StakingContract {"{"}</div>
                    <div className="pl-4"><span className="text-cyan-400">uint256</span> public APY = 7;</div>
                    <div className="pl-4 text-gray-600">// ...</div>
                    <div>{"}"}</div>
                  </div>
                  <div className="text-green-400 mt-4">✓ Contract generated!</div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Developer SDK", href: "/developers/getting-started" },
                  { name: "API Reference", href: "/developers/getting-started" },
                  { name: "GitHub Repos", href: "/developers/getting-started" },
                  { name: "Tutorials", href: "/developers/getting-started" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="p-4 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all text-gray-400 hover:text-white"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: '#050508' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Ready to Build on Megapayer Chain?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join thousands of developers building the future of Web3 on our
              next-generation blockchain infrastructure.
            </p>
            <Link
              href="/developers/getting-started"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Start Building
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlockchainPage;
