// Reward Distribution Animation
// Multi-language support for SPoS reward distribution model

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface RevenueSource {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
}

interface DistributionItem {
    recipient: string;
    percentage: number;
    color: string;
    description: string;
}

const RewardDistributionAnimation: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].rewards;
    
    const [activeSource, setActiveSource] = useState<number>(0);
    const [animatingReward, setAnimatingReward] = useState<boolean>(false);
    const [distributedAmounts, setDistributedAmounts] = useState<{ [key: string]: number }>({
        producer: 0,
        validators: 0,
        holders: 0,
    });

    // Revenue sources
    const revenueSources: RevenueSource[] = [
        {
            id: 'tx_fees',
            name: t.transaction_fees,
            icon: '💸',
            description: t.transaction_fees_desc,
            color: '#3B82F6'
        },
        {
            id: 'dex_fees',
            name: t.dex_fees,
            icon: '🔄',
            description: t.dex_fees_desc,
            color: '#10B981'
        },
        {
            id: 'p2p_fees',
            name: t.p2p_fees,
            icon: '🤝',
            description: t.p2p_fees_desc,
            color: '#F59E0B'
        },
        {
            id: 'nft_fees',
            name: t.nft_fees,
            icon: '🖼️',
            description: t.nft_fees_desc,
            color: '#EC4899'
        },
        {
            id: 'social_premium',
            name: t.social_premium,
            icon: '⭐',
            description: t.social_premium_desc,
            color: '#8B5CF6'
        },
    ];

    // Distribution model
    const distributionModel: DistributionItem[] = [
        {
            recipient: t.block_producer,
            percentage: 50,
            color: '#3B82F6',
            description: t.block_producer_desc
        },
        {
            recipient: t.validator_pool,
            percentage: 20,
            color: '#10B981',
            description: t.validator_pool_desc
        },
        {
            recipient: t.holders,
            percentage: 30,
            color: '#8B5CF6',
            description: t.holders_desc
        },
    ];

    // Additional incentives
    const incentives = [
        {
            title: t.early_validator,
            icon: '🎁',
            description: t.early_validator_desc
        },
        {
            title: t.high_uptime,
            icon: '⏱️',
            description: t.high_uptime_desc
        },
        {
            title: t.governance,
            icon: '🗳️',
            description: t.governance_desc
        },
    ];

    // Animate revenue flow
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSource((prev) => (prev + 1) % revenueSources.length);
            setAnimatingReward(true);
            
            setTimeout(() => {
                setAnimatingReward(false);
                setDistributedAmounts(prev => ({
                    producer: prev.producer + 50,
                    validators: prev.validators + 20,
                    holders: prev.holders + 30,
                }));
            }, 1500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Revenue Sources */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-4">{t.revenue_sources}</h4>
                    {revenueSources.map((source, idx) => (
                        <motion.div
                            key={source.id}
                            className={`relative p-4 rounded-xl border transition-all ${
                                activeSource === idx
                                    ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-blue-500/50 shadow-lg'
                                    : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {activeSource === idx && (
                                <motion.div
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                    style={{ backgroundColor: source.color }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{source.icon}</span>
                                <div className="flex-1">
                                    <div className="font-medium text-white">{source.name}</div>
                                    <div className="text-xs text-gray-400">{source.description}</div>
                                </div>
                                <div 
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: source.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Center: Reward Pool Animation */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                        {/* Central pool */}
                        <motion.div
                            className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/30"
                            animate={{
                                scale: animatingReward ? [1, 1.1, 1] : 1,
                                boxShadow: animatingReward
                                    ? ['0 25px 50px -12px rgba(147, 51, 234, 0.3)', '0 25px 50px -12px rgba(147, 51, 234, 0.6)', '0 25px 50px -12px rgba(147, 51, 234, 0.3)']
                                    : '0 25px 50px -12px rgba(147, 51, 234, 0.3)',
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-3xl mb-2">🏦</span>
                            <span className="text-white/80 text-sm">{t.reward_pool}</span>
                            <span className="text-white font-bold">100 MPC</span>
                        </motion.div>

                        {/* Animated flow particles */}
                        <AnimatePresence>
                            {animatingReward && (
                                <>
                                    {distributionModel.map((item, idx) => {
                                        const angle = ((idx / distributionModel.length) * 2 * Math.PI) - Math.PI / 2;
                                        const radius = 120;
                                        const endX = Math.cos(angle) * radius;
                                        const endY = Math.sin(angle) * radius;
                                        
                                        return (
                                            <motion.div
                                                key={item.recipient}
                                                className="absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                                                style={{ 
                                                    backgroundColor: item.color,
                                                    left: '50%',
                                                    top: '50%',
                                                }}
                                                initial={{ x: -16, y: -16, scale: 0 }}
                                                animate={{ 
                                                    x: endX - 16, 
                                                    y: endY - 16,
                                                    scale: 1,
                                                }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                transition={{ duration: 1, delay: idx * 0.2 }}
                                            >
                                                +{item.percentage}
                                            </motion.div>
                                        );
                                    })}
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Distribution percentages */}
                    <div className="mt-8 w-full max-w-xs">
                        <div className="text-sm text-gray-400 mb-2 text-center">{t.total_distributed}</div>
                        <div className="flex items-center gap-1 h-4 rounded-full overflow-hidden bg-gray-700">
                            {distributionModel.map((item, idx) => (
                                <motion.div
                                    key={item.recipient}
                                    className="h-full"
                                    style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.percentage}%` }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            {distributionModel.map(item => (
                                <span key={item.recipient} style={{ color: item.color }}>{item.percentage}%</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Recipients */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-4">100% {t.every_block}</h4>
                    {distributionModel.map((item, idx) => (
                        <motion.div
                            key={item.recipient}
                            className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div 
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="font-medium text-white">{item.recipient}</span>
                                </div>
                                <span 
                                    className="text-2xl font-bold"
                                    style={{ color: item.color }}
                                >
                                    {item.percentage}%
                                </span>
                            </div>
                            <p className="text-xs text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}

                    {/* Holder formula */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20">
                        <h5 className="text-sm font-semibold text-white mb-2">{t.holder_formula}</h5>
                        <code className="text-xs text-purple-300 block bg-gray-900/50 p-2 rounded">
                            {t.holder_formula_text}
                        </code>
                    </div>
                </div>
            </div>

            {/* Additional Incentives */}
            <div className="mt-10 pt-8 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">{t.additional_incentives}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                    {incentives.map((incentive, idx) => (
                        <motion.div
                            key={incentive.title}
                            className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="text-3xl mb-2">{incentive.icon}</div>
                            <div className="font-medium text-white mb-1">{incentive.title}</div>
                            <div className="text-xs text-gray-400">{incentive.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RewardDistributionAnimation;
