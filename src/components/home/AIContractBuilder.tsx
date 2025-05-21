import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AIContractBuilder = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  const fullText =
    "Create a staking contract with 10% APY and 30-day lock period";

  // Type-writer effect for terminal
  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Show AI response after typing is complete
        setTimeout(() => setShowResponse(true), 500);
      }
    }, 70);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark to-dark/90 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Code pattern background */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-full text-primary mb-6">
            Featured Capability
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered{" "}
            <span className="text-gradient">Smart Contract Builder</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No code? No problem. Just describe what you need — let our AI build
            it for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-1.5 bg-primary/20 rounded-full mt-1.5 mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Natural Language to Solidity
                  </h3>
                  <p className="text-gray-300">
                    Convert plain English descriptions into production-ready
                    smart contracts with secure, audited code patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-1.5 bg-primary/20 rounded-full mt-1.5 mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Auto Security Checks
                  </h3>
                  <p className="text-gray-300">
                    Every contract is automatically analyzed for common
                    vulnerabilities and optimized for gas efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-1.5 bg-primary/20 rounded-full mt-1.5 mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    One-Click Deployment
                  </h3>
                  <p className="text-gray-300">
                    Deploy your AI-generated contracts to Megapayer or any
                    EVM-compatible blockchain with a single click.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/build/ai-contracts"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <span>Start Building with AI</span>
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

          {/* Terminal visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-xl bg-primary/5 blur-xl transform scale-105"></div>

            <div className="relative bg-dark/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-dark/80 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="mx-auto text-gray-400 text-sm">
                  AI Smart Contract Builder
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex items-center text-gray-400 mb-4">
                  <span className="text-primary-light mr-2">
                    megapayer@ai:~$
                  </span>
                  <span className="text-green-400">ai-contract</span>
                  <span className="text-white"> build</span>
                </div>

                <div className="flex items-center text-gray-200 mb-6">
                  <span className="mr-2 text-primary-light">»</span>
                  <span>{displayedText}</span>
                  <span
                    className={`inline-block w-2.5 h-5 bg-primary ml-0.5 ${
                      cursorVisible ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showResponse ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-blue-400 mb-2">
                    » Analyzing requirements...
                  </div>
                  <div className="text-blue-400 mb-2">
                    » Generating smart contract...
                  </div>
                  <div className="bg-dark/50 border border-white/10 p-4 rounded-lg my-3 text-gray-300 overflow-auto max-h-64">
                    <div className="text-purple-400">
                      // SPDX-License-Identifier: MIT
                    </div>
                    <div className="text-purple-400">
                      // Generated by Megapayer AI
                    </div>
                    <div className="text-primary-light">pragma</div>
                    <div className="text-white"> solidity ^0.8.17;</div>
                    <div className="mt-2">
                      <span className="text-primary-light">contract</span>
                      <span className="text-white"> StakingContract {`{`}</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      // State variables
                    </div>
                    <div className="pl-4">
                      <span className="text-primary-light">uint256</span>{" "}
                      <span className="text-white">public</span>{" "}
                      <span className="text-blue-300">constant</span>{" "}
                      <span className="text-white">APY = 10;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-primary-light">uint256</span>{" "}
                      <span className="text-white">public</span>{" "}
                      <span className="text-blue-300">constant</span>{" "}
                      <span className="text-white">LOCK_PERIOD = 30 days;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">
                        // Additional code...
                      </span>
                    </div>
                    <div className="text-white">{`}`}</div>
                  </div>
                  <div className="text-green-400 mt-4">
                    ✓ Contract successfully generated!
                  </div>
                  <div className="text-gray-400 mt-2">
                    Ready for deployment on Megapayer Network
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Visual flourishes */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary/30 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-secondary/30 rounded-full filter blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIContractBuilder;
