import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const TokenomicsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Tokenomics data with colors
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

  // Calculate SVG coordinates for pie chart
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
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark/50 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Megapayer</span> Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building a fair, community-driven Web3 economy with $MPC.
            Here's how our 100M token supply is distributed:
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Pie Chart (SVG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-[300px] h-[300px]"
          >
            <svg width="300" height="300" viewBox="0 0 300 300">
              {pieSegments.map((segment, index) => (
                <motion.path
                  key={segment.name}
                  d={segment.path}
                  fill={segment.color}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="hover:opacity-90 transition-opacity cursor-pointer"
                  stroke="#121212"
                  strokeWidth="1"
                >
                  <title>{`${segment.name}: ${segment.percentage}%`}</title>
                </motion.path>
              ))}
              {/* Center circle for better appearance */}
              <circle cx="150" cy="150" r="60" fill="#121212" />
              <text
                x="150"
                y="140"
                textAnchor="middle"
                fill="white"
                fontSize="20"
                fontWeight="bold"
              >
                $MPC
              </text>
              <text
                x="150"
                y="165"
                textAnchor="middle"
                fill="#a1a1aa"
                fontSize="12"
              >
                100M Supply
              </text>
            </svg>

            {/* Pulsing dots animation around the chart */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const x = Math.cos(angle) * 170 + 150;
              const y = Math.sin(angle) * 170 + 150;

              return (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{ left: x, top: y }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              );
            })}
          </motion.div>

          {/* Tokenomics breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div
                  className="mt-1 w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <p className="font-bold text-white flex items-center">
                    <span>{item.percentage}%</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>{item.name}</span>
                  </p>
                  <p className="text-sm text-gray-400">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/token/mpc"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <span>Learn More About $MPC</span>
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
