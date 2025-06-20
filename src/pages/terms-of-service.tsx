import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | Megapayer</title>
        <meta
          name="description"
          content="Megapayer Terms of Service - Read the terms and conditions governing the use of Megapayer's blockchain ecosystem and services."
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
                  Terms of Service
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
                  Please read these Terms of Service ("Terms") carefully before
                  using any of Megapayer's websites, applications, software,
                  APIs, products, or services (collectively, the "Services")
                  operated by Megapayer Foundation and its affiliates
                  ("Megapayer", "we", "us", or "our").
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing or using our Services, you agree to be bound by
                    these Terms and all applicable laws and regulations. If you
                    do not agree with any part of these Terms, you must not use
                    our Services.
                  </p>
                  <p className="mt-3">
                    We reserve the right to modify these Terms at any time. We
                    will provide notice of material changes by posting the
                    updated Terms on our website and/or notifying you directly.
                    Your continued use of the Services after any such changes
                    constitutes your acceptance of the new Terms.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    2. Eligibility
                  </h2>
                  <p>
                    You must be at least 18 years old to use our Services. By
                    using the Services, you represent and warrant that you meet
                    all eligibility requirements. If you are using the Services
                    on behalf of a legal entity, you further represent and
                    warrant that you are authorized to enter into these Terms on
                    behalf of that entity.
                  </p>
                  <p className="mt-3">
                    You are responsible for ensuring your use of the Services
                    complies with all laws, regulations, and rules applicable in
                    your jurisdiction. The Services may not be available in all
                    regions and countries, and we reserve the right to restrict
                    access from certain locations.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    3. Description of Services
                  </h2>
                  <p>
                    The Megapayer ecosystem includes, but is not limited to, the
                    Megapayer blockchain, decentralized applications,
                    development tools, financial products, digital wallets, and
                    related services. These Services enable users to interact
                    with blockchain technology, create and exchange digital
                    assets, participate in decentralized finance activities, and
                    utilize blockchain-based applications.
                  </p>
                  <p className="mt-3">
                    We may update, modify, or discontinue any aspect of our
                    Services at any time without prior notice. We are not liable
                    to you or any third party for any modification, suspension,
                    or discontinuation of the Services or any part thereof.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    4. Blockchain Technology Risks and Acknowledgments
                  </h2>
                  <p>
                    By using our Services, you acknowledge and agree to the
                    following:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      Blockchain technology and cryptocurrencies are subject to
                      unique risks, including but not limited to high price
                      volatility, security vulnerabilities, regulatory
                      uncertainty, and network disruptions;
                    </li>
                    <li>
                      You are responsible for securing your private keys,
                      passwords, and other access credentials – lost credentials
                      typically cannot be recovered due to the nature of
                      blockchain technology;
                    </li>
                    <li>
                      Transactions recorded on the blockchain are generally
                      irreversible and immutable;
                    </li>
                    <li>
                      Smart contracts and decentralized applications may contain
                      bugs, vulnerabilities, or other issues that could result
                      in loss of funds or other negative consequences;
                    </li>
                    <li>
                      The regulatory landscape for blockchain technology and
                      digital assets is evolving, and future regulatory changes
                      may impact the availability or functionality of our
                      Services;
                    </li>
                    <li>
                      Market conditions and technical factors may affect
                      transaction processing times and fees on the blockchain.
                    </li>
                  </ul>
                  <p>
                    You agree to assume all risks associated with using
                    blockchain technology.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    5. User Accounts
                  </h2>
                  <p>
                    Some of our Services may require you to create an account.
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities that occur
                    under your account. You agree to notify us immediately of
                    any unauthorized use of your account.
                  </p>
                  <p className="mt-3">
                    We reserve the right to suspend or terminate accounts that
                    violate these Terms or for any other reason in our sole
                    discretion. You may close your account at any time, but you
                    remain liable for all obligations related to your account
                    even after it is closed.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    6. User Conduct
                  </h2>
                  <p>While using our Services, you agree not to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      Use the Services for any illegal purpose or in violation
                      of any local, state, national, or international law;
                    </li>
                    <li>
                      Violate or attempt to violate the security of the
                      Services;
                    </li>
                    <li>
                      Interfere with or disrupt the operation of the Services or
                      servers connected to the Services;
                    </li>
                    <li>
                      Attempt to bypass any measures we may use to prevent or
                      restrict access to the Services;
                    </li>
                    <li>
                      Engage in fraudulent activity or encourage others to do
                      so;
                    </li>
                    <li>
                      Attempt to manipulate or artificially influence markets or
                      transactions;
                    </li>
                    <li>
                      Impersonate or attempt to impersonate Megapayer, a
                      Megapayer employee, another user, or any other person;
                    </li>
                    <li>
                      Upload or transmit viruses, worms, or other malicious
                      code;
                    </li>
                    <li>
                      Use the Services to violate the property rights of others,
                      including intellectual property rights;
                    </li>
                    <li>
                      Use the Services to harass, abuse, or harm another person
                      or group;
                    </li>
                    <li>
                      Use the Services to engage in market manipulation, fraud,
                      or deceptive conduct.
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    7. Intellectual Property Rights
                  </h2>
                  <p>
                    The Services and their contents, features, and functionality
                    are owned by Megapayer, its licensors, or other providers
                    and are protected by copyright, trademark, patent, trade
                    secret, and other intellectual property laws.
                  </p>
                  <p className="mt-3">
                    We grant you a limited, non-exclusive, non-transferable,
                    revocable license to use the Services for their intended
                    purposes in accordance with these Terms. You may not copy,
                    modify, distribute, sell, or lease any part of the Services
                    without our prior written consent.
                  </p>
                  <p className="mt-3">
                    Some components of our Services may be offered under an
                    open-source license. In such cases, the terms of the
                    applicable open-source license will govern your use of those
                    components.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    8. Third-Party Content and Services
                  </h2>
                  <p>
                    Our Services may display, include, or make available content
                    from third parties ("Third-Party Content") or provide links
                    to third-party websites or services. We do not control,
                    endorse, or adopt any Third-Party Content and will not be
                    responsible for any Third-Party Content or websites.
                  </p>
                  <p className="mt-3">
                    Your interactions with third-party services are solely
                    between you and the third party. We are not responsible or
                    liable for any loss or damage of any sort resulting from any
                    such interactions.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    9. Disclaimers
                  </h2>
                  <p className="font-semibold text-white">
                    THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                    BASIS. MEGAPAYER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY
                    KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT
                    NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                    NON-INFRINGEMENT.
                  </p>
                  <p className="mt-3">
                    MEGAPAYER MAKES NO WARRANTY THAT (i) THE SERVICES WILL MEET
                    YOUR REQUIREMENTS, (ii) THE SERVICES WILL BE UNINTERRUPTED,
                    TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE
                    OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR
                    RELIABLE, OR (iv) THE QUALITY OF ANY PRODUCTS, SERVICES,
                    INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU
                    THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS.
                  </p>
                  <p className="mt-3">
                    WE DO NOT PROVIDE INVESTMENT ADVICE AND ANY CONTENT
                    AVAILABLE THROUGH OUR SERVICES SHOULD NOT BE CONSTRUED AS
                    INVESTMENT ADVICE. WE ARE NOT RESPONSIBLE FOR ANY LOSS OF
                    FUNDS OR DIGITAL ASSETS.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    10. Limitation of Liability
                  </h2>
                  <p className="font-semibold text-white">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                    EVENT WILL MEGAPAYER OR ITS AFFILIATES, DIRECTORS,
                    EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, OR LICENSORS BE
                    LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF
                    PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                    RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO
                    ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF
                    ANY THIRD PARTY ON THE SERVICES; (iii) ANY CONTENT OBTAINED
                    FROM THE SERVICES; AND (iv) UNAUTHORIZED ACCESS, USE, OR
                    ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED
                    ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY
                    OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF
                    THE POSSIBILITY OF SUCH DAMAGE.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    11. Indemnification
                  </h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless Megapayer
                    and its affiliates, directors, officers, employees, agents,
                    partners, contractors, and licensors from and against any
                    claims, liabilities, damages, losses, and expenses,
                    including reasonable attorneys' fees and costs, arising out
                    of or in any way connected with (i) your access to or use of
                    the Services; (ii) your violation of these Terms; (iii) your
                    violation of any third-party right, including without
                    limitation any intellectual property right, publicity,
                    confidentiality, property, or privacy right; or (iv) any
                    claim that your content caused damage to a third party.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    12. Dispute Resolution
                  </h2>
                  <p>
                    Any dispute arising out of or relating to these Terms or the
                    Services shall be resolved through binding arbitration in
                    accordance with the rules of the American Arbitration
                    Association. The arbitration shall be conducted in San
                    Francisco, California, USA.
                  </p>
                  <p className="mt-3">
                    You agree that any dispute resolution proceedings will be
                    conducted only on an individual basis and not in a class,
                    consolidated, or representative action. If for any reason a
                    claim proceeds in court rather than in arbitration, you
                    waive any right to a jury trial.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    13. Governing Law
                  </h2>
                  <p>
                    These Terms shall be governed by the laws of the State of
                    California, USA, without regard to its conflict of law
                    principles. The United Nations Convention on Contracts for
                    the International Sale of Goods does not apply to these
                    Terms.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    14. Termination
                  </h2>
                  <p>
                    We may terminate or suspend your access to the Services
                    immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you
                    breach these Terms. Upon termination, your right to use the
                    Services will immediately cease.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    15. Miscellaneous
                  </h2>
                  <p>
                    <strong>Entire Agreement:</strong> These Terms constitute
                    the entire agreement between you and Megapayer regarding the
                    Services and supersede all prior agreements and
                    understandings.
                  </p>
                  <p className="mt-2">
                    <strong>Severability:</strong> If any provision of these
                    Terms is held to be invalid or unenforceable, such provision
                    shall be struck and the remaining provisions shall be
                    enforced.
                  </p>
                  <p className="mt-2">
                    <strong>No Waiver:</strong> Our failure to enforce any right
                    or provision of these Terms will not be considered a waiver
                    of such right or provision.
                  </p>
                  <p className="mt-2">
                    <strong>Assignment:</strong> You may not assign or transfer
                    these Terms without the prior written consent of Megapayer.
                    Megapayer may freely assign these Terms.
                  </p>
                  <p className="mt-2">
                    <strong>Contact:</strong> Questions about the Terms should
                    be sent to legal@megapayer.io.
                  </p>
                </div>

                <div className="flex items-center space-x-6 mt-12">
                  <Link
                    href="/privacy-policy"
                    className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/enterprise/contact"
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
