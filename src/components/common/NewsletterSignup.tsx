import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  theme?: 'dark' | 'light';
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Stay Updated",
  subtitle = "Subscribe to our newsletter for the latest developments and updates on the Megapayer ecosystem.",
  buttonText = "Subscribe",
  className = "",
  theme = "dark"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className={`${className} ${
      theme === 'dark' 
        ? 'bg-dark/40 backdrop-blur-md border border-white/10' 
        : 'bg-white/5 backdrop-blur-md border border-white/20'
    } rounded-lg p-6 md:p-8`}>
      {!isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-6">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className={`flex-1 px-4 py-3 rounded-lg focus:outline-none ${
                theme === 'dark'
                  ? 'bg-dark/60 border border-white/10 focus:border-primary/50' 
                  : 'bg-white/10 border border-white/30 focus:border-white/50'
              } transition-colors`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-primary hover:bg-primary-dark text-white' 
                  : 'bg-white hover:bg-white/90 text-dark'
              } ${isSubmitting ? 'opacity-70' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : buttonText}
            </motion.button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      ) : (
        <motion.div 
          className="text-center py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-white/30 text-white'
          }`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Thanks for subscribing!</h3>
          <p className="text-gray-300 mb-2">
            You're now on our newsletter list.
          </p>
          <p className="text-sm text-gray-400">
            We'll keep you updated on all Megapayer ecosystem developments.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default NewsletterSignup;
