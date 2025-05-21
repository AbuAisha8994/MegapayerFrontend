import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Email submitted:", email);
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <Layout>
      <Head>
        <title>Coming Soon | Megapayer Ecosystem Launch 2025</title>
        <meta
          name="description"
          content="The Megapayer ecosystem is launching soon. Join our waitlist to be the first to experience the future of blockchain technology."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block mb-8">
              <div className="text-7xl md:text-9xl font-black text-white opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Coming Soon
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              The Future of Blockchain Technology is Almost Here
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're putting the finishing touches on the complete Megapayer
              ecosystem. Join our waitlist to be among the first to experience
              our revolutionary platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mx-auto mb-16"
          >
            <div className="bg-dark/40 backdrop-blur-md rounded-xl border border-white/10 p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    Get Early Access
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Be the first to know when we launch. No spam, just important
                    updates.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-dark/60 border border-white/10 focus:outline-none focus:border-primary transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn-primary whitespace-nowrap ${
                        loading ? "opacity-70" : ""
                      }`}
                    >
                      {loading ? (
                        <span className="flex items-center">
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
                        </span>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                    <svg
                      className="w-8 h-8"
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
                  <h3 className="text-xl font-bold mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for your interest! We'll notify you when we
                    launch.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-center">
                Join Alpha Testing
              </h3>
              <p className="text-gray-400 text-center text-sm">
                Early access members will be invited to participate in our alpha
                testing program.
              </p>
            </div>

            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-center">
                Exclusive Rewards
              </h3>
              <p className="text-gray-400 text-center text-sm">
                Early adopters will receive exclusive tokens and benefits when
                the platform launches.
              </p>
            </div>

            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-center">
                Shape the Product
              </h3>
              <p className="text-gray-400 text-center text-sm">
                Provide feedback that directly influences our development
                roadmap.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <h3 className="text-xl font-semibold mb-6">
              Curious about what we're building?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/whitepapers" className="btn-secondary">
                Read Our Whitepapers
              </Link>
              <Link
                href="/"
                className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Homepage
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoonPage;
