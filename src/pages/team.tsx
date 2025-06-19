import Head from "next/head";
import Layout from "@/components/layout/Layout";

const teamMembers = [
  {
    name: "Muhammed",
    title: "CEO, Megapayer",
    country: "Türkiye",
    image: "/images/team/muhammed.jpg",
  },
  {
    name: "Abdurahman",
    title: "CTO, Megapayer",
    country: "Uzbekistan",
    image: "/images/team/abdurahman.jpg",
  },
  {
    name: "Wajid Husain",
    title: "Lead Engineer",
    country: "Pakistan",
    image: "/images/team/wajid.jpg",
  },
  {
    name: "Abdullah Samii",
    title: "Engineer",
    country: "Malaysia",
    image: "/images/team/abdullah.jpg",
  },
  {
    name: "Muhammad Najeem",
    title: "Engineer",
    country: "Malaysia",
    image: "/images/team/najeem.jpg",
  },
  {
    name: "Shayh Huseyn",
    title: "Engineer",
    country: "Russia",
    image: "/images/team/huseyn.jpg",
  },
  {
    name: "Shayh Süleyman",
    title: "Engineer",
    country: "Türkiye",
    image: "/images/team/suleyman.jpg",
  },
  {
    name: "Viktor",
    title: "Marketing",
    country: "Russia",
    image: "/images/team/viktor.jpg",
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
              className="bg-dark/60 rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/10"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
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
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-1">{member.title}</p>
              <p className="text-gray-400 text-sm">{member.country}</p>
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
