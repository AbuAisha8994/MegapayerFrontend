import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const categories = [
    { id: "general", name: "General", icon: "❓" },
    { id: "account", name: "Account", icon: "👤" },
    { id: "technical", name: "Technical", icon: "🔧" },
    { id: "security", name: "Security", icon: "🔒" },
    { id: "payment", name: "Payment", icon: "💳" },
  ];

  const faqs = {
    general: [
      {
        question: "What is Megapayer?",
        answer:
          "Megapayer is a comprehensive blockchain ecosystem that includes a P2P Exchange, Multi-Chain DEX, Universal Wallet, and other integrated Web3 solutions designed for secure and efficient digital asset management.",
      },
      {
        question: "How do I get started with Megapayer?",
        answer:
          "To get started, create a Megapayer account through our Universal Wallet. This will give you access to all our ecosystem products. We recommend reading our getting started guide in the documentation section.",
      },
      {
        question: "Is Megapayer available in my country?",
        answer:
          "Megapayer's decentralized services are available globally. However, certain features may be restricted in some jurisdictions due to local regulations.",
      },
    ],
    account: [
      {
        question: "How do I create an account?",
        answer:
          "Download the Megapayer Universal Wallet, click on 'Create New Wallet', follow the security setup process, and safely store your recovery phrase.",
      },
      {
        question: "How can I recover my account?",
        answer:
          "If you have your 12-word recovery phrase, you can restore your wallet through the 'Restore Wallet' option in the Universal Wallet app.",
      },
    ],
    technical: [
      {
        question: "What blockchains does Megapayer support?",
        answer:
          "Megapayer supports multiple blockchains including Ethereum, BSC, Polygon, Avalanche, and our native Megapayer Chain, with more networks being added regularly.",
      },
      {
        question: "How do I connect to different networks?",
        answer:
          "The Universal Wallet automatically manages network connections. Simply select the desired network from the network dropdown in the wallet interface.",
      },
    ],
    security: [
      {
        question: "How secure is Megapayer?",
        answer:
          "Megapayer employs industry-leading security measures including multi-signature technology, secure enclaves, and regular security audits. We never store your private keys or recovery phrases.",
      },
      {
        question: "What should I do if I notice suspicious activity?",
        answer:
          "Immediately lock your wallet through the security settings and contact our support team. We recommend enabling all security features including 2FA for maximum protection.",
      },
    ],
    payment: [
      {
        question: "What payment methods are supported?",
        answer:
          "Our P2P Exchange supports various payment methods including bank transfers, credit/debit cards, and popular payment apps. Available methods vary by region and trading partner.",
      },
      {
        question: "How are transaction fees calculated?",
        answer:
          "Transaction fees vary by network and transaction type. DEX trades incur standard network gas fees plus a small protocol fee. P2P trades may have fees based on payment method and transaction size.",
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>Support Center | Megapayer</title>
        <meta
          name="description"
          content="Get help and support for all Megapayer products and services. Find answers to frequently asked questions and connect with our support team."
        />
      </Head>

      <div className="min-h-screen py-20 pt-32">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We <span className="text-gradient">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions or get in touch with our support
              team
            </p>
          </motion.div>

          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary/20 text-primary border border-primary/50"
                    : "bg-dark/50 text-gray-300 border border-white/10 hover:border-primary/30"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div layout className="space-y-4">
              {faqs[selectedCategory as keyof typeof faqs].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-8">
                Our support team is available 24/7 to assist you with any
                questions or concerns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://t.me/megapayerSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.716-.962 4.037-1.362 5.357-.169.558-.312 1.023-.453 1.432-.162.473-.303.881-.421 1.224-.229.659-.401.741-.669.756-.577.034-1.013-.377-1.57-.738-.871-.568-1.364-.921-2.207-1.471-.978-.644-.345-1.001.214-1.583.146-.152 2.669-2.543 2.717-2.762.006-.027.012-.127-.048-.18-.06-.052-.148-.034-.212-.02-.09.021-1.525.967-4.303 2.838-.406.277-.774.412-1.103.403-.363-.009-1.058-.2-1.578-.365-.636-.203-1.142-.311-1.099-.658.023-.184.316-.373.879-.567 3.442-1.508 5.736-2.506 6.884-2.995 3.279-1.399 3.961-1.643 4.404-1.65.098-.002.319.023.461.141.119.099.152.231.169.331.022.13.021.301.002.451z" />
                  </svg>
                  Chat on Telegram
                </a>
                <a
                  href="https://discord.gg/megapayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Discord
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
