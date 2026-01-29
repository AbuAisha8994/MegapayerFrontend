// Megapayer Chain: Shared Proof of Stake - Comprehensive Technical Whitepaper Page
// Multi-language support for EN, TR, UZ, RU, AR, ES

import { useState, useEffect, useRef, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { blockchainWhitepaperTranslations } from '@/constants/blockchainWhitepaperTranslations';

// Animated components
import NetworkPerformanceChart from '@/components/whitepapers/blockchain/NetworkPerformanceChart';
import ValidatorComparisonTable from '@/components/whitepapers/blockchain/ValidatorComparisonTable';
import RewardDistributionAnimation from '@/components/whitepapers/blockchain/RewardDistributionAnimation';
import EVMCompatibilitySection from '@/components/whitepapers/blockchain/EVMCompatibilitySection';
import SecurityModelSection from '@/components/whitepapers/blockchain/SecurityModelSection';
import EcosystemOverview from '@/components/whitepapers/blockchain/EcosystemOverview';

// SVG İkonlar
const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const PrinterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
    </svg>
);

const ShareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z" />
    </svg>
);

const BookmarkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
);

export default function BlockchainWhitepaper() {
    const { language } = useLanguage();
    const [activeSection, setActiveSection] = useState<string>('executive-summary');
    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // Get translations for current language
    const t = useMemo(() => blockchainWhitepaperTranslations[language], [language]);

    // Dynamic sections based on language
    const sections = useMemo(() => [
        { id: 'executive-summary', title: `1. ${t.sections.executive_summary.title}`, icon: '📋' },
        { id: 'consensus', title: `2. ${t.sections.consensus.title.split(':')[0]}`, icon: '⚙️' },
        { id: 'performance', title: `3. ${t.sections.performance.title}`, icon: '⚡' },
        { id: 'validators', title: `4. ${t.sections.validators.title}`, icon: '🖥️' },
        { id: 'rewards', title: `5. ${t.sections.rewards.title}`, icon: '💰' },
        { id: 'evm', title: `6. ${t.sections.evm.title}`, icon: '📝' },
        { id: 'security', title: `7. ${t.sections.security.title}`, icon: '🛡️' },
        { id: 'ecosystem', title: `8. ${t.sections.ecosystem.title}`, icon: '🌐' },
        { id: 'comparison', title: `9. ${t.sections.comparison.title}`, icon: '📊' },
    ], [t]);

    // Dynamic key metrics based on language
    const keyMetrics = useMemo(() => [
        { label: 'Consensus', value: t.metrics.consensus },
        { label: 'Block Time', value: t.metrics.block_time },
        { label: 'Theoretical TPS', value: t.metrics.theoretical_tps },
        { label: 'Finality', value: t.metrics.finality },
        { label: 'Min. Validator Stake', value: t.metrics.min_validator_stake },
        { label: 'EVM Compatibility', value: t.metrics.evm_compatibility },
        { label: 'Avg. Transaction Fee', value: t.metrics.avg_tx_fee },
        { label: 'Total Token Supply', value: t.metrics.total_supply },
    ], [t]);

    useEffect(() => {
        setMounted(true);

        // Scroll progress tracking
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / documentHeight) * 100;
            setScrollProgress(progress);

            // Aktif bölümü belirle
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!mounted) return null;

    return (
        <Layout>
            <Head>
                <title>{t.meta.title} | Megapayer</title>
                <meta name="description" content={t.meta.description} />
            </Head>

            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-50"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className={`min-h-screen bg-[#0B0F19] text-gray-300 pt-24 pb-20 relative overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                {/* Background effects */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <Link
                            href="/whitepapers"
                            className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeftIcon className={`h-4 w-4 ${language === 'ar' ? 'ml-2 group-hover:translate-x-1' : 'mr-2 group-hover:-translate-x-1'} transition-transform`} />
                            {t.header.back}
                        </Link>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => window.print()}
                                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all border border-gray-700 hover:border-blue-500/30"
                                title={t.header.print}
                            >
                                <PrinterIcon className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all border border-gray-700 hover:border-blue-500/30">
                                <ShareIcon className="h-5 w-5" />
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                                {t.header.download}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Sidebar - Table of Contents */}
                        <aside className="hidden lg:block w-72 flex-shrink-0">
                            <div className="sticky top-28 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-5">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                    {t.sidebar.contents}
                                </h3>
                                <nav className="space-y-1">
                                    {sections.map((section, idx) => (
                                        <motion.button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                                                activeSection === section.id
                                                    ? 'bg-blue-500/10 text-blue-400 font-medium'
                                                    : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                                            }`}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <span>{section.icon}</span>
                                            <span className="truncate">{section.title}</span>
                                            {activeSection === section.id && (
                                                <motion.div
                                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                                                    layoutId="activeIndicator"
                                                />
                                            )}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Document info */}
                                <div className="mt-6 pt-6 border-t border-gray-800">
                                    <div className="text-xs text-gray-500 space-y-2">
                                        <div className="flex justify-between">
                                            <span>{t.sidebar.version}:</span>
                                            <span className="text-gray-400">1.0</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{t.sidebar.updated}:</span>
                                            <span className="text-gray-400">Jan 2026</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{t.sidebar.network_status}:</span>
                                            <span className="text-green-400">{t.sidebar.testnet_active}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{t.sidebar.mainnet}:</span>
                                            <span className="text-blue-400">Q3 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main content */}
                        <main className="flex-1" ref={contentRef}>
                            {/* Document header */}
                            <motion.div
                                className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                                        {t.document.technical_paper}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20">
                                        {t.document.consensus}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                                        {t.document.layer1}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/20">
                                        {t.document.version_date}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {t.document.title}
                                </h1>
                                <p className="text-xl text-gray-400 mb-6 font-light">
                                    {t.document.subtitle}
                                </p>

                                <div className="flex items-center gap-3 pt-6 border-t border-gray-800/50">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                        M
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">{t.document.by_author}</p>
                                        <p className="text-xs text-blue-400">{t.document.foundation}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Abstract */}
                            <motion.div
                                className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 border border-gray-800/50 rounded-2xl p-8 mb-12 relative group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className={`absolute top-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-1 h-full bg-blue-500/50 ${language === 'ar' ? 'rounded-r-2xl' : 'rounded-l-2xl'} group-hover:bg-blue-500 transition-colors`} />
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookmarkIcon className="h-5 w-5 text-blue-400" />
                                    {t.abstract.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg italic">
                                    {t.abstract.content}
                                </p>
                            </motion.div>

                            {/* Section 1: Executive Summary */}
                            <section id="executive-summary" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.executive_summary.number}
                                        </span>
                                        {t.sections.executive_summary.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {t.sections.executive_summary.content}
                                        </p>
                                    </div>

                                    {/* Anahtar metrikler grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {keyMetrics.map((metric, idx) => (
                                            <motion.div
                                                key={metric.label}
                                                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                                                    {metric.label}
                                                </div>
                                                <div className="text-white font-semibold">
                                                    {metric.value}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </section>

                            {/* Bölüm 2: Konsensüs Mekanizması */}
                            <section id="consensus" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.consensus.number}
                                        </span>
                                        {t.sections.consensus.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.consensus.overview_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.consensus.overview_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.consensus.participants_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {t.sections.consensus.participants_title}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                                                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                                    <span className="text-2xl">🖥️</span>
                                                    {t.sections.consensus.validators_title}
                                                </h4>
                                                <ul className="space-y-2 text-gray-300">
                                                    {t.sections.consensus.validators_items.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-blue-400 mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                                                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                                                    <span className="text-2xl">👥</span>
                                                    {t.sections.consensus.holders_title}
                                                </h4>
                                                <ul className="space-y-2 text-gray-300">
                                                    {t.sections.consensus.holders_items.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="text-purple-400 mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-8">
                                            <p className="text-amber-400 text-sm">
                                                {t.sections.consensus.terminology_note}
                                            </p>
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.consensus.block_production_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {t.sections.consensus.block_production_content}
                                        </p>
                                        <ol className="space-y-3 text-gray-300 mb-6">
                                            {t.sections.consensus.block_production_items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold">{idx + 1}</span>
                                                    <div>{item}</div>
                                                </li>
                                            ))}
                                        </ol>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.consensus.finality_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {t.sections.consensus.finality_content}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                                                <h4 className="text-lg font-semibold text-yellow-400 mb-3">⚡ {t.sections.consensus.soft_finality_title}</h4>
                                                <ul className="space-y-2 text-gray-300 text-sm">
                                                    {t.sections.consensus.soft_finality_items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                                                <h4 className="text-lg font-semibold text-green-400 mb-3">🔒 {t.sections.consensus.hard_finality_title}</h4>
                                                <ul className="space-y-2 text-gray-300 text-sm">
                                                    {t.sections.consensus.hard_finality_items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-8">
                                            <p className="text-blue-300 text-sm">
                                                <strong>⚠️</strong> {t.sections.consensus.finality_note}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </section>

                            {/* Section 3: Network Performance */}
                            <section id="performance" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.performance.number}
                                        </span>
                                        {t.sections.performance.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.performance.throughput_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.performance.throughput_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.performance.fees_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t.sections.performance.fees_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.performance.latency_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.performance.latency_content}
                                        </p>
                                    </div>

                                    {/* Performance chart */}
                                    <NetworkPerformanceChart />
                                </motion.div>
                            </section>

                            {/* Section 4: Validator Requirements */}
                            <section id="validators" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.validators.number}
                                        </span>
                                        {t.sections.validators.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.validators.stake_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.validators.stake_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.validators.hardware_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t.sections.validators.hardware_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.validators.comparison_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.validators.comparison_content}
                                        </p>
                                    </div>

                                    {/* Validator comparison table */}
                                    <ValidatorComparisonTable />
                                </motion.div>
                            </section>

                            {/* Section 5: Reward Distribution */}
                            <section id="rewards" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.rewards.number}
                                        </span>
                                        {t.sections.rewards.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.rewards.sources_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.rewards.sources_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.rewards.distribution_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t.sections.rewards.distribution_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.rewards.holder_rewards_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.rewards.holder_rewards_content}
                                        </p>
                                    </div>

                                    {/* Reward distribution animation */}
                                    <RewardDistributionAnimation />
                                </motion.div>
                            </section>

                            {/* Section 6: EVM Compatibility */}
                            <section id="evm" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.evm.number}
                                        </span>
                                        {t.sections.evm.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.evm.smart_contracts_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.evm.smart_contracts_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.evm.dev_features_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t.sections.evm.dev_features_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.evm.token_standards_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.evm.token_standards_content}
                                        </p>
                                    </div>

                                    {/* EVM compatibility section */}
                                    <EVMCompatibilitySection />
                                </motion.div>
                            </section>

                            {/* Section 7: Security Model */}
                            <section id="security" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.security.number}
                                        </span>
                                        {t.sections.security.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.security.penalty_title}</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.security.penalty_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.security.slashing_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {t.sections.security.slashing_content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.security.network_security_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.security.network_security_content}
                                        </p>
                                    </div>

                                    {/* Security model section */}
                                    <SecurityModelSection />
                                </motion.div>
                            </section>

                            {/* Section 8: Ecosystem Overview */}
                            <section id="ecosystem" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.ecosystem.number}
                                        </span>
                                        {t.sections.ecosystem.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.ecosystem.content}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white mb-4">{t.sections.ecosystem.token_title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {t.sections.ecosystem.token_content}
                                        </p>
                                    </div>

                                    {/* Ecosystem overview */}
                                    <EcosystemOverview />
                                </motion.div>
                            </section>

                            {/* Section 9: Technical Comparison */}
                            <section id="comparison" className="mb-16 scroll-mt-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-blue-400 text-lg font-mono border border-gray-700">
                                            {t.sections.comparison.number}
                                        </span>
                                        {t.sections.comparison.title}
                                    </h2>

                                    <div className="prose prose-invert max-w-none mb-8">
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {t.sections.comparison.content}
                                        </p>
                                    </div>

                                    {/* Feature comparison table */}
                                    <div className="overflow-x-auto bg-gray-800/30 rounded-2xl border border-gray-700/50 p-6">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-700">
                                                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                                                    <th className="text-center py-3 px-4 text-blue-400 font-medium">Megapayer</th>
                                                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Ethereum</th>
                                                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Solana</th>
                                                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Polygon</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { feature: 'EVM Compatible', megapayer: true, ethereum: true, solana: false, polygon: true },
                                                    { feature: 'Low Fees', megapayer: true, ethereum: false, solana: true, polygon: true },
                                                    { feature: 'High TPS', megapayer: true, ethereum: false, solana: true, polygon: true },
                                                    { feature: 'Slashing Protection', megapayer: true, ethereum: true, solana: true, polygon: true },
                                                    { feature: 'Low Entry Stake', megapayer: true, ethereum: false, solana: false, polygon: false },
                                                    { feature: 'Integrated Ecosystem', megapayer: true, ethereum: false, solana: false, polygon: false },
                                                ].map((row, idx) => (
                                                    <motion.tr
                                                        key={row.feature}
                                                        className="border-b border-gray-800"
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                                                        <td className="py-3 px-4 text-center">
                                                            {row.megapayer ? (
                                                                <span className="text-green-400 text-lg">✓</span>
                                                            ) : (
                                                                <span className="text-red-400 text-lg">✗</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4 text-center">
                                                            {row.ethereum ? (
                                                                <span className="text-green-400 text-lg">✓</span>
                                                            ) : (
                                                                <span className="text-red-400 text-lg">✗</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4 text-center">
                                                            {row.solana ? (
                                                                <span className="text-green-400 text-lg">✓</span>
                                                            ) : (
                                                                <span className="text-red-400 text-lg">✗</span>
                                                            )}
                                                        </td>
                                                        <td className="py-3 px-4 text-center">
                                                            {row.polygon ? (
                                                                <span className="text-green-400 text-lg">✓</span>
                                                            ) : (
                                                                <span className="text-red-400 text-lg">✗</span>
                                                            )}
                                                        </td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            </section>

                            {/* References */}
                            <section className="mb-16 pt-12 border-t border-gray-800">
                                <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">
                                    {t.references.title}
                                </h2>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li>[1] Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.</li>
                                    <li>[2] Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract Platform.</li>
                                    <li>[3] Wood, G. (2016). GRANDPA: A Byzantine Finality Gadget.</li>
                                    <li>[4] Megapayer Foundation. (2025). The State of Decentralized Finance.</li>
                                    <li>[5] Megapayer Research Group. (2026). Shared Proof of Stake: Technical Specifications.</li>
                                </ul>
                            </section>

                            {/* Document info */}
                            <section className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                                <h3 className="text-lg font-semibold text-white mb-4">{t.doc_info.title}</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-400">{t.doc_info.prepared_by}: <span className="text-white">Megapayer Technical Team</span></p>
                                        <p className="text-gray-400">{t.doc_info.classification}: <span className="text-white">{t.doc_info.public}</span></p>
                                        <p className="text-gray-400">{t.doc_info.version}: <span className="text-white">1.0</span></p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">{t.doc_info.website}: <a href="https://megapayer.io" className="text-blue-400 hover:underline">megapayer.io</a></p>
                                        <p className="text-gray-400">{t.doc_info.documentation}: <a href="https://docs.megapayer.io" className="text-blue-400 hover:underline">docs.megapayer.io</a></p>
                                        <p className="text-gray-400">GitHub: <a href="https://github.com/Megapayer-Network" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/Megapayer-Network</a></p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">
                                    {t.doc_info.disclaimer}
                                </p>
                            </section>

                            {/* Footer */}
                            <div className="text-center text-gray-500 text-sm mt-12">
                                {t.footer.copyright}
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page { margin: 2cm; }
                    body { background: white !important; color: black !important; }
                    .min-h-screen { min-height: auto !important; padding-top: 0 !important; padding-bottom: 0 !important; }
                    nav, button, aside, .fixed { display: none !important; }
                    main { max-width: 100% !important; }
                    h1, h2, h3, p, li { color: black !important; text-shadow: none !important; }
                    .bg-gray-900, .bg-gray-800 { background: transparent !important; border: 1px solid #eee !important; }
                    .text-gray-300, .text-gray-400 { color: #333 !important; }
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                }
            `}</style>
        </Layout>
    );
}
