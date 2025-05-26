import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const whitepapers = {
  blockchain: {
    title: "Megapayer Chain: Shared Proof of Stake",
    content: `/whitepapers/blockchain-whitepaper-excerpt.md`,
  },
  "social-media": {
    title: "Decentralized Social: Privacy-First Platform",
    content: `/whitepapers/social-media-whitepaper-excerpt.md`,
  },
  "p2p-exchange": {
    title: "P2P Exchange: Trustless Trading Platform",
    content: `/whitepapers/p2p-exchange-whitepaper-excerpt.md`,
  },
  dex: {
    title: "Multi-Chain DEX: Cross-Chain Trading Protocol",
    content: `/whitepapers/dex-whitepaper-excerpt.md`,
  },
  wallet: {
    title: "Universal Wallet: Secure Multi-Chain Asset Management",
    content: `/whitepapers/wallet-whitepaper-excerpt.md`,
  },
  stablecoin: {
    title: "Megapayer Stablecoin: Collateralized Digital Currency",
    content: `/whitepapers/stablecoin-whitepaper-excerpt.md`,
  },
  "nft-marketplace": {
    title: "NFT Marketplace: Decentralized Digital Asset Exchange",
    content: `/whitepapers/nft-marketplace-whitepaper-excerpt.md`,
  },
  "mpc-coin": {
    title: "MPC Coin: Utility & Governance Token Architecture",
    content: `/whitepapers/mpc-coin-whitepaper-excerpt.md`,
  },
  "mpc-id": {
    title: "MPC ID: Decentralized Identity & Authentication",
    content: `/whitepapers/mpc-id-whitepaper-excerpt.md`,
  },
};

const WhitepaperPage = () => {
  const router = useRouter();
  const { id, print } = router.query;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const isPrintMode = print === "true";
  const whitepaper = whitepapers[id as keyof typeof whitepapers];

  useEffect(() => {
    if (id && whitepaper) {
      fetchWhitepaperContent();
    }
  }, [id]);

  useEffect(() => {
    if (isPrintMode && content) {
      // Add print styles when in print mode
      const printStyles = document.createElement("style");
      printStyles.textContent = `
        @media print {
          body { margin: 0; padding: 20px; }
          .no-print { display: none !important; }
          .print-content { 
            font-family: 'Times New Roman', serif;
            line-height: 1.6;
            color: #000;
          }
          h1, h2, h3 { color: #000; break-after: avoid; }
          pre, code { background: #f5f5f5; }
        }
      `;
      document.head.appendChild(printStyles);

      return () => {
        document.head.removeChild(printStyles);
      };
    }
  }, [isPrintMode, content]);

  const fetchWhitepaperContent = async () => {
    try {
      const response = await fetch(whitepaper.content);
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error("Failed to fetch whitepaper:", error);
      setContent("Failed to load whitepaper content.");
    } finally {
      setLoading(false);
    }
  };

  // Simple markdown to HTML converter for basic formatting
  const parseMarkdown = (markdown: string) => {
    return markdown
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      .replace(/^\*(.*)\*/gim, "<em>$1</em>")
      .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/!\[([^[]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />')
      .replace(/\[([^[]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  };

  if (!id || !whitepaper) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 pt-32 text-center">
          <h1 className="text-3xl font-bold mb-8">Whitepaper Not Found</h1>
          <p className="mb-8">
            The requested whitepaper does not exist or is not available.
          </p>
          <Link href="/whitepapers" className="btn-primary">
            Back to Whitepapers
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{whitepaper.title} | Megapayer Whitepaper</title>
        <meta
          name="description"
          content={`Technical whitepaper for ${whitepaper.title}.`}
        />
      </Head>

      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/whitepapers"
            className="inline-flex items-center text-primary hover:text-primary-light mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Whitepapers
          </Link>

          {/* Enhanced whitepaper header */}
          {!loading && (
            <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {whitepaper.title}
                  </h1>
                  <p className="text-gray-300">By Megapayer Research Group</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <div className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                    {/* Version info removed as it's not available in the new structure */}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {/* Date and pages info removed as it's not available in the new structure */}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents Sidebar - Removed as it's not available in the new structure */}

            {/* Main content */}
            <div className="lg:w-3/4">
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-700/30 rounded-lg w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-700/30 rounded-lg w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-full mb-4"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-full mb-4"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-2/3"></div>
                </div>
              ) : (
                <div
                  className="prose prose-invert max-w-none whitepaper-content"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhitepaperPage;
