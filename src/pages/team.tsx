import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";

// Skill pills for each role
const skillsByRole: Record<string, string[]> = {
  "CEO, Megapayer": ["Strategy", "Vision", "Leadership"],
  "CTO, Megapayer": ["Solidity", "Architecture", "Innovation"],
  "Lead Engineer": ["Full Stack", "Smart Contracts", "DevOps"],
  "Marketing": ["Growth", "Community", "Branding"],
  "Engineer": ["React", "Node.js", "Web3"],
  "Shariah Advisory": ["Islamic Finance", "Compliance", "Ethics"],
};

// Country flags emoji
const countryFlags: Record<string, string> = {
  "Turkey": "🇹🇷",
  "Uzbekistan": "🇺🇿",
  "Pakistan": "🇵🇰",
  "Malaysia": "🇲🇾",
  "Russia": "🇷🇺",
};

const teamMembers = [
  {
    name: "Muhammed",
    title: "CEO, Megapayer",
    country: "Turkey",
    image: "/images/team/muhammed.jpeg",
    x: "https://x.com/muhammed_CEO",
    linkedin: "https://linkedin.com/in/muhammed-ceo",
  },
  {
    name: "Abdurrahman",
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
    name: "Fayzullah Sodiq",
    title: "Marketing",
    country: "Uzbekistan",
    image: "/images/team/fayzulloh.jpg",
    x: "https://x.com/feiyzulloh",
    linkedin: "https://linkedin.com/in/feiyzulloh",
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
  {
    name: "Sheikh Hussein",
    title: "Shariah Advisory",
    country: "Russia",
    image: "/images/team/huseyn.jpg",
    x: "https://x.com/huseyn",
    linkedin: "https://linkedin.com/in/huseyn",
  },
  {
    name: "Sheikh Suleiman",
    title: "Shariah Advisory",
    country: "Turkey",
    image: "/images/team/suleyman.jpg",
    x: "https://x.com/suleyman",
    linkedin: "https://linkedin.com/in/suleyman",
  },
];

const Team = () => {
  // Mouse tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Digital Pioneers | Megapayer Team</title>
        <meta
          name="description"
          content="Meet the global team behind Megapayer, building the future of decentralized finance and blockchain technology."
        />
      </Head>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes line-draw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .hexagon-clip {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>

      {/* Mouse-Following Glow */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-100"
        style={{
          left: mousePos.x - 100,
          top: mousePos.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 60%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
        }}
      />

      <section
        className="min-h-screen py-20 relative overflow-hidden"
        style={{ background: '#030308', paddingTop: '120px' }}
      >
        {/* World Map Network Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Distributed dots representing global network */}
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Connection lines */}
            {[
              { x1: 200, y1: 300, x2: 400, y2: 200 },
              { x1: 400, y1: 200, x2: 600, y2: 350 },
              { x1: 600, y1: 350, x2: 800, y2: 250 },
              { x1: 800, y1: 250, x2: 1000, y2: 400 },
              { x1: 300, y1: 500, x2: 500, y2: 450 },
              { x1: 500, y1: 450, x2: 700, y2: 550 },
              { x1: 700, y1: 550, x2: 900, y2: 500 },
              { x1: 400, y1: 200, x2: 300, y2: 500 },
              { x1: 600, y1: 350, x2: 700, y2: 550 },
              { x1: 800, y1: 250, x2: 900, y2: 500 },
            ].map((line, i) => (
              <line
                key={`line-${i}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#00f0ff"
                strokeWidth="1"
                strokeDasharray="5,5"
                style={{ animation: `pulse-dot 3s ease-in-out ${i * 0.3}s infinite` }}
              />
            ))}
            {/* Network nodes */}
            {[
              { x: 200, y: 300 }, { x: 400, y: 200 }, { x: 600, y: 350 },
              { x: 800, y: 250 }, { x: 1000, y: 400 }, { x: 300, y: 500 },
              { x: 500, y: 450 }, { x: 700, y: 550 }, { x: 900, y: 500 },
              { x: 150, y: 400 }, { x: 350, y: 350 }, { x: 550, y: 200 },
              { x: 750, y: 450 }, { x: 950, y: 300 }, { x: 450, y: 600 },
            ].map((dot, i) => (
              <circle
                key={`dot-${i}`}
                cx={dot.x}
                cy={dot.y}
                r="4"
                fill="#00f0ff"
                style={{ animation: `pulse-dot 2s ease-in-out ${i * 0.2}s infinite` }}
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-cyan-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 font-mono text-sm">DIGITAL PIONEERS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              The <span style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Megapayer</span> Team
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A global network of visionaries, engineers, and innovators united to build
              the decentralized future. We combine expertise across blockchain, cryptography,
              and product design.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0, 240, 255, 0.5)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255, 255, 255, 0.08)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'inset 0 0 20px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  {/* Hexagon Profile Image */}
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    {/* Spinning Ring */}
                    <div
                      className="absolute inset-[-4px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, #00f0ff, transparent, #8a2be2, transparent)',
                        animation: 'spin-slow 4s linear infinite',
                      }}
                    />
                    {/* Hexagon Container */}
                    <div
                      className="absolute inset-1 hexagon-clip overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))',
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hexagon-clip"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/team/default-avatar.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p
                    className="font-medium mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {member.title}
                  </p>

                  {/* Country with Flag */}
                  <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                    <span>{countryFlags[member.country] || "🌍"}</span>
                    <span>{member.country}</span>
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {(skillsByRole[member.title] || ["Blockchain"]).slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono rounded-full"
                        style={{
                          background: 'rgba(0, 240, 255, 0.1)',
                          border: '1px solid rgba(0, 240, 255, 0.3)',
                          color: '#00f0ff',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-300"
                      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0, 240, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-300"
                      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(138, 43, 226, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div
              className="inline-block p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Join the Revolution</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                We're always looking for talented individuals who want to shape the future of decentralized technology.
              </p>
              <a
                href="/coming-soon?product=Careers&returnUrl=/"
                className="inline-block px-8 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                }}
              >
                View Open Positions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
