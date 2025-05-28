import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

// Define types for API endpoints and parameters
type EndpointParameter = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  example?: string;
};

type APIEndpoint = {
  name: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  parameters: EndpointParameter[];
  responseExample: string;
  category: string;
};

const ExplorerAPIPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.5 });

  // API endpoints data
  const apiEndpoints: APIEndpoint[] = [
    {
      name: "Get Block by Number",
      method: "GET",
      path: "/api/v1/blocks/{blockNumber}",
      description: "Retrieves block information by block number",
      parameters: [
        {
          name: "blockNumber",
          type: "number",
          description: "The block number to retrieve",
          required: true,
          example: "1234567",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "blockNumber": 1234567,
    "hash": "0x8c2a3d24a10568d03c9b30e1c28d12bd078d783fc9a7c9e566c1d81541543355",
    "timestamp": 1678934567,
    "parentHash": "0x7d2a5d24a10568d03c9b30e1c28d12bd078d783fc9a7c9e566c1d81541543123",
    "miner": "0xabcdef1234567890abcdef1234567890abcdef12",
    "nonce": "0x1234567890abcdef",
    "difficulty": "1234567890",
    "gasLimit": 15000000,
    "gasUsed": 12345678,
    "transactions": [
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
      "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    ]
  }
}`,
      category: "Blockchain",
    },
    {
      name: "Get Transaction by Hash",
      method: "GET",
      path: "/api/v1/transactions/{txHash}",
      description: "Retrieves transaction details by transaction hash",
      parameters: [
        {
          name: "txHash",
          type: "string",
          description: "The transaction hash to retrieve",
          required: true,
          example:
            "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "blockNumber": 1234567,
    "blockHash": "0x8c2a3d24a10568d03c9b30e1c28d12bd078d783fc9a7c9e566c1d81541543355",
    "timestamp": 1678934567,
    "from": "0x1234567890abcdef1234567890abcdef12345678",
    "to": "0xabcdef1234567890abcdef1234567890abcdef12",
    "value": "1.25000000000000000",
    "gasPrice": "20000000000",
    "gasLimit": 21000,
    "gasUsed": 21000,
    "nonce": 123,
    "input": "0x",
    "status": true
  }
}`,
      category: "Transactions",
    },
    {
      name: "Get Account Balance",
      method: "GET",
      path: "/api/v1/accounts/{address}/balance",
      description:
        "Retrieves account balance for a specific address across all chains",
      parameters: [
        {
          name: "address",
          type: "string",
          description: "The account address to query",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
        {
          name: "chain",
          type: "string",
          description: "Chain ID to filter results (optional)",
          required: false,
          example: "megapayer",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "balances": [
      {
        "chain": "megapayer",
        "balance": "1250.75000000000000000",
        "symbol": "MPC",
        "usdValue": 52125.37
      },
      {
        "chain": "ethereum",
        "balance": "0.25000000000000000",
        "symbol": "ETH",
        "usdValue": 750.25
      }
    ],
    "totalUsdValue": 52875.62
  }
}`,
      category: "Accounts",
    },
    {
      name: "Get Account Transactions",
      method: "GET",
      path: "/api/v1/accounts/{address}/transactions",
      description: "Retrieves transactions for a specific account",
      parameters: [
        {
          name: "address",
          type: "string",
          description: "The account address",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
        {
          name: "page",
          type: "number",
          description: "Page number for pagination",
          required: false,
          example: "1",
        },
        {
          name: "limit",
          type: "number",
          description: "Number of results per page (max 100)",
          required: false,
          example: "20",
        },
        {
          name: "sort",
          type: "string",
          description: "Sort order (asc or desc)",
          required: false,
          example: "desc",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "transactions": [
      {
        "hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        "blockNumber": 1234567,
        "timestamp": 1678934567,
        "from": "0x1234567890abcdef1234567890abcdef12345678",
        "to": "0xabcdef1234567890abcdef1234567890abcdef12",
        "value": "1.25000000000000000",
        "gasUsed": 21000
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalPages": 5,
      "totalItems": 87
    }
  }
}`,
      category: "Accounts",
    },
    {
      name: "Get Token Holdings",
      method: "GET",
      path: "/api/v1/accounts/{address}/tokens",
      description: "Retrieves all tokens held by an account address",
      parameters: [
        {
          name: "address",
          type: "string",
          description: "The account address to query",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "tokens": [
      {
        "contract": "0x1234567890abcdef1234567890abcdef12345678",
        "name": "Sample Token",
        "symbol": "SMPL",
        "decimals": 18,
        "balance": "100.000000000000000000",
        "usdValue": 250.75
      },
      {
        "contract": "0xabcdef1234567890abcdef1234567890abcdef12",
        "name": "Example Token",
        "symbol": "EXMP",
        "decimals": 6,
        "balance": "500.000000",
        "usdValue": 125.50
      }
    ]
  }
}`,
      category: "Tokens",
    },
    {
      name: "Get Token Information",
      method: "GET",
      path: "/api/v1/tokens/{tokenAddress}",
      description: "Retrieves detailed information about a token",
      parameters: [
        {
          name: "tokenAddress",
          type: "string",
          description: "The token contract address",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "name": "Sample Token",
    "symbol": "SMPL",
    "decimals": 18,
    "totalSupply": "1000000.000000000000000000",
    "holders": 1500,
    "transactions": 35000,
    "price": {
      "usd": 2.5075,
      "btc": 0.00005,
      "eth": 0.001
    },
    "marketCap": 2507500
  }
}`,
      category: "Tokens",
    },
    {
      name: "Get Smart Contract Information",
      method: "GET",
      path: "/api/v1/contracts/{contractAddress}",
      description: "Retrieves information about a smart contract",
      parameters: [
        {
          name: "contractAddress",
          type: "string",
          description: "The contract address",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "name": "Example Contract",
    "creator": "0xabcdef1234567890abcdef1234567890abcdef12",
    "creationTransaction": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "creationBlock": 1000000,
    "creationTimestamp": 1670000000,
    "isVerified": true,
    "verifiedDate": 1670100000,
    "balance": "10.500000000000000000",
    "transactions": 5000
  }
}`,
      category: "Smart Contracts",
    },
    {
      name: "Get Contract Source Code",
      method: "GET",
      path: "/api/v1/contracts/{contractAddress}/source",
      description: "Retrieves source code for a verified smart contract",
      parameters: [
        {
          name: "contractAddress",
          type: "string",
          description: "The contract address",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "name": "Example Contract",
    "compiler": "solc",
    "version": "0.8.17",
    "optimization": true,
    "runs": 200,
    "license": "MIT",
    "abi": [...],
    "sourceCode": "// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.17;\\n\\ncontract ExampleContract {\\n    // Contract source code\\n}",
    "constructorArguments": "0000000000000000000000000000000000000000000000000000000000000000"
  }
}`,
      category: "Smart Contracts",
    },
    {
      name: "Get Network Statistics",
      method: "GET",
      path: "/api/v1/stats",
      description: "Retrieves network statistics and metrics",
      parameters: [],
      responseExample: `{
  "status": "success",
  "data": {
    "latestBlock": 1234567,
    "blockTime": 3.2,
    "averageGasPrice": 25000000000,
    "totalTransactions": 50000000,
    "pendingTransactions": 326,
    "activeAddresses": 125000,
    "validators": 100,
    "tps": 125.7,
    "price": 41.23
  }
}`,
      category: "Statistics",
    },
    {
      name: "Get NFT Metadata",
      method: "GET",
      path: "/api/v1/nfts/{contractAddress}/{tokenId}",
      description: "Retrieves metadata for a specific NFT",
      parameters: [
        {
          name: "contractAddress",
          type: "string",
          description: "The NFT contract address",
          required: true,
          example: "0x1234567890abcdef1234567890abcdef12345678",
        },
        {
          name: "tokenId",
          type: "string",
          description: "The token ID of the NFT",
          required: true,
          example: "1234",
        },
      ],
      responseExample: `{
  "status": "success",
  "data": {
    "contract": "0x1234567890abcdef1234567890abcdef12345678",
    "tokenId": "1234",
    "name": "Example NFT #1234",
    "description": "This is an example NFT with detailed metadata",
    "imageUrl": "https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/1234",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Blue"
      },
      {
        "trait_type": "Eyes",
        "value": "Green"
      }
    ],
    "owner": "0xabcdef1234567890abcdef1234567890abcdef12",
    "creator": "0x1234567890abcdef1234567890abcdef12345678",
    "lastTransferTimestamp": 1678934567,
    "lastTransferValue": 1.5
  }
}`,
      category: "NFTs",
    },
  ];

  // Unique categories for filtering
  const categories = [
    "all",
    ...new Set(apiEndpoints.map((endpoint) => endpoint.category)),
  ];

  // Filter endpoints based on search query and selected category
  const filteredEndpoints = apiEndpoints.filter((endpoint) => {
    const matchesCategory =
      selectedCategory === "all" || endpoint.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sample code snippets for using the API in different languages
  const codeSnippets = {
    curl: `curl -X GET "https://api.megapayer.io/v1/blocks/1234567" \\
  -H "x-api-key: YOUR_API_KEY"`,
    javascript: `// Using fetch API
const apiKey = 'YOUR_API_KEY';
const blockNumber = 1234567;

fetch(\`https://api.megapayer.io/v1/blocks/\${blockNumber}\`, {
  headers: {
    'x-api-key': apiKey
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,
    python: `import requests

api_key = 'YOUR_API_KEY'
block_number = 1234567

headers = {
    'x-api-key': api_key
}

response = requests.get(
    f'https://api.megapayer.io/v1/blocks/{block_number}', 
    headers=headers
)

print(response.json())`,
  };

  return (
    <Layout>
      <Head>
        <title>Megapayer Explorer API Documentation</title>
        <meta
          name="description"
          content="Comprehensive documentation for the Megapayer Explorer API. Learn how to integrate blockchain data into your applications."
        />
      </Head>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-gradient-to-b from-dark/90 to-dark pt-32 pb-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 mb-6">
              <svg
                className="w-5 h-5 text-blue-500 mr-2"
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
              <span className="text-blue-500 font-medium">RESTful API</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Megapayer Explorer{" "}
              <span className="text-gradient">API Documentation</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">
              Integrate blockchain data directly into your applications with our
              comprehensive API suite. Access transactions, blocks, accounts,
              tokens, and more across the Megapayer ecosystem.
            </p>

            <div className="bg-dark/50 border border-blue-500/20 rounded-xl p-6 md:p-8 text-left mb-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-xl font-bold">Base URL</h2>
              </div>
              <div className="bg-gray-900 p-3 rounded-md font-mono text-blue-400 mb-4">
                https://api.megapayer.io/v1
              </div>
              <p className="text-gray-300">
                All API requests should be made to this base URL, followed by
                the specific endpoint path. Remember to include your API key in
                each request.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#endpoints"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Endpoints
              </a>
              <Link
                href="/developers/api-keys"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get API Key
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Authentication Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Authentication</h2>
            <div className="bg-dark/50 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                All API requests require authentication using an API key. You
                can obtain your API key from the
                <Link
                  href="/developers/api-keys"
                  className="text-blue-400 hover:text-blue-300 mx-1"
                >
                  Developer Portal
                </Link>
                . Include your API key in the request headers as follows:
              </p>

              <div className="bg-gray-900 p-4 rounded-md font-mono text-sm">
                <pre className="text-blue-400">{"x-api-key: YOUR_API_KEY"}</pre>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Rate Limits</h3>
            <div className="overflow-hidden rounded-lg border border-white/10 mb-10">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Plan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Requests / Second
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      Daily Limit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Free
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      10,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Developer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      25
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      100,000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Enterprise
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Unlimited
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 bg-gradient-to-b from-dark/95 to-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Code Examples</h2>

            <div className="bg-gray-900/70 rounded-xl overflow-hidden mb-12 border border-white/10">
              {/* Language tabs */}
              <div className="flex overflow-x-auto border-b border-white/10">
                {Object.keys(codeSnippets).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {}}
                    className="px-6 py-3 font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    {lang === "curl"
                      ? "cURL"
                      : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>

              {/* Display current language code */}
              <div className="p-6 overflow-auto max-h-96">
                <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                  {codeSnippets.javascript}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="endpoints" className="py-16 bg-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">API Endpoints</h2>

            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search endpoints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* List of endpoints */}
            <div className="space-y-8">
              {filteredEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-dark/50 border border-white/10 rounded-xl overflow-hidden"
                >
                  {/* Endpoint header */}
                  <div className="p-6 border-b border-white/10 bg-gradient-to-r from-gray-900/80 to-dark/80">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center mb-3">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded mr-3 ${
                              endpoint.method === "GET"
                                ? "bg-green-600/20 text-green-400"
                                : endpoint.method === "POST"
                                ? "bg-blue-600/20 text-blue-400"
                                : endpoint.method === "PUT"
                                ? "bg-yellow-600/20 text-yellow-400"
                                : "bg-red-600/20 text-red-400"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <h3 className="text-xl font-bold">{endpoint.name}</h3>
                        </div>
                        <div className="font-mono text-sm text-blue-400">
                          {endpoint.path}
                        </div>
                      </div>
                      <div className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded">
                        {endpoint.category}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-300">{endpoint.description}</p>
                  </div>

                  {/* Parameters */}
                  <div className="p-6 border-b border-white/10 bg-gray-900/50">
                    <h4 className="text-lg font-semibold mb-4">Parameters</h4>

                    {endpoint.parameters.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                              >
                                Required
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                              >
                                Example
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-800">
                            {endpoint.parameters.map((param) => (
                              <tr key={param.name}>
                                <td className="px-4 py-3 text-sm font-medium text-white">
                                  {param.name}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-300">
                                  {param.type}
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  <span
                                    className={`px-2 py-0.5 rounded text-xs ${
                                      param.required
                                        ? "bg-red-500/20 text-red-400"
                                        : "bg-gray-500/20 text-gray-400"
                                    }`}
                                  >
                                    {param.required ? "Yes" : "No"}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-300">
                                  {param.description}
                                </td>
                                <td className="px-4 py-3 text-sm text-blue-400 font-mono">
                                  {param.example || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-gray-400">No parameters required</p>
                    )}
                  </div>

                  {/* Response Example */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-4">
                      Response Example
                    </h4>
                    <div className="bg-gray-900 p-4 rounded-md overflow-auto max-h-80">
                      <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                        {endpoint.responseExample}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No results message */}
            {filteredEndpoints.length === 0 && (
              <div className="text-center py-10">
                <svg
                  className="mx-auto h-12 w-12 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="mt-4 text-lg text-gray-400">
                  No endpoints found matching your search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Error Handling and Support */}
      <section className="py-16 bg-gradient-to-b from-dark/90 to-dark/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Error Handling</h2>

            <div className="bg-dark/50 border border-white/10 rounded-xl p-6 mb-10">
              <p className="text-gray-300 mb-4">
                When an error occurs, the API returns a JSON response with an
                error code and message:
              </p>

              <div className="bg-gray-900 p-4 rounded-md mb-6">
                <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                  {`{
  "status": "error",
  "error": {
    "code": 400,
    "message": "Invalid parameter: address format is incorrect"
  }
}`}
                </pre>
              </div>

              <h3 className="text-xl font-bold mb-4">Common Error Codes</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        400
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Bad Request - Invalid parameters
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        401
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Unauthorized - Missing or invalid API key
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        403
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Forbidden - API key doesn't have access
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        404
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Not Found - Resource not found
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        429
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Too Many Requests - Rate limit exceeded
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        500
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Internal Server Error - Something went wrong
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Support */}
            <h2 className="text-3xl font-bold mb-6">Support</h2>
            <div className="bg-dark/50 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-6">
                Need help with the Megapayer Explorer API? Our developer support
                team is ready to assist you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="#"
                  className="flex items-start p-4 bg-gray-900/70 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-blue-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Email Support
                    </h3>
                    <p className="text-gray-400">api-support@megapayer.io</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-start p-4 bg-gray-900/70 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-blue-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Discord Community
                    </h3>
                    <p className="text-gray-400">
                      Join our #developers channel
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-start p-4 bg-gray-900/70 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-blue-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Documentation
                    </h3>
                    <p className="text-gray-400">Detailed API reference docs</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-start p-4 bg-gray-900/70 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-blue-400 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Feature Requests
                    </h3>
                    <p className="text-gray-400">
                      Share your ideas for API improvements
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-dark/80 to-dark/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your API key today and start integrating blockchain data into
              your applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/developers/api-keys"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get API Key
              </Link>
              <Link
                href="/developers"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Explore Developer Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExplorerAPIPage;
