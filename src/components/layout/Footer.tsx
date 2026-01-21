import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#030306' }}>
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes grid-flow {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
        @keyframes cube-rise {
          0% { opacity: 0; transform: translateY(20px) rotateX(-10deg) rotateY(20deg); }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-30px) rotateX(-10deg) rotateY(20deg); }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        .footer-link {
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
          transition: all 0.3s;
        }
        .footer-link:hover {
          color: #00ff00 !important;
          text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
          animation: glitch 0.3s ease;
        }
        .wireframe-cube {
          animation: cube-rise 4s ease-in-out infinite;
        }
      `}</style>

      {/* LAYER 1: Retro-Wave Grid (The Matrix Floor) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden pointer-events-none"
        style={{ perspective: '500px' }}
      >
        <div
          className="absolute w-[200%] h-[400px] left-[-50%]"
          style={{
            background: `
              linear-gradient(90deg, transparent 49%, rgba(139, 92, 246, 0.3) 49%, rgba(139, 92, 246, 0.3) 51%, transparent 51%),
              linear-gradient(0deg, transparent 49%, rgba(6, 182, 212, 0.2) 49%, rgba(6, 182, 212, 0.2) 51%, transparent 51%)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
            animation: 'grid-flow 3s linear infinite',
          }}
        />
        {/* Horizon glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(139, 92, 246, 0.15), transparent)',
          }}
        />
      </div>

      {/* LAYER 2: Holographic Wireframe Cubes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '10%', bottom: '20%', delay: '0s', size: 30 },
          { left: '25%', bottom: '35%', delay: '1s', size: 24 },
          { left: '45%', bottom: '25%', delay: '2s', size: 28 },
          { left: '65%', bottom: '40%', delay: '0.5s', size: 22 },
          { left: '80%', bottom: '30%', delay: '1.5s', size: 26 },
          { left: '90%', bottom: '20%', delay: '2.5s', size: 20 },
        ].map((cube, i) => (
          <div
            key={i}
            className="absolute wireframe-cube"
            style={{
              left: cube.left,
              bottom: cube.bottom,
              width: cube.size,
              height: cube.size,
              animationDelay: cube.delay,
              border: '1px solid rgba(6, 182, 212, 0.5)',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.3), inset 0 0 10px rgba(139, 92, 246, 0.2)',
              transform: 'rotateX(-10deg) rotateY(20deg)',
            }}
          />
        ))}
      </div>

      {/* LAYER 3: Content with Glassmorphism */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Socials */}
          <div
            className="md:col-span-1 p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <Link href="/" className="block mb-4">
              <span className="font-mono text-2xl font-bold text-white">
                MEGAPAYER
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 font-mono">
              {t.footer_section.brand_desc}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { href: "https://x.com/megapayer", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { href: "https://t.me/megapayer", icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.716-.962 4.037-1.362 5.357-.169.558-.312 1.023-.453 1.432-.162.473-.303.881-.421 1.224-.229.659-.401.741-.669.756-.577.034-1.013-.377-1.57-.738-.871-.568-1.364-.921-2.207-1.471-.978-.644-.345-1.001.214-1.583.146-.152 2.669-2.543 2.717-2.762.006-.027.012-.127-.048-.18-.06-.052-.148-.034-.212-.02-.09.021-1.525.967-4.303 2.838-.406.277-.774.412-1.103.403-.363-.009-1.058-.2-1.578-.365-.636-.203-1.142-.311-1.099-.658.023-.184.316-.373.879-.567 3.442-1.508 5.736-2.506 6.884-2.995 3.279-1.399 3.961-1.643 4.404-1.65.098-.002.319.023.461.141.119.099.152.231.169.331.022.13.021.301.002.451z" },
                { href: "https://www.youtube.com/@Megapayer_io", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#00ff00] transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px #00ff00)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)'}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Columns */}
          {t.footer_section.columns.map((col, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
              }}
            >
              <h3 className="text-white font-mono font-bold mb-4 text-sm tracking-wider">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="footer-link text-gray-500 text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-gray-600 font-mono text-sm">
              © {t.footer_section.bottom.rights}
            </span>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/coming-soon" className="footer-link text-gray-500 text-sm">
                {t.footer_section.bottom.early}
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/support" className="footer-link text-gray-500 text-sm">
                {t.footer_section.bottom.support}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
