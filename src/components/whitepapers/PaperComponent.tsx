import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PaperProps {
  id: string;
  title: string;
  description: string;
  version: string;
  date: string;
  pages: number;
  icon: React.ReactNode;
  index: number;
}

const PaperComponent: React.FC<PaperProps> = ({
  id,
  title,
  description,
  version,
  date,
  pages,
  icon,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-dark/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <motion.div 
            className="p-3 rounded-lg bg-primary/10"
            animate={{ 
              backgroundColor: isHovered ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)' 
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <div className="flex items-center space-x-2">
            <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded-full">v{version}</span>
            <span className="text-sm text-gray-400">{pages} pages</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>
        
        <div className="text-sm text-gray-500 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: {date}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <Link 
            href={`/whitepaper/${id}`}
            className="text-primary hover:text-primary-light transition-colors inline-flex items-center"
          >
            <span>Read Whitepaper</span>
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </Link>
          
          <a 
            href={`/whitepapers/${id}-whitepaper.pdf`} 
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
      </div>
    </motion.div>
  );
};

export default PaperComponent;
