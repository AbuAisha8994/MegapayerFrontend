import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Animated feature box component
type FeatureBoxProps = {
  title: string;
  children: React.ReactNode;
  delay?: number;
};

const FeatureBox = ({ title, children, delay = 0 }: FeatureBoxProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
};

// Check mark list item component
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start mb-4">
    <div className="shrink-0 mt-1 mr-3">
      <div className="p-1 bg-primary/20 rounded-full">
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
    </div>
    <span className="text-gray-300">{children}</span>
  </div>
);

const MPCTokenPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <Layout>
      <Head>
        <title>MPC Token | Megapayer Cryptocurrency</title>
        <meta
          name="description"
          content="MPC (Megapayer Coin) is a high-efficiency digital asset designed for secure value storage, fast transactions, and scalable utility within modern digital economies."
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient">$MPC</span> Token
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              A high-efficiency digital asset designed for secure value storage,
              fast transactions, and scalable utility within modern digital
              economies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/presale"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Join MPC Presale
              </Link>
              <a
                href="#tokenomics"
                className="px-6 py-3 bg-dark/50 border border-white/10 text-white rounded-lg hover:bg-dark/70 transition-all duration-300"
              >
                View Tokenomics
              </a>
            </div>
          </motion.div>

          {/* Animated MPC Token Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 relative max-w-lg mx-auto"
          >
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
              <div className="absolute inset-8 rounded-full bg-dark flex items-center justify-center text-4xl font-bold text-white">
                MPC
              </div>

              {/* Orbiting dots */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const x = Math.cos(angle) * 80;
                const y = Math.sin(angle) * 80;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: "calc(50% + " + x + "px)",
                      top: "calc(50% + " + y + "px)",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What is MPC Token */}
            <FeatureBox title="What is MPC Token?" delay={0.1}>
              <p className="mb-4">
                MPC (Megapayer Coin) is more than just a cryptocurrency. It's
                positioned as a reliable payment method and investment asset
                that bridges the gap between usability and long-term value.
              </p>
              <p>
                Designed to support both everyday usage and long-term holding,
                MPC combines the best aspects of digital currencies into a
                versatile tool for any digital portfolio.
              </p>
            </FeatureBox>

            {/* Purpose and Utility */}
            <FeatureBox title="Purpose and Utility" delay={0.2}>
              <p className="mb-4">
                The core purpose of MPC is to enable seamless, low-cost, and
                instant value transfers between users, businesses, and
                institutions.
              </p>
              <div className="mt-4 space-y-2">
                <CheckItem>
                  <span className="font-bold">Store of Value:</span> Designed to
                  retain value over time, ideal for long-term investors.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Payment Method:</span> Ultra-fast
                  confirmation and low fees make it suitable for daily
                  transactions.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Peer-to-Peer Transactions:</span>{" "}
                  Enables secure, direct, and transparent digital exchanges.
                </CheckItem>
                <CheckItem>
                  <span className="font-bold">Investment Vehicle:</span>{" "}
                  Carefully structured tokenomics offer strong growth potential.
                </CheckItem>
              </div>
            </FeatureBox>

            {/* Supply & Tokenomics */}
            <FeatureBox title="Supply & Tokenomics" delay={0.3}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    100,000,000
                  </div>
                  <div className="text-gray-400">Total fixed supply</div>
                </div>
              </div>

              <p className="mb-4">
                MPC has a fixed total supply of 100 million tokens, ensuring
                scarcity and supporting a deflationary model. No additional
                tokens will ever be minted, making MPC a truly finite digital
                asset.
              </p>
              <p>
                The release schedule is strategically planned to maintain price
                stability, protect early adopters, and gradually open access to
                new participants.
              </p>
            </FeatureBox>

            {/* Transparency & Accessibility */}
            <FeatureBox title="Transparency & Accessibility" delay={0.4}>
              <p className="mb-4">
                Every MPC transaction is recorded on-chain, offering full
                transparency and traceability. The token can be accessed via
                user-friendly wallets and integrated into various platforms with
                ease.
              </p>
              <p>
                No third parties are required—transactions are conducted
                securely and autonomously. This simplicity makes MPC an ideal
                starting point for users who are new to digital assets, while
                also providing the technical reliability demanded by seasoned
                investors.
              </p>
            </FeatureBox>
          </div>

          {/* Value Proposition */}
          <div className="mt-16" ref={sectionRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Value Proposition &{" "}
                <span className="text-gradient">Growth Potential</span>
              </h2>
              <p className="text-xl text-gray-300">
                MPC is not built for short-term speculation, but for long-term
                digital value creation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fixed Supply</h3>
                  <p className="text-gray-400">
                    Helps protect against inflation and maintains scarcity.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
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
                  </div>
                  <h3 className="font-bold text-lg mb-2">Low Fees</h3>
                  <p className="text-gray-400">
                    Enables cost-efficient transactions at scale.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fast Settlement</h3>
                  <p className="text-gray-400">
                    Instant confirmation for time-sensitive transfers.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Security</h3>
                  <p className="text-gray-400">
                    Encrypted and verifiable by blockchain technology.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">User Friendly</h3>
                  <p className="text-gray-400">
                    Easily integrated into mobile and desktop wallets.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Investor-Oriented</h3>
                  <p className="text-gray-400">
                    Designed with sustainability and long-term value in mind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tokenomics Section with ID for linking */}
          <div id="tokenomics" className="mt-24 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MPC <span className="text-gradient">Tokenomics</span>
              </h2>
              <p className="text-xl text-gray-300">
                The structured vesting model ensures a balanced token flow,
                while maintaining investor confidence.
              </p>
            </motion.div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* Simple pie chart representation */}
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-t-[#4F46E5] border-r-[#10B981] border-b-[#F59E0B] border-l-[#8B5CF6] animate-spin-slow opacity-70"></div>
                    <div className="absolute inset-8 rounded-full bg-dark flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          100M
                        </div>
                        <div className="text-sm text-gray-400">
                          Total Supply
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#4F46E5] mr-2"></div>
                        <span>Community & Airdrop</span>
                      </div>
                      <span className="font-bold">10%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#10B981] mr-2"></div>
                        <span>Seed Sale</span>
                      </div>
                      <span className="font-bold">15%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#F59E0B] mr-2"></div>
                        <span>Presale</span>
                      </div>
                      <span className="font-bold">15%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#8B5CF6] mr-2"></div>
                        <span>Team & Advisors</span>
                      </div>
                      <span className="font-bold">10%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#EC4899] mr-2"></div>
                        <span>Development</span>
                      </div>
                      <span className="font-bold">15%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#0EA5E9] mr-2"></div>
                        <span>Liquidity & Exchange</span>
                      </div>
                      <span className="font-bold">20%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#F97316] mr-2"></div>
                        <span>Staking Rewards</span>
                      </div>
                      <span className="font-bold">10%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#14B8A6] mr-2"></div>
                        <span>DAO/Governance</span>
                      </div>
                      <span className="font-bold">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-10 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join the $MPC Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience a digital asset designed for genuine utility, with
              strong fundamentals and limited supply.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/presale"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Participate in Presale
              </Link>
              <Link
                href="/whitepaper"
                className="px-6 py-3 bg-dark/50 border border-white/10 text-white rounded-lg hover:bg-dark/70 transition-all duration-300"
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

export default MPCTokenPage;
