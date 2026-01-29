// Security Model Section
// Multi-language support for network security and penalty system

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { componentTranslations } from '@/constants/blockchainComponentTranslations';

const SecurityModelSection: React.FC = () => {
    const { language } = useLanguage();
    const t = componentTranslations[language].security;
    
    const [activeLevel, setActiveLevel] = useState<number>(0);
    const [showSlashingInfo, setShowSlashingInfo] = useState<boolean>(false);

    // Penalty levels
    const penaltyLevels = [
        {
            level: 1,
            title: t.warning,
            trigger: t.warning_trigger,
            consequence: t.warning_result,
            duration: t.warning_duration,
            color: '#F59E0B',
            icon: '⚠️'
        },
        {
            level: 2,
            title: t.temp_restriction,
            trigger: t.temp_trigger,
            consequence: t.temp_result,
            duration: t.temp_duration,
            color: '#EF4444',
            icon: '🚫'
        },
        {
            level: 3,
            title: t.slashing,
            trigger: t.slashing_trigger,
            consequence: t.slashing_result,
            duration: t.slashing_duration,
            color: '#DC2626',
            icon: '⚡'
        },
    ];

    // Security features
    const securityFeatures = [
        {
            feature: t.bft,
            implementation: t.bft_desc,
            icon: '🛡️',
            description: 'Byzantine Fault Tolerance'
        },
        {
            feature: t.sybil,
            implementation: t.sybil_desc,
            icon: '🔒',
            description: 'Sybil Resistance'
        },
        {
            feature: t.finality,
            implementation: t.finality_desc,
            icon: '✅',
            description: 'Finality Guarantee'
        },
        {
            feature: t.double_spend,
            implementation: t.double_spend_desc,
            icon: '🚀',
            description: 'Double-Spend Protection'
        },
    ];

    // Validator parameters
    const validatorParams = [
        { parameter: t.min_validators, value: '50' },
        { parameter: t.max_validators, value: '1,000' },
        { parameter: t.rotation_period, value: '24h' },
        { parameter: t.unbonding_period, value: '28 days' },
    ];

    // Slashing details
    const slashingDetails = [
        { title: t.deferral_period, desc: t.deferral_desc },
        { title: t.reporter_reward, desc: t.reporter_desc },
        { title: t.cancellation, desc: t.cancellation_desc },
    ];

    // Auto-cycle through penalty levels
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLevel((prev) => (prev + 1) % penaltyLevels.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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

            <div className="relative">
                {/* Progressive Penalty System */}
                <div className="mb-10">
                    <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                        <span>⚖️</span> {t.progressive_penalty}
                    </h4>

                    {/* Visual penalty progression */}
                    <div className="relative mb-8">
                        <div className="flex items-center justify-between mb-4">
                            {penaltyLevels.map((level, idx) => (
                                <motion.div
                                    key={level.level}
                                    className={`relative flex flex-col items-center cursor-pointer ${
                                        activeLevel === idx ? 'scale-110' : 'opacity-60'
                                    }`}
                                    onClick={() => setActiveLevel(idx)}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2"
                                        style={{ backgroundColor: level.color + '30', borderColor: level.color }}
                                        animate={{
                                            boxShadow: activeLevel === idx 
                                                ? `0 0 30px ${level.color}50`
                                                : 'none'
                                        }}
                                    >
                                        {level.icon}
                                    </motion.div>
                                    <span className="text-sm text-gray-400">{t.level} {level.level}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress line */}
                        <div className="absolute top-8 left-8 right-8 h-1 bg-gray-700 rounded-full -z-10">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: penaltyLevels[activeLevel].color }}
                                initial={{ width: '0%' }}
                                animate={{ width: `${((activeLevel + 1) / penaltyLevels.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    {/* Active level details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLevel}
                            className="p-6 rounded-2xl border"
                            style={{ 
                                backgroundColor: penaltyLevels[activeLevel].color + '10',
                                borderColor: penaltyLevels[activeLevel].color + '30'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{penaltyLevels[activeLevel].icon}</span>
                                <div>
                                    <h5 className="text-xl font-bold text-white">{penaltyLevels[activeLevel].title}</h5>
                                    <span className="text-sm" style={{ color: penaltyLevels[activeLevel].color }}>
                                        {t.level} {penaltyLevels[activeLevel].level}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-3 bg-gray-900/50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">{t.trigger}</div>
                                    <div className="text-sm text-white">{penaltyLevels[activeLevel].trigger}</div>
                                </div>
                                <div className="p-3 bg-gray-900/50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">{t.result}</div>
                                    <div className="text-sm text-white">{penaltyLevels[activeLevel].consequence}</div>
                                </div>
                                <div className="p-3 bg-gray-900/50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">{t.duration}</div>
                                    <div className="text-sm text-white">{penaltyLevels[activeLevel].duration}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slashing Policy Details */}
                <motion.div
                    className="mb-10 cursor-pointer"
                    onClick={() => setShowSlashingInfo(!showSlashingInfo)}
                >
                    <div className="p-4 bg-red-900/20 rounded-xl border border-red-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <h5 className="font-semibold text-white">{t.slashing_policy_details}</h5>
                                <p className="text-xs text-gray-400">{t.click_for_details}</p>
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: showSlashingInfo ? 180 : 0 }}
                            className="text-gray-400"
                        >
                            ▼
                        </motion.div>
                    </div>
                    
                    <AnimatePresence>
                        {showSlashingInfo && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                                    <h5 className="font-semibold text-white mb-4">{t.slashing_policy}</h5>
                                    <p className="text-sm text-gray-400 mb-4">
                                        {t.slashing_description}
                                    </p>
                                    <div className="space-y-3">
                                        {slashingDetails.map((detail, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg">
                                                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{detail.title}</div>
                                                    <div className="text-xs text-gray-400">{detail.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Network Security Features */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span>🔐</span> {t.network_security}
                        </h4>
                        <div className="space-y-3">
                            {securityFeatures.map((feature, idx) => (
                                <motion.div
                                    key={feature.feature}
                                    className="p-3 bg-gray-900/50 rounded-xl flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div className="flex-1">
                                        <div className="font-medium text-white">{feature.feature}</div>
                                        <div className="text-xs text-gray-400">{feature.implementation}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span>👥</span> {t.validator_set}
                        </h4>
                        <div className="space-y-3">
                            {validatorParams.map((param, idx) => (
                                <motion.div
                                    key={param.parameter}
                                    className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <span className="text-gray-400">{param.parameter}</span>
                                    <span className="text-white font-mono font-semibold">{param.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityModelSection;
