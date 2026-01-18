import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Lightweight mouse tracking - uses transform for GPU acceleration
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !glowRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Direct transform update - bypasses React re-render for max performance
    glowRef.current.style.transform = `translate(${x - 175}px, ${y - 175}px)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  }, []);

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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
    >
      {/* Glassmorphism Container - NO backdrop-blur for performance */}
      <div
        className="relative mx-4 md:mx-8 rounded-3xl border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        {/* Mouse-following Neon Glow - GPU accelerated */}
        <div
          ref={glowRef}
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)',
            opacity: 0,
            willChange: 'transform',
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-16 px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Megapayer
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive ecosystem is built to provide everything you need for the future of decentralized finance.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                style={{ background: 'rgba(255, 255, 255, 0.02)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: '6+', label: 'Integrated Products' },
              { value: '30+', label: 'Supported Blockchains' },
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '2025', label: 'Full Launch Year' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors duration-300"
                style={{ background: 'rgba(255, 255, 255, 0.02)' }}
              >
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
