import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

// Mock data for demonstration purposes - in a real implementation, this would come from an API
const initialSystemStatus = {
  blockchain: {
    name: "Megapayer Blockchain",
    status: "operational", // operational, degraded, outage
    uptime: "99.98%",
    latestBlock: 12458964,
    blockTime: "2.4s",
    tps: "1,250",
  },
  services: [
    {
      name: "Wallet Services",
      status: "operational",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Exchange API",
      status: "operational",
      lastIncident: "None in last 30 days",
    },
    {
      name: "P2P Services",
      status: "operational",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Social Media Platform",
      status: "degraded",
      lastIncident:
        "Experiencing delays in content delivery (Started 35 minutes ago)",
    },
    {
      name: "MPC ID Verification",
      status: "operational",
      lastIncident: "3 days ago - Resolved",
    },
    {
      name: "Developer APIs",
      status: "operational",
      lastIncident: "None in last 30 days",
    },
    {
      name: "Stablecoin Gateway",
      status: "operational",
      lastIncident: "None in last 30 days",
    },
  ],
  incidents: [
    {
      id: 1,
      title: "Social Media Content Delivery Delays",
      status: "investigating",
      createdAt: "2025-04-25T10:30:00Z",
      updatedAt: "2025-04-25T11:05:00Z",
      updates: [
        {
          id: 101,
          content:
            "We are investigating delays in content delivery on the Social Media platform.",
          timestamp: "2025-04-25T10:30:00Z",
        },
        {
          id: 102,
          content:
            "We have identified the issue with our content distribution network. Our engineers are working on a fix.",
          timestamp: "2025-04-25T11:05:00Z",
        },
      ],
    },
    {
      id: 2,
      title: "MPC ID Verification Slowdown",
      status: "resolved",
      createdAt: "2025-04-22T14:15:00Z",
      updatedAt: "2025-04-22T17:45:00Z",
      updates: [
        {
          id: 201,
          content:
            "Users may experience longer wait times for identity verification completions.",
          timestamp: "2025-04-22T14:15:00Z",
        },
        {
          id: 202,
          content:
            "We have identified the issue related to our verification queue processing.",
          timestamp: "2025-04-22T15:30:00Z",
        },
        {
          id: 203,
          content:
            "A fix has been deployed and verification times are returning to normal.",
          timestamp: "2025-04-22T17:45:00Z",
        },
      ],
    },
  ],
};

const StatusPage = () => {
  const [systemStatus, setSystemStatus] = useState(initialSystemStatus);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate fetching status data
  useEffect(() => {
    const timer = setTimeout(() => {
      setSystemStatus(initialSystemStatus);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Function to refresh status data
  const refreshStatus = () => {
    setLoading(true);
    // In a real implementation, this would make an API call
    setTimeout(() => {
      setSystemStatus(initialSystemStatus);
      setLastUpdated(new Date());
      setLoading(false);
    }, 800);
  };

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "operational":
        return "text-green-400";
      case "degraded":
        return "text-yellow-400";
      case "outage":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  // Helper function to get status badge background
  const getStatusBadgeBg = (status) => {
    switch (status) {
      case "operational":
        return "bg-green-400/20";
      case "degraded":
        return "bg-yellow-400/20";
      case "outage":
        return "bg-red-400/20";
      case "investigating":
        return "bg-blue-400/20";
      case "resolved":
        return "bg-gray-400/20";
      default:
        return "bg-gray-400/20";
    }
  };

  // Helper function to get status label
  const getStatusLabel = (status) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "degraded":
        return "Degraded Performance";
      case "outage":
        return "Major Outage";
      case "investigating":
        return "Investigating";
      case "resolved":
        return "Resolved";
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <Layout>
      <Head>
        <title>System Status | Megapayer</title>
        <meta
          name="description"
          content="Check the operational status of Megapayer blockchain and services"
        />
      </Head>

      <div className="bg-gradient-to-b from-dark/70 to-dark py-24 pt-36">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  System Status
                </h1>
                <p className="text-gray-400">
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              </div>

              <button
                onClick={refreshStatus}
                disabled={loading}
                className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-4 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Refreshing...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Refresh</span>
                  </>
                )}
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <svg
                  className="animate-spin h-12 w-12 text-primary"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* System Overview */}
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    System Overview
                  </h2>

                  <div className="flex flex-wrap gap-4">
                    {systemStatus.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-dark/70 rounded-lg p-4 border border-white/5 min-w-[200px] flex-1"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-white">
                            {service.name}
                          </h3>
                          <span
                            className={`${getStatusColor(
                              service.status
                            )} text-sm`}
                          >
                            ●
                          </span>
                        </div>
                        <p
                          className={`${getStatusColor(
                            service.status
                          )} text-sm font-medium`}
                        >
                          {getStatusLabel(service.status)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blockchain Status */}
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Blockchain Status
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-dark/70 rounded-lg p-4 border border-white/5">
                      <h3 className="text-gray-400 text-sm mb-1">
                        Network Status
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`${getStatusColor(
                            systemStatus.blockchain.status
                          )} text-sm`}
                        >
                          ●
                        </span>
                        <p className="text-white font-semibold">
                          {getStatusLabel(systemStatus.blockchain.status)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-dark/70 rounded-lg p-4 border border-white/5">
                      <h3 className="text-gray-400 text-sm mb-1">
                        Latest Block
                      </h3>
                      <p className="text-white font-semibold">
                        {systemStatus.blockchain.latestBlock.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-dark/70 rounded-lg p-4 border border-white/5">
                      <h3 className="text-gray-400 text-sm mb-1">Block Time</h3>
                      <p className="text-white font-semibold">
                        {systemStatus.blockchain.blockTime}
                      </p>
                    </div>

                    <div className="bg-dark/70 rounded-lg p-4 border border-white/5">
                      <h3 className="text-gray-400 text-sm mb-1">
                        Transactions Per Second
                      </h3>
                      <p className="text-white font-semibold">
                        {systemStatus.blockchain.tps}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Incidents */}
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Incidents
                  </h2>

                  {systemStatus.incidents.length > 0 ? (
                    <div className="space-y-6">
                      {systemStatus.incidents.map((incident) => (
                        <div
                          key={incident.id}
                          className="bg-dark/70 rounded-lg p-6 border border-white/5"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-white">
                              {incident.title}
                            </h3>
                            <span
                              className={`${getStatusBadgeBg(
                                incident.status
                              )} ${getStatusColor(
                                incident.status
                              )} text-xs px-3 py-1 rounded-full`}
                            >
                              {getStatusLabel(incident.status)}
                            </span>
                          </div>

                          <div className="space-y-4 mt-4">
                            {incident.updates.map((update) => (
                              <div
                                key={update.id}
                                className="border-l-2 border-white/20 pl-4"
                              >
                                <p className="text-gray-300">
                                  {update.content}
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                  {new Date(update.timestamp).toLocaleString()}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-dark/70 rounded-lg p-6 border border-white/5 text-center">
                      <p className="text-gray-400">
                        No incidents reported in the last 30 days.
                      </p>
                    </div>
                  )}
                </div>

                {/* Historical Uptime */}
                <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Historical Uptime
                  </h2>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-gray-400 text-sm mb-1">
                        30-Day Uptime
                      </h3>
                      <p className="text-white font-semibold">
                        {systemStatus.blockchain.uptime}
                      </p>
                    </div>

                    <div className="flex-1">
                      <div className="h-2 bg-dark/70 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: systemStatus.blockchain.uptime }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">
                    For detailed historical performance data and metrics, please
                    visit our{" "}
                    <a
                      href="https://explorer.megapayer.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary"
                    >
                      blockchain explorer
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-gray-400">
                    Having issues not reflected here?{" "}
                    <a
                      href="/support"
                      className="text-primary hover:text-secondary"
                    >
                      Contact support
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatusPage;
