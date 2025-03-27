import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Whitepaper {
  id: string;
  title: string;
  date: string;
  version: string;
}

interface RecommendedWhitepapersProps {
  currentId: string;
  whitepapers: Record<string, Whitepaper>;
  maxDisplay?: number;
}

const RecommendedWhitepapers: React.FC<RecommendedWhitepapersProps> = ({ 
  currentId, 
  whitepapers, 
  maxDisplay = 3 
}) => {
  // Filter out the current whitepaper and get random recommendations
  const recommendations = Object.values(whitepapers)
    .filter(wp => wp.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, maxDisplay);

  return (
    <div className="mt-16 pt-10 border-t border-white/10">
      <h3 className="text-xl font-bold mb-6">Related Whitepapers</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark/20 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-sm text-gray-400">{paper.date}</div>
              <div className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">v{paper.version}</div>
            </div>
            
            <h4 className="font-semibold mb-4 line-clamp-2">{paper.title}</h4>
            
            <Link 
              href={`/whitepaper/${paper.id}`}
              className="text-primary hover:text-primary-light transition-colors text-sm inline-flex items-center"
            >
              Read Whitepaper
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedWhitepapers;
