import { useRef } from "react";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import P2PAnimation from "@/components/animations/P2PAnimation";
import Link from "next/link";

const P2PExchangePage = () => {
  const p2pFeaturesRef = useRef(null);

  const isP2PFeaturesInView = useInView(p2pFeaturesRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Layout>
      <Head>
        <title>Megapayer P2P Exchange | Peer-to-Peer Trading Platform</title>
        <meta
          name="description"
          content="Experience direct peer-to-peer trading with Megapayer's P2P Exchange. Our platform provides smart contract escrow protection and supports hundreds of payment methods worldwide."
        />
      </Head>

      <ProductHero
        title="P2P Exchange"
        subtitle="Human-to-Human Trading Platform"
        description="Connect directly with other traders worldwide. Our P2P platform facilitates secure, trustless peer-to-peer transactions with built-in escrow protection and dispute resolution."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate={false} />
              <P2PAnimation />
            </Canvas>
          </div>
        }
        color="#f97316"
        secondaryColor="#f59e0b"
      />

      {/* P2P Exchange Section */}
      <section id="p2p-exchange" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/20 mb-6">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-orange-500 font-medium">
                Peer-to-Peer Platform
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              P2P Exchange:{" "}
              <span className="text-orange-500">Human-to-Human Trading</span>
            </h2>
            <p className="text-xl text-gray-300">
              Connect directly with other traders worldwide. Our P2P platform
              facilitates secure, trustless peer-to-peer transactions with
              built-in escrow protection and dispute resolution.
            </p>
          </motion.div>

          <motion.div
            ref={p2pFeaturesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isP2PFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Direct Negotiation</h3>
              <p className="text-gray-300">
                Set your own prices and terms. Negotiate directly with
                counterparts to find the best deals that work for both parties.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
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
              <h3 className="text-xl font-bold mb-4">Smart Contract Escrow</h3>
              <p className="text-gray-300">
                Automated escrow system holds funds securely until both parties
                fulfill their obligations. No counterparty risk.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 border border-orange-500/10">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrated Chat System</h3>
              <p className="text-gray-300">
                Communicate securely with trading partners through encrypted
                messaging. Build trust and clarify terms before trading.
              </p>
            </div>
          </motion.div>

          {/* P2P How it Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-orange-500/5 backdrop-blur-md p-8 rounded-xl border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                How P2P Trading Works
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Post or Browse Offers
                    </h4>
                    <p className="text-gray-300">
                      Create your own trading advertisement or browse existing
                      offers from other users worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Initiate Trade
                    </h4>
                    <p className="text-gray-300">
                      Start a trade request and automatically lock the seller's
                      cryptocurrency in smart contract escrow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Make Payment</h4>
                    <p className="text-gray-300">
                      Send payment using your preferred method (bank transfer,
                      cash, digital payment, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold text-orange-500">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold mb-2">
                      Release & Complete
                    </h4>
                    <p className="text-gray-300">
                      After payment confirmation, cryptocurrency is
                      automatically released from escrow to the buyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Global Payment Methods
              </h3>
              <p className="text-gray-300 mb-6">
                Trade using hundreds of payment methods across different
                countries and regions. Our P2P platform supports local payment
                systems worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Digital Payments</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• PayPal</li>
                    <li>• Wise (TransferWise)</li>
                    <li>• Revolut</li>
                    <li>• Alipay</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Bank Transfers</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• SEPA</li>
                    <li>• ACH</li>
                    <li>• Wire Transfer</li>
                    <li>• Local Banks</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Mobile Money</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• M-Pesa</li>
                    <li>• GCash</li>
                    <li>• bKash</li>
                    <li>• Orange Money</li>
                  </ul>
                </div>
                <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-2">Gift Cards</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Amazon</li>
                    <li>• iTunes</li>
                    <li>• Google Play</li>
                    <li>• Steam</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Start P2P Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of users already trading on Megapayer's P2P
              Exchange platform.
            </p>
            <div className="flex justify-center">
              <Link
                href="/p2p-exchange/coming-soon"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Try P2P Exchange
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default P2PExchangePage;
