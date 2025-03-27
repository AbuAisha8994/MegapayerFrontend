import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const router = useRouter();
  
  // Auto-redirect after 15 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 15000);
    
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>Page Not Found | Megapayer</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Head>

      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* 404 Display */}
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold text-white opacity-10">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark/70 backdrop-blur-sm px-6 py-2 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-xl text-gray-300 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return to Homepage
                </Link>
                <Link href="/whitepapers" className="btn-secondary">
                  Browse Whitepapers
                </Link>
              </div>
              
              <div className="mt-16">
                <motion.div 
                  className="relative w-full h-2 bg-dark/50 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-primary"
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 15, ease: "linear" }}
                  />
                </motion.div>
                <p className="text-sm text-gray-400 mt-2">
                  Automatically returning to homepage in 15 seconds...
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="p-4 bg-dark/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <Link href="/blockchain" className="block text-center">
                <h3 className="font-bold mb-1">Blockchain</h3>
                <p className="text-xs text-gray-400">Explore our tech</p>
              </Link>
            </div>
            <div className="p-4 bg-dark/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <Link href="/social-media" className="block text-center">
                <h3 className="font-bold mb-1">Social Media</h3>
                <p className="text-xs text-gray-400">Decentralized platform</p>
              </Link>
            </div>
            <div className="p-4 bg-dark/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <Link href="/p2p-exchange" className="block text-center">
                <h3 className="font-bold mb-1">P2P Exchange</h3>
                <p className="text-xs text-gray-400">Trade directly</p>
              </Link>
            </div>
            <div className="p-4 bg-dark/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
              <Link href="/dex" className="block text-center">
                <h3 className="font-bold mb-1">DEX</h3>
                <p className="text-xs text-gray-400">Multi-chain trading</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
