import { useRef } from 'react';
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layout from '@/components/layout/Layout';
import ProductHero from '@/components/products/ProductHero';
import DEXAnimation from '@/components/animations/DEXAnimation';

const DEXPage = () => {
  const featuresRef = useRef(null);
  const securityRef = useRef(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isSecurityInView = useInView(securityRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>Megapayer DEX | Multi-Chain Decentralized Exchange</title>
        <meta name="description" content="Megapayer's Multi-Chain DEX provides seamless cross-chain trading with non-custodial security, letting you control your private keys." />
      </Head>

      <ProductHero 
        title="Multi-Chain Decentralized Exchange"
        subtitle="Seamless Cross-Chain Trading"
        description="Trade across multiple blockchains with Megapayer's DEX, offering high liquidity, low fees, and complete custody of your assets."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate={false} />
              <DEXAnimation />
            </Canvas>
          </div>
        }
        color="#8b5cf6"
        secondaryColor="#a78bfa"
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
            <h2 className="text-4xl font-bold mb-6">Trade Across <span className="text-primary">All Blockchains</span></h2>
            <p className="text-xl text-gray-300">
              Megapayer DEX breaks down the barriers between blockchains, allowing seamless asset transfers and trades without leaving our platform.
            </p>
          </motion.div>
          
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cross-Chain Swaps</h3>
              <p className="text-gray-300">
                Trade directly from Ethereum to Solana, Polkadot to Cardano, or any supported blockchain without intermediaries.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Liquidity Pools</h3>
              <p className="text-gray-300">
                Earn passive income by providing liquidity to our cross-chain pools with competitive APY rates.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Low Latency</h3>
              <p className="text-gray-300">
                Advanced bridging technology ensures cross-chain transactions complete in seconds, not minutes or hours.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={securityRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 p-8">
              <h3 className="text-2xl font-bold mb-6">Non-Custodial Security</h3>
              <p className="text-gray-300 mb-6">
                Unlike centralized exchanges that control your assets, Megapayer DEX ensures you always maintain ownership of your private keys.
              </p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Connect popular wallets like MetaMask, Trust Wallet, or Ledger</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">All transactions require your explicit approval</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">No account registration or KYC required</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Open-source smart contracts audited by top security firms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 backdrop-blur-md p-8 rounded-xl border border-primary/20 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Cross-Chain Advantages</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Access All Markets</h4>
                    <p className="text-gray-300">Trade any token from any blockchain in a single interface.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Price Arbitrage</h4>
                    <p className="text-gray-300">Capitalize on price differences between chains for maximum profit.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Lower Fees</h4>
                    <p className="text-gray-300">Automatically routes transactions through the most cost-effective chains.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Diversified Portfolio</h4>
                    <p className="text-gray-300">Easily spread your investments across multiple blockchains.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Trade Cross-Chain?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Experience the next generation of decentralized trading with Megapayer DEX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Launch DEX
              </a>
              <a 
                href="#" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Tutorials
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DEXPage;
