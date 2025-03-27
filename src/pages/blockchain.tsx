import { useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layout from '@/components/layout/Layout';
import ProductHero from '@/components/products/ProductHero';
import BlockchainAnimation from '@/components/animations/BlockchainAnimation';

const BlockchainPage = () => {
  const [activeTab, setActiveTab] = useState('revenue');
  const revenueRef = useRef(null);
  const validatorsRef = useRef(null);
  const parachainRef = useRef(null);
  
  const isRevenueInView = useInView(revenueRef, { once: true, amount: 0.3 });
  const isValidatorsInView = useInView(validatorsRef, { once: true, amount: 0.3 });
  const isParachainInView = useInView(parachainRef, { once: true, amount: 0.3 });

  return (
    <Layout>
      <Head>
        <title>Megapayer Blockchain | Shared Proof of Stake</title>
        <meta name="description" content="The Megapayer Blockchain with Shared Proof of Stake (SPoS) consensus mechanism distributes revenue among validators, stakers, and ecosystem growth." />
      </Head>

      <ProductHero 
        title="Megapayer Blockchain"
        subtitle="Shared Proof of Stake (SPoS)"
        description="Our revolutionary blockchain with a unique Shared Proof of Stake model that distributes revenue fairly among all participants while maintaining high security and decentralization."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <BlockchainAnimation />
            </Canvas>
          </div>
        }
        color="#4f46e5"
        secondaryColor="#818cf8"
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
            <h2 className="text-4xl font-bold mb-6">The Next Generation <span className="text-primary">Blockchain</span></h2>
            <p className="text-xl text-gray-300">
              Megapayer's blockchain is designed from the ground up to solve the issues of traditional blockchains.
              Our Shared Proof of Stake model ensures fair distribution of rewards and incentivizes network growth.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap mb-10 justify-center">
            <button
              onClick={() => setActiveTab('revenue')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-colors ${
                activeTab === 'revenue' ? 'bg-primary text-white' : 'bg-dark/40 text-gray-300 hover:bg-dark/60'
              }`}
            >
              Revenue Distribution
            </button>
            <button
              onClick={() => setActiveTab('validators')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-colors ${
                activeTab === 'validators' ? 'bg-primary text-white' : 'bg-dark/40 text-gray-300 hover:bg-dark/60'
              }`}
            >
              Validators & Staking
            </button>
            <button
              onClick={() => setActiveTab('parachain')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-colors ${
                activeTab === 'parachain' ? 'bg-primary text-white' : 'bg-dark/40 text-gray-300 hover:bg-dark/60'
              }`}
            >
              Parachain Integration
            </button>
          </div>
          
          {activeTab === 'revenue' && (
            <motion.div
              ref={revenueRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isRevenueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-dark/30 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6">Shared Revenue Distribution Model</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-8 border-primary/30 border-r-primary animate-spin-slow"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">60%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Validators</h4>
                  <p className="text-gray-400">Active network validators receive the majority share based on stake and performance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-8 border-secondary/30 border-r-secondary animate-spin-slow" style={{animationDelay: '-1s'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">30%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Delegators</h4>
                  <p className="text-gray-400">Token holders who stake with validators receive direct rewards without intermediaries</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-8 border-accent/30 border-r-accent animate-spin-slow" style={{animationDelay: '-2s'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">10%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Ecosystem</h4>
                  <p className="text-gray-400">Funding for development, community initiatives and ecosystem growth</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  Unlike traditional Proof of Stake blockchains where rewards primarily benefit validators, 
                  Megapayer's SPoS model ensures fair distribution among all participants. This model increases
                  network security by incentivizing broader participation while funding continuous development.
                </p>
                
                <h4 className="font-bold mt-6">Key Benefits:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Greater reward distribution to passive stakers compared to other networks</li>
                  <li>Reduced risk of stake centralization with validators</li>
                  <li>Sustainable funding for ecosystem growth without inflation</li>
                  <li>Alignment of incentives across all network participants</li>
                </ul>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'validators' && (
            <motion.div
              ref={validatorsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isValidatorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-dark/30 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6">Validator Selection Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div>
                  <div className="bg-primary/10 p-6 rounded-xl mb-6">
                    <h4 className="text-xl font-semibold mb-4">Weighted Selection Algorithm</h4>
                    <div className="font-mono text-sm bg-dark/50 p-4 rounded overflow-auto">
                      <pre><code>{`P(selection) = (0.6 × normalized_stake 
  + 0.25 × performance_score 
  + 0.15 × reputation_score) 
  / validator_set_size`}</code></pre>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Our validator selection process considers multiple factors beyond simply stake size. This approach
                    incentivizes validators to maintain high performance and positive network participation.
                  </p>
                  
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>More democratic validator selection process</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Rewards high-performing smaller validators</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Prevents centralization of network power</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-dark/50 p-6 rounded-xl">
                    <h5 className="font-semibold mb-2">Effective Stake (60%)</h5>
                    <p className="text-gray-400 text-sm">The amount of MEGA tokens staked by the validator and delegated to them</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full mt-2">
                      <div className="bg-primary h-3 rounded-full" style={{width: "60%"}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-dark/50 p-6 rounded-xl">
                    <h5 className="font-semibold mb-2">Performance Score (25%)</h5>
                    <p className="text-gray-400 text-sm">Rolling average of uptime, transaction processing speed, and attestation accuracy</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full mt-2">
                      <div className="bg-secondary h-3 rounded-full" style={{width: "25%"}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-dark/50 p-6 rounded-xl">
                    <h5 className="font-semibold mb-2">Reputation Score (15%)</h5>
                    <p className="text-gray-400 text-sm">Measure of historical behavior, including slashing history and governance participation</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full mt-2">
                      <div className="bg-accent h-3 rounded-full" style={{width: "15%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'parachain' && (
            <motion.div
              ref={parachainRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isParachainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-dark/30 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6">Cross-Chain Compatibility</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="bg-dark/50 p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Bridge Protocols</h4>
                  <p className="text-gray-400">Secure asset transfer between Megapayer and other major blockchains</p>
                </div>
                
                <div className="bg-dark/50 p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Interchain Messaging</h4>
                  <p className="text-gray-400">Cross-chain communication for complex dApp interactions</p>
                </div>
                
                <div className="bg-dark/50 p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Trustless Verification</h4>
                  <p className="text-gray-400">Light client verification for cross-chain security</p>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h4 className="text-xl font-semibold mb-4">Supported Networks</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
                    <span className="font-medium">Ethereum</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                    <span className="font-medium">Polkadot</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Cosmos</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">Solana</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Avalanche</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium">Bitcoin</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
                    <span className="font-medium">Near</span>
                  </div>
                  <div className="bg-dark/30 p-4 rounded-xl flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Algorand</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join the Megapayer Blockchain?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Start staking, validating, or building on our next-generation blockchain platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Become a Validator
              </a>
              <a 
                href="/whitepapers/blockchain-whitepaper.pdf" 
                target="_blank"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <span>Read Whitepaper</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlockchainPage;
