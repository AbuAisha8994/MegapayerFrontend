import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import Stats from "@/components/common/Stats";
import StablecoinAnimation from "@/components/animations/StablecoinAnimation";

const StablecoinPage = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>Megapayer Stablecoin | Fast, Low-Cost Global Transactions</title>
        <meta
          name="description"
          content="Megapayer's fully collateralized stablecoin enables fast, low-cost, borderless transactions with full decentralization."
        />
      </Head>

      <ProductHero
        title="Megapayer Stablecoin"
        subtitle="Borderless Digital Currency"
        description="Our fully-collateralized stablecoin provides a reliable medium of exchange, allowing for instant, low-cost transactions across the globe without traditional banking limitations."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate={false} />
              <StablecoinAnimation />
            </Canvas>
          </div>
        }
      />

      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The Future of{" "}
              <span className="text-gradient">Digital Currency</span>
            </h2>
            <p className="text-xl text-gray-300">
              Megapayer Stablecoin (MUSD) maintains a stable 1:1 value with the
              US Dollar, while offering the benefits of blockchain technology:
              security, transparency, and freedom from traditional banking
              constraints.
            </p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">100% Collateralized</h3>
              <p className="text-gray-300">
                Every MUSD is backed 1:1 by a reserve of assets, ensuring
                complete stability and confidence.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Transfers</h3>
              <p className="text-gray-300">
                Send money anywhere in the world within seconds, 24/7, with no
                waiting for bank approvals.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Minimal Fees</h3>
              <p className="text-gray-300">
                Transaction costs are a fraction of traditional bank transfers
                or credit card processing fees.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-primary/5 backdrop-blur-md p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">
                Global Payment Solution
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Borderless Transactions
                    </h4>
                    <p className="text-gray-300">
                      Send value across borders without the restrictions of
                      traditional banking systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Protection from Inflation
                    </h4>
                    <p className="text-gray-300">
                      Store value in a currency that maintains purchasing power
                      regardless of local economic conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Accessibility
                    </h4>
                    <p className="text-gray-300">
                      Bring financial services to the unbanked and underbanked
                      populations worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Business Integration
                    </h4>
                    <p className="text-gray-300">
                      Accept payments from customers anywhere in the world with
                      simple API integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <p className="text-gray-300 mb-6">
                Unlike algorithmic stablecoins that rely on complex mechanisms,
                Megapayer Stablecoin maintains its stability through full
                collateralization.
              </p>

              <ul className="space-y-4">
                <li className="bg-dark/30 p-4 rounded-lg flex items-start">
                  <div className="rounded-full bg-secondary/20 p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Asset-Backed Reserve
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Each MUSD is backed by USD or equivalent stable assets
                      held in our transparent reserve
                    </p>
                  </div>
                </li>

                <li className="bg-dark/30 p-4 rounded-lg flex items-start">
                  <div className="rounded-full bg-secondary/20 p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Regular Audits</h4>
                    <p className="text-gray-300 text-sm">
                      Transparent audits conducted by reputable firms verify the
                      reserves backing MUSD
                    </p>
                  </div>
                </li>

                <li className="bg-dark/30 p-4 rounded-lg flex items-start">
                  <div className="rounded-full bg-secondary/20 p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Security First</h4>
                    <p className="text-gray-300 text-sm">
                      Multi-signature security, time-lock protocols, and
                      continuous security monitoring
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-xl border border-white/10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Enterprise Ready for 2025
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    The Megapayer Stablecoin is built for enterprise use cases,
                    offering features specifically designed for businesses that
                    need reliable, fast, and compliant payment solutions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-300">
                        High-volume transaction support
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-300">
                        Business compliance reporting tools
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-300">
                        Automated payment scheduling
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-300">
                        Advanced API integrations
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/enterprise/contact"
                    className="btn-primary inline-flex items-center"
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Enterprise Solutions
                  </Link>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-dark/40 backdrop-blur-lg p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      2025 Key Statistics
                    </h3>

                    <Stats product="stablecoin" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-dark to-dark/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Use Megapayer Stablecoin?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Experience the future of global payments with our stable, secure,
              and fast digital currency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/coming-soon?product=Megapayer%20Stablecoin&returnUrl=/stablecoin"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Started
              </a>
              <Link
                href="/whitepaper/stablecoin"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
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

export default StablecoinPage;
