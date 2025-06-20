import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const DeveloperGettingStartedPage = () => {
  return (
    <Layout>
      <Head>
        <title>Developer Tools - Coming Soon | Megapayer</title>
        <meta
          name="description"
          content="Megapayer developer tools and SDK coming soon"
        />
      </Head>

      <div className="min-h-screen pt-32 flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          {/* Animated coming soon message */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-20 blur-3xl rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Developer Tools Coming Soon
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're working on creating powerful development tools to help you
            build on Megapayer Chain. Our SDK, API documentation, and developer
            portal will be launched soon.
          </motion.p>

          {/* Timeline */}
          <motion.div
            className="mb-12 bg-dark/40 backdrop-blur-md p-6 rounded-xl border border-white/10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Expected Release Timeline
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
              <div className="bg-dark/60 p-4 rounded-lg border border-primary/20">
                <div className="text-primary font-semibold mb-2">Q2 2025</div>
                <div className="text-white">Developer SDK Alpha Release</div>
              </div>
              <div className="bg-dark/60 p-4 rounded-lg border border-primary/20">
                <div className="text-primary font-semibold mb-2">Q3 2025</div>
                <div className="text-white">
                  Comlete Developer Portal Launch
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sign up for updates */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="/blockchain"
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white transition-all duration-300 inline-flex items-center"
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
              Back to Blockchain
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DeveloperGettingStartedPage;
