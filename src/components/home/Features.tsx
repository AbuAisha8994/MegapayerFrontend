import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 'decentralized',
      title: 'Fully Decentralized',
      description: 'Our ecosystem is built on true decentralization principles with no single points of failure or control.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'integrated',
      title: 'Seamlessly Integrated',
      description: 'All components of our ecosystem work together flawlessly, creating a unified blockchain experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'secure',
      title: 'Enterprise-Grade Security',
      description: 'Built with multiple layers of security to protect assets and data without compromising on usability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'scalable',
      title: 'Infinitely Scalable',
      description: 'Our infrastructure is designed to scale horizontally, handling millions of transactions per second.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'interoperable',
      title: 'Cross-Chain Interoperability',
      description: 'Seamlessly connect with other blockchain networks through our advanced bridging technology.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 'sustainable',
      title: 'Energy Efficient',
      description: 'Our Shared Proof of Stake consensus requires a fraction of the energy used by traditional blockchains.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-gradient">Megapayer</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our comprehensive ecosystem is built to provide everything you need for the future of decentralized finance.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">6+</div>
          <p className="text-gray-400">Integrated Products</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">30+</div>
          <p className="text-gray-400">Supported Blockchains</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">99.9%</div>
          <p className="text-gray-400">Uptime Guarantee</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">2025</div>
          <p className="text-gray-400">Full Launch Year</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
