import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate initial page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Megapayer | Complete Blockchain Ecosystem</title>
        <meta name="description" content="Megapayer offers a comprehensive blockchain ecosystem featuring a native blockchain, social media platform, P2P exchange, DEX, universal wallet, and stablecoin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-dark overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50"></div>
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] opacity-40"></div>
        
        {/* Animated starfield - simplified for better performance */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 10}s`,
                animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Page content */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.main>
        
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
      
      {/* Global style for background animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default Layout;
