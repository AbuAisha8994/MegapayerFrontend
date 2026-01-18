import Link from "next/link";

// ==========================================
// PRODUCT ICONS (SVG) - Clean, minimal
// ==========================================
const icons = {
  blockchain: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  wallet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  dex: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  social: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  p2p: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  stablecoin: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  mpcCoin: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  mpcId: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  ),
  nft: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  sdk: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  explorer: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  bridge: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

// Large background icons (for dual-layer effect)
const LargeIcon = ({ icon, color }: { icon: keyof typeof icons; color: string }) => (
  <div
    className="absolute -bottom-8 -right-8 w-32 h-32 opacity-[0.04]"
    style={{ color }}
  >
    <svg className="w-full h-full" fill="currentColor" stroke="none" viewBox="0 0 24 24">
      {icons[icon].props.children}
    </svg>
  </div>
);

// ==========================================
// PRODUCT DATA - Exactly 12 products
// ==========================================
const products = [
  // Row 1-2: Blockchain (2x2) + 4 products (1x1)
  { id: "blockchain", title: "Megapayer Blockchain", desc: "Next-gen Layer-1 with Shared Proof of Stake", href: "/blockchain", icon: "blockchain" as const, color: "#06b6d4", size: "2x2", gridArea: "1 / 1 / 3 / 3" },
  { id: "dex", title: "Multi-Chain DEX", desc: "Cross-chain swaps", href: "/dex", icon: "dex" as const, color: "#8b5cf6", size: "1x1", gridArea: "1 / 3 / 2 / 4" },
  { id: "social", title: "Decentralized Social", desc: "Own your content", href: "/social-media", icon: "social" as const, color: "#ec4899", size: "1x1", gridArea: "1 / 4 / 2 / 5" },
  { id: "p2p", title: "P2P Exchange", desc: "Peer-to-peer trading", href: "/p2p-exchange", icon: "p2p" as const, color: "#22c55e", size: "1x1", gridArea: "2 / 3 / 3 / 4" },
  { id: "stablecoin", title: "MPUSD Stablecoin", desc: "1:1 USD backed", href: "/stablecoin", icon: "stablecoin" as const, color: "#10b981", size: "1x1", gridArea: "2 / 4 / 3 / 5" },

  // Row 3: Wallet (2x1) + 2 products (1x1)
  { id: "wallet", title: "Universal Wallet", desc: "Secure multi-chain asset management", href: "/wallet", icon: "wallet" as const, color: "#8b5cf6", size: "2x1", gridArea: "3 / 1 / 4 / 3" },
  { id: "mpcCoin", title: "MPC Coin", desc: "Governance token", href: "/mpc-coin", icon: "mpcCoin" as const, color: "#a855f7", size: "1x1", gridArea: "3 / 3 / 4 / 4" },
  { id: "mpcId", title: "MPC ID", desc: "Digital identity", href: "/mpc-id", icon: "mpcId" as const, color: "#14b8a6", size: "1x1", gridArea: "3 / 4 / 4 / 5" },

  // Row 4: 4 products (1x1)
  { id: "nft", title: "NFT Marketplace", desc: "Create & trade NFTs", href: "/whitepaper/nft-marketplace", icon: "nft" as const, color: "#f472b6", size: "1x1", gridArea: "4 / 1 / 5 / 2" },
  { id: "sdk", title: "Developer SDK", desc: "Build on Megapayer", href: "/coming-soon?product=SDK", icon: "sdk" as const, color: "#fbbf24", size: "1x1", gridArea: "4 / 2 / 5 / 3" },
  { id: "explorer", title: "Block Explorer", desc: "Track transactions", href: "https://scan.megapayer.io", icon: "explorer" as const, color: "#06b6d4", size: "1x1", gridArea: "4 / 3 / 5 / 4" },
  { id: "bridge", title: "Cross-Chain Bridge", desc: "Transfer assets", href: "/coming-soon?product=Bridge", icon: "bridge" as const, color: "#8b5cf6", size: "1x1", gridArea: "4 / 4 / 5 / 5" },
];

// ==========================================
// PRODUCT CARD COMPONENT
// ==========================================
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const isLarge = product.size === "2x2";
  const isWide = product.size === "2x1";

  return (
    <Link
      href={product.href}
      target={product.href.startsWith('http') ? '_blank' : undefined}
      className="group relative overflow-hidden rounded-2xl p-6 flex flex-col bg-zinc-900/60 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
      style={{ gridArea: product.gridArea }}
    >
      {/* Background large icon (Layer 1) */}
      <LargeIcon icon={product.icon} color={product.color} />

      {/* Content (Layer 2) - always on top */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Primary Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{
            backgroundColor: `${product.color}15`,
            color: product.color,
          }}
        >
          {icons[product.icon]}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors ${isLarge ? 'text-2xl' : isWide ? 'text-xl' : 'text-lg'}`}>
          {product.title}
        </h3>

        {/* Description */}
        <p className={`text-gray-500 leading-relaxed ${isLarge ? 'text-base max-w-xs' : 'text-sm'}`}>
          {product.desc}
        </p>

        {/* Arrow indicator for large cards */}
        {(isLarge || isWide) && (
          <div className="mt-auto pt-4 flex items-center text-gray-600 group-hover:text-cyan-400 transition-colors">
            <span className="text-sm font-medium">Learn more</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${product.color}08 0%, transparent 60%)`,
        }}
      />
    </Link>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const ProductPreview = () => {
  return (
    <div className="w-full">
      {/* 
        MATHEMATICAL GRID: 4 columns x 4 rows = 16 cells
        - Blockchain: 2x2 = 4 cells (rows 1-2, cols 1-2)
        - Wallet: 2x1 = 2 cells (row 3, cols 1-2)
        - Others: 1x1 = 10 cells
        - Total: 4 + 2 + 10 = 16 cells ✓ Perfect rectangle
      */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(4, minmax(140px, auto))',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
