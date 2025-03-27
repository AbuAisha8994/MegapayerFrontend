import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Roadmap = () => {
  const roadmapRef = useRef(null);
  const isInView = useInView(roadmapRef, { once: true, amount: 0.2 });
  
  const milestones = [
    {
      id: 1,
      quarter: 'April 2025',
      status: 'upcoming',
      title: 'Blockchain Launch',
      description: 'Mainnet launch of Megapayer blockchain with Shared Proof of Stake consensus mechanism.'
    },
    {
      id: 2,
      quarter: 'June 2025',
      status: 'upcoming',
      title: 'Universal Wallet & DEX',
      description: 'Release of multi-chain wallet and decentralized exchange with cross-chain capabilities.'
    },
    {
      id: 3,
      quarter: 'August 2025',
      status: 'upcoming',
      title: 'P2P Exchange & Stablecoin',
      description: 'Launch of peer-to-peer trading platform and fully collateralized stablecoin.'
    },
    {
      id: 4,
      quarter: 'October 2025',
      status: 'upcoming',
      title: 'Social Media Platform',
      description: 'Release of decentralized social media with on-chain content protection.'
    },
    {
      id: 5,
      quarter: 'December 2025',
      status: 'planning',
      title: 'Ecosystem Integration',
      description: 'Enhanced cross-product integration and enterprise partnerships.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="roadmap">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development <span className="text-gradient">Roadmap</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to build the most comprehensive blockchain ecosystem, with major milestones planned for 2025.
          </p>
        </motion.div>
        
        <div 
          ref={roadmapRef}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary-light opacity-30"></div>
          
          {/* Milestone items */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Milestone content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className={`
                  p-6 rounded-xl relative
                  ${milestone.status === 'upcoming' 
                    ? 'bg-primary/10 border border-primary/20' 
                    : milestone.status === 'planning'
                      ? 'bg-secondary/10 border border-secondary/20'
                      : 'bg-white/10 border border-white/10'
                  }
                `}>
                  <div className="absolute top-0 -mt-8">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-bold
                      ${milestone.status === 'upcoming' 
                        ? 'bg-primary/20 text-primary' 
                        : milestone.status === 'planning'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-white/20 text-white'
                      }
                    `}>
                      {milestone.quarter}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
              
              {/* Timeline point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className={`
                  w-6 h-6 rounded-full border-4
                  ${milestone.status === 'upcoming' 
                    ? 'bg-primary border-dark' 
                    : milestone.status === 'planning'
                      ? 'bg-secondary border-dark'
                      : 'bg-white border-dark'
                  }
                `}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
