// SPoS Consensus Mechanism Animation
// Multi-language support for visualizing Shared Proof of Stake

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface Validator {
    id: number;
    name: string;
    stake: number;
    delegated: number;
    reputation: number;
    performance: number;
    color: string;
    isProducing: boolean;
}

interface Transaction {
    id: number;
    from: string;
    to: string;
    amount: number;
}

const SPoSAnimation: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].spos;
    
    const [activeValidator, setActiveValidator] = useState<number>(0);
    const [blockNumber, setBlockNumber] = useState<number>(1);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [showFinality, setShowFinality] = useState<'soft' | 'hard' | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Validator data
    const validators: Validator[] = [
        { id: 1, name: 'Validator A', stake: 5000, delegated: 15000, reputation: 98, performance: 99.9, color: '#3B82F6', isProducing: false },
        { id: 2, name: 'Validator B', stake: 3000, delegated: 12000, reputation: 95, performance: 99.5, color: '#10B981', isProducing: false },
        { id: 3, name: 'Validator C', stake: 8000, delegated: 25000, reputation: 99, performance: 99.8, color: '#8B5CF6', isProducing: false },
        { id: 4, name: 'Validator D', stake: 2000, delegated: 8000, reputation: 92, performance: 98.5, color: '#F59E0B', isProducing: false },
        { id: 5, name: 'Validator E', stake: 4000, delegated: 18000, reputation: 97, performance: 99.7, color: '#EF4444', isProducing: false },
        { id: 6, name: 'Validator F', stake: 1500, delegated: 6000, reputation: 90, performance: 99.0, color: '#EC4899', isProducing: false },
    ];

    // Block production animation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveValidator((prev) => (prev + 1) % validators.length);
            setBlockNumber((prev) => prev + 1);
            setShowFinality('soft');
            
            setTimeout(() => {
                setShowFinality('hard');
            }, 2000);
            
            setTimeout(() => {
                setShowFinality(null);
            }, 4000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Transaction simulation
    useEffect(() => {
        const txInterval = setInterval(() => {
            const newTx: Transaction = {
                id: Date.now(),
                from: `0x${Math.random().toString(16).slice(2, 8)}...`,
                to: `0x${Math.random().toString(16).slice(2, 8)}...`,
                amount: Math.floor(Math.random() * 1000) + 1,
            };
            setTransactions((prev) => [...prev.slice(-4), newTx]);
        }, 1000);

        return () => clearInterval(txInterval);
    }, []);

    const calculateEffectiveStake = (v: Validator) => {
        return v.stake + v.delegated;
    };

    const calculateSelectionScore = (v: Validator) => {
        const stakeWeight = 0.6;
        const performanceWeight = 0.25;
        const reputationWeight = 0.15;
        
        const normalizedStake = (calculateEffectiveStake(v) / 33000) * 100;
        return (
            normalizedStake * stakeWeight +
            v.performance * performanceWeight +
            v.reputation * reputationWeight
        ).toFixed(1);
    };

    return (
        <div ref={containerRef} className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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

            {/* Main content grid */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left: Validator list */}
                <div className="lg:col-span-1 space-y-3">
                    <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {t.active_validators}
                    </h4>
                    {validators.map((v, idx) => (
                        <motion.div
                            key={v.id}
                            className={`relative p-4 rounded-xl border transition-all ${
                                activeValidator === idx
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20'
                                    : 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {activeValidator === idx && (
                                <motion.div
                                    className="absolute -right-1 -top-1"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <span className="flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                                    </span>
                                </motion.div>
                            )}
                            
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div 
                                        className="w-3 h-3 rounded-full" 
                                        style={{ backgroundColor: v.color }}
                                    />
                                    <span className="font-medium text-white">{v.name}</span>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                                    {t.score}: {calculateSelectionScore(v)}
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="text-gray-400">
                                    {t.own_stake}: <span className="text-white">{v.stake.toLocaleString()} MPC</span>
                                </div>
                                <div className="text-gray-400">
                                    {t.delegated}: <span className="text-white">{v.delegated.toLocaleString()} MPC</span>
                                </div>
                                <div className="text-gray-400">
                                    {t.performance}: <span className="text-green-400">{v.performance}%</span>
                                </div>
                                <div className="text-gray-400">
                                    {t.reputation}: <span className="text-blue-400">{v.reputation}%</span>
                                </div>
                            </div>
                            
                            {/* Effective stake bar */}
                            <div className="mt-3">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-500">{t.effective_stake}</span>
                                    <span className="text-gray-400">{calculateEffectiveStake(v).toLocaleString()} MPC</span>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: v.color }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(calculateEffectiveStake(v) / 33000) * 100}%` }}
                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Center: Block production animation */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center">
                    <div className="relative">
                        {/* Central block */}
                        <motion.div
                            className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30"
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                    '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                                    '0 25px 50px -12px rgba(139, 92, 246, 0.5)',
                                    '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-white/60 text-sm mb-1">{t.block}</span>
                            <motion.span
                                key={blockNumber}
                                className="text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                #{blockNumber}
                            </motion.span>
                            <span className="text-white/60 text-xs mt-2">~2 {t.seconds}</span>
                        </motion.div>

                        {/* Rotating validator indicators */}
                        {validators.map((v, idx) => {
                            const angle = (idx / validators.length) * 2 * Math.PI - Math.PI / 2;
                            const radius = 100;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            
                            return (
                                <motion.div
                                    key={v.id}
                                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                        activeValidator === idx ? 'ring-2 ring-white scale-125' : ''
                                    }`}
                                    style={{
                                        left: `calc(50% + ${x}px - 16px)`,
                                        top: `calc(50% + ${y}px - 16px)`,
                                        backgroundColor: v.color,
                                    }}
                                    animate={activeValidator === idx ? {
                                        scale: [1.25, 1.4, 1.25],
                                    } : {}}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <span className="text-xs font-bold text-white">{idx + 1}</span>
                                </motion.div>
                            );
                        })}

                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px' }}>
                            {validators.map((v, idx) => {
                                const angle = (idx / validators.length) * 2 * Math.PI - Math.PI / 2;
                                const radius = 100;
                                const x = Math.cos(angle) * radius + 150;
                                const y = Math.sin(angle) * radius + 150;
                                
                                return (
                                    <motion.line
                                        key={v.id}
                                        x1="150"
                                        y1="150"
                                        x2={x}
                                        y2={y}
                                        stroke={activeValidator === idx ? v.color : '#374151'}
                                        strokeWidth={activeValidator === idx ? 3 : 1}
                                        strokeDasharray={activeValidator === idx ? '0' : '5,5'}
                                        initial={{ pathLength: 0 }}
                                        animate={{ 
                                            pathLength: 1,
                                            opacity: activeValidator === idx ? 1 : 0.3 
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                );
                            })}
                        </svg>
                    </div>

                    {/* Finality indicator */}
                    <AnimatePresence>
                        {showFinality && (
                            <motion.div
                                className={`mt-6 px-4 py-2 rounded-full ${
                                    showFinality === 'soft' 
                                        ? 'bg-yellow-500/20 border border-yellow-500/50' 
                                        : 'bg-green-500/20 border border-green-500/50'
                                }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <span className={`text-sm font-medium ${showFinality === 'soft' ? 'text-yellow-400' : 'text-green-400'}`}>
                                    {showFinality === 'soft' ? `⚡ ${t.soft_finality_achieved}` : `✓ ${t.hard_finality_achieved}`}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Active producer info */}
                    <motion.div
                        key={activeValidator}
                        className="mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <span className="text-gray-400 text-sm">Block Producer: </span>
                        <span 
                            className="font-semibold"
                            style={{ color: validators[activeValidator].color }}
                        >
                            {validators[activeValidator].name}
                        </span>
                    </motion.div>
                </div>

                {/* Right: Transactions and statistics */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Live transactions */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                            <motion.span 
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            {t.live_transactions}
                        </h4>
                        <div className="space-y-2">
                            <AnimatePresence mode="popLayout">
                                {transactions.map((tx) => (
                                    <motion.div
                                        key={tx.id}
                                        className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                                        initial={{ opacity: 0, x: 20, height: 0 }}
                                        animate={{ opacity: 1, x: 0, height: 'auto' }}
                                        exit={{ opacity: 0, x: -20, height: 0 }}
                                    >
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400 font-mono">{tx.from}</span>
                                            <span className="text-gray-500">→</span>
                                            <span className="text-gray-400 font-mono">{tx.to}</span>
                                        </div>
                                        <div className="text-right text-sm font-medium text-blue-400 mt-1">
                                            {tx.amount} MPC
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Selection algorithm explanation */}
                    <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
                        <h5 className="font-semibold text-white mb-3">{t.validator_selection}</h5>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">{t.stake_weight}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-3/5 bg-blue-500 rounded-full" />
                                    </div>
                                    <span className="text-blue-400 font-medium">60%</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">{t.performance}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-1/4 bg-green-500 rounded-full" />
                                    </div>
                                    <span className="text-green-400 font-medium">25%</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">{t.reputation}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[15%] bg-purple-500 rounded-full" />
                                    </div>
                                    <span className="text-purple-400 font-medium">15%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dual Finality explanation */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <div className="text-yellow-400 font-semibold text-sm mb-1">{t.soft_finality}</div>
                            <div className="text-2xl font-bold text-white">~2s</div>
                        </div>
                        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                            <div className="text-green-400 font-semibold text-sm mb-1">{t.hard_finality}</div>
                            <div className="text-2xl font-bold text-white">5-10m</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SPoSAnimation;
