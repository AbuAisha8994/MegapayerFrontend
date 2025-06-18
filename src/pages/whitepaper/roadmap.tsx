import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

// Define the roadmap data structure with more detail than the simplified version
const detailedRoadmap = [
  {
    year: 2025,
    quarters: [
      {
        name: "Q1 2025",
        title: "Foundation & Initial Development",
        status: "planned",
        description:
          "Setting up the core infrastructure and beginning development of key components",
        milestones: [
          {
            title: "Core Technology Development Kickoff",
            description:
              "Beginning the development of blockchain core technology, focusing on consensus mechanism and security features",
            category: "tech",
          },
          {
            title: "Team Expansion",
            description:
              "Growing the development and operations team to support rapid product development",
            category: "operations",
          },
          {
            title: "Community Building Initiatives",
            description:
              "Establishing social channels and community engagement strategies",
            category: "community",
          },
          {
            title: "Technical Whitepaper Release",
            description:
              "Publishing comprehensive technical documentation of the Megapayer ecosystem",
            category: "documentation",
          },
        ],
      },
      {
        name: "Q2 2025",
        title: "Initial Launch & Community Growth",
        status: "planned",
        description:
          "First public products and building the initial user community",
        milestones: [
          {
            title: "Seed Sale Launch",
            description:
              "First token sale offering up to 10% of the total MPC supply",
            category: "finance",
          },
          {
            title: "Mini Airdrop Campaign",
            description:
              "Community-exclusive tasks with MPC token rewards to grow early adoption",
            category: "community",
          },
          {
            title: "Community Expansion Program",
            description:
              "Social media engagement and audience building strategies across global markets",
            category: "marketing",
          },
          {
            title: "Testnet Launch",
            description:
              "Public testnet release with block explorer and developer documentation",
            category: "tech",
          },
        ],
      },
      {
        name: "Q3 2025",
        title: "Product Expansion & User Testing",
        status: "planned",
        description:
          "Expanding the product suite and refining based on initial user feedback",
        milestones: [
          {
            title: "Wallet Beta Release",
            description:
              "Public beta of Megapayer Wallet with core features and multi-chain support",
            category: "product",
          },
          {
            title: "DEX Integration",
            description:
              "Initial DEX listings and liquidity pool setup for MPC token",
            category: "finance",
          },
          {
            title: "Developer SDK Alpha",
            description:
              "First release of developer tools for building on Megapayer Chain",
            category: "tech",
          },
          {
            title: "Social Platform Concept",
            description:
              "Releasing conceptual designs and technical specifications for the decentralized social platform",
            category: "product",
          },
        ],
      },
      {
        name: "Q4 2025",
        title: "Ecosystem Expansion & Partnerships",
        status: "planned",
        description:
          "Expanding through strategic partnerships and ecosystem integrations",
        milestones: [
          {
            title: "NFT Marketplace Launch",
            description:
              "Full release of the NFT marketplace with creator tools and cross-chain support",
            category: "product",
          },
          {
            title: "Exchange Listings",
            description:
              "Major centralized exchange listings for improved token liquidity",
            category: "finance",
          },
          {
            title: "Strategic Partnerships",
            description:
              "Key partnerships with DeFi protocols, gaming platforms, and enterprise solutions",
            category: "business",
          },
          {
            title: "Cross-Chain Bridge",
            description:
              "Multi-chain bridge deployment for interoperability with major blockchains",
            category: "tech",
          },
        ],
      },
    ],
  },
  {
    year: 2026,
    quarters: [
      {
        name: "Q1 2026",
        title: "Mainstream Adoption & Scale",
        status: "planned",
        description:
          "Focusing on user experience and scaling to support mainstream adoption",
        milestones: [
          {
            title: "Social Platform Beta",
            description:
              "Public beta release of the decentralized social platform with core features",
            category: "product",
          },
          {
            title: "Mobile App Release",
            description:
              "Native iOS and Android apps for wallet and ecosystem services",
            category: "product",
          },
          {
            title: "Enterprise Solutions",
            description:
              "Release of enterprise-grade tools and documentation for institutional adoption",
            category: "business",
          },
          {
            title: "Governance System Implementation",
            description:
              "Release of community governance system for protocol decisions",
            category: "community",
          },
        ],
      },
      {
        name: "Q2 2026",
        title: "Technical Advancement & DeFi Expansion",
        status: "planned",
        description:
          "Advanced technical features and comprehensive DeFi ecosystem",
        milestones: [
          {
            title: "Layer 2 Scaling Solution",
            description:
              "Implementation of advanced scalability solutions to improve throughout",
            category: "tech",
          },
          {
            title: "DeFi Tools Expansion",
            description:
              "Lending, staking, and yield farming protocols built directly into the ecosystem",
            category: "product",
          },
          {
            title: "Developer Grants Program",
            description:
              "Launching a grants program to fund ecosystem development",
            category: "community",
          },
          {
            title: "Cross-Platform Integration SDK",
            description:
              "Tools for integrating Megapayer services into existing applications",
            category: "tech",
          },
        ],
      },
      {
        name: "Q3-Q4 2026",
        title: "Global Expansion & Innovation",
        status: "planned",
        description: "Global reach and next-generation feature implementation",
        milestones: [
          {
            title: "Regional Market Expansion",
            description:
              "Focused growth initiatives in emerging markets with localized support",
            category: "business",
          },
          {
            title: "AI Integration Enhancements",
            description:
              "Advanced AI features for smart contract development, fraud detection, and user experience",
            category: "tech",
          },
          {
            title: "Metaverse & Gaming Integrations",
            description:
              "Comprehensive SDK for metaverse and gaming integrations",
            category: "product",
          },
          {
            title: "Enterprise Partner Network",
            description:
              "Formal program for enterprise adoption and integration",
            category: "business",
          },
        ],
      },
    ],
  },
  {
    year: 2027,
    quarters: [
      {
        name: "2027 and Beyond",
        title: "Long-Term Vision & Full Decentralization",
        status: "vision",
        description:
          "Achieving full decentralization and implementing the long-term vision",
        milestones: [
          {
            title: "Complete Protocol Decentralization",
            description:
              "Full transition to community governance for all protocol decisions",
            category: "community",
          },
          {
            title: "Web3 Operating System",
            description:
              "A comprehensive platform for seamless interaction with all web3 services",
            category: "product",
          },
          {
            title: "Next-Generation Chain Architecture",
            description:
              "Research and development on next-generation blockchain architecture",
            category: "tech",
          },
          {
            title: "Real-World Asset Integration",
            description:
              "Comprehensive framework for tokenizing and trading real-world assets",
            category: "business",
          },
        ],
      },
    ],
  },
];

// Icons for different milestone categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "tech":
      return (
        <svg
          className="w-5 h-5"
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
      );
    case "product":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      );
    case "finance":
      return (
        <svg
          className="w-5 h-5"
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
      );
    case "community":
      return (
        <svg
          className="w-5 h-5"
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
      );
    case "business":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "marketing":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      );
    case "operations":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "documentation":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      );
  }
};

// Function to get the appropriate color class for each category
const getCategoryColorClass = (category: string) => {
  switch (category) {
    case "tech":
      return "bg-blue-500/20 text-blue-500 shadow-blue-500/30";
    case "product":
      return "bg-primary/20 text-primary shadow-primary/30";
    case "finance":
      return "bg-yellow-500/20 text-yellow-500 shadow-yellow-500/30";
    case "community":
      return "bg-green-500/20 text-green-500 shadow-green-500/30";
    case "business":
      return "bg-purple-500/20 text-purple-500 shadow-purple-500/30";
    case "marketing":
      return "bg-pink-500/20 text-pink-500 shadow-pink-500/30";
    case "operations":
      return "bg-orange-500/20 text-orange-500 shadow-orange-500/30";
    case "documentation":
      return "bg-cyan-500/20 text-cyan-500 shadow-cyan-500/30";
    default:
      return "bg-gray-500/20 text-gray-500 shadow-gray-500/30";
  }
};

const RoadmapPage = () => {
  return (
    <Layout>
      <Head>
        <title>Megapayer Detailed Roadmap | 2025-2027 Vision</title>
        <meta
          name="description"
          content="Comprehensive development roadmap for Megapayer ecosystem, including detailed milestones, timeline, and long-term vision."
        />
      </Head>

      <div className="relative pt-32 pb-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {/* Background grid */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {/* Background glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[120px] opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-full text-primary mb-6">
              Strategic Vision
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Megapayer <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our detailed development timeline and strategic vision for
              building the Megapayer ecosystem from 2025 through 2027 and
              beyond.
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto bg-dark/40 backdrop-blur-sm rounded-xl border border-white/10 p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-4 text-gradient">
              Our Approach to Development
            </h2>
            <p className="text-gray-300 mb-4">
              The Megapayer roadmap is designed to be both ambitious and
              adaptable. While we've established clear milestones and
              objectives, we embrace an agile approach that allows us to respond
              to market conditions, technological advancements, and community
              feedback.
            </p>
            <p className="text-gray-300">
              This roadmap represents our current vision and planned execution
              strategy, but as with any innovative technology, we prioritize
              delivering quality and security over rigid timelines. All dates
              should be considered targets that may be adjusted as development
              progresses.
            </p>
          </motion.div>

          {/* Main Timeline */}
          <div className="relative space-y-20 mb-20">
            {/* Decorative vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/5 transform -translate-x-1/2"></div>

            {detailedRoadmap.map((yearData, yearIndex) => (
              <div key={`year-${yearData.year}`} className="relative">
                {/* Year header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center justify-center px-8 py-3 border border-primary/30 rounded-full bg-dark/80 backdrop-blur-sm relative z-10">
                    <span className="text-2xl font-bold text-primary">
                      {yearData.year}
                    </span>
                  </div>
                </motion.div>

                {/* Quarters for the year */}
                <div className="space-y-16">
                  {yearData.quarters.map((quarter, quarterIndex) => (
                    <motion.div
                      key={`quarter-${yearData.year}-${quarterIndex}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.1 * quarterIndex }}
                      className="max-w-5xl mx-auto"
                    >
                      {/* Quarter header */}
                      <div
                        className={`
                        relative z-10 flex items-center mb-8
                        ${
                          quarterIndex % 2 === 0
                            ? "justify-start"
                            : "justify-end"
                        }
                      `}
                      >
                        <div
                          className={`
                          inline-flex items-center px-6 py-3 rounded-xl border
                          ${
                            quarter.status === "vision"
                              ? "border-secondary/40 bg-secondary/10"
                              : "border-primary/40 bg-primary/10"
                          }
                        `}
                        >
                          <span
                            className={`text-xl font-bold ${
                              quarter.status === "vision"
                                ? "text-secondary"
                                : "text-primary"
                            }`}
                          >
                            {quarter.name}
                          </span>
                        </div>
                      </div>

                      {/* Quarter content box */}
                      <div
                        className={`
                        relative bg-dark/40 backdrop-blur-lg rounded-xl border 
                        ${
                          quarter.status === "vision"
                            ? "border-secondary/20"
                            : "border-primary/20"
                        }
                        overflow-hidden shadow-lg
                      `}
                      >
                        {/* Header */}
                        <div
                          className={`
                          p-6 border-b 
                          ${
                            quarter.status === "vision"
                              ? "border-secondary/20 bg-secondary/5"
                              : "border-primary/20 bg-primary/5"
                          }
                        `}
                        >
                          <h3 className="text-2xl font-bold">
                            {quarter.title}
                          </h3>
                          <p className="text-gray-300 mt-2">
                            {quarter.description}
                          </p>
                        </div>

                        {/* Milestones grid */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {quarter.milestones.map(
                              (milestone, milestoneIndex) => (
                                <div
                                  key={`milestone-${yearData.year}-${quarterIndex}-${milestoneIndex}`}
                                  className="bg-dark/60 border border-white/5 rounded-lg p-5 hover:border-primary/20 transition-colors"
                                >
                                  <div className="flex items-start">
                                    <div
                                      className={`
                                    flex-shrink-0 p-2 rounded-full mr-4 shadow-md
                                    ${getCategoryColorClass(milestone.category)}
                                  `}
                                    >
                                      {getCategoryIcon(milestone.category)}
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-semibold mb-2">
                                        {milestone.title}
                                      </h4>
                                      <p className="text-gray-400 text-sm">
                                        {milestone.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Category Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Development Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Technology", category: "tech" },
                { name: "Product", category: "product" },
                { name: "Finance", category: "finance" },
                { name: "Community", category: "community" },
                { name: "Business", category: "business" },
                { name: "Marketing", category: "marketing" },
                { name: "Operations", category: "operations" },
                { name: "Documentation", category: "documentation" },
              ].map((item) => (
                <div
                  key={item.category}
                  className="flex items-center bg-dark/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                >
                  <div
                    className={`
                    flex-shrink-0 p-1 rounded-full mr-2
                    ${getCategoryColorClass(item.category)}
                  `}
                  >
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-400 italic mb-12">
              This roadmap is subject to change based on market conditions,
              technological advancements, and community feedback. We're
              committed to transparency and will provide regular updates on our
              progress through official channels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#roadmap"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <span className="flex items-center">
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Overview
                </span>
              </Link>
              <Link
                href="/whitepapers"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <span className="flex items-center">
                  Technical Whitepapers
                  <svg
                    className="ml-2 w-5 h-5"
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
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default RoadmapPage;
