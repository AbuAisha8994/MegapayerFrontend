import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const About = () => (
  <Layout>
    <Head>
      <title>About Us | Megapayer</title>
      <meta
        name="description"
        content="Learn more about Megapayer, our mission, vision, legal structure, and the team building the future of decentralized finance and blockchain technology."
      />
    </Head>
    <section
      className="bg-gradient-to-b from-dark/70 to-dark min-h-[60vh] py-20"
      style={{ paddingTop: "150px" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Megapayer
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Megapayer is a next-generation blockchain ecosystem designed to
          empower users, developers, and enterprises with secure, scalable, and
          user-friendly decentralized solutions. Our mission is to accelerate
          the adoption of blockchain technology by providing a comprehensive
          suite of products and services that make decentralized finance and
          digital ownership accessible to everyone.
        </p>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Our Vision</h2>
          <p className="text-gray-300">
            We envision a world where financial freedom, privacy, and digital
            sovereignty are accessible to all. Megapayer is committed to
            building a transparent, inclusive, and innovative ecosystem that
            bridges traditional finance with the decentralized future. We strive
            to lower the barriers to entry for blockchain adoption and empower
            communities globally.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Legal Structure & Compliance
          </h2>
          <p className="text-gray-300">
            Megapayer operates under the <b>Megapayer Foundation</b>, a
            non-profit entity registered in the United States. The Foundation is
            responsible for the legal, regulatory, and compliance aspects of the
            project, ensuring transparency and accountability in all operations.
            Our commitment to regulatory compliance and best practices enables
            us to build trust with users, partners, and the broader blockchain
            community.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              High-performance blockchain with Shared Proof of Stake consensus
            </li>
            <li>Decentralized social media and digital identity solutions</li>
            <li>Multi-chain DEX, P2P exchange, and universal wallet</li>
            <li>
              USD-pegged stablecoin, NFT marketplace, and cross-chain bridge
            </li>
            <li>Comprehensive developer tools, SDKs, and open APIs</li>
            <li>Transparent governance and community-driven innovation</li>
            <li>Educational resources and global community support</li>
            <li>Enterprise-grade solutions for institutions and businesses</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Our Team</h2>
          <p className="text-gray-300 mb-4">
            Megapayer is built by a global team of blockchain engineers, product
            designers, researchers, and community leaders. We are united by our
            passion for decentralization, security, and user empowerment. Our
            team brings together expertise from the fields of cryptography,
            distributed systems, finance, and user experience.
          </p>
          <Link
            href="/team"
            className="inline-block btn-secondary px-6 py-2 rounded-lg font-semibold mt-2"
          >
            Meet the Team
          </Link>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Ecosystem & Community
          </h2>
          <p className="text-gray-300">
            Megapayer is more than just a technology platform—it's a vibrant,
            global community. We actively engage with developers, users, and
            partners to foster innovation and growth. Our open governance model
            ensures that all stakeholders have a voice in the evolution of the
            ecosystem.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-300">
            For partnership, media, or support inquiries, please visit our{" "}
            <Link
              href="/enterprise/contact"
              className="text-primary underline hover:text-secondary"
            >
              contact page
            </Link>
            . You can also join our community channels for the latest updates
            and discussions.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <Link
            href="/whitepapers"
            className="btn-primary px-6 py-3 rounded-lg font-semibold"
          >
            Read Whitepapers
          </Link>
          <Link
            href="/coming-soon?product=Careers&returnUrl=/"
            className="btn-secondary px-6 py-3 rounded-lg font-semibold"
          >
            Careers
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
