import { useRef } from 'react';
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layout from '@/components/layout/Layout';
import ProductHero from '@/components/products/ProductHero';
import P2PAnimation from '@/components/animations/P2PAnimation';

const P2PExchangePage = () => {
  const featuresRef = useRef(null);
  const escrowRef = useRef(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isEscrowInView = useInView(escrowRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>Megapayer P2P Exchange | Trustless Trading Platform</title>
        <meta name="description" content="Megapayer's non-custodial, censorship-resistant P2P platform for direct peer-to-peer exchange with on-chain escrow for security." />
      </Head>

      <ProductHero 
        title="Decentralized P2P Exchange"
        subtitle="Trustless Trading Platform"
        description="Trade directly with other users without intermediaries. Our blockchain-based P2P exchange ensures security through smart contracts and on-chain escrow."
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
      
      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Peer-to-Peer <span className="text-primary">Trading</span></h2>
            <p className="text-xl text-gray-300">
              Megapayer's P2P Exchange eliminates intermediaries, enabling direct trading between users with built-in security and trustless mechanisms.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Non-Custodial</h3>
              <p className="text-gray-300">
                You always maintain control of your funds. We never hold your private keys or assets in our custody.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">On-Chain Escrow</h3>
              <p className="text-gray-300">
                Smart contracts secure your trades by holding funds in escrow until all conditions are met.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-md p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fair Dispute Resolution</h3>
              <p className="text-gray-300">
                Decentralized arbitration system with community-elected mediators ensures fair resolution of disputes.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={escrowRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isEscrowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-primary/5 backdrop-blur-md p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">How P2P Exchange Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Create or Accept an Offer</h4>
                    <p className="text-gray-300">Post your trading terms or browse existing offers to find a match.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Escrow Funds</h4>
                    <p className="text-gray-300">The seller's assets are locked in a secure smart contract escrow.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Buyer Makes Payment</h4>
                    <p className="text-gray-300">The buyer sends payment directly to the seller through the agreed method.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Confirm & Release</h4>
                    <p className="text-gray-300">After payment confirmation, the escrow releases assets to the buyer.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Censorship Resistance</h3>
              <p className="text-gray-300 mb-6">
                In traditional exchanges, your transactions can be monitored, blocked, or reversed by intermediaries.
                Our P2P platform ensures your freedom to trade without unwarranted interference.
              </p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">No central authority can block your transactions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Trade across borders without restrictions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Private trading with encrypted communications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Resilient infrastructure distributed across the network</span>
                </li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Start Trading on Megapayer P2P</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of users exchanging assets directly with each other
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Create an Offer
              </a>
              <a 
                href="#" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Browse Offers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default P2PExchangePage;
