import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const AppPage = () => {
  return (
    <>
      <Head>
        <title>Megapayer App - Coming Soon</title>
        <meta name="description" content="Megapayer App - Coming Soon" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-dark to-black flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-10 bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-30 blur-3xl rounded-full"></div>
              <div className="relative text-6xl font-black text-white">M</div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Coming Soon
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're working hard to bring you the future of decentralized finance.
            The Megapayer App will be launched soon with groundbreaking
            features.
          </motion.p>

          {/* Back button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 inline-flex items-center"
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppPage;
