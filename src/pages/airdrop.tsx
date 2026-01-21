import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

// Leaderboard mock data
const leaderboardData = [
    { rank: 1, name: "@crypto_whale", points: 12450, badge: "gold" },
    { rank: 2, name: "@defi_hunter", points: 11230, badge: "silver" },
    { rank: 3, name: "@blockchain_pro", points: 10890, badge: "bronze" },
    { rank: 4, name: "@nft_master", points: 9750, badge: "none" },
    { rank: 5, name: "@web3_dev", points: 8920, badge: "none" },
    { rank: 6, name: "@megapayer_fan", points: 8450, badge: "none" },
];



// Badge component
const Badge = ({ type }: { type: string }) => {
    if (type === "gold") {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-dark text-xs font-bold">
                🥇
            </span>
        );
    }
    if (type === "silver") {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 text-dark text-xs font-bold">
                🥈
            </span>
        );
    }
    if (type === "bronze") {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold">
                🥉
            </span>
        );
    }
    return null;
};

// Icon component
const StatIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "users":
            return (
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            );
        case "star":
            return (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            );
        case "network":
            return (
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            );
        case "clock":
            return (
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        default:
            return null;
    }
};

export default function AirdropPage() {
    const { t } = useLanguage();

    // Stats data derived from translations
    const statsData = [
        { value: "15,234", label: t.airdrop_page.stats.participants, icon: "users" },
        { value: "2.4M", label: t.airdrop_page.stats.points, icon: "star" },
        { value: "6,432", label: t.airdrop_page.stats.testnet_users, icon: "network" },
        { value: "12", label: t.airdrop_page.stats.days_left, icon: "clock", unit: t.airdrop_page.stats.days_unit },
    ];

    return (
        <Layout>
            <Head>
                <title>Airdrop & Campaigns | Megapayer</title>
                <meta
                    name="description"
                    content={t.airdrop_page.hero.description}
                />
            </Head>

            <main className="bg-dark min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-dark to-dark pointer-events-none" />
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            {/* Badge */}
                            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                                {t.airdrop_page.hero.badge}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {t.airdrop_page.hero.title}
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
                                {t.airdrop_page.hero.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                                {t.airdrop_page.hero.description}
                            </p>

                            {/* CTA Button */}
                            <motion.a
                                href="https://zealy.io/cw/megapayer"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
                            >
                                <span>{t.airdrop_page.hero.cta}</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-12 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {statsData.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-3">
                                        <StatIcon type={stat.icon} />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                        {stat.value}
                                        {stat.icon === "clock" && <span className="text-lg text-gray-400 ml-1">{stat.unit}</span>}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Join & Leaderboard */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* How to Join */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {t.airdrop_page.how_to.title}
                                </h2>

                                <ul className="space-y-4 mb-8">
                                    {t.airdrop_page.how_to.steps.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-300">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://zealy.io/cw/megapayer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                                >
                                    {t.airdrop_page.how_to.link}
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>

                            {/* Leaderboard */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {t.airdrop_page.leaderboard.title}
                                </h2>

                                <div className="space-y-3">
                                    {leaderboardData.map((user, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${user.badge !== "none"
                                                ? "bg-gradient-to-r from-white/10 to-white/5"
                                                : "bg-white/5 hover:bg-white/10"
                                                }`}
                                        >
                                            <div className="flex items-center">
                                                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold ${user.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
                                                    user.rank === 2 ? "bg-gray-400/20 text-gray-300" :
                                                        user.rank === 3 ? "bg-amber-600/20 text-amber-500" :
                                                            "bg-white/10 text-gray-400"
                                                    }`}>
                                                    {user.rank}
                                                </span>
                                                <span className="text-white font-medium">{user.name}</span>
                                                {user.badge !== "none" && (
                                                    <span className="ml-2">
                                                        <Badge type={user.badge} />
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-cyan-400 font-bold">{user.points.toLocaleString()} {t.airdrop_page.leaderboard.pts}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
                        >
                            {t.airdrop_page.faq.title}
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {t.airdrop_page.faq.items.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <h3 className="text-lg font-bold text-white mb-2">Q: {faq.q}</h3>
                                    <p className="text-gray-400">A: {faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-12"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                {t.airdrop_page.cta.title}
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                {t.airdrop_page.cta.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="https://zealy.io/cw/megapayer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
                                >
                                    {t.airdrop_page.cta.zealy}
                                </motion.a>
                                <motion.a
                                    href="https://t.me/megapayerchat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300"
                                >
                                    {t.airdrop_page.cta.telegram}
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
