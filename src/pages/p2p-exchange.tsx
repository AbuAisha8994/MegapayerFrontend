import { useRef } from "react";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import P2PAnimation from "@/components/animations/P2PAnimation";
import DEXAnimation from "@/components/animations/DEXAnimation";
import Link from "next/link";

const P2PExchangePage = () => {
  const p2pFeaturesRef = useRef(null);
  const dexFeaturesRef = useRef(null);
  const comparisonRef = useRef(null);

  const isP2PFeaturesInView = useInView(p2pFeaturesRef, {
    once: true,
    amount: 0.3,
  });
  const isDEXFeaturesInView = useInView(dexFeaturesRef, {
    once: true,
    amount: 0.3,
  });
  const isComparisonInView = useInView(comparisonRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Layout>
      <Head>
        <title>
          Megapayer Trading Platforms | P2P Exchange & Multi-Chain DEX
        </title>
        <meta
          name="description"
          content="Experience the best of both worlds with Megapayer's P2P Exchange for direct peer-to-peer trading and Multi-Chain DEX for automated liquidity provision across multiple blockchains."
        />
      </Head>

      <ProductHero
        title="Dual Trading Ecosystem"
        subtitle="P2P Exchange & Multi-Chain DEX"
        description="Choose your trading style: Direct peer-to-peer exchanges with human counterparts or automated market making through our advanced multi-chain DEX platform."
        animation={
          <div className="w-full h-full grid grid-cols-2 gap-4">
            <div className="relative">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls enableZoom={false} autoRotate={false} />
                <P2PAnimation />
              </Canvas>
              <div className="absolute bottom-2 left-2 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-xs font-semibold text-white">
                  P2P Exchange
                </span>
              </div>
            </div>
            <div className="relative">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls enableZoom={false} autoRotate={false} />
                <DEXAnimation />
              </Canvas>
              <div className="absolute bottom-2 left-2 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-xs font-semibold text-white">
                  Multi-Chain DEX
                </span>
              </div>
            </div>
          </div>
        }
        color="#f97316"
        secondaryColor="#f59e0b"
      />

      {/* P2P Exchange Section */}
      <section id="p2p-exchange" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/20 mb-6">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
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
              <span className="text-orange-500 font-medium">Platform 1</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              P2P Exchange:{" "}
              <span className="text-orange-500">Human-to-Human Trading</span>
            </h2>
            <p className="text-xl text-gray-300">
              Connect directly with other traders worldwide. Our P2P platform
              facilitates secure, trustless peer-to-peer transactions with
              built-in escrow protection and dispute resolution.
            </p>
          </motion.div>

          <motion.div
            ref={p2pFeaturesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isP2PFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Direct Negotiation</h3>
              <p className="text-gray-300">
                Set your own prices and terms. Negotiate directly with
                counterparts to find the best deals that work for both parties.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Contract Escrow</h3>
              <p className="text-gray-300">
                Automated escrow system holds funds securely until both parties
                fulfill their obligations. No counterparty risk.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrated Chat System</h3>
              <p className="text-gray-300">
                Communicate securely with trading partners through encrypted
                messaging. Build trust and clarify terms before trading.
              </p>
            </div>
          </motion.div>

          {/* P2P How it Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-orange-500/5 backdrop-blur-md p-8 rounded-xl border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                How P2P Trading Works
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Post or Browse Offers
                    </h4>
                    <p className="text-gray-300">
                      Create your own trading advertisement or browse existing
                      offers from other users worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Initiate Trade
                    </h4>
                    <p className="text-gray-300">
                      Start a trade request and automatically lock the seller's
                      cryptocurrency in smart contract escrow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Make Payment</h4>
                    <p className="text-gray-300">
                      Send payment using your preferred method (bank transfer,
                      cash, digital payment, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold mb-2">
                      Release & Complete
                    </h4>
                    <p className="text-gray-300">
                      After payment confirmation, cryptocurrency is
                      automatically released from escrow to the buyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Global Payment Methods
              </h3>
              <p className="text-gray-300 mb-6">
                Trade using hundreds of payment methods across different
                countries and regions. Our P2P platform supports local payment
                systems worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Digital Payments</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• PayPal</li>
                    <li>• Wise (TransferWise)</li>
                    <li>• Revolut</li>
                    <li>• Alipay</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Bank Transfers</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• SEPA</li>
                    <li>• ACH</li>
                    <li>• Wire Transfer</li>
                    <li>• Local Banks</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Mobile Money</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• M-Pesa</li>
                    <li>• GCash</li>
                    <li>• bKash</li>
                    <li>• Orange Money</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Gift Cards</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Amazon</li>
                    <li>• iTunes</li>
                    <li>• Google Play</li>
                    <li>• Steam</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEX Section */}
      <section id="dex" className="py-20 bg-gradient-to-b from-dark/50 to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/20 mb-6">
              <svg
                className="w-5 h-5 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-primary font-medium">Platform 2</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Multi-Chain DEX:{" "}
              <span className="text-primary">Automated Market Maker</span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience lightning-fast trades across multiple blockchains. Our
              advanced AMM protocol provides deep liquidity, minimal slippage,
              and seamless cross-chain swaps.
            </p>
          </motion.div>

          <motion.div
            ref={dexFeaturesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isDEXFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-primary/10">
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
              <h3 className="text-xl font-bold mb-4">Instant Swaps</h3>
              <p className="text-gray-300">
                Execute trades instantly at market rates with no waiting time.
                Advanced routing finds the best prices across all liquidity
                pools.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-primary/10">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cross-Chain Bridge</h3>
              <p className="text-gray-300">
                Seamlessly move assets between Ethereum, BSC, Polygon,
                Avalanche, and other major blockchains with our secure bridge
                technology.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-primary/10">
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
              <h3 className="text-xl font-bold mb-4">Yield Farming</h3>
              <p className="text-gray-300">
                Provide liquidity to earn trading fees plus additional rewards.
                Stake LP tokens in yield farms for enhanced returns on your
                capital.
              </p>
            </div>
          </motion.div>

          {/* DEX Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Advanced Trading Features
              </h3>
              <p className="text-gray-300 mb-6">
                Professional trading tools designed for both beginners and
                advanced traders. Access institutional-grade features in a
                decentralized environment.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    <strong>Limit Orders:</strong> Set precise entry and exit
                    points with advanced order types
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    <strong>Aggregated Liquidity:</strong> Best prices from
                    multiple DEXs and AMMs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    <strong>MEV Protection:</strong> Protected against
                    front-running and sandwich attacks
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    <strong>Portfolio Tracking:</strong> Real-time P&L tracking
                    and portfolio analytics
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 backdrop-blur-md p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Supported Chains & Assets
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-white">Blockchains</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                      <span className="text-gray-300">Megapayer Chain</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-300">Ethereum</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-gray-300">Binance Smart Chain</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-gray-300">Polygon</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-gray-300">Avalanche</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">Asset Types</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div>• 500+ ERC-20 Tokens</div>
                    <div>• Major Cryptocurrencies</div>
                    <div>• Stablecoins (USDT, USDC, DAI)</div>
                    <div>• DeFi Protocol Tokens</div>
                    <div>• NFT Floor Price Tokens</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2.5B+</div>
                  <div className="text-sm text-gray-300">
                    Total Value Locked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <motion.section
        ref={comparisonRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isComparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Choose Your Trading Style
            </h2>
            <p className="text-xl text-gray-300">
              Both platforms offer unique advantages depending on your trading
              needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* P2P Comparison Card */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-md p-8 rounded-xl border border-orange-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
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
                <h3 className="text-2xl font-bold text-orange-500">
                  P2P Exchange
                </h3>
                <p className="text-gray-300">Best for personal trading</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Set your own prices</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Global payment methods</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Lower fees (0.5%)</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Human interaction</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">No KYC required</span>
                </div>
              </div>

              <Link
                href="/p2p-exchange/app"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center block"
              >
                Start P2P Trading
              </Link>
            </div>

            {/* DEX Comparison Card */}
            <div className="bg-gradient-to-br from-primary/10 to-blue-600/5 backdrop-blur-md p-8 rounded-xl border border-primary/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-2xl font-bold text-primary">
                  Multi-Chain DEX
                </h3>
                <p className="text-gray-300">Best for professional trading</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Instant execution</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Cross-chain swaps</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Deep liquidity</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Advanced trading tools</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Yield farming rewards</span>
                </div>
              </div>

              <Link
                href="/dex/app"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center block"
              >
                Launch DEX App
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
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
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Choose the platform that best fits your trading style and join
              thousands of users already trading on Megapayer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/p2p-exchange/coming-soon"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Try P2P Exchange
              </Link>
              <Link
                href="/dex/coming-soon"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Launch DEX
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default P2PExchangePage;
