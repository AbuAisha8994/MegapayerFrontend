import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/common/ContactForm';

const EnterpriseContactPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('Enterprise Integration');

  const subjects = [
    {
      id: 'integration',
      title: 'Enterprise Integration',
      description: 'Explore how your business can integrate with the Megapayer ecosystem',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'pilot',
      title: 'Enterprise Pilot Program',
      description: 'Apply for our exclusive enterprise pilot program with premium support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'consultation',
      title: 'Technical Consultation',
      description: 'Schedule a consultation with our blockchain experts',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Enterprise Contact | Megapayer</title>
        <meta 
          name="description" 
          content="Contact Megapayer for enterprise integration, pilot programs, or technical consultation. Our team is ready to help your business harness the power of blockchain." 
        />
      </Head>

      <div className="container mx-auto px-4 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise <span className="text-gradient">Contact</span></h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team to discuss how Megapayer can accelerate your business's blockchain journey in 2025 and beyond.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/5">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How can we help?</h2>
                <p className="text-gray-300 mb-6">
                  Select the topic that best matches your inquiry, and our team will ensure your request reaches the right department.
                </p>
                
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <motion.button
                      key={subject.id}
                      onClick={() => setSelectedSubject(subject.title)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start ${
                        selectedSubject === subject.title
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-dark/20 hover:bg-dark/30'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-full mr-4 mt-1 ${
                        selectedSubject === subject.title
                          ? 'bg-primary/20 text-primary'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {subject.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{subject.title}</h3>
                        <p className="text-sm text-gray-400">{subject.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4">Enterprise Support</h3>
                <p className="text-gray-300 mb-4">
                  Already an enterprise partner? Contact our dedicated support team:
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:enterprise@megapayer.com" className="text-primary hover:text-primary-light transition-colors">
                    enterprise@megapayer.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+1 (888) 925-2025</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-1 rounded-lg">
                <div className="bg-dark/40 backdrop-blur-md rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {selectedSubject === 'Enterprise Integration' && 'Tell us about your integration needs'}
                    {selectedSubject === 'Enterprise Pilot Program' && 'Apply for our 2025 pilot program'}
                    {selectedSubject === 'Technical Consultation' && 'Request a technical consultation'}
                  </h2>
                  
                  <ContactForm 
                    subject={selectedSubject}
                    buttonText={
                      selectedSubject === 'Enterprise Integration' ? 'Request Information' :
                      selectedSubject === 'Enterprise Pilot Program' ? 'Submit Application' :
                      'Schedule Consultation'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Our enterprise solutions include dedicated infrastructure, enhanced security measures, and customized SLAs to meet your organization's requirements.
              </p>
            </div>
            
            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                Enterprise clients receive 24/7 priority support with a dedicated account manager to ensure seamless integration and operations.
              </p>
            </div>
            
            <div className="bg-dark/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Solutions</h3>
              <p className="text-gray-300">
                We offer tailored compliance packages to meet regulatory requirements across different jurisdictions, with comprehensive audit and reporting tools.
              </p>
            </div>
          </motion.div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Enterprise Clients</h2>
            <div className="flex flex-wrap justify-center gap-10 items-center opacity-60">
              {/* These would be replaced with actual client logos */}
              <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">ACME Corp</span>
              </div>
              <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">Global Bank</span>
              </div>
              <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">Tech Giant</span>
              </div>
              <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">Innovate Inc</span>
              </div>
              <div className="h-12 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold">Future Finance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnterpriseContactPage;
