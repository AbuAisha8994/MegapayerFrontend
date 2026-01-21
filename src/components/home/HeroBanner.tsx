import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Neural Network Canvas - Mouse responsive constellation effect
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    color: string;
    pulsePhase: number;
  }>>([]);
  const animationRef = useRef<number>(0);

  // Initialize nodes
  const initializeNetwork = useCallback((width: number, height: number) => {
    const nodeCount = Math.min(80, Math.floor((width * height) / 15000));
    const nodes: typeof nodesRef.current = [];
    const colors = ["#06b6d4", "#8b5cf6", "#3b82f6", "#a855f7", "#22d3ee"];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    nodesRef.current = nodes;
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    const time = Date.now() * 0.001;

    // Clear with slight trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, width, height);

    // Draw connections first
    const maxDistance = 150;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3;

          // Mouse proximity boost
          const midX = (nodes[i].x + nodes[j].x) / 2;
          const midY = (nodes[i].y + nodes[j].y) / 2;
          const mouseDist = Math.sqrt(
            Math.pow(mouse.x - midX, 2) + Math.pow(mouse.y - midY, 2)
          );
          const mouseBoost = Math.max(0, 1 - mouseDist / 200) * 0.5;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          // Gradient line color
          const gradient = ctx.createLinearGradient(
            nodes[i].x, nodes[i].y,
            nodes[j].x, nodes[j].y
          );
          gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity + mouseBoost})`);
          gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity + mouseBoost})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5 + mouseBoost * 2;
          ctx.stroke();
        }
      }
    }

    // Update and draw nodes
    nodes.forEach((node) => {
      // Mouse interaction
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = Math.max(0, 1 - distToMouse / 250);

      // Gentle floating motion + mouse attraction
      node.x = node.baseX + Math.sin(time * 0.5 + node.pulsePhase) * 15 + dx * mouseInfluence * 0.15;
      node.y = node.baseY + Math.cos(time * 0.3 + node.pulsePhase) * 10 + dy * mouseInfluence * 0.15;

      // Pulse effect
      node.pulsePhase += 0.02;
      const pulse = Math.sin(node.pulsePhase) * 0.3 + 1;
      const currentRadius = node.radius * pulse * (1 + mouseInfluence * 0.5);

      // Glow effect
      const glowSize = currentRadius * (3 + mouseInfluence * 4);
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowSize
      );
      gradient.addColorStop(0, node.color);
      gradient.addColorStop(0.4, node.color + "60");
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      initializeNetwork(rect.width, rect.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initializeNetwork]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Start animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
};

const HeroBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Track mouse for text glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #0c1445 0%, #050816 40%, #000000 100%)",
      }}
    >
      {/* Neural Network Background */}
      <NeuralNetworkCanvas />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-lg md:text-xl text-cyan-400/90 tracking-[0.3em] uppercase font-medium">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main Title - MEGAPAYER with mouse-responsive glow */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 relative"
          >
            <span
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight relative inline-block"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: `drop-shadow(0 0 30px rgba(6, 182, 212, 0.4)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.3))`,
              }}
            >
              MEGAPAYER
            </span>
            {/* Mouse-following glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
              }}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* Glassmorphism Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary CTA */}
            <Link
              href="#ecosystem"
              className="relative group px-10 py-4 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(6, 182, 212, 0.4)",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.03)",
              }}
            >
              {/* Neon glow on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
                }}
              />
              <span className="relative z-10">{t.hero.cta_primary}</span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#ecosystem-products"
              className="relative group px-10 py-4 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.02)",
              }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                }}
              />
              <span className="relative z-10">{t.hero.cta_secondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-0 right-0 text-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 mx-auto text-cyan-400/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Fade to black at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 50%, #000000 100%)",
        }}
      />
    </div>
  );
};

export default HeroBanner;
