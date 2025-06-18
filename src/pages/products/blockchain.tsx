import Head from "next/head";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Animated blockchain component
const BlockchainAnimation = () => {
  return (
    <>
      {/* Create hexagonal chain structure */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[i * 0.7 - 2.5, Math.sin(i * 0.7) * 0.3, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.1]} />
          <meshStandardMaterial
            color={
              i % 3 === 0 ? "#4F46E5" : i % 3 === 1 ? "#8B5CF6" : "#10B981"
            }
            wireframe={true}
          />
          <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial
              color={
                i % 3 === 0 ? "#4F46E5" : i % 3 === 1 ? "#8B5CF6" : "#10B981"
              }
              emissive={
                i % 3 === 0 ? "#4F46E5" : i % 3 === 1 ? "#8B5CF6" : "#10B981"
              }
              emissiveIntensity={0.5}
            />
          </mesh>
        </mesh>
      ))}

      {/* Add connections between blocks */}
      {[...Array(7)].map((_, i) => (
        <mesh
          key={`connection-${i}`}
          position={[
            i * 0.7 - 2.15,
            Math.sin(i * 0.7) * 0.3 + Math.sin((i + 1) * 0.7) * 0.15,
            0,
          ]}
        >
          <boxGeometry
            args={[0.1, 0.05, 0.05]}
            rotation={[
              0,
              0,
              Math.atan2(
                Math.sin((i + 1) * 0.7) * 0.3 - Math.sin(i * 0.7) * 0.3,
                0.7
              ),
            ]}
          />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </>
  );
};

const BlockchainPage = () => {
  const featuresRef = useRef(null);
  const consensusRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isConsensusInView = useInView(consensusRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Layout>
      <Head>
        <title>Megapayer Blockchain | Shared Proof of Stake</title>
        <meta
          name="description"
          content="Megapayer's high-performance blockchain featuring Shared Proof of Stake consensus, smart contracts, and cross-chain interoperability."
        />
      </Head>

      <section className="relative min-h-screen pt-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(79, 70, 229, 0.15), transparent 35%), 
                      radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.15), transparent 35%), 
                      linear-gradient(to bottom, rgba(10, 10, 20, 0.8), rgb(5, 5, 15))`,
          }}
        ></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="inline-block text-sm uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-primary/20 text-primary">
                Megapayer Ecosystem
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Megapayer Blockchain
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
                Shared Proof of Stake Consensus
              </p>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Our high-performance blockchain features a unique Shared Proof
                of Stake consensus mechanism, delivering superior transaction
                throughput with minimum energy consumption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#details"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Learn More
                </a>
                <Link
                  href="/whitepaper/blockchain"
                  className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Read Whitepaper
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-[500px]"
            >
              <div className="w-full h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <OrbitControls enableZoom={false} autoRotate={true} />
                  <BlockchainAnimation />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next-Generation{" "}
              <span className="text-gradient">Blockchain Technology</span>
            </h2>
            <p className="text-xl text-gray-300">
              Built for speed, security, and scalability with innovative
              features designed for the future of decentralized finance and
              applications.
            </p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">High Throughput</h3>
              <p className="text-gray-300">
                Process up to 10,000 transactions per second with sub-second
                finality for instant settlement of payments and trades.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Security</h3>
              <p className="text-gray-300">
                Multi-layered security architecture with slash penalties and
                distributed validation nodes protecting against attacks.
              </p>
            </div>

            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Cross-Chain Compatibility
              </h3>
              <p className="text-gray-300">
                Seamlessly connect with all major blockchains through our native
                bridge protocol for unified liquidity and interoperability.
              </p>
            </div>
          </motion.div>

          {/* Consensus Mechanism Section */}
          <motion.div
            ref={consensusRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isConsensusInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 p-8">
              <h3 className="text-2xl font-bold mb-6">
                Shared Proof of Stake Consensus
              </h3>
              <p className="text-gray-300 mb-6">
                Our unique consensus mechanism revolutionizes blockchain
                validation by allowing stake sharing between validators and
                delegators, maximizing decentralization while minimizing energy
                consumption.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    Multi-level validation for enhanced security and resilience
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    99% less energy consumption than Proof of Work systems
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    Dynamic validator selection preventing centralization
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">
                    Automatic reward distribution to all participating nodes
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 backdrop-blur-md p-8 rounded-xl border border-primary/20 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">
                Smart Contract Capabilities
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      EVM Compatibility
                    </h4>
                    <p className="text-gray-300">
                      Full support for Ethereum Virtual Machine contracts and
                      tooling for seamless migration from Ethereum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      WebAssembly Support
                    </h4>
                    <p className="text-gray-300">
                      Next-generation WASM contracts with higher performance and
                      multiple programming language support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      AI Integration
                    </h4>
                    <p className="text-gray-300">
                      Built-in AI modules for secure oracle functions and
                      advanced on-chain data processing capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Developer Tooling
                    </h4>
                    <p className="text-gray-300">
                      Comprehensive SDK, testing framework, and development
                      environments for all major programming languages.
                    </p>
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
              Ready to Build on Megapayer?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the next generation of blockchain developers and create
              scalable, secure applications on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers/getting-started"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Start Building
              </Link>
              <Link
                href="/whitepaper/blockchain"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Technical Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlockchainPage;
