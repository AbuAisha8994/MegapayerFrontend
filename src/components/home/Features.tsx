import { useRef, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Fare takibi - GPU hızlandırmalı transform kullanır
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !glowRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
  }, []);

  // Kart verilerini burada tanımlıyoruz ki JSX temiz kalsın
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.features.cards.decentralized_title,
      desc: t.features.cards.decentralized_desc
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t.features.cards.integrated_title,
      desc: t.features.cards.integrated_desc
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t.features.cards.security_title,
      desc: t.features.cards.security_desc
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: t.features.cards.scalable_title,
      desc: t.features.cards.scalable_desc
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: t.features.cards.interop_title,
      desc: t.features.cards.interop_desc
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: t.features.cards.energy_title,
      desc: t.features.cards.energy_desc
    }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 overflow-hidden"
    >
      {/* Fare takip eden neon ışık efekti - düşük yoğunluklu */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
          opacity: 0,
          willChange: 'transform',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.features.title.replace('Megapayer', '').replace('megapayer', '')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"> Megapayer</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t.features.subtitle}
          </p>
        </div>

        {/* Kartlar Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-cyan-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Alt İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">6+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{t.features.stats.products}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{t.features.stats.blockchains}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{t.features.stats.uptime}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2025</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">{t.features.stats.launch}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
