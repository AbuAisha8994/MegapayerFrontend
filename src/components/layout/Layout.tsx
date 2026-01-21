import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Megapayer | Complete Blockchain Ecosystem</title>
        <meta name="description" content="Megapayer offers a comprehensive blockchain ecosystem featuring a native blockchain, social media platform, P2P exchange, DEX, universal wallet, and stablecoin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Dark Navy Blue background */}
      <div className="fixed inset-0 -z-10" style={{ backgroundColor: '#0a0a14' }} />

      {/* Page content */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
