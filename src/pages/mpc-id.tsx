import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import DigitalIdAnimation from "@/components/animations/DigitalIdAnimation";

const MpcIDPage = () => {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const technicalDetailsRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const isTechnicalInView = useInView(technicalDetailsRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <Layout>
      <Head>
        <title>MPC ID | Self-Sovereign Digital Identity Solution</title>
        <meta
          name="description"
          content="MPC ID is a blockchain-based digital identity solution that gives users complete control over their personal data while enabling secure, verifiable credentials."
        />
      </Head>

      <ProductHero
        title="MPC ID"
        subtitle="Self-Sovereign Digital Identity"
        description="A revolutionary digital identity system that gives users complete control over their personal data, enabling secure verification without compromising privacy."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />
              <DigitalIdAnimation />
            </Canvas>
          </div>
        }
        color="#10b981"
        secondaryColor="#059669"
      />

      {/* Key Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Digital Identity <span className="text-gradient">Reimagined</span>
            </h2>
            <p className="text-xl text-gray-300">
              MPC ID redefines how identity works in the digital world, giving
              control back to users while enabling secure verification for
              services and organizations.
            </p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 21H5v-6l1.243-1.243A6 6 0 1120 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Self-Sovereign Identity
              </h3>
              <p className="text-gray-300">
                Users have complete ownership and control over their personal
                data, choosing exactly what information to share and with whom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Verifiable Credentials
              </h3>
              <p className="text-gray-300">
                Cryptographically secure credentials that can be verified
                without revealing unnecessary personal information, enabling
                privacy-preserving verification.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Blockchain Secured
              </h3>
              <p className="text-gray-300">
                Built on Megapayer blockchain technology for enhanced security,
                immutability, and transparent verification without centralized
                control.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-dark" ref={benefitsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12 pr-0 lg:pr-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">Privacy-First</span> Identity
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  MPC ID uses zero-knowledge proofs and selective disclosure to
                  enable verification without revealing entire identities or
                  unnecessary data.
                </p>

                <div className="border border-green-500/20 rounded-xl p-6 bg-dark/50 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-500">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1.5">
                        <svg
                          className="w-4 h-4 text-green-500"
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
                        Eliminate identity theft and fraudulent impersonation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1.5">
                        <svg
                          className="w-4 h-4 text-green-500"
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
                        Simplify KYC/AML processes while enhancing privacy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1.5">
                        <svg
                          className="w-4 h-4 text-green-500"
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
                        Create tamper-proof audit trails for compliance purposes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-br from-dark/80 to-green-500/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                    Biometric Protection
                  </h4>
                  <p className="text-gray-300">
                    Secure your identity with advanced biometric verification
                    that never leaves your device, using cryptographic proof
                    instead of raw biometric data.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-dark/80 to-green-500/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Cross-Platform Verification
                  </h4>
                  <p className="text-gray-300">
                    Use your digital identity seamlessly across web, mobile, and
                    physical environments with one unified identity solution for
                    all your needs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-dark/80 to-green-500/5 p-6 rounded-xl border border-white/10 shadow-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Zero-Knowledge Proofs
                  </h4>
                  <p className="text-gray-300">
                    Prove attributes about yourself without revealing the actual
                    data. Verify age without showing birthdate, confirm income
                    level without disclosing exact salary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section
        id="technical"
        className="py-24 bg-gradient-to-b from-dark/95 to-dark"
        ref={technicalDetailsRef}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTechnicalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Technical <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-gray-300">
              MPC ID is built on sophisticated cryptographic techniques that
              ensure both security and privacy while maintaining ease of use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTechnicalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark/50 rounded-xl overflow-hidden border border-white/10"
            >
              <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-6">
                <h3 className="text-2xl font-bold mb-4">How MPC ID Works</h3>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-full mt-1 mr-4">
                    <span className="text-lg font-bold text-green-500">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Identity Creation
                    </h4>
                    <p className="text-gray-300">
                      Users generate a cryptographic key pair that establishes
                      their digital identity. The private key never leaves the
                      user's device, ensuring complete control.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-full mt-1 mr-4">
                    <span className="text-lg font-bold text-green-500">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Credential Issuance
                    </h4>
                    <p className="text-gray-300">
                      Trusted authorities issue verifiable credentials to the
                      user's identity. These credentials are cryptographically
                      signed and can't be altered or falsified.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-full mt-1 mr-4">
                    <span className="text-lg font-bold text-green-500">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Selective Disclosure
                    </h4>
                    <p className="text-gray-300">
                      When verification is needed, users can choose exactly
                      which parts of their credentials to share, revealing only
                      the necessary information for the specific interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-green-500/20 rounded-full mt-1 mr-4">
                    <span className="text-lg font-bold text-green-500">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Verification</h4>
                    <p className="text-gray-300">
                      Verifiers can confirm the authenticity of credentials
                      without contacting the original issuer, using
                      blockchain-based verification that protects user privacy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTechnicalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Use Cases</h3>

                <div className="space-y-5">
                  <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      Financial Services
                    </h4>
                    <p className="text-gray-300">
                      Streamline KYC processes while minimizing data exposure.
                      Prove creditworthiness without sharing your entire
                      financial history.
                    </p>
                  </div>

                  <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                      Healthcare
                    </h4>
                    <p className="text-gray-300">
                      Secure medical records with patient-controlled access.
                      Share specific medical information with providers without
                      exposing your entire health history.
                    </p>
                  </div>

                  <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Professional Credentials
                    </h4>
                    <p className="text-gray-300">
                      Verify education, certifications, and work history
                      instantly without contacting previous institutions. Create
                      tamper-proof professional credentials.
                    </p>
                  </div>

                  <div className="bg-dark/50 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      E-commerce & Digital Services
                    </h4>
                    <p className="text-gray-300">
                      Single-sign on that maintains privacy across platforms.
                      Age verification without revealing birthdate. Subscription
                      credentials that can't be shared or stolen.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/70">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Take Control of Your Digital Identity?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the MPC ID ecosystem and experience the future of secure,
              private, and user-controlled digital identity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coming-soon/"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Integrate MPC ID
              </Link>
              <Link
                href="/whitepaper/mpc-id"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MpcIDPage;
