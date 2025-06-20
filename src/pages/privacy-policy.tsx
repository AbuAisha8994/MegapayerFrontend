import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Megapayer</title>
        <meta
          name="description"
          content="Learn about how Megapayer collects, uses, and handles your personal information."
        />
      </Head>

      <div className="bg-gradient-to-b from-dark/70 to-dark py-24 pt-36">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Privacy Policy
                </h1>
                <p className="text-gray-400">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="text-lg mb-8">
                  This Privacy Policy explains how Megapayer Foundation and its
                  affiliates (collectively, "Megapayer," "we," "us," or "our")
                  collect, use, disclose, and safeguard your information when
                  you visit our website www.megapayer.io, and other websites
                  operated by us that link to this Privacy Policy (collectively,
                  the "Site"), use our mobile applications, use our products and
                  services, or otherwise interact with us.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Information We Collect
                  </h2>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you provide
                    directly to us when you:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Register for an account or use our services</li>
                    <li>
                      Subscribe to our newsletter or marketing communications
                    </li>
                    <li>Participate in surveys, contests, or promotions</li>
                    <li>Contact our support team</li>
                    <li>Apply for a job or partnership opportunity</li>
                  </ul>
                  <p>
                    This information may include your name, email address,
                    postal address, phone number, payment information, wallet
                    addresses, and any other information you choose to provide.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Blockchain Information
                  </h3>
                  <p>
                    Please be aware that blockchain technology is, by design,
                    generally transparent and public. When you interact with the
                    Megapayer blockchain, information you provide may be stored
                    on a public blockchain. This includes wallet addresses and
                    transaction data, which are publicly accessible.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    Automatically Collected Information
                  </h3>
                  <p>
                    When you access or use our Site or services, we may
                    automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      Device information (such as your IP address, browser type,
                      and operating system)
                    </li>
                    <li>
                      Usage information (such as pages visited, time spent on
                      pages, and links clicked)
                    </li>
                    <li>Location information (with your permission)</li>
                    <li>
                      Information collected through cookies and similar
                      technologies
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    How We Use Your Information
                  </h2>
                  <p>
                    We may use the information we collect for various purposes,
                    including to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>
                      Send technical notices, updates, security alerts, and
                      support messages
                    </li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>
                      Communicate with you about products, services, offers,
                      promotions, and events
                    </li>
                    <li>
                      Monitor and analyze trends, usage, and activities in
                      connection with our services
                    </li>
                    <li>
                      Detect, investigate, and prevent fraudulent transactions
                      and other illegal activities
                    </li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Sharing of Information
                  </h2>
                  <p>We may share your information as follows:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      With vendors, consultants, and other service providers who
                      need access to such information to carry out work on our
                      behalf
                    </li>
                    <li>
                      In response to a request for information if we believe
                      disclosure is in accordance with applicable law
                    </li>
                    <li>
                      If we believe your actions are inconsistent with our user
                      agreements or policies, or to protect the rights,
                      property, and safety of Megapayer or others
                    </li>
                    <li>
                      In connection with, or during negotiations of, any merger,
                      sale of company assets, financing, or acquisition of all
                      or a portion of our business by another company
                    </li>
                    <li>With your consent or at your direction</li>
                  </ul>
                  <p>
                    We may also share aggregated or de-identified information
                    that cannot reasonably be used to identify you.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Cookies and Similar Technologies
                  </h2>
                  <p>
                    We and our third-party providers use cookies, web beacons,
                    and similar technologies to collect information about your
                    browsing activities and to analyze website traffic. These
                    technologies help us improve your website experience,
                    analyze usage patterns, and tailor our services to your
                    interests.
                  </p>
                  <p className="mt-3">
                    Most web browsers allow you to control cookies through their
                    settings preferences. However, if you limit the ability of
                    websites to set cookies, you may impact your overall user
                    experience.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Data Security
                  </h2>
                  <p>
                    We take reasonable measures to help protect your personal
                    information from loss, theft, misuse, unauthorized access,
                    disclosure, alteration, and destruction. However, no
                    security system is impenetrable, and we cannot guarantee the
                    security of your information. The security of any
                    information transmitted via the internet cannot be
                    guaranteed, particularly information transmitted to or from
                    the Site.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Data Retention
                  </h2>
                  <p>
                    We retain personal information for as long as necessary to
                    fulfill the purposes for which it was collected, including
                    for the purposes of satisfying any legal, regulatory,
                    accounting, or reporting requirements, or to resolve
                    disputes or enforce our agreements. When determining the
                    retention period, we consider the amount, nature, and
                    sensitivity of the information and the potential risk of
                    harm from unauthorized use or disclosure.
                  </p>
                  <p className="mt-3">
                    Please note that information recorded on the blockchain,
                    including wallet addresses and transaction data, are
                    immutable and cannot be deleted.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Your Rights and Choices
                  </h2>
                  <p>
                    Depending on your location, you may have certain rights
                    regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>
                      Restriction of processing of your personal information
                    </li>
                    <li>Data portability</li>
                    <li>
                      Objection to processing of your personal information
                    </li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us as described in
                    the "Contact Us" section below. Please note that some of
                    these rights may be limited where we have compelling
                    legitimate grounds or legal obligations to process your
                    personal information.
                  </p>
                  <p className="mt-3">
                    Due to the nature of blockchain technology, we may not be
                    able to modify or delete information that is stored on the
                    blockchain.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    International Data Transfers
                  </h2>
                  <p>
                    We may transfer your personal information to countries other
                    than the country in which you initially provided the
                    information. These countries may not have the same data
                    protection laws as the country in which you provided the
                    information. When we transfer your information to other
                    countries, we will protect that information as described in
                    this Privacy Policy and comply with applicable legal
                    requirements.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Children's Privacy
                  </h2>
                  <p>
                    Our services are not directed to children under the age of
                    18. We do not knowingly collect personal information from
                    children under 18. If you are a parent or guardian and
                    believe your child has provided us with personal
                    information, please contact us at the address below. If we
                    become aware that we have collected personal information
                    from a child under the age of 18 without verification of
                    parental consent, we will take steps to remove that
                    information from our servers.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Changes to this Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. If we
                    make material changes, we will notify you as required by
                    law, which may include posting the revised Privacy Policy on
                    our Site or sending you an email notification. We encourage
                    you to review this Privacy Policy periodically to stay
                    informed about our information practices.
                  </p>
                  <p className="mt-3">
                    Your continued use of our services after any modification to
                    this Privacy Policy will constitute your acceptance of the
                    changes.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our privacy practices, please contact
                    us at:
                  </p>
                  <div className="bg-dark/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg mt-4">
                    <p className="mt-3">
                      Email:{" "}
                      <a
                        href="mailto:privacy@megapayer.io"
                        className="text-primary hover:text-secondary"
                      >
                        privacy@megapayer.io
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mt-12">
                  <a
                    href="/about"
                    className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    About Megapayer
                  </a>
                  <a
                    href="/enterprise/contact"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
