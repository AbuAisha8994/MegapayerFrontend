import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CountdownTimer from "@/components/common/CountdownTimer";

const ComingSoonPage = () => {
  const router = useRouter();
  const { product, returnUrl } = router.query;
  const [productName, setProductName] = useState("This Feature");

  // Set target date for 2 months in the future
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
  const launchDate = twoMonthsFromNow;

  useEffect(() => {
    if (product && typeof product === "string") {
      setProductName(decodeURIComponent(product));
    }
  }, [product]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscription logic would go here
    // For now, we just show a success message
    alert("Thank you for subscribing! We'll notify you when we launch.");
  };

  const handleReturn = () => {
    if (returnUrl && typeof returnUrl === "string") {
      router.push(decodeURIComponent(returnUrl));
    } else {
      router.push("/");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Coming Soon | {productName} | Megapayer</title>
        <meta
          name="description"
          content={`${productName} is coming soon to the Megapayer ecosystem. Sign up to get notified when we launch.`}
        />
      </Head>

      <section className="relative min-h-[80vh] flex items-center pt-[100px]">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div
            className="absolute inset-0 bg-gradient-radial from-dark/40 to-dark"
            style={{
              background:
                "radial-gradient(circle at center, rgba(15,23,42,0.4) 0%, rgb(15,23,42) 70%)",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 mb-6">
                <svg
                  className="w-5 h-5 text-blue-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-blue-400">Coming Soon</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We're Building{" "}
                <span className="text-gradient">{productName}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10">
                {productName} is currently in development and will be launching
                soon. Sign up to be notified when we go live.
              </p>

              {/* Countdown Timer */}
              <div className="mb-12">
                <CountdownTimer targetDate={launchDate} />
              </div>

              {/* Email notification form */}
              <div className="bg-dark/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-xl mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Get Notified When We Launch
                </h3>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-dark/50 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 sm:flex-shrink-0"
                  >
                    Notify Me
                  </button>
                </form>
              </div>

              {returnUrl && (
                <button
                  onClick={handleReturn}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Return to previous page
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComingSoonPage;
