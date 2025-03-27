import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import PdfDownloadButton from '@/components/common/PdfDownloadButton';
import TableOfContents from '@/components/common/TableOfContents';
import RecommendedWhitepapers from '@/components/whitepapers/RecommendedWhitepapers';

const whitepapersInfo = {
  'blockchain': {
    id: 'blockchain',
    title: 'Megapayer Blockchain: Shared Proof of Stake',
    version: '2.1',
    date: 'February 2025',
    author: 'Megapayer Research Group',
    pages: 42
  },
  'social-media': {
    id: 'social-media',
    title: 'Decentralized Social: Privacy-First Platform',
    version: '1.8',
    date: 'January 2025',
    author: 'Megapayer Research Group',
    pages: 38
  },
  'p2p-exchange': {
    id: 'p2p-exchange',
    title: 'P2P Exchange: Trustless Trading Platform',
    version: '2.3',
    date: 'March 2025',
    author: 'Megapayer Research Group',
    pages: 45
  },
  'dex': {
    id: 'dex',
    title: 'Multi-Chain DEX: Cross-Chain Trading Protocol',
    version: '3.0',
    date: 'January 2025',
    author: 'Megapayer Research Group',
    pages: 53
  },
  'wallet': {
    id: 'wallet',
    title: 'Universal Wallet: Secure Multi-Chain Asset Management',
    version: '2.5',
    date: 'February 2025',
    author: 'Megapayer Research Group',
    pages: 36
  },
  'stablecoin': {
    id: 'stablecoin',
    title: 'Megapayer Stablecoin: Collateralized Digital Currency',
    version: '1.9',
    date: 'March 2025',
    author: 'Megapayer Research Group',
    pages: 47
  }
};

// Sample table of contents structure
const whitepapersToC = {
  'blockchain': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction', 
      subsections: [
        { title: '1.1 Design Principles', id: 'design-principles' },
        { title: '1.2 Contributions', id: 'contributions' }
      ]
    },
    { title: '2. Shared Proof of Stake Consensus', id: 'shared-proof-of-stake' },
    { title: '9. Conclusion', id: 'conclusion' }
  ],
  'social-media': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Content Ownership Protocol', id: 'content-ownership-protocol' },
    { title: '9. Conclusion', id: 'conclusion' }
  ],
  'p2p-exchange': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Multi-Signature Escrow Protocol', id: 'multi-signature-escrow-protocol' },
    { title: '9. Conclusion', id: 'conclusion' }
  ],
  'dex': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Cross-Chain Trading Protocol', id: 'cross-chain-trading-protocol' },
    { title: '9. Conclusion', id: 'conclusion' }
  ],
  'wallet': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Universal Key Derivation System', id: 'universal-key-derivation-system' },
    { title: '9. Conclusion', id: 'conclusion' }
  ],
  'stablecoin': [
    { title: 'Abstract', id: 'abstract' },
    { title: '1. Introduction', id: 'introduction' },
    { title: '2. Multi-Asset Collateral System', id: 'multi-asset-collateral-system' },
    { title: '9. Conclusion', id: 'conclusion' }
  ]
};

const WhitepaperPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchContent = async () => {
      try {
        const response = await fetch(`/whitepapers/${id}-whitepaper-excerpt.md`);
        const text = await response.text();
        const cleanedText = text.replace(/\/\/ filepath:.*\n/, '');
        setContent(cleanedText);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch whitepaper:', error);
        setContent('# Error\n\nFailed to load whitepaper excerpt. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchContent();
  }, [id]);

  if (!id || !whitepapersInfo[id as keyof typeof whitepapersInfo]) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 pt-32 text-center">
          <h1 className="text-3xl font-bold mb-8">Whitepaper Not Found</h1>
          <p className="mb-8">The requested whitepaper does not exist or is not available.</p>
          <Link href="/whitepapers" className="btn-primary">
            Back to Whitepapers
          </Link>
        </div>
      </Layout>
    );
  }
  
  const paperInfo = whitepapersInfo[id as keyof typeof whitepapersInfo];
  const tableOfContents = whitepapersToC[id as keyof typeof whitepapersToC] || [];
  
  return (
    <Layout>
      <Head>
        <title>{paperInfo.title} | Megapayer Whitepaper</title>
        <meta 
          name="description" 
          content={`Technical whitepaper for ${paperInfo.title}. Version ${paperInfo.version}, ${paperInfo.date}.`} 
        />
      </Head>
      
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/whitepapers"
            className="inline-flex items-center text-primary hover:text-primary-light mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Whitepapers
          </Link>
          
          {/* Enhanced whitepaper header */}
          {!loading && (
            <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{paperInfo.title}</h1>
                  <p className="text-gray-300">By {paperInfo.author}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <div className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm">
                    v{paperInfo.version}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {paperInfo.date} • {paperInfo.pages} pages
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents Sidebar */}
            <div className="lg:w-1/4">
              {!loading && (
                <div className="sticky top-32">
                  <TableOfContents sections={tableOfContents} />
                  
                  <div className="mt-6">
                    <PdfDownloadButton 
                      fileName={`${id}-whitepaper`}
                      productName={paperInfo.title}
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Main content */}
            <div className="lg:w-3/4">
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="h-10 bg-gray-700/30 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-6 bg-gray-700/30 rounded-lg w-1/3 animate-pulse"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-full animate-pulse mt-8"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-700/30 rounded-lg w-2/3 animate-pulse"></div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="prose prose-invert max-w-none whitepaper-content"
                >
                  <ReactMarkdown>{content}</ReactMarkdown>
                </motion.div>
              )}
              
              {/* Recommended Whitepapers */}
              {!loading && (
                <RecommendedWhitepapers 
                  currentId={id as string} 
                  whitepapers={whitepapersInfo}
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
