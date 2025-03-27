import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCTAProps {
  productId: string;
  title: string;
  description?: string;
}

const ProductCTA = ({ productId, title, description }: ProductCTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark to-dark/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Use Megapayer {title}?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            {description || `Experience the future of blockchain technology with our innovative ${title.toLowerCase()} platform`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/coming-soon" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started
            </Link>
            <Link 
              href={`/whitepaper/${productId}`} 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Read Whitepaper
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
