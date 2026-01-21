import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import ProductPreview from "@/components/home/ProductPreview";
import AIContractBuilder from "@/components/home/AIContractBuilder";
import Roadmap from "@/components/home/Roadmap";
import TokenomicsSection from "@/components/home/TokenomicsSection";
import CallToAction from "@/components/home/CallToAction";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <Layout>
      <Head>
        <title>Megapayer | Future of Decentralized Finance</title>
        <meta
          name="description"
          content="Megapayer is a comprehensive blockchain ecosystem designed to provide seamless, secure, and user-friendly decentralized financial services."
        />
      </Head>

      <main>
        <HeroBanner />

        <section className="py-24 bg-dark" id="ecosystem">
          <Features />
        </section>

        <section
          className="py-24 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95"
          id="ecosystem-products"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.products.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.products.subtitle}
              </p>
            </motion.div>

            <ProductPreview />
          </div>
        </section>

        <AIContractBuilder />

        <Roadmap />

        <TokenomicsSection />

        <CallToAction />
      </main>
    </Layout>
  );
}
