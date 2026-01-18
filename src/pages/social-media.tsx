import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const SocialMediaPage = () => {
  const features = [
    {
      title: "Privacy-First Design",
      description: "User data is encrypted and cryptographically protected. Users decide exactly what is shared.",
      icon: "🔒",
    },
    {
      title: "Content Ownership",
      description: "All content is cryptographically signed and verifiable on-chain. True ownership.",
      icon: "📜",
    },
    {
      title: "Direct Monetization",
      description: "Creators monetize through subscriptions, tips, or NFTs with minimal fees.",
      icon: "💎",
    },
    {
      title: "Censorship Resistance",
      description: "Content cannot be arbitrarily removed. Community governance determines policies.",
      icon: "🛡️",
    },
    {
      title: "DAO Governance",
      description: "Platform policies determined by community voting and decentralized governance.",
      icon: "🗳️",
    },
    {
      title: "Creator Economy",
      description: "Build sustainable businesses with direct audience relationships.",
      icon: "🚀",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Decentralized Social | Megapayer Privacy-First Platform</title>
        <meta
          name="description"
          content="Megapayer's decentralized social platform gives users control over their data, content ownership, and direct monetization in a censorship-resistant environment."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-card-3 {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-18px) rotate(-1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .neon-text {
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(138, 43, 226, 0.3);
        }
        .gradient-icon {
          background: linear-gradient(135deg, #00f0ff, #8a2be2);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050505' }}>
        {/* Network Mesh Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient Glow */}
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        />

        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                Decentralized Social Layer
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white neon-text leading-tight">
                Censorship-Resistant
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Social Layer
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                A revolutionary social network that puts users in control through
                blockchain-based content ownership and privacy-preserving technology.
                Own your data, monetize your content, connect freely.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Neon Gradient Border Button */}
                <Link
                  href="/enterprise/contact"
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
                  <span className="relative z-10 text-white group-hover:text-white">
                    Join Waitlist
                  </span>
                </Link>

                <Link
                  href="/whitepaper/social-media"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                >
                  Read Whitepaper
                </Link>
              </div>
            </motion.div>

            {/* RIGHT: Floating Glass Cards (Holographic Feed) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[550px]"
            >
              {/* Background Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(138, 43, 226, 0.25) 0%, transparent 60%)',
                  filter: 'blur(50px)',
                }}
              />

              {/* Floating Card 1 */}
              <div
                className="absolute top-[10%] left-[10%] w-[280px] p-5 rounded-2xl border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  animation: 'float-card 5s ease-in-out infinite',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* NFT Frame Avatar */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))',
                      border: '2px solid rgba(0, 240, 255, 0.5)',
                      boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
                    }}
                  >
                    🎨
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">crypto_artist</div>
                    <div className="text-gray-500 text-xs">@artist.mpc</div>
                  </div>
                  {/* Encrypted Badge */}
                  <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <span>🔐</span>
                    <span>Encrypted</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">Just minted my latest collection on Megapayer! 🚀 True ownership finally.</p>
                <div className="flex gap-4 text-gray-500 text-xs">
                  <span>❤️ 2.4k</span>
                  <span>💬 89</span>
                  <span>🔄 156</span>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                className="absolute top-[35%] right-[5%] w-[260px] p-5 rounded-2xl border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  animation: 'float-card-2 6s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(0, 240, 255, 0.2))',
                      border: '2px solid rgba(138, 43, 226, 0.5)',
                      boxShadow: '0 0 15px rgba(138, 43, 226, 0.3)',
                    }}
                  >
                    💻
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">dev_whale</div>
                    <div className="text-gray-500 text-xs">@whale.mpc</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <span>🔐</span>
                    <span>Encrypted</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">No algorithms, no censorship. This is how social should be.</p>
              </div>

              {/* Floating Card 3 */}
              <div
                className="absolute bottom-[10%] left-[15%] w-[270px] p-5 rounded-2xl border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  animation: 'float-card-3 7s ease-in-out infinite',
                  animationDelay: '0.5s',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))',
                      border: '2px solid rgba(0, 240, 255, 0.5)',
                      boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
                    }}
                  >
                    🎵
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">music_dao</div>
                    <div className="text-gray-500 text-xs">@music.mpc</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <span>🔐</span>
                    <span>Encrypted</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Earning directly from fans. No middlemen. 💰</p>
                <div className="flex gap-4 text-gray-500 text-xs mt-3">
                  <span>❤️ 5.1k</span>
                  <span>💬 234</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-24" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Take <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Control</span> of Your Social Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional platforms exploit your data. Our decentralized approach restores power to users and creators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                style={{ background: 'rgba(255, 255, 255, 0.02)' }}
              >
                <div
                  className="text-4xl mb-6 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(138, 43, 226, 0.1))',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
              Ready to Join the Future of Social?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Own your content, protect your privacy, and connect directly with your
              audience in a truly decentralized social ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/enterprise/contact"
                className="px-10 py-4 font-bold rounded-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                }}
              >
                Join Waitlist
              </Link>
              <Link
                href="/whitepaper/social-media"
                className="px-10 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                Read Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMediaPage;
