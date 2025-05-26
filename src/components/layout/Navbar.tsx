import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

type DropdownState = {
  [key: string]: boolean;
};

type SubmenuItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
  isExternal?: boolean;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({});
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<DropdownState>({});
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const router = useRouter();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close all dropdowns when clicking outside
      Object.keys(dropdownOpen).forEach((key) => {
        if (
          dropdownOpen[key] &&
          dropdownRef.current[key] &&
          !dropdownRef.current[key]?.contains(event.target as Node)
        ) {
          setDropdownOpen((prev) => ({ ...prev, [key]: false }));
        }
      });

      // Close language dropdown when clicking outside
      if (languageDropdownOpen) {
        const langDropdown = document.getElementById("language-dropdown");
        if (langDropdown && !langDropdown.contains(event.target as Node)) {
          setLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen, languageDropdownOpen]);

  const navigationLinks: NavItem[] = [
    {
      name: "Build",
      href: "/build",
      submenu: [
        { name: "Start Building", href: "/build/start" },
        { name: "MPC ID", href: "/build/mpc-id" },
        { name: "Zenith", href: "/build/zenith" },
        { name: "NFT Marketplace", href: "/build/nft" },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      submenu: [
        { name: "DEX", href: "/dex" },
        { name: "Wallet", href: "/wallet" },
        { name: "P2P Exchange", href: "/p2p-exchange" },
        { name: "Stablecoin", href: "/stablecoin" },
        { name: "MPC Coin", href: "/solutions/mpc-coin" },
      ],
    },
    {
      name: "Developers",
      href: "/developers",
      submenu: [
        { name: "SDK / API", href: "/developers/sdk" },
        {
          name: "GitHub",
          href: "https://github.com/megapayer",
          isExternal: true,
        },
        { name: "Testnet", href: "/developers/testnet" },
        { name: "Explorer", href: "/developers/explorer" },
        { name: "Bridge", href: "/developers/bridge" },
      ],
    },
    {
      name: "Community",
      href: "/community",
      submenu: [
        {
          name: "X (Twitter)",
          href: "https://twitter.com/megapayer",
          isExternal: true,
        },
        { name: "Telegram", href: "https://t.me/megapayer", isExternal: true },
        {
          name: "Discord",
          href: "https://discord.gg/megapayer",
          isExternal: true,
        },
        { name: "Airdrop", href: "/community/airdrop" },
        { name: "Governance / DAO", href: "/community/governance" },
      ],
    },
    {
      name: "Docs",
      href: "/docs",
      submenu: [
        { name: "Overview", href: "/docs/overview" },
        { name: "Tokenomics", href: "/docs/tokenomics" },
        { name: "Ecosystem Map", href: "/docs/ecosystem" },
        { name: "Roadmap", href: "/docs/roadmap" },
        { name: "Technical Documents", href: "/docs/technical" },
        { name: "Whitepaper", href: "/whitepapers" },
        { name: "Validator Guidelines", href: "/docs/validator-guidelines" },
        { name: "Fatwa", href: "/docs/fatwa" },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  const languages = [
    { name: "English", code: "en" },
    { name: "Türkçe", code: "tr" },
    { name: "Özbekçe", code: "uz" },
    { name: "Русский", code: "ru" },
  ];

  const handleToggleDropdown = (name: string) => {
    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [name]: !prev[name],
    }));
  };

  const handleToggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setLanguageDropdownOpen(false);
    // Here you would also implement the actual language change logic
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-lg py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced hover effects */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-[50px] w-[180px] overflow-visible">
              {/* Enhanced cosmic background effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-indigo-700/30 to-secondary/40 opacity-60 blur-sm rounded-full group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"></div>

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

              {/* Logo content with updated font styling */}
              <div className="absolute inset-0 flex items-center">
                <div className="relative flex items-center bg-dark/70 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 shadow-lg shadow-primary/20 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                  <div className="font-['Public_Sans'] tracking-wider text-white group-hover:text-primary transition-colors duration-300">
                    <span className="text-2xl font-black">Megapayer</span>
                  </div>

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
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop navigation with dropdown - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {navigationLinks.map((link) => {
                const hasSubmenu = link.submenu && link.submenu.length > 0;

                return (
                  <div
                    key={link.name}
                    className="relative"
                    ref={(el) => (dropdownRef.current[link.name] = el)}
                  >
                    <button
                      onClick={() =>
                        hasSubmenu && handleToggleDropdown(link.name)
                      }
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`relative px-2 py-2 text-sm rounded-lg transition-all duration-300 ${
                        router.pathname === link.href ||
                        router.pathname.startsWith(link.href + "/")
                          ? "text-white font-medium"
                          : "text-gray-300 hover:text-white"
                      } hover:transform hover:scale-105 flex items-center whitespace-nowrap`}
                    >
                      {link.name}
                      {hasSubmenu && (
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${
                            dropdownOpen[link.name] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}

                      {/* Hover/Active indicator */}
                      {(hoveredLink === link.name ||
                        router.pathname === link.href ||
                        router.pathname.startsWith(link.href + "/")) && (
                        <motion.div
                          layoutId="navIndicator"
                          className={`absolute inset-0 rounded-lg -z-10 ${
                            router.pathname === link.href ||
                            router.pathname.startsWith(link.href + "/")
                              ? "bg-primary/10"
                              : "bg-white/5"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </button>

                    {/* Dropdown menu */}
                    {hasSubmenu && (
                      <AnimatePresence>
                        {dropdownOpen[link.name] && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 min-w-[200px] bg-dark/95 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl z-50"
                          >
                            <div className="py-2">
                              {link.submenu?.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  target={
                                    item.isExternal ? "_blank" : undefined
                                  }
                                  rel={
                                    item.isExternal
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-white transition-colors"
                                >
                                  {item.name}
                                  {item.isExternal && (
                                    <svg
                                      className="w-3 h-3 ml-1"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Right side buttons with enhanced hover effects */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Language selector - Visible on desktop */}
            <div className="relative hidden lg:block" id="language-dropdown">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center text-sm text-gray-300 hover:text-white"
              >
                <span>{currentLanguage}</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    languageDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language dropdown menu */}
              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 bg-dark/95 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl z-50 py-1"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.name)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                          currentLanguage === lang.name
                            ? "text-primary"
                            : "text-gray-300"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Join Presale CTA - Desktop */}
            <Link
              href="/presale"
              className="hidden lg:inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Join Presale
            </Link>

            {/* Join Presale CTA - Mobile */}
            <Link
              href="/presale"
              className="sm:hidden px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-lg"
            >
              Join Presale
            </Link>

            {/* Mobile menu button */}
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
                    const hasSubmenu = link.submenu && link.submenu.length > 0;
                    const isActive =
                      router.pathname === link.href ||
                      router.pathname.startsWith(link.href + "/");

                    return (
                      <div key={link.name}>
                        <button
                          onClick={() =>
                            hasSubmenu
                              ? handleToggleMobileSubmenu(link.name)
                              : router.push(link.href)
                          }
                          className={`w-full px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                            isActive
                              ? "bg-primary/20 text-white font-medium"
                              : "text-gray-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-primary/10 hover:text-white"
                          } flex justify-between items-center`}
                        >
                          <span>{link.name}</span>
                          {hasSubmenu && (
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                mobileSubmenuOpen[link.name] ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </button>

                        {/* Mobile submenu */}
                        {hasSubmenu && mobileSubmenuOpen[link.name] && (
                          <div className="pl-4 mt-1 mb-2 space-y-1 border-l border-white/10">
                            {link.submenu?.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                target={item.isExternal ? "_blank" : undefined}
                                rel={
                                  item.isExternal
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg"
                              >
                                <span>{item.name}</span>
                                {item.isExternal && (
                                  <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>

                  {/* Language selector - Mobile */}
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-400 mb-2">Language</p>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.name)}
                          className={`px-3 py-2 text-sm rounded-lg ${
                            currentLanguage === lang.name
                              ? "bg-primary/30 text-white"
                              : "bg-dark/50 text-gray-300 hover:bg-dark/70"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href="/presale"
                    className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium"
                  >
                    Join Presale
                  </Link>
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
