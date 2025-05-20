import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import ProductPreview from "@/components/home/ProductPreview";
import Roadmap from "@/components/home/Roadmap";
import CallToAction from "@/components/home/CallToAction";
import TokenomicsSection from "@/components/home/TokenomicsSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Megapayer | Complete Blockchain Ecosystem</title>
        <meta
          name="description"
          content="Megapayer offers a comprehensive blockchain ecosystem featuring a native blockchain, social media platform, P2P exchange, DEX, universal wallet, and stablecoin."
        />
      </Head>

      <HeroBanner />

      <section id="features" className="py-20">
        <Features />
      </section>

      <section
        id="ecosystem-products"
        className="py-20 bg-gradient-to-b from-dark/50 via-dark to-dark/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ecosystem <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete suite of interconnected blockchain products designed to
              work seamlessly together
            </p>
          </div>

          <ProductPreview />
          <TokenomicsSection />
        </div>
      </section>

      <Roadmap />
      <CallToAction />
    </Layout>
  );
}
