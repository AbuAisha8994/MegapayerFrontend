import { motion } from 'framer-motion';

const ProductIcons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
      {/* Blockchain Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.path
              d="M50,10 L20,30 L20,70 L50,90 L80,70 L80,30 L50,10"
              stroke="url(#blockchainGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            />
            <defs>
              <linearGradient id="blockchainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient-primary">M</span>
        <h3 className="text-lg font-bold mb-1 text-center">Megapayer Blockchain</h3>
        <p className="text-xs text-gray-400 text-center">Shared Proof of Stake</p>
      </motion.div>

      {/* Social Media Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              stroke="#10B981"
              strokeWidth="1.5"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.circle
              cx="30"
              cy="30"
              r="10"
              stroke="#4F46E5"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.3 }}
            />
            <motion.circle
              cx="70"
              cy="70"
              r="10"
              stroke="#F59E0B"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.6 }}
            />
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient-secondary">D</span>
        <h3 className="text-lg font-bold mb-1 text-center">Decentralized Social</h3>
        <p className="text-xs text-gray-400 text-center">Privacy-First Platform</p>
      </motion.div>

      {/* P2P Exchange Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.path
              d="M30,30 L70,30"
              stroke="#F59E0B"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path
              d="M30,50 L70,50"
              stroke="#F59E0B"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.2 }}
            />
            <motion.path
              d="M30,70 L70,70"
              stroke="#F59E0B"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.4 }}
            />
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient-tertiary">P</span>
        <h3 className="text-lg font-bold mb-1 text-center">P2P Exchange</h3>
        <p className="text-xs text-gray-400 text-center">Trustless Trading</p>
      </motion.div>

      {/* DEX Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              stroke="#4F46E5"
              strokeWidth="1"
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke="#10B981"
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#F59E0B"
              strokeWidth="1"
              strokeDasharray="3,8"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient-quaternary">M</span>
        <h3 className="text-lg font-bold mb-1 text-center">Multi-Chain DEX</h3>
        <p className="text-xs text-gray-400 text-center">Cross-Chain Liquidity</p>
      </motion.div>

      {/* Wallet Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.rect
              x="20"
              y="30"
              width="60"
              height="40"
              rx="5"
              stroke="#10B981"
              strokeWidth="1.5"
              fill="none"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.rect
              x="30"
              y="40"
              width="40"
              height="20"
              rx="2"
              stroke="#4F46E5"
              strokeWidth="1"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.3 }}
            />
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient">U</span>
        <h3 className="text-lg font-bold mb-1 text-center">Universal Wallet</h3>
        <p className="text-xs text-gray-400 text-center">Multi-Chain Security</p>
      </motion.div>

      {/* Stablecoin Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative aspect-square bg-dark/30 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col items-center justify-center hover:border-primary/40 transition-colors group"
      >
        <div className="absolute -z-10 opacity-20 inset-0 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path
              d="M50,35 L50,65 M45,40 L55,40 M45,60 L55,60"
              stroke="#F59E0B"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </svg>
        </div>
        <span className="text-5xl font-bold mb-4 text-gradient-tertiary">M</span>
        <h3 className="text-lg font-bold mb-1 text-center">Megapayer Stablecoin</h3>
        <p className="text-xs text-gray-400 text-center">Fully Collateralized</p>
      </motion.div>
    </div>
  );
};

export default ProductIcons;
