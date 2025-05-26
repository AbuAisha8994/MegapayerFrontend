import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark/50 to-dark backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <div className="font-['Public_Sans'] tracking-wider text-2xl font-bold">
                <span className="text-white">Megapayer</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6">
              Building the future of decentralized technology with a
              comprehensive blockchain ecosystem.
            </p>

            <div className="flex space-x-4 mb-6">
              <a
                href="https://x.com/megapayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/megapayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.716-.962 4.037-1.362 5.357-.169.558-.312 1.023-.453 1.432-.162.473-.303.881-.421 1.224-.229.659-.401.741-.669.756-.577.034-1.013-.377-1.57-.738-.871-.568-1.364-.921-2.207-1.471-.978-.644-.345-1.001.214-1.583.146-.152 2.669-2.543 2.717-2.762.006-.027.012-.127-.048-.18-.06-.052-.148-.034-.212-.02-.09.021-1.525.967-4.303 2.838-.406.277-.774.412-1.103.403-.363-.009-1.058-.2-1.578-.365-.636-.203-1.142-.311-1.099-.658.023-.184.316-.373.879-.567 3.442-1.508 5.736-2.506 6.884-2.995 3.279-1.399 3.961-1.643 4.404-1.65.098-.002.319.023.461.141.119.099.152.231.169.331.022.13.021.301.002.451z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Megapayer_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/megapayer.en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blockchain"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blockchain
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="/p2p-exchange"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  P2P Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/dex"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Multi-Chain DEX
                </Link>
              </li>
              <li>
                <Link
                  href="/wallet"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Universal Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/stablecoin"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Stablecoin
                </Link>
              </li>
              <li>
                <Link
                  href="/mpc-coin"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  MPC Coin
                </Link>
              </li>
              <li>
                <Link
                  href="/mpc-id"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  MPC ID
                </Link>
              </li>
              <li>
                <Link
                  href="/nft-marketplace"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  NFT Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/whitepapers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Developer Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link
                  href="/enterprise/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-all duration-300 mb-4 md:mb-0"
            >
              <span className="text-white font-medium">
                &copy; 2025 Megapayer. All rights reserved.
              </span>
            </motion.div>
            <div className="flex items-center">
              <Link
                href="/coming-soon"
                className="text-gray-400 hover:text-white transition-colors px-3 py-1"
              >
                Early Access
              </Link>
              <span className="text-gray-600 mx-2">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors px-3 py-1"
              >
                Status
              </a>
              <span className="text-gray-600 mx-2">•</span>
              <Link
                href="/support"
                className="text-gray-400 hover:text-white transition-colors px-3 py-1"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
