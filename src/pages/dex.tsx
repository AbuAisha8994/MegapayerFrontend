import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";

const DEXPage = () => {
  const { t } = useLanguage();

  // Feature icons
  const featureIcons = ["🔄", "💧", "⚡"];

  return (
    <Layout>
      <Head>
        <title>Megapayer DEX | Multi-Chain Decentralized Exchange</title>
        <meta
          name="description"
          content="Megapayer's Multi-Chain DEX provides seamless cross-chain trading with non-custodial security across 30+ blockchains."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes orbit-1 {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes orbit-2 {
          0% { transform: rotateX(70deg) rotateY(60deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateY(60deg) rotateZ(-360deg); }
        }
        @keyframes core-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(0,240,255,0.3); }
          50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(255,255,255,0.8), 0 0 100px rgba(138,43,226,0.4); }
        }
        @keyframes token-orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes token-orbit-2 {
          0% { transform: rotate(180deg) translateX(130px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(130px) rotate(-540deg); }
        }
        @keyframes token-orbit-3 {
          0% { transform: rotate(90deg) translateX(80px) rotate(-90deg); }
          100% { transform: rotate(450deg) translateX(80px) rotate(-450deg); }
        }
        .neon-title {
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(138, 43, 226, 0.3);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050505' }}>
        {/* Central Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(0, 240, 255, 0.2) 40%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
                {t.dex_page.hero.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  {t.dex_page.hero.subtitle.split(' ')[0]} {t.dex_page.hero.subtitle.split(' ')[1]}
                </span>
                <br />
                <span className="text-white neon-title">{t.dex_page.hero.subtitle.split(' ').slice(2).join(' ') || t.dex_page.hero.subtitle.split(' ')[2] || 'Limits'}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-lg">
                {t.dex_page.hero.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Neon Glow Border Button */}
                <Link
                  href="/dex/coming-soon"
                  className="relative px-8 py-4 font-bold rounded-xl overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                      padding: '2px',
                    }}
                  />
                  <div
                    className="absolute inset-[2px] rounded-[10px] bg-[#050505] group-hover:bg-transparent transition-all duration-300"
                  />
                  <span className="relative z-10 text-white">
                    {t.dex_page.cta.buttons.primary}
                  </span>
                </Link>

                <Link
                  href="/whitepaper/dex"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                >
                  {t.dex_page.cta.buttons.secondary}
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: Orbital Swap Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center"
              style={{ perspective: '800px' }}
            >
              {/* Ambient glow */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Orbit Ring 1 - Cyan */}
              <div
                className="absolute w-[250px] h-[250px] rounded-full"
                style={{
                  border: '2px solid rgba(0, 240, 255, 0.4)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.1)',
                  animation: 'orbit-1 15s linear infinite',
                  transformStyle: 'preserve-3d',
                }}
              />

              {/* Orbit Ring 2 - Purple */}
              <div
                className="absolute w-[320px] h-[320px] rounded-full"
                style={{
                  border: '2px solid rgba(138, 43, 226, 0.4)',
                  boxShadow: '0 0 20px rgba(138, 43, 226, 0.3), inset 0 0 20px rgba(138, 43, 226, 0.1)',
                  animation: 'orbit-2 20s linear infinite',
                  transformStyle: 'preserve-3d',
                }}
              />

              {/* Center Core */}
              <div
                className="absolute w-16 h-16 rounded-full bg-white flex items-center justify-center z-10"
                style={{
                  animation: 'core-pulse 3s ease-in-out infinite',
                }}
              >
                <span className="text-2xl">⚡</span>
              </div>

              {/* Orbiting Tokens */}
              <div
                className="absolute w-12 h-12 rounded-full flex items-center justify-center z-20"
                style={{
                  background: 'rgba(247, 147, 26, 0.2)',
                  border: '2px solid #f7931a',
                  boxShadow: '0 0 15px rgba(247, 147, 26, 0.5)',
                  animation: 'token-orbit 8s linear infinite',
                }}
              >
                <span className="font-bold text-sm" style={{ color: '#f7931a' }}>₿</span>
              </div>

              <div
                className="absolute w-12 h-12 rounded-full flex items-center justify-center z-20"
                style={{
                  background: 'rgba(98, 126, 234, 0.2)',
                  border: '2px solid #627eea',
                  boxShadow: '0 0 15px rgba(98, 126, 234, 0.5)',
                  animation: 'token-orbit-2 12s linear infinite',
                }}
              >
                <span className="font-bold text-sm" style={{ color: '#627eea' }}>Ξ</span>
              </div>

              <div
                className="absolute w-10 h-10 rounded-full flex items-center justify-center z-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))',
                  border: '2px solid #00f0ff',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
                  animation: 'token-orbit-3 6s linear infinite',
                }}
              >
                <span className="font-bold text-xs text-cyan-400">M</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: t.dex_page.stats.liquidity.val, label: t.dex_page.stats.liquidity.label },
              { value: t.dex_page.stats.volume.val, label: t.dex_page.stats.volume.label },
              { value: t.dex_page.stats.chains.val, label: t.dex_page.stats.chains.label },
              { value: t.dex_page.stats.fee.val, label: t.dex_page.stats.fee.label },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '2px solid #00f0ff',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              {t.dex_page.hero.title.split(' ').slice(0, 2).join(' ')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>{t.dex_page.hero.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.dex_page.hero.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.dex_page.features.cards.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1))',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
                  }}
                >
                  {featureIcons[i] || "✨"}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="py-24" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Non-Custodial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">{t.dex_page.security.title}</h3>
              <p className="text-gray-400 mb-8">
                {t.dex_page.security.desc}
              </p>
              <ul className="space-y-4">
                {t.dex_page.security.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                      }}
                    >
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cross-Chain Advantages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(138, 43, 226, 0.05)',
                border: '1px solid rgba(138, 43, 226, 0.2)',
              }}
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#8a2be2' }}>
                {t.dex_page.advantages.title}
              </h3>
              <div className="space-y-6">
                {t.dex_page.advantages.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                      style={{
                        background: 'rgba(138, 43, 226, 0.2)',
                        color: '#8a2be2',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.dex_page.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              {t.dex_page.cta.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/dex/coming-soon"
                className="px-10 py-4 font-bold rounded-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                }}
              >
                {t.dex_page.cta.buttons.primary}
              </Link>
              <Link
                href="/dex/coming-soon"
                className="px-10 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                {t.dex_page.cta.buttons.secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DEXPage;
