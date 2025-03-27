import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhitepaperSearchProps {
  onSearch: (term: string) => void;
  initialValue?: string;
}

const WhitepaperSearch: React.FC<WhitepaperSearchProps> = ({ 
  onSearch, 
  initialValue = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [isTyping, setIsTyping] = useState(false);
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== initialValue) {
        onSearch(searchTerm);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, onSearch, initialValue]);

  // Handle typing state for animation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search whitepapers..." 
          className="w-full px-6 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 pl-12"
          value={searchTerm}
          onChange={handleChange}
        />
        
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Animated typing indicator */}
      <AnimatePresence>
        {isTyping && (
          <motion.div 
            className="mt-2 text-sm text-primary flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg className="w-4 h-4 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6 11.8c-.7-.7-1.9-.7-2.6 0L9 16.9V7.7c0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.7v13.6c0 1 .8 1.7 1.7 1.7h13.6c1 0 1.7-.8 1.7-1.7 0-1-.8-1.7-1.7-1.7h-9.2l6.8-6.8c.8-.7.8-1.9.2-2.5z" />
            </svg>
            Searching...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhitepaperSearch;
