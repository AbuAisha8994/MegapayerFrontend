import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const router = useRouter();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  const navigationLinks = [
    { name: "Blockchain", href: "/blockchain" },
    { name: "Social Media", href: "/social-media" },
    { name: "P2P Exchange", href: "/p2p-exchange" },
    { name: "DEX", href: "/dex" },
    { name: "Wallet", href: "/wallet" },
    { name: "Stablecoin", href: "/stablecoin" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-lg py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with enhanced hover effects */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-40 overflow-visible">
              {/* Enhanced cosmic background effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-75 blur-md rounded-full group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>

              {/* Enhanced orbiting particles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary group-hover:w-2 group-hover:h-2 transition-all"
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-1 h-1 rounded-full bg-secondary group-hover:w-1.5 group-hover:h-1.5 transition-all"
                  animate={{
                    x: [0, -15, 0, 15, 0],
                    y: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                {/* New particle appears on hover */}
                <motion.div
                  className="absolute w-0 h-0 opacity-0 group-hover:w-2 group-hover:h-2 group-hover:opacity-100 rounded-full bg-cyan-400 transition-all duration-300"
                  animate={{
                    x: [5, 15, 5, -5, 5],
                    y: [5, -5, 15, 5, 5],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
              </div>

              {/* Logo content with enhanced hover effects */}
              <div className="absolute inset-0 flex items-center">
                <div className="relative flex items-center bg-dark/70 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 shadow-lg shadow-primary/20 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                  {/* M symbol with enhanced cosmic effect */}
                  <div className="relative mr-2">
                    <span className="text-3xl font-black text-white group-hover:text-primary transition-colors duration-300">
                      M
                    </span>

                    {/* Enhanced glowing dot */}
                    <motion.div
                      className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full group-hover:scale-150"
                      animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Enhanced light rays */}
                    <motion.div
                      className="absolute -inset-1 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 group-hover:blur-md"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* EGAPAYER text with hover effect */}
                  <div className="flex items-center">
                    <span className="text-lg font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      EGAPAYER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop navigation with enhanced hover effects */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => {
              const isActive = router.pathname === link.href;
              const isHovered = hoveredLink === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  } hover:transform hover:scale-110`}
                >
                  {link.name}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="navIndicator"
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        isActive ? "bg-primary/10" : "bg-white/5"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {/* Enhanced hover effect - subtle glow */}
                  {isHovered && !isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-lg -z-20 opacity-70 blur-sm bg-gradient-to-r from-primary/30 to-secondary/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side buttons with enhanced hover effects */}
          <div className="flex items-center space-x-4">
            <Link
              href="/whitepapers"
              className="hidden md:flex items-center text-gray-300 hover:text-white text-sm transition-all hover:transform hover:scale-110 group"
            >
              <svg
                className="w-4 h-4 mr-1 group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Whitepapers
            </Link>

            <Link
              href="/enterprise/contact"
              className="hidden sm:block text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Enterprise</span>
              {/* Dynamic hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-1"
                      : "-translate-y-0.5"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-1"
                      : "translate-y-0.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced hover effects */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="bg-dark/90 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-2xl">
                {/* Mobile menu items */}
                <nav className="flex flex-col space-y-2">
                  {navigationLinks.map((link) => {
                    const isActive = router.pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                          isActive
                            ? "bg-primary/20 text-white font-medium"
                            : "text-gray-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-primary/10 hover:text-white"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{link.name}</span>
                          <motion.svg
                            className="w-4 h-4 opacity-0 transition-opacity"
                            whileHover={{ opacity: 1 }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </motion.svg>
                        </div>
                      </Link>
                    );
                  })}

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>

                  <Link
                    href="/whitepapers"
                    className="px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Whitepapers
                  </Link>

                  <Link
                    href="/enterprise/contact"
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Enterprise Solutions
                  </Link>
                </nav>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <div className="text-xs text-gray-500">© 2025 Megapayer</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
