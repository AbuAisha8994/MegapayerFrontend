import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const DEXComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Countdown timer for launch date
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown
  useEffect(() => {
    const launchDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000); // 60 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <Layout>
      <Head>
        <title>Coming Soon | Multi-Chain DEX | Megapayer</title>
        <meta
          name="description"
          content="Megapayer's Multi-Chain DEX platform is coming soon! Sign up to be notified when our cross-chain trading features launch."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-4">
          {/* Header with DEX icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-purple-500"
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
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              Multi-Chain DEX
              <span className="block text-3xl md:text-4xl mt-2 text-gradient">
                Coming Soon
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full my-6"></div>

            <p className="text-xl text-gray-300 text-center max-w-2xl">
              Our revolutionary cross-chain decentralized exchange platform is
              under development. Get ready for seamless trading across all
              blockchains with enhanced liquidity and security.
            </p>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="bg-dark/50 backdrop-blur-md border border-purple-500/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.days}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Days
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-purple-500/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.hours}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Hours
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-purple-500/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.minutes}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Minutes
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-purple-500/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.seconds}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Seconds
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="bg-dark/30 backdrop-blur-sm border border-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
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
              <h3 className="text-lg font-semibold mb-2">Cross-Chain Swaps</h3>
              <p className="text-gray-400 text-sm">
                Trade seamlessly between multiple blockchains without
                third-party bridges.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deep Liquidity</h3>
              <p className="text-gray-400 text-sm">
                Access aggregated liquidity from multiple DEXs across different
                blockchains.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
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
              <h3 className="text-lg font-semibold mb-2">Non-Custodial</h3>
              <p className="text-gray-400 text-sm">
                Trade with complete control of your assets and private keys.
              </p>
            </div>
          </motion.div>

          {/* Signup form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-dark/40 backdrop-blur-md rounded-xl border border-white/10 p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Get Early Access
                  </h3>
                  <p className="text-gray-300 mb-4 text-center">
                    Be the first to know when our DEX and tutorials launch.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        "Notify Me"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-500/20 rounded-full mb-6">
                    <svg
                      className="w-8 h-8 text-purple-500"
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
                  <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                  <p className="text-gray-300">
                    We'll notify you when our DEX platform launches.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <Link
              href="/dex"
              className="text-purple-400 hover:text-white transition-colors inline-flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
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
              Back to DEX Overview
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DEXComingSoonPage;
