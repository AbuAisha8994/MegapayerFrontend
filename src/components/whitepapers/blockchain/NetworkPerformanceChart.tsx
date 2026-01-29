// Network Performance Chart
// Multi-language support for network performance metrics

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface MetricData {
    label: string;
    value: number;
    maxValue: number;
    unit: string;
    color: string;
    description: string;
}

interface ComparisonData {
    network: string;
    tps: number;
    blockTime: string;
    finality: string;
    avgFee: string;
    color: string;
}

const NetworkPerformanceChart: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].performance;
    
    const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

    // Performance metrics
    const metrics: MetricData[] = [
        {
            label: t.theoretical_max_tps,
            value: 65000,
            maxValue: 70000,
            unit: 'tx/s',
            color: '#3B82F6',
            description: t.theoretical_max_desc
        },
        {
            label: t.target_production_tps,
            value: 10000,
            maxValue: 15000,
            unit: 'tx/s',
            color: '#10B981',
            description: t.target_production_desc
        },
        {
            label: t.block_time,
            value: 2,
            maxValue: 15,
            unit: language === 'en' ? 'seconds' : (language === 'tr' ? 'saniye' : 's'),
            color: '#8B5CF6',
            description: t.block_time_desc
        },
        {
            label: t.tx_propagation,
            value: 100,
            maxValue: 1000,
            unit: 'ms',
            color: '#F59E0B',
            description: t.tx_propagation_desc
        },
    ];

    // Comparison data
    const comparisons: ComparisonData[] = [
        { network: 'Megapayer', tps: 65000, blockTime: '~2s', finality: '~2s / 5-10m', avgFee: '<$0.001', color: '#3B82F6' },
        { network: 'Ethereum', tps: 30, blockTime: '~12s', finality: '~15 min', avgFee: '$1-50', color: '#627EEA' },
        { network: 'Solana', tps: 65000, blockTime: '~0.4s', finality: '~0.4s', avgFee: '<$0.001', color: '#14F195' },
        { network: 'Polygon', tps: 7000, blockTime: '~2s', finality: '~2s / 30m', avgFee: '<$0.01', color: '#8247E5' },
        { network: 'Avalanche', tps: 4500, blockTime: '~2s', finality: '<1s', avgFee: '$0.01-0.10', color: '#E84142' },
        { network: 'BNB Chain', tps: 160, blockTime: '~3s', finality: '~3s', avgFee: '$0.05-0.20', color: '#F3BA2F' },
    ];

    // Fee structure
    const feeStructure = [
        { type: t.avg_transaction, fee: '< $0.001', description: t.standard_transfers },
        { type: t.token_transfer, fee: '< $0.0005', description: t.token_transfers },
        { type: t.smart_contract_deploy, fee: t.variable, description: t.gas_based },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            const values: { [key: string]: number } = {};
            metrics.forEach(m => {
                values[m.label] = m.value;
            });
            setAnimatedValues(values);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const getBarHeight = (tps: number) => {
        const maxTps = 70000;
        return (tps / maxTps) * 200;
    };

    return (
        <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Header */}
            <div className="text-center mb-10">
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

            {/* Main metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        className="relative p-5 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                        <motion.div 
                            className="text-3xl font-bold text-white mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {metric.value.toLocaleString()}
                            </motion.span>
                            <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
                        </motion.div>
                        
                        {/* Progress bar */}
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: metric.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${(metric.value / metric.maxValue) * 100}%` }}
                                transition={{ duration: 1.5, delay: idx * 0.1, ease: 'easeOut' }}
                            />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute inset-x-0 -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-full transition-all z-10 pointer-events-none">
                            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 mx-2 shadow-xl">
                                <p className="text-xs text-gray-300">{metric.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* TPS Comparison Chart */}
            <div className="mb-10">
                <h4 className="text-xl font-semibold text-white mb-6">{t.tps_comparison}</h4>
                <div className="relative h-64 bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    {/* Y axis lines */}
                    <div className="absolute inset-y-6 left-16 right-6 flex flex-col justify-between pointer-events-none">
                        {[70000, 52500, 35000, 17500, 0].map((val, idx) => (
                            <div key={idx} className="flex items-center">
                                <span className="text-xs text-gray-500 w-12 text-right mr-2">{val.toLocaleString()}</span>
                                <div className="flex-1 h-px bg-gray-700/50" />
                            </div>
                        ))}
                    </div>

                    {/* Bar chart */}
                    <div className="absolute bottom-6 left-20 right-6 flex items-end justify-around h-48">
                        {comparisons.map((c, idx) => (
                            <motion.div
                                key={c.network}
                                className="flex flex-col items-center group cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <motion.div
                                    className="w-12 md:w-16 rounded-t-lg relative overflow-hidden"
                                    style={{ backgroundColor: c.color }}
                                    initial={{ height: 0 }}
                                    animate={{ height: getBarHeight(c.tps) }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                                        initial={{ y: '100%' }}
                                        animate={{ y: '-100%' }}
                                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                                    />
                                    
                                    {/* TPS value */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <span className="text-xs font-semibold text-white bg-gray-900/80 px-2 py-1 rounded">
                                            {c.tps >= 1000 ? `${(c.tps / 1000).toFixed(0)}K` : c.tps}
                                        </span>
                                    </div>
                                </motion.div>
                                
                                <span className={`text-xs mt-2 transition-colors ${c.network === 'Megapayer' ? 'text-blue-400 font-semibold' : 'text-gray-400'}`}>
                                    {c.network}
                                </span>

                                {/* Hover info card */}
                                <div className="absolute bottom-full mb-20 opacity-0 group-hover:opacity-100 transition-all z-20 pointer-events-none">
                                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl whitespace-nowrap">
                                        <div className="text-sm font-semibold text-white mb-2">{c.network}</div>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                                            <span className="text-gray-400">TPS:</span>
                                            <span className="text-white">{c.tps.toLocaleString()}</span>
                                            <span className="text-gray-400">Block Time:</span>
                                            <span className="text-white">{c.blockTime}</span>
                                            <span className="text-gray-400">Finality:</span>
                                            <span className="text-white">{c.finality}</span>
                                            <span className="text-gray-400">Fee:</span>
                                            <span className="text-white">{c.avgFee}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fee Structure and Latency */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Fee structure */}
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t.transaction_fees}
                    </h4>
                    <div className="space-y-4">
                        {feeStructure.map((fee, idx) => (
                            <motion.div
                                key={fee.type}
                                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div>
                                    <div className="font-medium text-white">{fee.type}</div>
                                    <div className="text-xs text-gray-400">{fee.description}</div>
                                </div>
                                <div className="text-green-400 font-bold">{fee.fee}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Latency characteristics */}
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t.latency_characteristics}
                    </h4>
                    <div className="space-y-3">
                        {[
                            { operation: t.tx_broadcast, latency: '< 100ms', icon: '📡' },
                            { operation: t.block_inclusion, latency: '~2s', icon: '📦' },
                            { operation: t.hard_finality, latency: '5-10m', icon: '🔒' },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.operation}
                                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-gray-300">{item.operation}</span>
                                </div>
                                <span className="text-blue-400 font-mono font-semibold">{item.latency}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkPerformanceChart;
