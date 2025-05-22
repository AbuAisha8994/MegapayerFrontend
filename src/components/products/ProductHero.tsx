import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  animation: React.ReactNode;
  color?: string;
  secondaryColor?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  description,
  animation,
  color = "#4f46e5",
  secondaryColor = "#10b981",
}) => {
  // Converting hex colors to RGB format for use in CSS variables
  const getRgbFromHex = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const primaryRgb = getRgbFromHex(color);
  const secondaryRgb = getRgbFromHex(secondaryColor);

  return (
    <section className="relative min-h-screen pt-20">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={
          {
            background: `radial-gradient(circle at 30% 40%, ${color}22, transparent 35%), 
                      radial-gradient(circle at 70% 60%, ${secondaryColor}22, transparent 35%), 
                      linear-gradient(to bottom, rgba(10, 10, 20, 0.8), rgb(5, 5, 15))`,
            "--gradient-start": color,
            "--gradient-end": secondaryColor,
          } as any
        }
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="inline-block text-sm uppercase tracking-wider mb-2 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${color}22`, color: `${color}` }}
            >
              Megapayer Ecosystem
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              {subtitle}
            </p>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#details"
                className="btn-primary"
                style={
                  {
                    "--tw-shadow-color": `${color}33`,
                    backgroundColor: color,
                    "--hover-bg-color": `${color}dd`,
                  } as any
                }
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-[500px]"
          >
            {animation}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
