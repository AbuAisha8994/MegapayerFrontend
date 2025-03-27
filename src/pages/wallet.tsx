import { useRef } from 'react';
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layout from '@/components/layout/Layout';
import ProductHero from '@/components/products/ProductHero';
import Stats from '@/components/common/Stats';
import WalletAnimation from '@/components/animations/WalletAnimation';

const WalletPage = () => {
  const featuresRef = useRef(null);
  const securityRef = useRef(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isSecurityInView = useInView(securityRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>Megapayer Universal Wallet | Multi-Chain Asset Management</title>
        <meta name="description" content="Megapayer's Universal Crypto Wallet supports all blockchains with self-custody and seamless multi-chain asset management." />
      </Head>

      <ProductHero 
        title="Universal Crypto Wallet"
        subtitle="Your Gateway to All Blockchains"
        description="Manage all your digital assets across every blockchain with our secure, non-custodial wallet. One wallet to rule them all in 2025 and beyond."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate={false} />
              <WalletAnimation />
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
            <h2 className="text-4xl font-bold mb-6">One Wallet for <span className="text-gradient">Every Blockchain</span></h2>
            <p className="text-xl text-gray-300">
              Megapayer's Universal Wallet eliminates the complexity of managing multiple wallets across different blockchains. 
              With a single secure interface, you can manage all your digital assets seamlessly in the 2025 crypto landscape.
            </p>
          </motion.div>
          
          <div className="mb-20">
            <Stats product="wallet" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Unified Key Management</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our Universal Key Derivation System (UKDS) generates blockchain-specific keys from a single master seed, 
                eliminating the need to manage multiple seed phrases while maintaining complete security isolation between chains.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">One Seed, All Blockchains</h4>
                    <p className="text-gray-300">A single 24-word seed phrase secures all your assets across every supported blockchain</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Military-Grade Encryption</h4>
                    <p className="text-gray-300">Advanced encryption with zero knowledge architecture ensures only you can access your assets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hardware Security</h4>
                    <p className="text-gray-300">Full compatibility with leading hardware wallets for cold storage of high-value assets</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <div className="relative overflow-hidden h-64 rounded-lg mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
                  <img 
                    src="/images/wallet.webp" 
                    alt="Megapayer Universal Wallet Interface" 
                    className="w-full h-full object-cover rounded-lg mix-blend-luminosity opacity-90"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Supported Blockchains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {['Megapayer', 'Bitcoin', 'Ethereum', 'Solana', 'Cardano', 'Avalanche', 'Cosmos', 'Polkadot', 'Near'].map((chain) => (
                    <div key={chain} className="px-3 py-2 bg-primary/10 text-center rounded-lg text-sm">
                      {chain}
                    </div>
                  ))}
                  <div className="px-3 py-2 bg-primary/5 text-center rounded-lg text-sm">
                    +38 more
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            ref={securityRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, staggerChildren: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade <span className="text-gradient">Security</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Self-Custody</h3>
                <p className="text-gray-300">
                  Your keys, your crypto. We never have access to your private keys or assets at any point.
                </p>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Biometric Authentication</h3>
                <p className="text-gray-300">
                  Face ID, Touch ID, and other biometric security measures provide convenient yet powerful protection.
                </p>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Signature Support</h3>
                <p className="text-gray-300">
                  Require multiple approvers for transactions, perfect for organizations and high-value accounts.
                </p>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">SOC 2 Certified</h3>
                <p className="text-gray-300">
                  Our security practices are independently audited and certified to meet SOC 2 Type II standards.
                </p>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Backup</h3>
                <p className="text-gray-300">
                  End-to-end encrypted cloud backups with optional social recovery for ultimate peace of mind.
                </p>
              </div>
              
              <div className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
                <p className="text-gray-300">
                  AI-powered monitoring identifies suspicious activity and alerts you to potential threats in real-time.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0 }}
            animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-xl border border-white/10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">Ready for 2025 and Beyond</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    The Megapayer Universal Wallet is designed to evolve with the blockchain ecosystem, 
                    supporting new protocols, standards, and innovations as they emerge. 
                    Our future-proof architecture means your wallet will never become obsolete.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Quantum-resistant cryptography ready</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Regular security updates and feature enhancements</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Ongoing blockchain protocol additions</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="p-1 bg-primary/20 rounded-full text-primary mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Regulatory compliance feature options</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="#"
                      className="btn-primary inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download the Wallet
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative h-full min-h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-48 w-48 rounded-full bg-primary/20 animate-pulse-slow"></div>
                    </div>
                    <img 
                      src="/images/wallet-devices.webp" 
                      alt="Megapayer Wallet on multiple devices" 
                      className="relative z-10 max-h-[320px] drop-shadow-2xl animate-float"
                    />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Started with Megapayer Universal Wallet</h2>
            <p className="text-xl text-gray-300 mb-10">
              Take control of your digital assets with our secure, multi-chain wallet solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                </svg>
                Android App
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05,20.28c-0.98,0.95-2.05,0.8-3.08,0.35c-1.09-0.46-2.09-0.48-3.24,0c-1.44,0.62-2.2,0.44-3.06-0.35 C2.79,15.25,3.51,7.59,8.42,7.31c1.33,0.07,2.25,0.78,3.13,0.8c1.2-0.11,2.09-0.89,3.33-0.92c1.14,0.03,2.13,0.36,2.92,0.92 c0.17,0.12,0.33,0.24,0.56,0.41c-1.42,0.84-2.35,2.21-2.21,4.39C16.29,15.38,17.43,18.07,17.05,20.28z M12.03,6.84 c-0.07-2.32,1.87-4.4,4.12-4.83C16.35,4.07,14.34,6.29,12.03,6.84z"/>
                </svg>
                iOS App
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Whitepaper
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WalletPage;
