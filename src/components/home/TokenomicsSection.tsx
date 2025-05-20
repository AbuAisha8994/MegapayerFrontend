import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const TokenomicsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Tokenomics data with enhanced colors for better visual balance
  const tokenomicsData = [
    { name: "Community & Airdrop", percentage: 10, color: "#4F46E5" }, // Primary
    { name: "Seed Sale", percentage: 15, color: "#10B981" }, // Green
    { name: "Presale", percentage: 15, color: "#F59E0B" }, // Yellow
    { name: "Team & Advisors", percentage: 10, color: "#8B5CF6" }, // Purple
    { name: "Development", percentage: 15, color: "#EC4899" }, // Pink
    { name: "Liquidity & Exchange", percentage: 20, color: "#0EA5E9" }, // Blue
    { name: "Staking Rewards", percentage: 10, color: "#F97316" }, // Orange
    { name: "DAO/Governance", percentage: 5, color: "#14B8A6" }, // Teal
  ];

  // Calculate SVG coordinates for pie chart with improved precision
  const createPieChartCoordinates = () => {
    const radius = 150;
    let startAngle = 0;

    return tokenomicsData.map((segment) => {
      // Convert percentage to angle
      const angle = (segment.percentage / 100) * 360;
      const endAngle = startAngle + angle;

      // Coordinates calculation
      const startRadians = (startAngle - 90) * (Math.PI / 180);
      const endRadians = (endAngle - 90) * (Math.PI / 180);

      const x1 = radius * Math.cos(startRadians) + radius;
      const y1 = radius * Math.sin(startRadians) + radius;
      const x2 = radius * Math.cos(endRadians) + radius;
      const y2 = radius * Math.sin(endRadians) + radius;

      // Large arc flag is 1 if angle > 180 degrees
      const largeArcFlag = angle > 180 ? 1 : 0;

      // Create SVG path
      const pathData = [
        `M ${radius},${radius}`,
        `L ${x1},${y1}`,
        `A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`,
        "Z",
      ].join(" ");

      // Update start angle for next segment
      startAngle = endAngle;

      return {
        ...segment,
        path: pathData,
        endAngle,
      };
    });
  };

  const pieSegments = createPieChartCoordinates();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background effects for better depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark/40 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Decorative background elements for better visual balance */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-full text-primary mb-6">
            Supply & Distribution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            <span className="text-gradient">MPC Token</span> Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building a fair, community-driven Web3 economy with $MPC.
            Here's how our 100M token supply is distributed:
          </p>
        </motion.div>

        {/* Improved layout with better balance between chart and text */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Pie Chart (SVG) - Enhanced with 3D-like effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-[320px] h-[320px]"
          >
            <div className="absolute inset-0 rounded-full bg-dark/50 shadow-2xl"></div>
            <svg
              width="320"
              height="320"
              viewBox="0 0 300 300"
              className="drop-shadow-xl"
            >
              <defs>
                {/* Add gradient definitions for more beautiful pie segments */}
                {tokenomicsData.map((segment, i) => (
                  <radialGradient
                    key={`grad-${i}`}
                    id={`grad-${segment.name.replace(/\s+/g, "")}`}
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor={segment.color}
                      stopOpacity="0.9"
                    />
                    <stop
                      offset="100%"
                      stopColor={segment.color}
                      stopOpacity="0.7"
                    />
                  </radialGradient>
                ))}
              </defs>

              {pieSegments.map((segment, index) => (
                <motion.path
                  key={segment.name}
                  d={segment.path}
                  fill={`url(#grad-${segment.name.replace(/\s+/g, "")})`}
                  stroke="#121212"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: [5, 0],
                          x: [5, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="hover:opacity-90 transition-transform duration-300 cursor-pointer hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <title>{`${segment.name}: ${segment.percentage}%`}</title>
                </motion.path>
              ))}

              {/* Center circle with enhanced styling */}
              <circle cx="150" cy="150" r="70" fill="#121212" />
              <circle cx="150" cy="150" r="67" fill="url(#innerGradient)" />

              <defs>
                <radialGradient
                  id="innerGradient"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="#1E1E1E" />
                  <stop offset="100%" stopColor="#121212" />
                </radialGradient>
              </defs>

              <text
                x="150"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="26"
                fontWeight="bold"
                className="drop-shadow-sm"
              >
                $MPC
              </text>
              <text
                x="150"
                y="170"
                textAnchor="middle"
                fill="#a1a1aa"
                fontSize="14"
              >
                100M Supply
              </text>
            </svg>

            {/* Enhanced pulsing dots animation around the chart */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const x = Math.cos(angle) * 175 + 150;
              const y = Math.sin(angle) * 175 + 150;

              return (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full shadow-glow"
                  style={{ left: x, top: y }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              );
            })}
          </motion.div>

          {/* Tokenomics breakdown - Enhanced layout and visual hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
              >
                <div
                  className="mt-1.5 w-5 h-5 rounded-full flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}80`,
                  }}
                ></div>
                <div>
                  <p className="font-bold text-white flex items-baseline">
                    <span className="text-xl">{item.percentage}%</span>
                    <span className="mx-2 text-gray-500">—</span>
                    <span>{item.name}</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.name === "Community & Airdrop" &&
                      "Rewarding loyal supporters and early adopters."}
                    {item.name === "Seed Sale" &&
                      "Strategic partners, 12-mo lock + 24-mo vesting."}
                    {item.name === "Presale" &&
                      "Early community access, 6-mo lock + 12-mo vesting."}
                    {item.name === "Team & Advisors" &&
                      "12-mo lock + 24-mo vesting for alignment."}
                    {item.name === "Development" &&
                      "Fueling tech, marketing, and partnerships."}
                    {item.name === "Liquidity & Exchange" &&
                      "Ensuring price stability on DEX/CEX."}
                    {item.name === "Staking Rewards" &&
                      "Long-term incentives over 3-5 years."}
                    {item.name === "DAO/Governance" &&
                      "Empowering our community to shape the future."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced call-to-action with better visual appeal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/token/mpc"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
          >
            <span>Learn More About $MPC</span>
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
      </div>
    </section>
  );
};

export default TokenomicsSection;
