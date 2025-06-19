import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

// Define navigation item types with submenu support
type SubMenuItem = {
  name: string;
  href: string;
  isExternal?: boolean;
};

type NavItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
  isExternal?: boolean;
};

// Language options
type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
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

  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangMenuOpen(false);
    // Here you would normally implement language switching logic
    // For example, using i18n library or context
  };

  // Get current language display
  const getCurrentLanguage = () => {
    const lang = languages.find((l) => l.code === currentLang);
    return lang ? `${lang.flag} ${lang.code.toUpperCase()}` : "🇬🇧 EN";
  };

  const navigationLinks: NavItem[] = [
    {
      name: "Products",
      href: "#",
      submenu: [
        {
          name: "Megapayer Blockchain",
          href: "/blockchain",
        },
        {
          name: "Decentralized Social",
          href: "/social-media",
        },
        { name: "P2P Exchange", href: "/p2p-exchange" },
        { name: "Multi-Chain DEX", href: "/dex" },
        {
          name: "Universal Wallet",
          href: "/wallet/",
        },
        {
          name: "NFT Marketplace",
          href: "/coming-soon?product=NFT%20Marketplace&returnUrl=/",
        },
        { name: "Bridge", href: "/coming-soon?product=Bridge&returnUrl=/" },
      ],
    },
    {
      name: "Ecosystem",
      href: "#",
      submenu: [
        { name: "MPC Coin", href: "/token/mpc" },
        { name: "MPC ID", href: "/mpc-id" },
        { name: "Megapayer Explorer", href: "/explorer" },
        {
          name: "Partners & Integrations",
          href: "/coming-soon?product=Partners%20%26%20Integrations&returnUrl=/",
        },
      ],
    },
    {
      name: "Developers",
      href: "#",
      submenu: [
        { name: "Developer SDK / API", href: "/developers/getting-started" },
        {
          name: "GitHub",
          href: "https://github.com/megapayer",
          isExternal: true,
        },
        { name: "Explorer API", href: "/developers/getting-started" },
        {
          name: "Testnet & Faucet",
          href: "/coming-soon?product=Testnet%20%26%20Faucet&returnUrl=/",
        },
        {
          name: "Node Setup Guide",
          href: "/coming-soon?product=Node%20Setup%20Guide&returnUrl=/",
        },
      ],
    },
    {
      name: "Docs",
      href: "#",
      submenu: [
        { name: "Whitepapers", href: "/whitepapers" },
        { name: "Tokenomics", href: "/mpc-coin" },
        { name: "Roadmap", href: "/whitepaper/roadmap" },
        {
          name: "Pitch Deck",
          href: "/coming-soon?product=Pitch%20Deck&returnUrl=/",
        },
        {
          name: "Media Kit",
          href: "/coming-soon?product=Media%20Kit&returnUrl=/",
        },
        { name: "FAQ", href: "/support" },
      ],
    },
    {
      name: "Community",
      href: "#",
      submenu: [
        {
          name: "News & Blog",
          href: "/coming-soon?product=News%20%26%20Blog&returnUrl=/",
        },
        {
          name: "Airdrop & Campaigns",
          href: "/coming-soon?product=Airdrop%20%26%20Campaigns&returnUrl=/",
        },
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
        { name: "Careers", href: "/coming-soon?product=Careers&returnUrl=/" },
      ],
    },
  ];

  // Handle dropdown menu with delay for closing
  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(name);
  };

  const handleDropdownLeave = (name: string) => {
    // Add delay before closing dropdown
    const timeout = setTimeout(() => {
      if (openDropdown === name) {
        setOpenDropdown(null);
      }
    }, 300); // 300ms delay before closing

    setDropdownTimeout(timeout);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
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
        <div className="flex justify-between items-center">
          {/* Logo - Keep existing code */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-40 overflow-visible">
              {/* Cosmic background effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-75 blur-md rounded-full group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Orbiting particles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <motion.div
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary"
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
                  className="absolute w-1 h-1 rounded-full bg-secondary"
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
              </div>

              {/* Logo content */}
              <div className="absolute inset-0 flex items-center">
                <div className="relative flex items-center bg-dark/70 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 shadow-lg shadow-primary/20 group-hover:border-primary/30 transition-all duration-300">
                  {/* M symbol with cosmic effect */}
                  <div className="relative mr-2">
                    <span className="text-3xl font-black text-white">M</span>
                    <motion.div
                      className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full"
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
                    <motion.div
                      className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"
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
                  <div className="flex items-center">
                    <span className="text-lg font-bold tracking-wider text-white">
                      EGAPAYER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop navigation - Updated with improved hover behavior */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={() => handleDropdownLeave(item.name)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors duration-300 flex items-center ${
                    openDropdown === item.name
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu with improved hover behavior */}
                {item.submenu && (
                  <div
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={() => handleDropdownLeave(item.name)}
                    className={`absolute left-0 mt-2 w-64 rounded-xl bg-dark/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 p-2 ${
                      openDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        target={subItem.isExternal ? "_blank" : undefined}
                        rel={
                          subItem.isExternal ? "noopener noreferrer" : undefined
                        }
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {subItem.name}
                        {subItem.isExternal && (
                          <svg
                            className="w-3 h-3 ml-1 inline"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
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
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector - Updated to popup style */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-sm rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="mr-1">{getCurrentLanguage()}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    isLangMenuOpen ? "rotate-180" : ""
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

              {/* Language dropdown */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden bg-dark/95 backdrop-blur-md border border-white/10 shadow-2xl z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-3 flex items-center text-sm hover:bg-white/5 transition-colors ${
                          currentLang === lang.code
                            ? "text-white font-medium bg-primary/10"
                            : "text-gray-300"
                        }`}
                      >
                        <span className="mr-3 text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Launch App Button */}
            <Link
              href="/app"
              className="hidden sm:block text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 font-medium"
            >
              Launch App
            </Link>

            {/* Mobile menu toggle */}
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

      {/* Mobile menu - Updated for new structure */}
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
                <nav className="flex flex-col space-y-2">
                  {/* Mobile accordion menu */}
                  {navigationLinks.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex justify-between items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
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

                      {/* Mobile submenu */}
                      {item.submenu && openDropdown === item.name && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-white/10 pl-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.isExternal ? "_blank" : undefined}
                              rel={
                                subItem.isExternal
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg transition-colors"
                            >
                              {subItem.name}
                              {subItem.isExternal && (
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
                  ))}

                  {/* Language selection in mobile menu - Updated for multiple languages */}
                  <div className="px-4 py-3 mt-3 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2">
                      Select Language
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`px-3 py-2 flex flex-col items-center justify-center rounded hover:bg-white/5 transition-colors ${
                            currentLang === lang.code
                              ? "bg-primary/10 text-white font-medium border border-primary/30"
                              : "text-gray-300"
                          }`}
                        >
                          <span className="text-lg mb-1">{lang.flag}</span>
                          <span className="text-xs uppercase">{lang.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Launch App button in mobile menu */}
                  <Link
                    href="/app"
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-colors flex items-center justify-center mt-2"
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Launch App
                  </Link>
                </nav>

                {/* Footer in mobile menu */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://twitter.com/megapayer"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      href="https://github.com/megapayer"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      href="https://t.me/megapayer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l.135-2.618-1.386-1.386 3.21-8.164c.092-.232.232-.232.323-.232.185 0 .278.093.371.232.092.186.091.371 0 .557l-2.299 6.824 2.668-2.667c.464-.464 1.300-.464 1.764 0 .464.464.464 1.300 0 1.764l-4.812 4.812c-.231.185-.416.278-.647.278-.232 0-.417-.092-.627-.232z" />
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
