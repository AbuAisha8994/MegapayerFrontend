import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PdfDownloadButtonProps {
  fileName: string;
  productName: string;
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ fileName, productName }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  
  // Simulate download start with progress animation
  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          // After "download" completes
          setTimeout(() => {
            setIsDownloading(false);
            // In a real app, this would trigger the actual file download
            const link = document.createElement('a');
            link.href = `/whitepapers/${fileName}.pdf`;
            link.download = `${productName} Whitepaper - 2025.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  return (
    <div className="inline-block">
      {!isDownloading ? (
        <motion.button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg text-white font-medium shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Full Whitepaper (PDF)
        </motion.button>
      ) : (
        <div className="w-full max-w-xs">
          <div className="mb-2 flex justify-between items-center text-sm">
            <span className="text-white font-medium">Downloading...</span>
            <span className="text-primary">{Math.round(downloadProgress)}%</span>
          </div>
          <div className="w-full h-2 bg-dark/50 rounded-full">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${downloadProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfDownloadButton;
