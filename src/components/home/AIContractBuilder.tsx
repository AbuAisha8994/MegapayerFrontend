import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Terminal messages for infinite loop
const terminalMessages = [
  { text: "> Initializing Megapayer Chain...", color: "text-cyan-400" },
  { text: "> Compiling Smart Contract...", color: "text-cyan-400" },
  { text: "> Deploying to Mainnet...", color: "text-yellow-400" },
  { text: "> Success! Hash: 0x7f2e9a...b3c2", color: "text-green-400" },
];

const AIContractBuilder = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Infinite typing animation states
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Lightweight mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current || !glowRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate(${x - 175}px, ${y - 175}px)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Infinite Typewriter Effect
  useEffect(() => {
    if (!isInView) return;

    const currentMessage = terminalMessages[currentLineIndex];

    // Type each character
    if (currentCharIndex < currentMessage.text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 50); // typing speed
      return () => clearTimeout(typingTimeout);
    }

    // Line complete - add to displayed lines and move to next
    if (currentCharIndex === currentMessage.text.length) {
      const lineCompleteTimeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentMessage.text]);
        setCurrentCharIndex(0);

        // Check if we've shown all messages
        if (currentLineIndex === terminalMessages.length - 1) {
          // Wait, then reset for loop
          setTimeout(() => {
            setDisplayedLines([]);
            setCurrentLineIndex(0);
          }, 2000); // pause before restart
        } else {
          setCurrentLineIndex(prev => prev + 1);
        }
      }, 500); // pause between lines
      return () => clearTimeout(lineCompleteTimeout);
    }
  }, [isInView, currentLineIndex, currentCharIndex]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 overflow-hidden"
    >
      {/* Glassmorphism Container */}
      <div
        className="relative mx-4 md:mx-8 rounded-3xl border border-white/10"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        {/* Mouse-following Neon Glow */}
        <div
          ref={glowRef}
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)',
            opacity: 0,
            willChange: 'transform',
          }}
        />

        <div className="relative z-10 py-16 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 border border-purple-500/30 rounded-full text-purple-400 mb-6">
              {t.ai_section.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.ai_section.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.ai_section.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {t.ai_section.features.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 p-1.5 bg-purple-500/20 rounded-full mt-1.5 mr-4">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/developers/getting-started"
                className="inline-flex items-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-500 hover:to-purple-600 transition-all duration-300 group"
              >
                <span>{t.ai_section.button}</span>
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Terminal with Infinite Typing Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="bg-[#1a1a1a] border-b border-white/5 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="mx-auto text-gray-500 text-sm font-mono">
                    megapayer-cli
                  </div>
                </div>

                {/* Terminal content - Infinite Typing */}
                <div className="p-6 font-mono text-sm min-h-[280px]">
                  {/* Previously typed lines */}
                  {displayedLines.map((line, i) => (
                    <div
                      key={i}
                      className={`mb-2 ${terminalMessages[i]?.color || 'text-cyan-400'}`}
                    >
                      {line}
                    </div>
                  ))}

                  {/* Currently typing line */}
                  {displayedLines.length < terminalMessages.length && (
                    <div className={`mb-2 ${terminalMessages[currentLineIndex]?.color || 'text-cyan-400'}`}>
                      {terminalMessages[currentLineIndex].text.substring(0, currentCharIndex)}
                      <span
                        className={`inline-block w-2.5 h-5 bg-green-400 ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>
                  )}

                  {/* Blinking cursor when all done (before reset) */}
                  {displayedLines.length === terminalMessages.length && (
                    <div className="text-green-400">
                      <span
                        className={`inline-block w-2.5 h-5 bg-green-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContractBuilder;
