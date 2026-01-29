// EVM Compatibility Section
// Multi-language support for EVM compatibility and developer features

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

interface TokenStandard {
    standard: string;
    name: string;
    description: string;
    status: 'full' | 'partial' | 'planned';
    icon: string;
}

interface DevTool {
    name: string;
    icon: string;
    compatible: boolean;
    description: string;
}

const EVMCompatibilitySection: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].evm;
    
    const [activeTab, setActiveTab] = useState<'standards' | 'tools' | 'ai'>('standards');

    // Token standards
    const tokenStandards: TokenStandard[] = [
        {
            standard: 'ERC-20',
            name: t.fungible_tokens,
            description: t.fungible_tokens_desc,
            status: 'full',
            icon: '🪙'
        },
        {
            standard: 'ERC-721',
            name: t.nft_tokens,
            description: t.nft_tokens_desc,
            status: 'full',
            icon: '🖼️'
        },
        {
            standard: 'ERC-1155',
            name: t.multi_token,
            description: t.multi_token_desc,
            status: 'full',
            icon: '📦'
        },
        {
            standard: 'ERC-4626',
            name: t.tokenized_vaults,
            description: t.tokenized_vaults_desc,
            status: 'full',
            icon: '🏦'
        },
    ];

    // Developer tools
    const devTools: DevTool[] = [
        { name: 'Solidity', icon: '📝', compatible: true, description: '0.8.x (up to 0.8.28)' },
        { name: 'Vyper', icon: '🐍', compatible: true, description: t.full_support },
        { name: 'Hardhat', icon: '🔨', compatible: true, description: t.development_environment },
        { name: 'Foundry', icon: '🔧', compatible: true, description: t.testing_framework },
        { name: 'Truffle', icon: '🍫', compatible: true, description: t.smart_contract_framework },
        { name: 'OpenZeppelin', icon: '🛡️', compatible: true, description: t.security_library },
    ];

    // AI Features
    const aiFeatures = [
        { icon: '💬', title: t.natural_language, desc: 'Natural Language → Solidity' },
        { icon: '🔍', title: t.security_analysis, desc: 'Real-time vulnerability detection' },
        { icon: '⚡', title: t.gas_optimization, desc: 'Smart gas optimization' },
        { icon: '🚀', title: t.one_click_deploy, desc: 'Instant deployment' },
    ];

    // Chain parameters
    const chainParams = [
        { parameter: 'Chain ID', value: 'TBD (Mainnet)' },
        { parameter: 'Native Token', value: 'MPC' },
        { parameter: 'Block Explorer', value: 'explorer.megapayer.io' },
    ];

    // RPC Endpoints
    const rpcEndpoints = [
        { name: `${t.mainnet_rpc}`, url: 'https://rpc.megapayer.io', status: 'Q3 2026' },
        { name: `${t.testnet_rpc}`, url: 'https://testnet-rpc.megapayer.io', status: 'Active' },
    ];

    const getStatusBadge = (status: string) => {
        if (status === 'full') return { text: t.full_support, color: 'bg-green-500/20 text-green-400 border-green-500/30' };
        if (status === 'partial') return { text: 'Partial', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' };
        return { text: 'Planned', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' };
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

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex bg-gray-800/50 rounded-xl p-1 border border-gray-700">
                    {[
                        { id: 'standards', label: t.token_standards, icon: '🪙' },
                        { id: 'tools', label: t.developer_tools, icon: '🛠️' },
                        { id: 'ai', label: t.ai_smart_contracts, icon: '🤖' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'standards' | 'tools' | 'ai')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <span>{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {activeTab === 'standards' && (
                    <motion.div
                        key="standards"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 gap-4"
                    >
                        {tokenStandards.map((standard, idx) => {
                            const badge = getStatusBadge(standard.status);
                            return (
                                <motion.div
                                    key={standard.standard}
                                    className="p-5 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{standard.icon}</span>
                                            <div>
                                                <div className="font-bold text-white text-lg">{standard.standard}</div>
                                                <div className="text-sm text-gray-400">{standard.name}</div>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                                            ✓ {badge.text}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">{standard.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {activeTab === 'tools' && (
                    <motion.div
                        key="tools"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {devTools.map((tool, idx) => (
                            <motion.div
                                key={tool.name}
                                className="p-5 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <div className="text-4xl mb-3">{tool.icon}</div>
                                <div className="font-semibold text-white mb-1">{tool.name}</div>
                                <div className="text-xs text-gray-400 mb-3">{tool.description}</div>
                                {tool.compatible && (
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                                        ✓ {t.compatible}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {activeTab === 'ai' && (
                    <motion.div
                        key="ai"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20 mb-6">
                            <h4 className="text-xl font-bold text-white mb-4 text-center">{t.ai_features}</h4>
                            <div className="grid md:grid-cols-4 gap-4">
                                {aiFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={feature.title}
                                        className="text-center p-4 bg-gray-900/30 rounded-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="text-4xl mb-3">{feature.icon}</div>
                                        <div className="font-medium text-white mb-1">{feature.title}</div>
                                        <div className="text-xs text-gray-400">{feature.desc}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* RPC Endpoints & Chain Parameters */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* RPC Endpoints */}
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span>🔗</span> {t.rpc_endpoints}
                    </h4>
                    <div className="space-y-3">
                        {rpcEndpoints.map((endpoint, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                                <div>
                                    <div className="font-medium text-white">{endpoint.name}</div>
                                    <div className="text-xs text-blue-400 font-mono">{endpoint.url}</div>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs ${
                                    endpoint.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                                }`}>
                                    {endpoint.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chain Parameters */}
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span>⚙️</span> {t.chain_parameters}
                    </h4>
                    <div className="space-y-3">
                        {chainParams.map((param, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                                <span className="text-gray-400">{param.parameter}</span>
                                <span className="text-white font-mono">{param.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EVMCompatibilitySection;
