
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { TRANSLATIONS } from '@/constants/translations';

// Custom SVG Icons
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

const DocumentTextIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

const BookmarkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

// Whitepaper metadata for tags
const WHITEPAPER_META: Record<string, { tags: string[]; color: string }> = {
    blockchain: { tags: ['CONSENSUS', 'LAYER-1'], color: 'blue' },
    social: { tags: ['PRIVACY', 'SOCIAL'], color: 'purple' },
    p2p: { tags: ['TRADING', 'ESCROW'], color: 'green' },
    dex: { tags: ['DEX', 'CROSS-CHAIN'], color: 'cyan' },
    wallet: { tags: ['SECURITY', 'MULTI-CHAIN'], color: 'indigo' },
    stablecoin: { tags: ['STABLECOIN', 'PAYMENTS'], color: 'yellow' },
    nft: { tags: ['NFT', 'MARKETPLACE'], color: 'pink' },
    token: { tags: ['TOKENOMICS', 'GOVERNANCE'], color: 'orange' },
    identity: { tags: ['IDENTITY', 'DID'], color: 'teal' },
};

// Valid whitepaper IDs
const VALID_IDS = ['blockchain', 'social', 'p2p', 'dex', 'wallet', 'stablecoin', 'nft', 'token', 'identity'];

export default function WhitepaperViewer() {
    const router = useRouter();
    const { id } = router.query;
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].whitepaper_viewer;

    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-section]');
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 300) {
                    setActiveSection(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        const element = document.querySelector(`[data-section="${index}"]`);
        if (element) {
            window.scrollTo({
                top: (element as HTMLElement).offsetTop - 100,
                behavior: 'smooth'
            });
            setActiveSection(index);
        }
    };

    if (!mounted || !router.isReady) return null;

    const paperId = id as string;
    const isValid = VALID_IDS.includes(paperId);

    if (!isValid) {
        return (
            <Layout>
                <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <DocumentTextIcon className="h-24 w-24 text-gray-500 mb-6" />
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
                        {t.not_found.title}
                    </h1>
                    <p className="text-gray-400 max-w-md mb-8">
                        {t.not_found.desc}
                    </p>
                    <Link href="/whitepapers" className="px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-all border border-gray-700 flex items-center gap-2">
                        <ArrowLeftIcon className="h-5 w-5" />
                        {t.not_found.back}
                    </Link>
                </div>
            </Layout>
        );
    }

    // Get the content for the specific whitepaper
    const content = t[paperId as keyof typeof t] as {
        title: string;
        subtitle: string;
        version: string;
        abstract_title: string;
        abstract: string;
        sections: Array<{ title: string; content?: string; items?: string[] }>;
        references_title: string;
    };

    if (!content || typeof content === 'string') {
        return (
            <Layout>
                <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center text-center">
                    <DocumentTextIcon className="h-24 w-24 text-gray-500 mb-6" />
                    <h1 className="text-3xl font-bold text-white mb-4">{t.not_found.title}</h1>
                    <Link href="/whitepapers" className="px-6 py-3 rounded-xl bg-gray-800 text-white">
                        {t.not_found.back}
                    </Link>
                </div>
            </Layout>
        );
    }

    const meta = WHITEPAPER_META[paperId] || { tags: ['TECHNICAL'], color: 'blue' };

    return (
        <Layout>
            <Head>
                <title>{content.title} | Megapayer Whitepaper</title>
                <meta name="description" content={content.abstract} />
            </Head>

            <div className="min-h-screen bg-[#0B0F19] text-gray-300 pt-24 pb-20 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Navigation */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <Link
                            href="/whitepapers"
                            className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            {t.back_label}
                        </Link>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => window.print()}
                                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all border border-gray-700 hover:border-blue-500/30"
                                title="Print Whitepaper"
                            >
                                <PrinterIcon className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all border border-gray-700 hover:border-blue-500/30">
                                <ShareIcon className="h-5 w-5" />
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20">
                                Download PDF
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Sidebar Table of Contents - Desktop */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-28 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-5">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                    Contents
                                </h3>
                                <nav className="space-y-1">
                                    {content.sections.map((section, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => scrollToSection(idx)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${activeSection === idx
                                                    ? 'bg-blue-500/10 text-blue-400 font-medium'
                                                    : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                                                }`}
                                        >
                                            <span className="truncate">{section.title}</span>
                                            {activeSection === idx && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                            )}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 lg:max-w-4xl">
                            {/* Document Header */}
                            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className={`px-3 py-1 rounded-full bg-${meta.color}-500/10 text-${meta.color}-400 text-xs font-semibold border border-${meta.color}-500/20`}>
                                        TECHNICAL PAPER
                                    </span>
                                    {meta.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/20">
                                        {content.version}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {content.title}
                                </h1>
                                <p className="text-xl text-gray-400 mb-6 font-light">
                                    {content.subtitle}
                                </p>
                                <div className="flex items-center gap-3 pt-6 border-t border-gray-800/50">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                        M
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">{t.by_author}</p>
                                        <p className="text-xs text-blue-400">Megapayer Foundation</p>
                                    </div>
                                </div>
                            </div>

                            {/* Abstract */}
                            <div className="prose prose-invert prose-lg max-w-none bg-gray-900/20 border border-gray-800/50 rounded-2xl p-8 mb-8 relative group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 rounded-l-2xl group-hover:bg-blue-500 transition-colors" />
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookmarkIcon className="h-5 w-5 text-blue-400" />
                                    {content.abstract_title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed italic">
                                    {content.abstract}
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-12">
                                {content.sections.map((section, idx) => (
                                    <section key={idx} data-section={idx} className="scroll-mt-32">
                                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-blue-400 text-sm font-mono border border-gray-700">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                            {section.title}
                                        </h2>

                                        {section.content && (
                                            <div className="bg-gradient-to-r from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 mb-4">
                                                <p className="text-gray-300 leading-relaxed text-lg">
                                                    {section.content}
                                                </p>
                                            </div>
                                        )}

                                        {section.items && section.items.length > 0 && (
                                            <div className="space-y-3 bg-gray-900/30 rounded-2xl p-6 border border-gray-800">
                                                {section.items.map((item: string, itemIdx: number) => (
                                                    <div key={itemIdx} className="flex gap-3 items-start">
                                                        <ChevronRightIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-300">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </section>
                                ))}

                                {/* References */}
                                <section className="scroll-mt-32 pt-12 border-t border-gray-800">
                                    <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">
                                        {content.references_title}
                                    </h2>
                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li>[1] Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.</li>
                                        <li>[2] Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract Platform.</li>
                                        <li>[3] Megapayer Foundation. (2024). The State of Decentralized Finance.</li>
                                        <li>[4] Megapayer Research Group. (2025). Technical Specifications and Protocols.</li>
                                    </ul>
                                </section>
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
                    nav, button, aside, .absolute { display: none !important; }
                    main { max-width: 100% !important; }
                    .prose { color: black !important; }
                    h1, h2, h3, p, li { color: black !important; text-shadow: none !important; }
                    .bg-gray-900, .bg-gray-800 { background: transparent !important; border: 1px solid #eee !important; color: black !important; }
                    .text-gray-300, .text-gray-400 { color: #333 !important; }
                    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                }
            `}</style>
        </Layout>
    );
}
