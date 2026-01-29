// Ecosystem Overview Component
// Multi-language support for Megapayer ecosystem products

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface Product {
    id: string;
    name: string;
    description: string;
    status: 'testnet' | 'development' | 'planned';
    icon: string;
    color: string;
}

const EcosystemOverview: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].ecosystem;
    
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    // Ecosystem products
    const products: Product[] = [
        {
            id: 'chain',
            name: t.megapayer_chain,
            description: t.megapayer_chain_desc,
            status: 'testnet',
            icon: '⛓️',
            color: '#3B82F6'
        },
        {
            id: 'wallet',
            name: t.universal_wallet,
            description: t.universal_wallet_desc,
            status: 'development',
            icon: '👛',
            color: '#10B981'
        },
        {
            id: 'dex',
            name: t.multichain_dex,
            description: t.multichain_dex_desc,
            status: 'development',
            icon: '🔄',
            color: '#8B5CF6'
        },
        {
            id: 'p2p',
            name: t.p2p_exchange,
            description: t.p2p_exchange_desc,
            status: 'development',
            icon: '🤝',
            color: '#F59E0B'
        },
        {
            id: 'stablecoin',
            name: t.mpusd_stablecoin,
            description: t.mpusd_stablecoin_desc,
            status: 'planned',
            icon: '💵',
            color: '#10B981'
        },
        {
            id: 'social',
            name: t.zenith_social,
            description: t.zenith_social_desc,
            status: 'development',
            icon: '🌐',
            color: '#EC4899'
        },
        {
            id: 'nft',
            name: t.nft_marketplace,
            description: t.nft_marketplace_desc,
            status: 'planned',
            icon: '🖼️',
            color: '#F472B6'
        },
        {
            id: 'bridge',
            name: t.crosschain_bridge,
            description: t.crosschain_bridge_desc,
            status: 'planned',
            icon: '🌉',
            color: '#6366F1'
        },
        {
            id: 'id',
            name: t.mpc_id,
            description: t.mpc_id_desc,
            status: 'planned',
            icon: '🪪',
            color: '#14B8A6'
        },
    ];

    // Token info
    const tokenInfo = [
        { property: t.token_name, value: 'Megapayer Coin (MPC)' },
        { property: t.total_supply, value: '100,000,000 MPC' },
        { property: t.supply_model, value: t.deflationary },
    ];

    // Token use cases
    const tokenUseCases = [
        { icon: '⛽', title: t.gas_fees, desc: 'Network transaction fees' },
        { icon: '🔒', title: t.staking, desc: 'Validator/Holder staking' },
        { icon: '🗳️', title: t.governance_voting, desc: 'Protocol governance' },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'testnet':
                return { text: t.testnet, color: 'bg-green-500/20 text-green-400' };
            case 'development':
                return { text: t.development, color: 'bg-blue-500/20 text-blue-400' };
            case 'planned':
                return { text: t.planned, color: 'bg-gray-500/20 text-gray-400' };
            default:
                return { text: status, color: 'bg-gray-500/20 text-gray-400' };
        }
    };

    return (
        <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative text-center mb-10">
                <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {t.title}
                </motion.h3>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            {/* Products Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {products.map((product, idx) => {
                    const badge = getStatusBadge(product.status);
                    return (
                        <motion.div
                            key={product.id}
                            className={`relative p-5 bg-gray-800/30 rounded-xl border transition-all cursor-pointer ${
                                hoveredProduct === product.id
                                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                                    : 'border-gray-700/50 hover:border-gray-600'
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                        style={{ backgroundColor: product.color + '20' }}
                                    >
                                        {product.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{product.name}</div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs ${badge.color}`}>
                                    {badge.text}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400">{product.description}</p>

                            {/* Hover glow effect */}
                            {hoveredProduct === product.id && (
                                <motion.div
                                    className="absolute inset-0 rounded-xl pointer-events-none"
                                    style={{ 
                                        background: `radial-gradient(circle at center, ${product.color}10 0%, transparent 70%)`
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Ecosystem Diagram - fixed size so lines align with nodes */}
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 mb-10">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">{t.integrated_ecosystem}</h4>
                <div className="relative flex items-center justify-center">
                    <div className="relative w-[320px] h-[320px]">
                        {/* Shared layout constants (center and radius) */}
                        {(() => {
                            const center = 160;
                            const radius = 120;
                            const orbitingProducts = products.slice(1, 9); // all 8 products around the chain

                            return (
                                <>
                                    {/* Connection lines - same center/radius as nodes */}
                                    <svg
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                        viewBox="0 0 320 320"
                                        preserveAspectRatio="xMidYMid meet"
                                        style={{ zIndex: 0 }}
                                    >
                                        {orbitingProducts.map((product, idx) => {
                                            const angle = (idx / orbitingProducts.length) * 2 * Math.PI - Math.PI / 2;
                                            const x2 = center + Math.cos(angle) * radius;
                                            const y2 = center + Math.sin(angle) * radius;
                                            return (
                                                <motion.line
                                                    key={product.id}
                                                    x1={center}
                                                    y1={center}
                                                    x2={x2}
                                                    y2={y2}
                                                    stroke={product.color}
                                                    strokeWidth="1.5"
                                                    strokeDasharray="4,4"
                                                    opacity="0.4"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                                                />
                                            );
                                        })}
                                    </svg>

                                    {/* Central Hub */}
                                    <motion.div
                                        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30 z-10"
                                        style={{ left: center - 40, top: center - 40 }}
                                        animate={{
                                            boxShadow: [
                                                '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                                                '0 25px 50px -12px rgba(139, 92, 246, 0.5)',
                                                '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                                            ],
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <span className="text-xl mb-0.5">⛓️</span>
                                        <span className="text-white text-[10px] font-semibold text-center leading-tight">Megapayer<br/>Chain</span>
                                    </motion.div>

                                    {/* Orbiting products - same center/radius as SVG lines */}
                                    {orbitingProducts.map((product, idx) => {
                                        const angle = (idx / orbitingProducts.length) * 2 * Math.PI - Math.PI / 2;
                                        const x = center + Math.cos(angle) * radius;
                                        const y = center + Math.sin(angle) * radius;
                                        const nodeSize = 32; // 32px = w-8 h-8, so offset by 16 to center

                                        return (
                                            <motion.div
                                                key={product.id}
                                                className="absolute w-8 h-8 rounded-full flex items-center justify-center text-sm z-10 border-2"
                                                style={{
                                                    left: x - nodeSize / 2,
                                                    top: y - nodeSize / 2,
                                                    backgroundColor: product.color + '40',
                                                    borderColor: product.color + '80',
                                                }}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.05 + 0.3 }}
                                                whileHover={{ scale: 1.25 }}
                                                title={product.name}
                                            >
                                                <span className="text-base">{product.icon}</span>
                                            </motion.div>
                                        );
                                    })}
                                </>
                            );
                        })()}
                    </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                    {t.ecosystem_diagram_desc}
                </p>
            </div>

            {/* MPC Token Info */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-xl font-bold text-white mb-6 text-center">{t.native_token}</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Token properties */}
                    <div className="space-y-3">
                        {tokenInfo.map((info, idx) => (
                            <motion.div
                                key={info.property}
                                className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="text-gray-400">{info.property}</span>
                                <span className="text-white font-semibold">{info.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Token use cases */}
                    <div className="space-y-3">
                        {tokenUseCases.map((useCase, idx) => (
                            <motion.div
                                key={useCase.title}
                                className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="text-2xl">{useCase.icon}</span>
                                <div>
                                    <div className="font-medium text-white">{useCase.title}</div>
                                    <div className="text-xs text-gray-400">{useCase.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcosystemOverview;
