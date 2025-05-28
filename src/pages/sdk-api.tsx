import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Layout from "@/components/layout/Layout";
import ProductHero from "@/components/products/ProductHero";
import SDKAnimation from "@/components/animations/SDKAnimation";

// Sample code snippets
const codeSnippets = {
  javascript: `// Initialize the Megapayer SDK
import { MegapayerSDK, ChainType } from '@megapayer/sdk';

const sdk = new MegapayerSDK({
  apiKey: 'YOUR_API_KEY',
  environment: 'testnet', // or 'mainnet'
  chains: [ChainType.MEGAPAYER, ChainType.ETHEREUM]
});

// Send a transaction
async function sendTransaction() {
  try {
    const tx = await sdk.transaction.send({
      to: '0x123...789',
      value: '0.01',
      chainId: 1,
      gasLimit: 21000
    });
    
    console.log('Transaction hash:', tx.hash);
    
    // Wait for confirmation
    const receipt = await tx.wait(2); // Wait for 2 confirmations
    console.log('Transaction confirmed:', receipt);
  } catch (error) {
    console.error('Transaction failed:', error);
  }
}`,

  python: `# Initialize the Megapayer SDK
from megapayer import MegapayerSDK, ChainType

sdk = MegapayerSDK(
    api_key="YOUR_API_KEY",
    environment="testnet",  # or "mainnet"
    chains=[ChainType.MEGAPAYER, ChainType.ETHEREUM]
)

# Send a transaction
def send_transaction():
    try:
        tx = sdk.transaction.send(
            to="0x123...789",
            value="0.01",
            chain_id=1,
            gas_limit=21000
        )
        
        print(f"Transaction hash: {tx.hash}")
        
        # Wait for confirmation
        receipt = tx.wait(2)  # Wait for 2 confirmations
        print(f"Transaction confirmed: {receipt}")
    except Exception as e:
        print(f"Transaction failed: {e}")`,

  java: `// Initialize the Megapayer SDK
import io.megapayer.sdk.MegapayerSDK;
import io.megapayer.sdk.ChainType;

MegapayerSDK sdk = MegapayerSDK.builder()
    .apiKey("YOUR_API_KEY")
    .environment("testnet") // or "mainnet"
    .chains(Arrays.asList(ChainType.MEGAPAYER, ChainType.ETHEREUM))
    .build();

// Send a transaction
public void sendTransaction() {
    try {
        Transaction tx = sdk.transaction().send(TransactionRequest.builder()
            .to("0x123...789")
            .value("0.01")
            .chainId(1)
            .gasLimit(21000)
            .build());
            
        System.out.println("Transaction hash: " + tx.getHash());
        
        // Wait for confirmation
        TransactionReceipt receipt = tx.wait(2); // Wait for 2 confirmations
        System.out.println("Transaction confirmed: " + receipt);
    } catch (Exception e) {
        System.err.println("Transaction failed: " + e.getMessage());
    }
}`,

  golang: `// Initialize the Megapayer SDK
package main

import (
    "fmt"
    "github.com/megapayer/sdk-go"
)

func main() {
    sdk, err := megapayer.NewSDK(&megapayer.Config{
        ApiKey:      "YOUR_API_KEY",
        Environment: "testnet", // or "mainnet"
        Chains:      []megapayer.ChainType{megapayer.MEGAPAYER, megapayer.ETHEREUM},
    })
    if err != nil {
        panic(err)
    }

    // Send a transaction
    tx, err := sdk.Transaction.Send(&megapayer.TxParams{
        To:       "0x123...789",
        Value:    "0.01",
        ChainID:  1,
        GasLimit: 21000,
    })
    if err != nil {
        fmt.Printf("Transaction failed: %v\n", err)
        return
    }
    
    fmt.Printf("Transaction hash: %s\n", tx.Hash)
    
    // Wait for confirmation
    receipt, err := tx.Wait(2) // Wait for 2 confirmations
    if err != nil {
        fmt.Printf("Confirmation failed: %v\n", err)
        return
    }
    
    fmt.Printf("Transaction confirmed: %v\n", receipt)
}`,

  rust: `// Initialize the Megapayer SDK
use megapayer_sdk::{MegapayerSDK, ChainType, TransactionRequest, Error};

fn main() -> Result<(), Error> {
    let sdk = MegapayerSDK::new()
        .with_api_key("YOUR_API_KEY")
        .with_environment("testnet") // or "mainnet"
        .with_chains(&[ChainType::MEGAPAYER, ChainType::ETHEREUM])
        .build()?;

    // Send a transaction
    let tx = sdk.transaction().send(&TransactionRequest::new()
        .to("0x123...789")
        .value("0.01")
        .chain_id(1)
        .gas_limit(21000))?;
    
    println!("Transaction hash: {}", tx.hash());
    
    // Wait for confirmation
    let receipt = tx.wait(2)?; // Wait for 2 confirmations
    println!("Transaction confirmed: {:?}", receipt);
    
    Ok(())
}`,
};

// API endpoint categories
const apiEndpoints = [
  {
    category: "Blockchain",
    endpoints: [
      {
        name: "GET /v1/chains",
        description: "List all supported blockchain networks",
      },
      {
        name: "GET /v1/chains/{chain_id}/status",
        description: "Get current blockchain status and metrics",
      },
    ],
  },
  {
    category: "Transactions",
    endpoints: [
      {
        name: "POST /v1/tx",
        description: "Submit a new transaction",
      },
      {
        name: "GET /v1/tx/{tx_hash}",
        description: "Get transaction details by hash",
      },
      {
        name: "GET /v1/tx/{tx_hash}/receipt",
        description: "Get transaction receipt and status",
      },
    ],
  },
  {
    category: "Accounts",
    endpoints: [
      {
        name: "GET /v1/accounts/{address}/balance",
        description: "Get account balance across all chains",
      },
      {
        name: "GET /v1/accounts/{address}/transactions",
        description: "List account transactions",
      },
    ],
  },
  {
    category: "Smart Contracts",
    endpoints: [
      {
        name: "POST /v1/contracts/deploy",
        description: "Deploy a new smart contract",
      },
      {
        name: "POST /v1/contracts/{address}/call",
        description: "Call a smart contract method",
      },
      {
        name: "GET /v1/contracts/{address}/events",
        description: "Get events emitted by contract",
      },
    ],
  },
  {
    category: "NFTs",
    endpoints: [
      {
        name: "GET /v1/nfts/{contract}/{token_id}",
        description: "Get NFT metadata",
      },
      {
        name: "GET /v1/accounts/{address}/nfts",
        description: "List NFTs owned by address",
      },
    ],
  },
];

// Use cases
const useCases = [
  {
    title: "Cross-Chain DApps",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    description:
      "Build applications that seamlessly operate across multiple blockchain networks with unified APIs for transactions, balances and smart contract interactions.",
  },
  {
    title: "Custom Wallets",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0h10a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    description:
      "Create custom wallet applications with comprehensive key management, transaction signing, and account operations across all Megapayer-supported chains.",
  },
  {
    title: "NFT Platforms",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    description:
      "Develop NFT marketplaces, galleries, and tools with comprehensive APIs for minting, transferring, and querying digital assets across multiple standards.",
  },
  {
    title: "DeFi Applications",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description:
      "Build decentralized finance applications with tools for liquidity pools, swaps, lending protocols, and yield optimization across Megapayer Chain and other networks.",
  },
  {
    title: "Analytics Tools",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    description:
      "Create dashboards, monitoring tools, and analytics platforms that track on-chain activities, market data, and user interactions across the entire Megapayer ecosystem.",
  },
  {
    title: "Identity Solutions",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 21H5v-6l1.243-1.243A6 6 0 1120 9z"
        />
      </svg>
    ),
    description:
      "Build identity verification systems and reputation platforms that leverage MPC ID for secure, privacy-preserving credential management and verification.",
  },
];

const SDKAPIPage = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const featuresRef = useRef(null);
  const codeRef = useRef(null);
  const apiRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isCodeInView = useInView(codeRef, { once: true, amount: 0.3 });
  const isApiInView = useInView(apiRef, { once: true, amount: 0.2 });

  return (
    <Layout>
      <Head>
        <title>
          Developer SDK & API | Megapayer Comprehensive Development Tools
        </title>
        <meta
          name="description"
          content="Access the full power of Megapayer blockchain ecosystem with comprehensive SDKs, APIs, documentation and developer tools."
        />
      </Head>

      <ProductHero
        title="Developer SDK & API"
        subtitle="Comprehensive Development Tools"
        description="Access the full power of Megapayer ecosystem with our rich developer toolkit. Build cross-chain applications, wallets, DeFi platforms, and NFT marketplaces with unified SDKs and APIs."
        animation={
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />
              <SDKAnimation />
            </Canvas>
          </div>
        }
        color="#0891B2"
        secondaryColor="#0EA5E9"
      />

      {/* Key Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-dark/95 via-dark/90 to-dark/95"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              One Platform, <span className="text-gradient">All Chains</span>
            </h2>
            <p className="text-xl text-gray-300">
              Integrate once to access the entire blockchain multiverse. Our SDK
              and API provide a unified interface to build applications across
              multiple blockchain networks.
            </p>
          </motion.div>

          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-cyan-600/10 hover:border-cyan-600/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-600/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Multi-language SDKs
              </h3>
              <p className="text-gray-300">
                Develop with your preferred language. We offer native SDKs for
                JavaScript, Python, Java, Go, Rust, Swift, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-cyan-600/10 hover:border-cyan-600/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-600/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Comprehensive API
              </h3>
              <p className="text-gray-300">
                RESTful and GraphQL APIs with extensive documentation, webhooks,
                and real-time event subscriptions for all Megapayer services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-xl border border-cyan-600/10 hover:border-cyan-600/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-600/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Cross-Chain Compatible
              </h3>
              <p className="text-gray-300">
                Build once, deploy everywhere with unified interfaces for
                Megapayer Chain, Ethereum, BSC, Polygon, and other major
                networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDK Code Sample Section */}
      <section ref={codeRef} className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCodeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Powerful</span> Yet Simple
            </h2>
            <p className="text-xl text-gray-300">
              From simple transactions to complex smart contract interactions,
              our SDKs make blockchain development intuitive and accessible.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto bg-dark/50 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Code tabs */}
            <div className="flex overflow-x-auto bg-gray-900/70 border-b border-white/10">
              {Object.keys(codeSnippets).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === lang
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            {/* Code display */}
            <div className="p-1">
              <pre
                className="bg-[#282c34] p-6 rounded-lg text-sm overflow-x-auto font-mono"
                style={{ lineHeight: 1.5 }}
              >
                <code className="text-gray-100 whitespace-pre-wrap">
                  {codeSnippets[activeTab]}
                </code>
              </pre>
            </div>

            {/* Copy button */}
            <div className="flex justify-end p-4 bg-gray-900/50">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeSnippets[activeTab])
                }
                className="text-sm text-gray-400 hover:text-white flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                Copy Code
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-800/20 to-dark p-6 rounded-xl border border-cyan-700/30">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-bold">Fast Integration</h3>
              </div>
              <p className="text-gray-300">
                Go from zero to production in minutes with well-designed,
                intuitive interfaces and comprehensive documentation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/20 to-dark p-6 rounded-xl border border-cyan-700/30">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-xl font-bold">Enterprise-Ready</h3>
              </div>
              <p className="text-gray-300">
                Built for mission-critical applications with 99.9% uptime,
                robust error handling, and rate limiting protection.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/20 to-dark p-6 rounded-xl border border-cyan-700/30">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold">Developer Community</h3>
              </div>
              <p className="text-gray-300">
                Join our vibrant community with forums, Discord support,
                quarterly hackathons, and bounty programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section - Improved responsiveness */}
      <section
        ref={apiRef}
        className="py-24 bg-gradient-to-b from-dark/95 to-dark/80"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive <span className="text-gradient">API Suite</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our REST and GraphQL APIs give you full access to the Megapayer
              ecosystem with detailed documentation and interactive testing
              tools.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              {/* API Docs Header with improved styling */}
              <div className="bg-dark p-6 border-b border-white/10">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    api.megapayer.io/v1
                  </div>
                </div>
              </div>

              {/* API Endpoints List - Improved spacing and mobile layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
                {apiEndpoints.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isApiInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="mb-6 md:mb-8"
                  >
                    <h3 className="text-xl font-bold mb-4 text-cyan-500 flex items-center">
                      <span className="w-1.5 h-6 bg-cyan-500 rounded-full mr-3 hidden md:block"></span>
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.endpoints.map((endpoint) => (
                        <li
                          key={endpoint.name}
                          className="bg-dark/30 p-3 rounded-lg border border-white/5 hover:border-cyan-600/20 transition-all duration-300"
                        >
                          <div className="font-mono text-sm text-cyan-400">
                            {endpoint.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {endpoint.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 font-medium rounded-lg transition-all duration-300 border border-cyan-600/30 hover:scale-105"
              >
                <span>View Full API Documentation</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Improved layout and responsiveness */}
      <section className="py-24 bg-gradient-to-b from-dark/80 to-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-block px-6 py-2 border border-cyan-600/30 rounded-full text-cyan-400 mb-6">
              Developer Use Cases
            </div>
            <h2 className="text-4xl font-bold mb-6">
              What You Can <span className="text-gradient">Build</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our developer tools power a wide range of applications across the
              Web3 ecosystem. Here's what you can create with our SDK and API.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/40 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/5 hover:border-cyan-600/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="text-cyan-500 mb-6 flex justify-center md:justify-start">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center md:text-left">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-dark to-dark/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Start Building Today
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of developers building the future of Web3 with our
              powerful toolkit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers/getting-started"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get API Keys
              </Link>
              <Link
                href="/developers/sdk"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Explore SDK
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SDKAPIPage;
