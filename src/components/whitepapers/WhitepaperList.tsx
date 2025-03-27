import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Whitepaper {
  id: string;
  title: string;
  description: string;
  excerptLink: string;
  lastUpdated: string;
  version: string;
  pages: number;
  icon: string;
}

interface WhitepaperListProps {
  whitepapers: Whitepaper[];
  loading?: boolean;
}

const renderIcon = (iconName: string) => {
  switch(iconName) {
    case 'blockchain':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case 'social':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'p2p':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      );
    case 'dex':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case 'wallet':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'stablecoin':
      return (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const WhitepaperList: React.FC<WhitepaperListProps> = ({ whitepapers, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-pulse">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-5 bg-primary/20 rounded-full"></div>
                <div className="w-16 h-5 bg-gray-700/50 rounded-md"></div>
              </div>
            </div>
            <div className="h-7 bg-gray-700/50 rounded-md w-3/4 mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700/30 rounded-md w-full"></div>
              <div className="h-4 bg-gray-700/30 rounded-md w-full"></div>
              <div className="h-4 bg-gray-700/30 rounded-md w-2/3"></div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between">
              <div className="w-24 h-5 bg-primary/20 rounded-md"></div>
              <div className="w-12 h-5 bg-gray-700/40 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // If no whitepapers after filtering
  if (whitepapers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">No matching whitepapers</h3>
        <p className="text-gray-400 mb-6">
          No whitepapers match your search criteria. Try broadening your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {whitepapers.map((paper, index) => (
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
                {renderIcon(paper.icon)}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded-full">v{paper.version}</span>
                <span className="text-sm text-gray-400">{paper.pages} pages</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
            <p className="text-gray-400 mb-6 line-clamp-3">{paper.description}</p>
            
            <div className="text-sm text-gray-500 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: {paper.lastUpdated}
            </div>
          </div>
          
          <div className="border-t border-white/10 p-4 flex justify-between items-center">
            <Link 
              href={`/whitepaper/${paper.id}`}
              className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
            >
              Read Whitepaper
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <a 
              href={`/whitepapers/${paper.id}-whitepaper.pdf`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="ml-1 text-sm">PDF</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WhitepaperList;
