import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Category icons for roadmap items
const categoryIcons = {
  product: (
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
  ),
  community: (
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
  ),
  finance: (
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
  ),
  marketing: (
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
  ),
  exchange: (
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
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  ),
};

// Main roadmap data structure - translated to English
const roadmapData = [
  {
    month: "May 2025",
    title: "Launch and Community Growth",
    status: "upcoming",
    items: [
      {
        text: "Seed Sale Launch: First sale up to 10% of the total MPC supply",
        category: "finance",
      },
      {
        text: "Mini Airdrop Campaign: Community-exclusive tasks with MPC rewards",
        category: "community",
      },
      {
        text: "Community Growth Program: Social media engagement and audience building strategies",
        category: "marketing",
      },
    ],
  },
  {
    month: "June 2025",
    title: "Evaluation and Preparation",
    status: "upcoming",
    items: [
      {
        text: "Seed Sale Performance Analysis: Evaluation of the first sale round data",
        category: "finance",
      },
      {
        text: "Pre-sale Preparation: Configuration of the second sale round parameters",
        category: "finance",
      },
      {
        text: "CEX Initial Contacts: Beginning communication with Gate.io, MEXC and BitMart",
        category: "exchange",
      },
    ],
  },
  {
    month: "July 2025",
    title: "Product Vision and First Launch",
    status: "upcoming",
    items: [
      {
        text: "Megapayer Wallet Design + Development Start",
        category: "product",
      },
      {
        text: "Zenith Teaser Release: First concept video for Web3 social platform",
        category: "marketing",
      },
      {
        text: "DEX Launch: First MPC listing on Uniswap with dynamic liquidity plan",
        category: "exchange",
      },
    ],
  },
  {
    month: "August 2025",
    title: "Testing Phase and Loyalty Rewards",
    status: "upcoming",
    items: [
      {
        text: "NFT Marketplace Testing: Open test process for the community",
        category: "product",
      },
      {
        text: "Wallet Beta (Open Testing): Iterative development through feedback collection",
        category: "product",
      },
      {
        text: "Loyalty Program Launch: Participation and contribution-based reward system",
        category: "community",
      },
    ],
  },
  {
    month: "September 2025",
    title: "Web3 Experience Begins",
    status: "planned",
    items: [
      {
        text: "Zenith Demo Release: First user tests with limited features",
        category: "product",
      },
      {
        text: "P2P Beta Launch: Direct user-to-user transfer tests",
        category: "product",
      },
      {
        text: "NFT Numbers Feature: Personalized, identity-based NFT usernames",
        category: "product",
      },
    ],
  },
  {
    month: "October 2025",
    title: "Main Product Release",
    status: "planned",
    items: [
      {
        text: "NFT Marketplace Mainnet Launch",
        category: "product",
      },
      {
        text: "CEX Integration Preparations: Adapting technical and contract structure for listings",
        category: "exchange",
      },
      {
        text: "CEX Marketing Process: Pre-listing advertising campaigns with partners",
        category: "marketing",
      },
    ],
  },
  {
    month: "November 2025",
    title: "Community and Development Focus",
    status: "planned",
    items: [
      {
        text: "Zenith Community Test Program: Iterative testing and rewards based on feedback",
        category: "community",
      },
      {
        text: "Wallet Updates: Improvements after mobile beta",
        category: "product",
      },
      {
        text: "Community Engagement Campaigns: Special events for active MPC holders and referrals",
        category: "community",
      },
    ],
  },
  {
    month: "December 2025",
    title: "Towards the Summit",
    status: "planned",
    items: [
      {
        text: "CEX Listing Approval: MPC token gets approval for listing on Gate.io or MEXC",
        category: "exchange",
      },
      {
        text: "Listing Preparation: Final technical steps for Q1 2026 launch",
        category: "exchange",
      },
      {
        text: "Year-End Report: 2025 general assessment and sharing of 2026 vision",
        category: "community",
      },
    ],
  },
];

const Roadmap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Group roadmap items into pairs for the 2x2 layout
  const roadmapGroups = [];
  for (let i = 0; i < roadmapData.length; i += 4) {
    roadmapGroups.push(roadmapData.slice(i, i + 4));
  }

  return (
    <section
      className="py-24 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95 relative overflow-hidden"
      id="roadmap"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Background elements */}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Section header */}
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-full text-primary mb-6">
            2025 Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Megapayer <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our month-by-month concrete roadmap for growth as we strengthen
            Megapayer's position in the decentralized finance world.
          </p>
        </motion.div>

        {/* Roadmap Groups (2x2 grid layout) */}
        {roadmapGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="mb-32 last:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto relative">
              {/* Remove connecting SVG lines */}

              {/* Roadmap boxes with enhanced visual flow indicators */}
              {group.map((milestone, index) => {
                // Calculate delay based on position in flow
                const flowPosition = index % 4;
                const delayMultiplier =
                  flowPosition === 0
                    ? 0
                    : flowPosition === 1
                    ? 0.5
                    : flowPosition === 2
                    ? 1
                    : 1.5;

                // Determine the direction indicator for each box
                const getDirectionIndicator = () => {
                  if (flowPosition === 0) return "→"; // First box points right
                  if (flowPosition === 1) return "↓"; // Second box points down
                  if (flowPosition === 2) return "←"; // Third box points left
                  return ""; // Last box has no indicator
                };

                return (
                  <motion.div
                    key={`milestone-${groupIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + delayMultiplier * 0.3,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-10"
                  >
                    {/* Flow direction indicators for mobile */}
                    {index < group.length - 1 && (
                      <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Milestone box with enhanced styling */}
                    <div
                      className={`
                      h-full bg-dark/40 backdrop-blur-lg border rounded-xl p-6 shadow-xl
                      ${
                        milestone.status === "upcoming"
                          ? "border-primary/30"
                          : "border-secondary/30"
                      }
                      hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300
                      transform hover:-translate-y-1
                    `}
                    >
                      {/* Month badge with flow position indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`
                          inline-block px-4 py-2 rounded-full text-sm font-bold
                          ${
                            milestone.status === "upcoming"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary/20 text-secondary"
                          }
                        `}
                        >
                          {milestone.month}
                        </div>

                        {/* Flow indicator (desktop only) */}
                        {flowPosition !== 3 && (
                          <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            {getDirectionIndicator()}
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-5">
                        {milestone.title}
                      </h3>

                      {/* Timeline items */}
                      <ul className="space-y-4">
                        {milestone.items.map((item, itemIndex) => (
                          <li
                            key={`item-${index}-${itemIndex}`}
                            className="flex items-start"
                          >
                            <div
                              className={`
                              flex-shrink-0 p-1.5 rounded-full mr-3 shadow-md
                              ${
                                item.category === "product"
                                  ? "bg-primary/20 text-primary shadow-primary/30"
                                  : item.category === "community"
                                  ? "bg-green-500/20 text-green-500 shadow-green-500/30"
                                  : item.category === "finance"
                                  ? "bg-yellow-500/20 text-yellow-500 shadow-yellow-500/30"
                                  : item.category === "marketing"
                                  ? "bg-purple-500/20 text-purple-500 shadow-purple-500/30"
                                  : "bg-blue-500/20 text-blue-500 shadow-blue-500/30"
                              }
                            `}
                            >
                              {categoryIcons[item.category]}
                            </div>
                            <span className="text-gray-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Roadmap footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-gray-400 italic mb-8 leading-relaxed">
            This roadmap provides clarity to investors while being based on
            dynamics that evolve with the community. Each step reflects growth,
            transparency, and commitment to decentralization.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link
              href="/whitepaper/roadmap"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 text-primary border border-primary/50 hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/20 group-hover:translate-y-[-2px]"
            >
              <span>Detailed Roadmap</span>
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
