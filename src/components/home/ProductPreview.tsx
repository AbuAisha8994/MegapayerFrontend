import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Define the product data with SVG-based visuals instead of images
const productData = [
  {
    id: "blockchain",
    title: "Megapayer Blockchain",
    subtitle: "Shared Proof of Stake Consensus",
    description:
      "Our native blockchain features a unique Shared Proof of Stake consensus mechanism, delivering superior performance, security, and sustainability.",
    features: [
      "High throughput transaction processing",
      "Energy-efficient consensus mechanism",
      "Cross-chain interoperability",
      "Secure smart contract execution",
    ],
    color: "#4F46E5",
    icon: (
      <svg
        className="w-16 h-16 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: "social-media",
    title: "Decentralized Social",
    subtitle: "Privacy-First Platform",
    description:
      "A revolutionary social media platform that gives ownership of content and data back to users through blockchain-based verification.",
    features: [
      "User-owned content and data",
      "Censorship-resistant publishing",
      "Creator-focused monetization",
      "Verifiable reputation system",
    ],
    color: "#10B981",
    icon: (
      <svg
        className="w-16 h-16 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: "p2p-exchange",
    title: "P2P Exchange",
    subtitle: "Trustless Trading Platform",
    description:
      "Our peer-to-peer exchange enables direct trading between users with smart contract escrow protection and decentralized dispute resolution.",
    features: [
      "Smart contract escrow protection",
      "Decentralized reputation system",
      "Multi-currency support",
      "Cross-border capabilities",
    ],
    color: "#F59E0B",
    icon: (
      <svg
        className="w-16 h-16 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    id: "dex",
    title: "Multi-Chain DEX",
    subtitle: "Cross-Chain Trading Protocol",
    description:
      "Trade assets across multiple blockchains seamlessly with our decentralized exchange built for maximum liquidity and minimal slippage.",
    features: [
      "Cross-chain atomic swaps",
      "Unified liquidity pools",
      "MEV protection",
      "Optimized trading routes",
    ],
    color: "#8B5CF6",
    icon: (
      <svg
        className="w-16 h-16 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "wallet",
    title: "Universal Wallet",
    subtitle: "Secure Multi-Chain Asset Management",
    description:
      "A single wallet to securely store, send, and manage your assets across all supported blockchain networks with intuitive controls.",
    features: [
      "Multi-chain support",
      "Hardware wallet integration",
      "DApp browser",
      "Advanced security features",
    ],
    color: "#EC4899",
    icon: (
      <svg
        className="w-16 h-16 text-pink-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "stablecoin",
    title: "Megapayer Stablecoin",
    subtitle: "Fully Collateralized Digital Currency",
    description:
      "Our USD-pegged stablecoin is fully collateralized, transparent, and optimized for cross-border payments and DeFi applications.",
    features: [
      "Full collateralization",
      "Real-time attestation",
      "Multi-chain availability",
      "Low-cost transfers",
    ],
    color: "#F97316",
    icon: (
      <svg
        className="w-16 h-16 text-orange-500"
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
    ),
  },
  {
    id: "mpc-coin",
    title: "MPC Coin",
    subtitle: "Governance and Utility Token",
    description:
      "The native currency of the Megapayer ecosystem, used for governance, staking, transaction fees and cross-chain operations.",
    features: [
      "Ecosystem governance",
      "Validator incentives",
      "Fee discounts",
      "Staking rewards",
    ],
    color: "#4F46E5",
    icon: (
      <svg
        className="w-16 h-16 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "mpc-id",
    title: "MPC ID",
    subtitle: "Digital Identity Solution",
    description:
      "A self-sovereign digital identity system that gives users complete control over their personal data and verification credentials.",
    features: [
      "Self-sovereign identity",
      "Selective disclosure",
      "Cross-platform verification",
      "Zero-knowledge proofs",
    ],
    color: "#10B981",
    icon: (
      <svg
        className="w-16 h-16 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
    ),
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    subtitle: "Cross-Chain Digital Asset Trading",
    description:
      "A marketplace for creating, buying, and selling NFTs with advanced features for creators, collectors, and developers.",
    features: [
      "Multi-chain NFT support",
      "Creator royalties",
      "Fractional ownership",
      "Advanced curation tools",
    ],
    color: "#8B5CF6",
    icon: (
      <svg
        className="w-16 h-16 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "sdk-api",
    title: "Developer SDK/API",
    subtitle: "Comprehensive Development Tools",
    description:
      "A full suite of development tools, SDKs, and APIs for building applications on the Megapayer ecosystem.",
    features: [
      "Cross-platform SDK",
      "RESTful and GraphQL APIs",
      "Webhooks and event subscriptions",
      "Extensive documentation",
    ],
    color: "#0891B2",
    icon: (
      <svg
        className="w-16 h-16 text-cyan-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "explorer",
    title: "Megapayer Explorer",
    subtitle: "Blockchain Analytics Platform",
    description:
      "A comprehensive explorer for monitoring transactions, blocks, validators, and network activity across the Megapayer ecosystem.",
    features: [
      "Real-time transaction tracking",
      "Smart contract verification",
      "Advanced search capabilities",
      "Network statistics dashboard",
    ],
    color: "#0EA5E9",
    icon: (
      <svg
        className="w-16 h-16 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "bridge",
    title: "Bridge",
    subtitle: "Cross-chain Interoperability",
    description:
      "A secure bridge for transferring assets between Megapayer and other blockchain networks with minimal fees and fast confirmation times.",
    features: [
      "Multi-chain compatibility",
      "Fast bridging confirmations",
      "Security-focused architecture",
      "Liquidity optimizations",
    ],
    color: "#D946EF",
    icon: (
      <svg
        className="w-16 h-16 text-fuchsia-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
];

const ProductPreview = () => {
  const [activeProduct, setActiveProduct] = useState(productData[0].id);

  // Find the currently active product
  const currentProduct =
    productData.find((product) => product.id === activeProduct) ||
    productData[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
      {/* Product Navigation Sidebar - Improved design and balance */}
      <div className="lg:col-span-4">
        <div className="bg-dark/40 backdrop-blur-sm rounded-xl border border-white/10 p-4 sticky top-24 h-[600px] overflow-auto shadow-lg shadow-primary/5">
          <h3 className="text-xl font-bold mb-6 px-2 text-gradient">
            Ecosystem Products
          </h3>
          <nav className="space-y-1.5">
            {productData.map((product) => (
              <button
                key={product.id}
                className={`w-full text-left px-4 py-3.5 rounded-lg transition-all duration-300 flex items-center ${
                  activeProduct === product.id
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 text-white font-medium"
                    : "hover:bg-dark/60 text-gray-300 hover:text-white hover:translate-x-1"
                }`}
                onClick={() => setActiveProduct(product.id)}
              >
                <span className="w-2 h-2 rounded-full mr-3 bg-primary opacity-70"></span>
                <span>{product.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Display - Enhanced visual balance */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-dark/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-[600px] flex flex-col shadow-xl shadow-primary/5"
          >
            {/* Product Header - Improved styling */}
            <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-dark/80 to-dark/40">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                      {currentProduct.title}
                    </h2>
                  </div>
                  <p className="text-primary ml-6">{currentProduct.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href={
                      currentProduct.id === "nft-marketplace"
                        ? "/whitepaper/nft-marketplace"
                        : currentProduct.id === "bridge"
                        ? "/coming-soon?product=Bridge&returnUrl=/"
                        : `/${currentProduct.id}`
                    }
                    className="inline-flex items-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-white group"
                  >
                    <span>Learn More</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

            {/* Product Content - Improved layout and balance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 flex-grow overflow-auto">
              {/* Product Description - Enhanced typography and spacing */}
              <div className="space-y-6">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {currentProduct.description}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
                    <span className="w-1 h-6 bg-primary rounded-full mr-3"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-3 ml-2">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="p-1 bg-primary/20 rounded-full mt-0.5 mr-3 flex-shrink-0">
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
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Product Visual - Enhanced with better visual effects */}
              <div className="relative min-h-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-dark/80 to-secondary/10 border border-white/10 p-8 flex items-center justify-center shadow-inner">
                <div className="relative z-10 transform hover:scale-110 transition-transform duration-500">
                  {currentProduct.icon}
                </div>

                {/* Animated background - Enhanced effects */}
                <div className="absolute inset-0 z-0 opacity-30">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at center, ${currentProduct.color}20 0%, transparent 70%)`,
                    }}
                  ></div>

                  {/* Animated particles */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                        background: currentProduct.color,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5,
                      }}
                      animate={{
                        y: [0, -(Math.random() * 20 + 10)],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Grid pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10">
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        d="M0 10 H20 M10 0 V20"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Improved animated rings with better sizing and positioning */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-44 h-44 rounded-full border-2"
                    style={{ borderColor: currentProduct.color }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 rounded-full border"
                    style={{ borderColor: currentProduct.color }}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductPreview;
