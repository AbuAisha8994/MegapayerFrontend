import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface WhitepaperHeroProps {
  title: string;
  subtitle?: string;
  showLink?: boolean;
}

const WhitepaperHero: React.FC<WhitepaperHeroProps> = ({ 
  title, 
  subtitle,
  showLink = true
}) => {
  return (
    <div className="py-20 pt-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 transform -translate-y-1/2"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
      
      {/* Document icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-[20%] text-white/5"
          animate={{ 
            y: [0, -15, 0], 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg className="w-24 h-24 md:w-40 md:h-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-[15%] text-white/5"
          animate={{ 
            y: [0, 20, 0], 
            rotate: [0, -7, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <svg className="w-16 h-16 md:w-28 md:h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </motion.div>
        
        {/* Code document */}
        <motion.div 
          className="absolute top-2/3 right-[10%] text-white/5"
          animate={{ 
            y: [0, 10, 0], 
            rotate: [0, 3, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          <svg className="w-20 h-20 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {showLink && (
            <div className="flex justify-center">
              <Link 
                href="/whitepapers"
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Browse All Whitepapers
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WhitepaperHero;
