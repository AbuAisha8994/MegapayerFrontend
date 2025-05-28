import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const ComingSoonPage = () => {
  const router = useRouter();
  const { product, returnUrl } = router.query;

  // Get product name from query or use default
  const productName = typeof product === "string" ? product : "This Feature";

  // Reference date for countdown (3 months from now)
  const targetDate = useRef(new Date());
  targetDate.current.setMonth(targetDate.current.getMonth() + 3);

  // Countdown state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Email subscription
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.current.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would integrate with your email service
    console.log("Subscribed email:", email);
    setIsSubmitted(true);
    setError("");
  };

  return (
    <Layout>
      <Head>
        <title>Coming Soon | Megapayer</title>
        <meta
          name="description"
          content="This feature is coming soon to the Megapayer ecosystem. Sign up to be notified when it launches."
        />
      </Head>

      <section className="relative min-h-[80vh] flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          {/* Animated dots */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-radial from-dark/40 to-dark"
            style={{
              background:
                "radial-gradient(circle at center, rgba(15,23,42,0.4) 0%, rgb(15,23,42) 70%)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 mb-6">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-400 font-medium">Coming Soon</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                We're Building Something Amazing
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                <span className="text-white font-semibold">{productName}</span>{" "}
                is currently in development and will be launching soon. Sign up
                to be notified when we go live.
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16"
            >
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark/50 backdrop-blur-md border border-blue-500/20 rounded-xl p-4 md:p-6 text-center shadow-lg shadow-blue-500/5"
                >
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Email signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubscribe} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow px-6 py-4 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300"
                    >
                      Notify Me
                    </button>
                  </div>
                  {error && (
                    <div className="mt-2 text-red-400 text-sm">{error}</div>
                  )}
                </form>
              ) : (
                <div className="bg-blue-500/20 border border-blue-500/30 text-white p-6 rounded-lg mb-8">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-400 mr-3"
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
                    <span className="font-medium">
                      Thanks! We'll notify you when we launch.
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <Link
                  href={returnUrl ? returnUrl.toString() : "/"}
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
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
                  <span>
                    Return to {returnUrl ? "previous page" : "homepage"}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="py-16 bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're working hard to bring you these amazing features:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-dark/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
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
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Track transactions, blocks, and network metrics with millisecond
                accuracy as they happen.
              </p>
            </div>

            <div className="bg-dark/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Chain Support</h3>
              <p className="text-gray-400">
                Explore data across all major blockchains from a single, unified
                interface.
              </p>
            </div>

            <div className="bg-dark/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-blue-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
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
              </div>
              <h3 className="text-xl font-bold mb-2">Developer API</h3>
              <p className="text-gray-400">
                Integrate blockchain data directly into your applications with
                our comprehensive API.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComingSoonPage;
