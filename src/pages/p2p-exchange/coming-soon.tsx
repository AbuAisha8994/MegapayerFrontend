import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const P2PComingSoonPage = () => {
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
    const launchDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days from now

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
        <title>Coming Soon | P2P Exchange | Megapayer</title>
        <meta
          name="description"
          content="Megapayer's P2P Exchange platform is coming soon! Be the first to know when our trustless trading features launch."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-4">
          {/* Header with icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-primary"
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
              P2P Exchange
              <span className="block text-3xl md:text-4xl mt-2 text-gradient">
                Coming Soon
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full my-6"></div>

            <p className="text-xl text-gray-300 text-center max-w-2xl">
              We're building a revolutionary peer-to-peer exchange platform that
              will enable trustless trading with enhanced security and privacy.
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
              <div className="bg-dark/50 backdrop-blur-md border border-primary/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.days}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Days
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-primary/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.hours}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Hours
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-primary/20 rounded-lg p-4 w-20 md:w-28 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countdown.minutes}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                  Minutes
                </div>
              </div>
              <div className="bg-dark/50 backdrop-blur-md border border-primary/20 rounded-lg p-4 w-20 md:w-28 text-center">
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
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Smart Contract Escrow
              </h3>
              <p className="text-gray-400 text-sm">
                Trustless trading with automated escrow to protect both buyers
                and sellers.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Protection</h3>
              <p className="text-gray-400 text-sm">
                Trade with enhanced privacy features and optional encrypted
                messaging.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-sm border border-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Access</h3>
              <p className="text-gray-400 text-sm">
                Trade with anyone, anywhere in the world without geographic
                restrictions.
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
                    Be the first to know when our P2P Exchange launches.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 bg-dark/60 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary py-3"
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
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/20 rounded-full mb-6">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                  <p className="text-gray-300">
                    We'll notify you when our P2P Exchange launches.
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
              href="/p2p-exchange"
              className="text-primary hover:text-white transition-colors inline-flex items-center"
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
              Back to P2P Exchange
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default P2PComingSoonPage;
