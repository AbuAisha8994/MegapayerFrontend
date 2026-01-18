import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const P2PExchangePage = () => {
  const securityFeatures = [
    {
      title: "Escrow Protection",
      description: "Smart contract escrow holds funds securely until both parties fulfill obligations. Zero counterparty risk.",
      icon: "🛡️",
    },
    {
      title: "Dispute Resolution",
      description: "Decentralized arbitration system resolves conflicts fairly with community validators.",
      icon: "⚖️",
    },
    {
      title: "Verified Merchants",
      description: "Reputation system and verified badges ensure you trade with trusted counterparties.",
      icon: "✓",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Megapayer P2P Exchange | Zero-Fee Peer-to-Peer Trading</title>
        <meta
          name="description"
          content="Experience direct peer-to-peer trading with Megapayer's P2P Exchange. Smart contract escrow protection and instant settlement."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes pulse-shield {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes rotate-shield {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes send-asset-left {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(80px); opacity: 1; }
          51% { opacity: 0; }
          100% { transform: translateX(80px); opacity: 0; }
        }
        @keyframes send-asset-right {
          0% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-80px); opacity: 1; }
          51% { opacity: 0; }
          100% { transform: translateX(-80px); opacity: 0; }
        }
        @keyframes receive-asset-left {
          0%, 50% { opacity: 0; transform: translateX(0); }
          51% { opacity: 1; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes receive-asset-right {
          0%, 50% { opacity: 0; transform: translateX(0); }
          51% { opacity: 1; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 157, 0.4); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 157, 0.8); }
        }
        .neon-title {
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(138, 43, 226, 0.3);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050505' }}>
        {/* Spotlight Glow - Top Right */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 50%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
                Trustless P2P Trading
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white neon-title leading-tight">
                Zero-Fee
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Peer-to-Peer
                </span>
                <br />
                Trading
              </h1>

              <p className="text-xl text-gray-400 mb-4 max-w-lg">
                Escrow-protected transactions with instant settlement.
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-lg">
                Connect directly with traders worldwide. Smart contract escrow ensures
                secure, trustless transactions with built-in dispute resolution.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Neon Gradient Border Button */}
                <Link
                  href="/p2p-exchange/coming-soon"
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
                    Start Trading
                  </span>
                </Link>

                <Link
                  href="/whitepaper/p2p-exchange"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                >
                  Read Whitepaper
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: "0%", label: "Trading Fees" },
                  { value: "200+", label: "Payment Methods" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div
                      className="text-2xl md:text-3xl font-black mb-1"
                      style={{ color: '#00ff9d' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Escrow Shield Simulation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center"
            >
              {/* Background Glow */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 255, 157, 0.15) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Buyer Node - Left */}
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '3px solid #00f0ff',
                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                  }}
                >
                  👤
                </div>
                <div className="text-center mt-3 text-cyan-400 font-semibold text-sm">BUYER</div>

                {/* Asset sending to center */}
                <div
                  className="absolute top-1/2 left-full ml-4 w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    animation: 'send-asset-left 3s ease-in-out infinite',
                    boxShadow: '0 0 10px #00f0ff',
                  }}
                />
                {/* Asset receiving from center */}
                <div
                  className="absolute top-1/2 left-full ml-4 w-3 h-3 rounded-full bg-green-400"
                  style={{
                    animation: 'receive-asset-left 3s ease-in-out infinite',
                    boxShadow: '0 0 10px #00ff9d',
                  }}
                />
              </div>

              {/* Escrow Shield - Center */}
              <div className="relative">
                {/* Rotating outer ring */}
                <div
                  className="absolute -inset-8 rounded-full border-2 border-dashed"
                  style={{
                    borderColor: 'rgba(138, 43, 226, 0.3)',
                    animation: 'rotate-shield 20s linear infinite',
                  }}
                />

                {/* Shield container */}
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.2), rgba(138, 43, 226, 0.2))',
                    border: '3px solid #00ff9d',
                    animation: 'glow-pulse 2s ease-in-out infinite',
                  }}
                >
                  <div className="text-5xl">🛡️</div>
                </div>

                <div className="text-center mt-4">
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(0, 255, 157, 0.2)',
                      color: '#00ff9d',
                      border: '1px solid rgba(0, 255, 157, 0.3)',
                    }}
                  >
                    ESCROW
                  </span>
                </div>
              </div>

              {/* Seller Node - Right */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: 'rgba(0, 255, 157, 0.1)',
                    border: '3px solid #00ff9d',
                    boxShadow: '0 0 30px rgba(0, 255, 157, 0.5)',
                  }}
                >
                  💼
                </div>
                <div className="text-center mt-3 font-semibold text-sm" style={{ color: '#00ff9d' }}>SELLER</div>

                {/* Asset sending to center */}
                <div
                  className="absolute top-1/2 right-full mr-4 w-3 h-3 rounded-full bg-green-400"
                  style={{
                    animation: 'send-asset-right 3s ease-in-out infinite',
                    boxShadow: '0 0 10px #00ff9d',
                  }}
                />
                {/* Asset receiving from center */}
                <div
                  className="absolute top-1/2 right-full mr-4 w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    animation: 'receive-asset-right 3s ease-in-out infinite',
                    boxShadow: '0 0 10px #00f0ff',
                  }}
                />
              </div>

              {/* Connection lines */}
              <div
                className="absolute top-1/2 left-[25%] w-[20%] h-px"
                style={{ background: 'linear-gradient(90deg, #00f0ff, transparent)' }}
              />
              <div
                className="absolute top-1/2 right-[25%] w-[20%] h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00ff9d)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECURITY GRID */}
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
              Military-Grade <span style={{
                background: 'linear-gradient(135deg, #00ff9d, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Security</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every transaction protected by smart contract escrow and decentralized verification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.1), rgba(138, 43, 226, 0.1))',
                    border: '1px solid rgba(0, 255, 157, 0.3)',
                    boxShadow: '0 0 30px rgba(0, 255, 157, 0.2)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(0, 255, 157, 0.03)',
                border: '1px solid rgba(0, 255, 157, 0.15)',
              }}
            >
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#00ff9d' }}>
                How P2P Trading Works
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Post or Browse Offers", desc: "Create your trading ad or browse existing offers worldwide." },
                  { step: "2", title: "Initiate Trade", desc: "Start a trade and lock crypto in smart contract escrow." },
                  { step: "3", title: "Make Payment", desc: "Send payment using your preferred method." },
                  { step: "4", title: "Release & Complete", desc: "Crypto is automatically released to buyer after confirmation." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{
                        background: 'rgba(0, 255, 157, 0.15)',
                        color: '#00ff9d',
                        border: '1px solid rgba(0, 255, 157, 0.3)',
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Global Payment Methods</h3>
              <p className="text-gray-400 mb-8">
                Trade using 200+ payment methods across different countries and regions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Digital Payments", items: ["PayPal", "Wise", "Revolut", "Alipay"] },
                  { title: "Bank Transfers", items: ["SEPA", "ACH", "Wire", "Local Banks"] },
                  { title: "Mobile Money", items: ["M-Pesa", "GCash", "bKash", "Orange"] },
                  { title: "Gift Cards", items: ["Amazon", "iTunes", "Google Play", "Steam"] },
                ].map((category, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4 className="font-semibold text-white mb-2">{category.title}</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {category.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#0a0a14' }}>
        <div className="container mx-auto px-4 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Ready to Start P2P Trading?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Join the most secure peer-to-peer trading platform in Web3.
            </p>
            <Link
              href="/p2p-exchange/coming-soon"
              className="inline-block px-10 py-4 font-bold rounded-xl text-white"
              style={{
                background: 'linear-gradient(135deg, #00ff9d, #8a2be2)',
                boxShadow: '0 0 30px rgba(0, 255, 157, 0.3)',
              }}
            >
              Start Trading Now
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default P2PExchangePage;
