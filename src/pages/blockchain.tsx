import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import BlockchainAnimation from "@/components/animations/BlockchainAnimation";

const BlockchainPage = () => {
  const featuresRef = useRef(null);
  const architectureRef = useRef(null);
  const developerRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isArchitectureInView = useInView(architectureRef, {
    once: true,
    amount: 0.3,
  });
  const isDeveloperInView = useInView(developerRef, {
    once: true,
    amount: 0.3,
  });

  // Features data
  const features = [
    {
      icon: "⚡",
      title: "High-Speed Transactions",
      description:
        "Optimized block times and transaction confirmation speeds. Minimum latency, maximum performance.",
    },
    {
      icon: "🧠",
      title: "AI-Powered Development",
      description:
        "Developers can create smart contracts and integrate projects into the chain by simply giving commands.",
    },
    {
      icon: "🌍",
      title: "Web3-Friendly Infrastructure",
      description:
        "Optimized for NFT, DApp, and DeFi projects with built-in tools and resources.",
    },
    {
      icon: "♻️",
      title: "Low Transaction Fees",
      description:
        "Transaction fees are kept low while maintaining a balanced revenue model for validators and stakers through SPoS.",
    },
  ];

  // Architecture benefits
  const architectureBenefits = [
    {
      title: "Security First",
      description:
        "Multi-layered security protocols and constant monitoring protect against threats while maintaining decentralization.",
    },
    {
      title: "Scalability Solutions",
      description:
        "Layer-2 integration and dynamic sharding enable the network to handle millions of transactions per day.",
    },
    {
      title: "Cross-Chain Compatibility",
      description:
        "Built-in bridges and protocols allow seamless interaction with multiple blockchain networks.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Our Shared Proof of Stake consensus uses a fraction of the energy compared to traditional Proof of Work systems.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Megapayer Blockchain | Next-Gen Web3 Infrastructure</title>
        <meta
          name="description"
          content="Megapayer Chain is a next-generation blockchain infrastructure focused on speed, scalability, and security, powering the future of Web3."
        />
      </Head>

      {/* Hero Section with 3D Animation */}
      <ProductHero
        title="Megapayer Blockchain"
        subtitle="Powering the Future of Web3"
        description="Megapayer Chain is a next-generation blockchain infrastructure developed with a focus on speed, scalability, and security. It offers a flexible ecosystem for developers, accessible for users, and sustainable for investors."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />
              <BlockchainAnimation />
            </Canvas>
          </div>
        }
      />

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
            <h2 className="text-4xl font-bold mb-6">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our blockchain technology is designed to meet the demands of
              modern decentralized applications while ensuring exceptional user
              experience.
            </p>
          </motion.div>

          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & SPoS Section */}
      <section
        id="architecture"
        className="py-24 bg-dark"
        ref={architectureRef}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">Shared Proof of Stake</span>{" "}
                  (SPoS)
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Megapayer Chain's security and efficiency are ensured by our
                  specially designed SPoS consensus model that balances
                  decentralization with performance.
                </p>

                <div className="border border-primary/20 rounded-xl p-6 bg-dark/50 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    How SPoS Works
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="p-1 bg-primary/20 rounded-full mr-3 mt-1.5">
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
                      <span className="text-gray-300">
                        Validators are selected based on reputation, stake
                        amount, and historical performance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary/20 rounded-full mr-3 mt-1.5">
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
                      <span className="text-gray-300">
                        Block rewards are distributed across validators and
                        delegators using a fair allocation algorithm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-primary/20 rounded-full mr-3 mt-1.5">
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
                      <span className="text-gray-300">
                        Network governance includes both token holders and
                        validators in a weighted voting system
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={isArchitectureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Architectural Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-dark/80 to-primary/5 p-6 rounded-xl border border-white/10 shadow-lg"
                  >
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/20 rounded-full mr-4 mt-1">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Network Performance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">
                          3s
                        </div>
                        <p className="text-sm text-gray-400">Block Time</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">
                          10,000+
                        </div>
                        <p className="text-sm text-gray-400">TPS</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">
                          $0.001
                        </div>
                        <p className="text-sm text-gray-400">Avg. Fee</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">
                          99.99%
                        </div>
                        <p className="text-sm text-gray-400">Uptime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Features Section */}
      <section
        id="developer"
        className="py-24 bg-gradient-to-b from-dark/95 to-dark"
        ref={developerRef}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Developer <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-300">
              The smart contract development process is simplified for
              developers of all experience levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark/50 rounded-xl overflow-hidden border border-white/10"
            >
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                <h3 className="text-2xl font-bold mb-4">
                  AI-Powered Development
                </h3>
                <p className="text-gray-300">
                  Using just text commands, users can create:
                </p>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/20 rounded-full mt-1 mr-4">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Tokens</h4>
                    <p className="text-gray-400">
                      Easily create MPC-20 standard tokens on Megapayer Chain
                      with fully customizable parameters such as name, supply,
                      and tokenomics. (ERC-20 compatibility is optionally
                      supported for EVM-based integrations.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/20 rounded-full mt-1 mr-4">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      NFT Collections
                    </h4>
                    <p className="text-gray-400">
                      Launch NFT collections with metadata storage solutions and
                      marketplace integration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/20 rounded-full mt-1 mr-4">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      Decentralized Applications
                    </h4>
                    <p className="text-gray-400">
                      Build complete DApps with front-end templates and backend
                      smart contract integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-dark/30 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Build your first smart contract in minutes
                  </div>
                  <Link
                    href="/build/smart-contracts"
                    className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg text-sm transition-colors"
                  >
                    Try Builder →
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDeveloperInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Code Example Panel */}
              <div className="bg-dark/40 rounded-xl overflow-hidden border border-white/10">
                <div className="bg-dark/80 px-4 py-3 border-b border-white/10 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-400">
                    AI Smart Contract Generator
                  </div>
                </div>

                <div className="p-6 font-mono text-sm overflow-auto h-64">
                  <div className="text-gray-400">megapayer@ai:~$</div>
                  <div className="text-green-400 mb-4">ai-contract build</div>

                  <div className="text-primary mb-4">
                    » Create a staking contract with 7% APY and 30-day lock
                    period
                  </div>

                  <div className="text-blue-400">
                    » Analyzing requirements...
                  </div>
                  <div className="text-blue-400 mb-2">
                    » Generating smart contract...
                  </div>

                  <div className="bg-dark/50 p-4 rounded my-4 text-gray-300 overflow-x-auto">
                    <div className="text-purple-400">
                      // SPDX-License-Identifier: MIT
                    </div>
                    <div className="text-purple-400">
                      // Generated by Megapayer AI
                    </div>
                    <div>
                      <span className="text-blue-300">pragma</span>
                      <span className="text-white"> solidity ^0.8.17;</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-blue-300">contract</span>
                      <span className="text-white"> StakingContract {`{`}</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      // State variables
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">uint256</span>
                      <span className="text-white"> public </span>
                      <span className="text-blue-300">constant</span>
                      <span className="text-white"> APY = 7;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">uint256</span>
                      <span className="text-white"> public </span>
                      <span className="text-blue-300">constant</span>
                      <span className="text-white">
                        {" "}
                        LOCK_PERIOD = 30 days;
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-500">
                        // Additional code...
                      </span>
                    </div>
                    <div className="text-white">{`}`}</div>
                  </div>

                  <div className="text-green-500">
                    ✓ Contract successfully generated!
                  </div>
                  <div className="text-gray-400 mt-2">
                    Ready for deployment on Megapayer Chain
                  </div>
                </div>
              </div>

              {/* Open-source tools */}
              <div className="bg-gradient-to-r from-primary/10 to-dark p-6 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Open-Source Tools</h3>
                <p className="text-gray-300 mb-6">
                  SDK and API packages are available as open source for all
                  developers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/developers/sdk"
                    className="bg-dark/40 backdrop-blur-sm hover:bg-dark/60 p-4 rounded-lg flex items-center transition-colors"
                  >
                    <div className="p-2 bg-primary/20 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    <span>Developer SDK</span>
                  </Link>

                  <Link
                    href="/developers/api"
                    className="bg-dark/40 backdrop-blur-sm hover:bg-dark/60 p-4 rounded-lg flex items-center transition-colors"
                  >
                    <div className="p-2 bg-primary/20 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    </div>
                    <span>API Reference</span>
                  </Link>

                  <Link
                    href="/developers/github"
                    className="bg-dark/40 backdrop-blur-sm hover:bg-dark/60 p-4 rounded-lg flex items-center transition-colors"
                  >
                    <div className="p-2 bg-primary/20 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </div>
                    <span>GitHub Repos</span>
                  </Link>

                  <Link
                    href="/developers/tutorials"
                    className="bg-dark/40 backdrop-blur-sm hover:bg-dark/60 p-4 rounded-lg flex items-center transition-colors"
                  >
                    <div className="p-2 bg-primary/20 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <span>Tutorials</span>
                  </Link>
                </div>
              </div>
            </motion.div>
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
              Ready to Build on Megapayer Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of developers building the future of Web3 on our
              next-generation blockchain infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers/getting-started"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Start Building
              </Link>
              <Link
                href="/whitepaper/technology"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
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

export default BlockchainPage;
