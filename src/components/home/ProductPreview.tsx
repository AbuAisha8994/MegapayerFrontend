import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import ProductIcons from './ProductIcons';

// Define the product data with SVG-based visuals instead of images
const productData = [
  {
    id: 'blockchain',
    title: 'Megapayer Blockchain',
    subtitle: 'Shared Proof of Stake Consensus',
    description: 'Our native blockchain features a unique Shared Proof of Stake consensus mechanism, delivering superior performance, security, and sustainability.',
    features: [
      'High throughput transaction processing',
      'Energy-efficient consensus mechanism',
      'Cross-chain interoperability',
      'Secure smart contract execution'
    ],
    color: '#4F46E5',
    icon: (
      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 'social-media',
    title: 'Decentralized Social',
    subtitle: 'Privacy-First Platform',
    description: 'A revolutionary social media platform that gives ownership of content and data back to users through blockchain-based verification.',
    features: [
      'User-owned content and data',
      'Censorship-resistant publishing',
      'Creator-focused monetization',
      'Verifiable reputation system'
    ],
    color: '#10B981',
    icon: (
      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'p2p-exchange',
    title: 'P2P Exchange',
    subtitle: 'Trustless Trading Platform',
    description: 'Our peer-to-peer exchange enables direct trading between users with smart contract escrow protection and decentralized dispute resolution.',
    features: [
      'Smart contract escrow protection',
      'Decentralized reputation system',
      'Multi-currency support',
      'Cross-border capabilities'
    ],
    color: '#F59E0B',
    icon: (
      <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    id: 'dex',
    title: 'Multi-Chain DEX',
    subtitle: 'Cross-Chain Trading Protocol',
    description: 'Trade assets across multiple blockchains seamlessly with our decentralized exchange built for maximum liquidity and minimal slippage.',
    features: [
      'Cross-chain atomic swaps',
      'Unified liquidity pools',
      'MEV protection',
      'Optimized trading routes'
    ],
    color: '#8B5CF6',
    icon: (
      <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'wallet',
    title: 'Universal Wallet',
    subtitle: 'Secure Multi-Chain Asset Management',
    description: 'A single wallet to securely store, send, and manage your assets across all supported blockchain networks with intuitive controls.',
    features: [
      'Multi-chain support',
      'Hardware wallet integration',
      'DApp browser',
      'Advanced security features'
    ],
    color: '#EC4899',
    icon: (
      <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'stablecoin',
    title: 'Megapayer Stablecoin',
    subtitle: 'Fully Collateralized Digital Currency',
    description: 'Our USD-pegged stablecoin is fully collateralized, transparent, and optimized for cross-border payments and DeFi applications.',
    features: [
      'Full collateralization',
      'Real-time attestation',
      'Multi-chain availability',
      'Low-cost transfers'
    ],
    color: '#F97316',
    icon: (
      <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const ProductPreview = () => {
  const [activeProduct, setActiveProduct] = useState(productData[0].id);
  
  // Find the currently active product
  const currentProduct = productData.find(product => product.id === activeProduct) || productData[0];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
      {/* Product Navigation Sidebar */}
      <div className="lg:col-span-3">
        <div className="bg-dark/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 sticky top-24">
          <h3 className="text-lg font-semibold mb-4 px-2">Ecosystem Products</h3>
          <nav className="space-y-1">
            {productData.map((product) => (
              <button
                key={product.id}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeProduct === product.id
                    ? 'bg-primary/20 text-white'
                    : 'hover:bg-dark/50 text-gray-300'
                }`}
                onClick={() => setActiveProduct(product.id)}
              >
                {product.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Product Display */}
      <div className="lg:col-span-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-dark/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
          >
            {/* Product Header */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentProduct.title}</h2>
                  <p className="text-primary">{currentProduct.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href={`/${currentProduct.id}`}
                    className="inline-flex items-center px-5 py-2 rounded-lg bg-primary hover:bg-primary-dark transition-colors text-white"
                  >
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Product Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Description */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">{currentProduct.description}</p>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Product Visual Representation (using code instead of images) */}
              <div className="relative min-h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 via-dark to-secondary/10 border border-white/10 p-8 flex items-center justify-center">
                <div className="relative z-10">
                  {currentProduct.icon}
                </div>
                
                {/* Animated background */}
                <div className="absolute inset-0 z-0 opacity-20">
                  <div className="absolute inset-0" style={{background: `radial-gradient(circle at center, ${currentProduct.color}20 0%, transparent 70%)`}}></div>
                  
                  {/* Animated particles */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                        background: currentProduct.color,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5
                      }}
                      animate={{
                        y: [0, -(Math.random() * 20 + 10)],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                  
                  {/* Grid pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path fill="none" stroke="white" strokeWidth="0.5" d="M0 10 H20 M10 0 V20" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-40 h-40 rounded-full border"
                    style={{ borderColor: currentProduct.color }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute w-60 h-60 rounded-full border"
                    style={{ borderColor: currentProduct.color }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Icons Grid */}
      <div className="col-span-full mt-10">
        <ProductIcons />
      </div>
    </div>
  );
};

export default ProductPreview;
