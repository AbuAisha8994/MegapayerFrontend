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
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.682-.261.682-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.5267 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
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
