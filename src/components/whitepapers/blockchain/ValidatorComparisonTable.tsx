// Validator Comparison Table
// Multi-language support for validator requirements comparison

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface NetworkComparison {
    network: string;
    logo: string;
    color: string;
    minStake: string;
    stakeUSD: number;
    hardwareCost: string;
    totalEntry: string;
    highlighted?: boolean;
}

const ValidatorComparisonTable: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].validators;
    
    const [hoveredNetwork, setHoveredNetwork] = useState<string | null>(null);

    // Network comparison data
    const networks: NetworkComparison[] = [
        {
            network: 'Megapayer',
            logo: 'M',
            color: '#3B82F6',
            minStake: '1,000 MPC',
            stakeUSD: 800,
            hardwareCost: '$500-1,000',
            totalEntry: '$1,300-1,800',
            highlighted: true
        },
        {
            network: 'Ethereum',
            logo: 'Ξ',
            color: '#627EEA',
            minStake: '32 ETH',
            stakeUSD: 84000,
            hardwareCost: '$650-800',
            totalEntry: '~$85,000'
        },
        {
            network: 'Avalanche',
            logo: 'A',
            color: '#E84142',
            minStake: '2,000 AVAX',
            stakeUSD: 60000,
            hardwareCost: '$500-800',
            totalEntry: '~$61,000'
        },
        {
            network: 'Solana',
            logo: 'S',
            color: '#14F195',
            minStake: '~5,700 SOL*',
            stakeUSD: 934000,
            hardwareCost: '$3,000-5,000',
            totalEntry: '~$937,000+'
        },
        {
            network: 'Cosmos',
            logo: '⚛',
            color: '#2E3148',
            minStake: language === 'en' ? 'Variable' : (language === 'tr' ? 'Değişken' : 'Variable'),
            stakeUSD: 44000,
            hardwareCost: '$500-800',
            totalEntry: '~$45,000'
        },
    ];

    // Hardware specs
    const hardwareSpecs = [
        { component: t.cpu, requirement: t.cpu_req, icon: '🖥️' },
        { component: t.ram, requirement: t.ram_req, icon: '💾' },
        { component: t.storage, requirement: t.storage_req, icon: '💿' },
        { component: t.network_conn, requirement: t.network_req, icon: '🌐' },
        { component: t.uptime, requirement: t.uptime_req, icon: '⏱️' },
    ];

    // Setup types
    const setupTypes = [
        { type: t.own_hardware, cost: '$500 - $1,000', desc: t.own_hardware_desc },
        { type: t.cloud_vps, cost: '$50 - $150/mo', desc: t.cloud_vps_desc },
    ];

    // Software requirements
    const softwareReqs = [
        { component: t.os, spec: t.os_req },
        { component: t.runtime, spec: t.runtime_req },
        { component: t.dependencies, spec: t.dependencies_req },
    ];

    const calculateBarrier = (usd: number) => {
        const max = 937000;
        return Math.min((Math.log(usd) / Math.log(max)) * 100, 100);
    };

    const getAccessibility = (stakeUSD: number, highlighted: boolean | undefined) => {
        if (highlighted) return t.very_high;
        if (stakeUSD < 50000) return t.medium;
        return t.low;
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

            {/* Main comparison table */}
            <div className="overflow-x-auto mb-8">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.network}</th>
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.min_stake}</th>
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.usd_value}</th>
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.hardware_cost}</th>
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.total_entry}</th>
                            <th className="text-left py-4 px-4 text-gray-400 font-medium">{t.accessibility}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {networks.map((network, idx) => (
                            <motion.tr
                                key={network.network}
                                className={`border-b border-gray-800 transition-all cursor-pointer ${
                                    network.highlighted 
                                        ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' 
                                        : 'hover:bg-gray-800/50'
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredNetwork(network.network)}
                                onMouseLeave={() => setHoveredNetwork(null)}
                            >
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-3">
                                        <div 
                                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg"
                                            style={{ backgroundColor: network.color }}
                                        >
                                            {network.logo}
                                        </div>
                                        <span className={`font-medium ${network.highlighted ? 'text-blue-400' : 'text-white'}`}>
                                            {network.network}
                                        </span>
                                        {network.highlighted && (
                                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                                                {t.lowest}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-gray-300 font-mono">{network.minStake}</td>
                                <td className="py-4 px-4">
                                    <span className={`font-semibold ${network.highlighted ? 'text-green-400' : 'text-white'}`}>
                                        ${network.stakeUSD.toLocaleString()}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-gray-300">{network.hardwareCost}</td>
                                <td className="py-4 px-4">
                                    <span className={`font-semibold ${network.highlighted ? 'text-green-400' : 'text-white'}`}>
                                        {network.totalEntry}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <div className="w-32">
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ 
                                                    backgroundColor: network.highlighted ? '#10B981' : network.color,
                                                }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${100 - calculateBarrier(network.stakeUSD)}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            />
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            {getAccessibility(network.stakeUSD, network.highlighted)}
                                        </div>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">
                    {t.note}
                </p>
            </div>

            {/* Visual comparison */}
            <div className="bg-gray-800/30 rounded-2xl p-6 mb-8 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-6">{t.entry_cost_comparison}</h4>
                <div className="space-y-4">
                    {networks.map((network, idx) => (
                        <motion.div
                            key={network.network}
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div 
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                                    style={{ backgroundColor: network.color }}
                                >
                                    {network.logo}
                                </div>
                                <span className="text-gray-300 w-24">{network.network}</span>
                                <div className="flex-1 h-8 bg-gray-700/50 rounded-lg overflow-hidden relative">
                                    <motion.div
                                        className="h-full rounded-lg flex items-center justify-end pr-3"
                                        style={{ backgroundColor: network.color + '40' }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.min((network.stakeUSD / 937000) * 100, 100)}%` }}
                                        transition={{ duration: 1.5, delay: idx * 0.1 }}
                                    >
                                        <motion.div
                                            className="h-full absolute left-0 top-0 rounded-lg"
                                            style={{ backgroundColor: network.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${Math.min((network.stakeUSD / 937000) * 100, 100)}%` }}
                                            transition={{ duration: 1.5, delay: idx * 0.1 }}
                                        />
                                    </motion.div>
                                    {network.highlighted && (
                                        <motion.div
                                            className="absolute left-0 top-0 h-full w-2 bg-green-400 rounded-l-lg"
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}
                                </div>
                                <span className="text-white font-semibold w-32 text-right">
                                    ${network.stakeUSD.toLocaleString()}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detailed requirements */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Hardware requirements */}
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="text-2xl">🖥️</span>
                        {t.hardware_requirements}
                    </h4>
                    <div className="space-y-3">
                        {hardwareSpecs.map((spec, idx) => (
                            <motion.div
                                key={spec.component}
                                className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="text-2xl">{spec.icon}</span>
                                <div className="flex-1">
                                    <div className="font-medium text-white">{spec.component}</div>
                                    <div className="text-sm text-gray-400">{spec.requirement}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Setup costs and software */}
                <div className="space-y-6">
                    {/* Setup types */}
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">💰</span>
                            {t.setup_type}
                        </h4>
                        <div className="space-y-3">
                            {setupTypes.map((setup, idx) => (
                                <motion.div
                                    key={setup.type}
                                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div>
                                        <div className="font-medium text-white">{setup.type}</div>
                                        <div className="text-xs text-gray-400">{setup.desc}</div>
                                    </div>
                                    <div className="text-green-400 font-bold">{setup.cost}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Software requirements */}
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">⚙️</span>
                            {t.software_requirements}
                        </h4>
                        <div className="space-y-2">
                            {softwareReqs.map((req, idx) => (
                                <motion.div
                                    key={req.component}
                                    className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <span className="text-gray-400">{req.component}</span>
                                    <span className="text-white font-mono text-sm">{req.spec}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold text-white mb-2">
                    {t.total_entry}: <span className="text-green-400">$1,300 - $1,800</span>
                </h4>
            </motion.div>
        </div>
    );
};

export default ValidatorComparisonTable;
