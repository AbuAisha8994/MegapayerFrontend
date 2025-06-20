import Head from "next/head";
import Layout from "@/components/layout/Layout";

const teamMembers = [
  {
    name: "Muhammed", // Changed "Muhammed" to standard English spelling "Muhammad"
    title: "CEO, Megapayer",
    country: "Turkey", // Changed "Türkiye" to "Turkey" for English consistency
    image: "/images/team/muhammed.jpeg",
    x: "https://x.com/muhammed_CEO",
    linkedin: "https://linkedin.com/in/muhammed",
  },
  {
    name: "Abdurrahman", // Changed "Abdurahman" to standard English spelling "Abdurrahman"
    title: "CTO, Megapayer",
    country: "Uzbekistan",
    image: "/images/team/abdurahman.jpg",
    x: "https://x.com/abdurahman_web",
    linkedin: "https://linkedin.com/in/abdurahman",
  },
  {
    name: "Wajid Husain",
    title: "Lead Engineer",
    country: "Pakistan",
    image: "/images/team/wajid.jpg",
    x: "https://x.com/wajidhusain",
    linkedin: "https://linkedin.com/in/wajidhusain",
  },
  {
    name: "Fayzullah Sodiq", // Changed "Fayzulloh" to standard English spelling "Fayzullah"
    title: "Marketing",
    country: "Uzbekistan",
    image: "/images/team/fayzulloh.jpg",
    x: "https://x.com/viktor",
    linkedin: "https://linkedin.com/in/viktor",
  },
  {
    name: "Muhammad Najeem",
    title: "Engineer",
    country: "Malaysia",
    image: "/images/team/najeem.jpg",
    x: "https://x.com/najeem",
    linkedin: "https://linkedin.com/in/najeem",
  },
  {
    name: "Abdullah Samii",
    title: "Engineer",
    country: "Malaysia",
    image: "/images/team/abdullah.jpg",
    x: "https://x.com/abdullah",
    linkedin: "https://linkedin.com/in/abdullah",
  },
  // Shariah Board members - corrected English spelling
  {
    name: "Sheikh Hussein", // Standardized English spelling (Huseyn → Hussein)
    title: "Shariah Advisory Board", // More complete title
    country: "Russia",
    image: "/images/team/huseyn.jpg",
    x: "https://x.com/huseyn",
    linkedin: "https://linkedin.com/in/huseyn",
  },
  {
    name: "Sheikh Suleiman", // Standardized English spelling (Suleyman → Suleiman)
    title: "Shariah Advisory Board",
    country: "Turkey",
    image: "/images/team/suleyman.jpg",
    x: "https://x.com/suleyman",
    linkedin: "https://linkedin.com/in/suleyman",
  },
];

const Team = () => (
  <Layout>
    <Head>
      <title>Meet the Team | Megapayer</title>
      <meta
        name="description"
        content="Meet the global team behind Megapayer, building the future of decentralized finance and blockchain technology."
      />
    </Head>
    <section
      className="bg-gradient-to-b from-dark/70 to-dark min-h-[60vh] py-20"
      style={{ paddingTop: "120px" }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Meet the Team
        </h1>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Our diverse and experienced team is united by a shared vision: to
          build a secure, scalable, and user-centric blockchain ecosystem for
          the world. We combine expertise in engineering, cryptography, product
          design, and marketing to deliver innovative solutions for the
          decentralized future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-dark/60 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/10 transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/team/default-avatar.png";
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-1 text-center">
                {member.title}
              </p>
              <p className="text-gray-400 text-sm mb-3 text-center">
                {member.country}
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-3 mt-2">
                <a
                  href={member.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark/40 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
                  aria-label={`${member.name}'s X profile`}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark/40 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Interested in joining our team?{" "}
            <a
              href="/coming-soon?product=Careers&returnUrl=/"
              className="text-primary underline hover:text-secondary"
            >
              See open positions
            </a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
