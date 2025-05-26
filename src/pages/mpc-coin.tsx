import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import Stats from "@/components/common/Stats";
import MPCCoinAnimation from "@/components/animations/MPCCoinAnimation";

const MPCCoinPage = () => {
  const tokenomicsRef = useRef(null);
  const utilityRef = useRef(null);

  const isTokenomicsInView = useInView(tokenomicsRef, {
    once: true,
    amount: 0.3,
  });
  const isUtilityInView = useInView(utilityRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>MPC Coin | Megapayer's Utility & Governance Token</title>
        <meta
          name="description"
          content="MPC Coin serves as the native utility and governance token of the Megapayer ecosystem, powering transactions, staking, and community decision making."
        />
      </Head>

      <ProductHero
        title="MPC Coin"
        subtitle="Ecosystem Utility & Governance"
        description="The native token of the Megapayer network that powers the entire ecosystem, enabling governance, staking, rewards, and cross-chain transactions."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={2}
              />
              <MPCCoinAnimation />
            </Canvas>
          </div>
        }
      />

      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The Heart of the{" "}
              <span className="text-gradient">Megapayer Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300">
              MPC Coin is the native token of the Megapayer network, designed to
              facilitate transactions, governance, and ecosystem growth. It
              forms the foundation of our multi-chain infrastructure and
              provides holders with valuable utility across our entire platform.
            </p>
          </motion.div>

          <div className="mb-20">
            <Stats product="mpc-coin" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-xl font-bold mb-4">Native Network Token</h3>
              <p className="text-gray-300">
                Powers all transactions across the Megapayer blockchain with low
                fees and fast confirmation times.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Community Governance</h3>
              <p className="text-gray-300">
                Stake MPC to participate in governance decisions and vote on key
                protocol upgrades and changes.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-xl font-bold mb-4">Rich Incentives</h3>
              <p className="text-gray-300">
                Earn rewards through staking, validation, and active
                participation in the Megapayer ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={tokenomicsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isTokenomicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Tokenomics & <span className="text-gradient">Distribution</span>
            </h2>

            <div className="bg-dark/20 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span className="text-gray-300">Public Sale</span>
                      </div>
                      <span className="text-white font-medium">40%</span>
                    </div>
                    <div className="w-full h-3 bg-dark/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Ecosystem Growth</span>
                      </div>
                      <span className="text-white font-medium">25%</span>
                    </div>
                    <div className="w-full h-3 bg-dark/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Team & Advisors</span>
                      </div>
                      <span className="text-white font-medium">15%</span>
                    </div>
                    <div className="w-full h-3 bg-dark/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Staking Rewards</span>
                      </div>
                      <span className="text-white font-medium">12%</span>
                    </div>
                    <div className="w-full h-3 bg-dark/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "12%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Reserve</span>
                      </div>
                      <span className="text-white font-medium">8%</span>
                    </div>
                    <div className="w-full h-3 bg-dark/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: "8%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Token Details</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">Token Name</span>
                      <span className="text-white font-medium">MPC Coin</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">Token Symbol</span>
                      <span className="text-white font-medium">MPC</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">Total Supply</span>
                      <span className="text-white font-medium">
                        1,000,000,000 MPC
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">
                        Initial Circulating Supply
                      </span>
                      <span className="text-white font-medium">
                        200,000,000 MPC
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">Token Type</span>
                      <span className="text-white font-medium">
                        Utility & Governance
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-300">Blockchain</span>
                      <span className="text-white font-medium">
                        Megapayer Blockchain
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Tokenomics button removed */}
            </div>
          </motion.div>

          <motion.div
            ref={utilityRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isUtilityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Utility & <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                MPC Coin is designed to provide value and utility across the
                entire Megapayer ecosystem, with multiple benefits for holders,
                validators, and users of our platform.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
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
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Transaction Fee Discounts
                    </h4>
                    <p className="text-gray-300">
                      Pay transaction fees with MPC and receive up to 50%
                      discount across all Megapayer services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Cross-Chain Operations
                    </h4>
                    <p className="text-gray-300">
                      Use MPC to pay for cross-chain transfers and bridge
                      operations with reduced fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
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
                    <h4 className="font-bold text-lg mb-1">Staking Rewards</h4>
                    <p className="text-gray-300">
                      Earn passive income by staking your MPC and validating
                      transactions on the network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Governance Rights
                    </h4>
                    <p className="text-gray-300">
                      Participate in the DAO, propose changes, and vote on key
                      protocol decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 bg-dark/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <div className="relative overflow-hidden h-64 rounded-lg mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Create visual directly in the UI for better reliability */}
                  <div className="relative w-40 h-40">
                    {/* Coin base */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary to-secondary shadow-xl"></div>

                    {/* Coin details */}
                    <div className="absolute inset-2 rounded-full bg-[#4F46E5] border-4 border-[#6366f1]/50 flex items-center justify-center animate-pulse">
                      <span className="text-white text-4xl font-bold">MPC</span>
                    </div>

                    {/* Orbiting particles */}
                    <div
                      className="absolute w-full h-full animate-spin"
                      style={{ animationDuration: "8s" }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                    </div>
                    <div
                      className="absolute w-full h-full animate-spin"
                      style={{ animationDuration: "12s" }}
                    >
                      <div className="absolute top-5 right-0 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                    </div>
                    <div
                      className="absolute w-full h-full animate-spin"
                      style={{
                        animationDuration: "10s",
                        animationDirection: "reverse",
                      }}
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                    </div>
                  </div>
                </div>

                {/* Overlay with utility information */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                  <div className="bg-dark/60 backdrop-blur-sm rounded p-3 flex flex-col items-center justify-center">
                    <span className="text-primary text-sm font-medium">
                      Transaction Fees
                    </span>
                    <span className="text-white text-xl font-bold">-50%</span>
                  </div>
                  <div className="bg-dark/60 backdrop-blur-sm rounded p-3 flex flex-col items-center justify-center">
                    <span className="text-primary text-sm font-medium">
                      Staking APY
                    </span>
                    <span className="text-white text-xl font-bold">5-12%</span>
                  </div>
                  <div className="bg-dark/60 backdrop-blur-sm rounded p-3 flex flex-col items-center justify-center">
                    <span className="text-primary text-sm font-medium">
                      Voting Power
                    </span>
                    <span className="text-white text-xl font-bold">1:1</span>
                  </div>
                  <div className="bg-dark/60 backdrop-blur-sm rounded p-3 flex flex-col items-center justify-center">
                    <span className="text-primary text-sm font-medium">
                      Validator Nodes
                    </span>
                    <span className="text-white text-xl font-bold">
                      10,000+ MPC
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Integrated Ecosystem</h3>
              <p className="text-gray-300 mb-4">
                MPC Coin is integrated into every component of the Megapayer
                ecosystem, creating a seamless experience across all our
                services.
              </p>

              <div className="grid grid-cols-3 gap-2">
                {["Wallet", "DEX", "Social", "Stablecoin", "Bridge", "NFT"].map(
                  (product) => (
                    <div
                      key={product}
                      className="px-3 py-2 bg-primary/10 text-center rounded-lg text-sm"
                    >
                      {product}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-xl border border-white/10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Get Started with MPC Coin
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Join the Megapayer ecosystem and start taking advantage of
                    MPC Coin's utility and governance benefits. Acquire, stake,
                    and utilize MPC across our entire platform.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                        Join the presale to secure the best price
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                        Stake your MPC for passive rewards
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                        Participate in governance voting
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                        Run a validator node for higher returns
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/presale"
                    className="btn-primary inline-flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Join MPC Presale
                  </Link>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-dark/40 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      Next Token Generation Events
                    </h3>

                    {/* Replaced text-based events with graph visualization */}
                    <div className="relative h-64 w-full">
                      {/* SVG Graph */}
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        {/* Graph background grid */}
                        <g className="opacity-20">
                          {[...Array(10)].map((_, i) => (
                            <line
                              key={`v-line-${i}`}
                              x1={i * 40}
                              y1="0"
                              x2={i * 40}
                              y2="180"
                              stroke="#94a3b8"
                              strokeWidth="1"
                              strokeDasharray="4,4"
                            />
                          ))}
                          {[...Array(5)].map((_, i) => (
                            <line
                              key={`h-line-${i}`}
                              x1="0"
                              y1={i * 45}
                              x2="400"
                              y2={i * 45}
                              stroke="#94a3b8"
                              strokeWidth="1"
                              strokeDasharray="4,4"
                            />
                          ))}
                        </g>

                        {/* Price trend line */}
                        <path
                          d="M20,160 L70,130 L160,100 L250,70 L340,40"
                          fill="none"
                          stroke="#4f46e5"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="drop-shadow-md"
                        />

                        {/* Data points with animation */}
                        {[
                          {
                            x: 20,
                            y: 160,
                            date: "May 10",
                            price: "$0.025",
                            label: "Presale Round 1",
                          },
                          {
                            x: 70,
                            y: 130,
                            date: "Jun 15",
                            price: "$0.035",
                            label: "Presale Round 2",
                          },
                          {
                            x: 160,
                            y: 100,
                            date: "Jul 20",
                            price: "$0.050",
                            label: "Public Sale",
                          },
                          {
                            x: 250,
                            y: 70,
                            date: "Aug 2025",
                            price: "TBD",
                            label: "Exchange Listing",
                          },
                          {
                            x: 340,
                            y: 40,
                            date: "Q4 2025",
                            price: "Target",
                            label: "Market Growth",
                          },
                        ].map((point, i) => (
                          <g
                            key={`point-${i}`}
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          >
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="6"
                              fill="#4f46e5"
                              className="drop-shadow-lg"
                            />
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="10"
                              fill="#4f46e5"
                              fillOpacity="0.3"
                            />

                            {/* Price info */}
                            <text
                              x={point.x}
                              y={point.y - 15}
                              textAnchor="middle"
                              fontSize="12"
                              fill="#ffffff"
                              fontWeight="bold"
                            >
                              {point.price}
                            </text>

                            {/* Date labels */}
                            <text
                              x={point.x}
                              y="195"
                              textAnchor="middle"
                              fontSize="11"
                              fill="#94a3b8"
                            >
                              {point.date}
                            </text>

                            {/* Event labels */}
                            <text
                              x={point.x}
                              y={point.y - 30}
                              textAnchor="middle"
                              fontSize="10"
                              fill="#94a3b8"
                              fontWeight="medium"
                            >
                              {point.label}
                            </text>
                          </g>
                        ))}

                        {/* Y-axis labels */}
                        <text x="5" y="180" fontSize="10" fill="#94a3b8">
                          $0.01
                        </text>
                        <text x="5" y="135" fontSize="10" fill="#94a3b8">
                          $0.03
                        </text>
                        <text x="5" y="90" fontSize="10" fill="#94a3b8">
                          $0.05
                        </text>
                        <text x="5" y="45" fontSize="10" fill="#94a3b8">
                          $0.07+
                        </text>

                        {/* Chart title */}
                        <text
                          x="200"
                          y="15"
                          fontSize="12"
                          fill="#ffffff"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          Token Price Progression
                        </text>
                      </svg>

                      {/* Gradient overlay for better visual effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-dark/10 via-transparent to-dark/10 pointer-events-none"></div>

                      {/* Information tooltip */}
                      <div className="absolute bottom-0 right-0 bg-dark/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-gray-400">
                        Projected values - subject to change
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Join the Megapayer Ecosystem
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Secure your position in the future of decentralized finance with
              MPC Coin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/presale"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Join Presale
              </Link>
              <Link
                href="/docs/tokenomics"
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

export default MPCCoinPage;
