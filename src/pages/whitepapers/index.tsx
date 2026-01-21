import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

// Static whitepaper config with icons
const whitepaperConfig = [
  { id: "blockchain", icon: "blockchain", excerptLink: "/whitepapers/blockchain-whitepaper-excerpt.md", version: "2.1" },
  { id: "social", icon: "social", excerptLink: "/whitepapers/social-media-whitepaper-excerpt.md", version: "1.8" },
  { id: "p2p", icon: "p2p", excerptLink: "/whitepapers/p2p-exchange-whitepaper-excerpt.md", version: "2.3" },
  { id: "dex", icon: "dex", excerptLink: "/whitepapers/dex-whitepaper-excerpt.md", version: "3.0" },
  { id: "wallet", icon: "wallet", excerptLink: "/whitepapers/wallet-whitepaper-excerpt.md", version: "2.5" },
  { id: "stablecoin", icon: "stablecoin", excerptLink: "/whitepapers/stablecoin-whitepaper-excerpt.md", version: "1.9" },
  { id: "nft", icon: "nft", excerptLink: "/whitepapers/nft-marketplace-whitepaper-excerpt.md", version: "1.5" },
  { id: "token", icon: "token", excerptLink: "/whitepapers/mpc-coin-whitepaper-excerpt.md", version: "2.0" },
  { id: "identity", icon: "identity", excerptLink: "/whitepapers/mpc-id-whitepaper-excerpt.md", version: "1.3" },
];

const WhitepapersPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter translated items
  const filteredWhitepapers = searchTerm
    ? t.whitepapers_page.items.filter(
      (wp) =>
        wp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wp.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : t.whitepapers_page.items;

  // Function to render appropriate icon for each whitepaper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "blockchain":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "social":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "p2p":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case "dex":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case "wallet":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case "stablecoin":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "nft":
      case "token":
      case "identity":
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7h20L12 2zm0 20l10-5H2l10 5zm0-10l10-5H2l10 5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  // Get config by id
  const getConfig = (id: string) => whitepaperConfig.find(c => c.id === id) || whitepaperConfig[0];

  // Function to handle PDF download
  const handlePDFDownload = async (paperId: string) => {
    try {
      const printWindow = window.open(`/whitepaper/${paperId}?print=true`, "_blank");
      if (printWindow) {
        printWindow.onload = () => {
          setTimeout(() => { printWindow.print(); }, 1000);
        };
      } else {
        window.open(`/whitepaper/${paperId}`, "_blank");
      }
    } catch {
      window.open(`/whitepaper/${paperId}`, "_blank");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Megapayer Technical Whitepapers | Blockchain Documentation</title>
        <meta name="description" content="Access comprehensive technical whitepapers for all Megapayer ecosystem products." />
      </Head>

      <div className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.whitepapers_page.hero.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{t.whitepapers_page.hero.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.whitepapers_page.hero.subtitle}
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t.whitepapers_page.hero.search_placeholder}
                className="w-full px-6 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Whitepapers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWhitepapers.map((paper, index) => {
              const config = getConfig(paper.id);
              return (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-lg bg-primary/10">
                        {renderIcon(config.icon)}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          v{config.version}
                        </span>
                        <span className="text-sm text-gray-400">{paper.pages}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                    <p className="text-gray-400 mb-6 line-clamp-3">{paper.desc}</p>

                    <div className="text-sm text-gray-500 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {paper.updated}
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-4 flex justify-between items-center">
                    <Link
                      href={`/whitepaper/${paper.id}`}
                      className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
                    >
                      {paper.read_btn}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>

                    <button
                      onClick={() => handlePDFDownload(paper.id)}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="ml-1 text-sm">PDF</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No results message */}
          {filteredWhitepapers.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t.whitepapers_page.no_results.title}</h3>
              <p className="text-gray-400 mb-6">{t.whitepapers_page.no_results.desc}</p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary hover:text-primary-light transition-colors"
              >
                {t.whitepapers_page.no_results.clear}
              </button>
            </div>
          )}

          {/* Request Whitepaper Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto bg-dark/40 backdrop-blur-sm rounded-xl border border-white/10 p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold mb-4">{t.whitepapers_page.cta.title}</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t.whitepapers_page.cta.subtitle}</p>

            <Link
              href="/enterprise/contact"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {t.whitepapers_page.cta.button}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default WhitepapersPage;
