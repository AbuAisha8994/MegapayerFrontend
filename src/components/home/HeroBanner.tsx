import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";

// Enhanced animated sphere with more visual appeal
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;

      // Add pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.05 + 1;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Sphere args={[0.8, 100, 100]} ref={meshRef}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        emissive="#3730a3"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
};

// Network Node component with enhanced visuals
const NetworkNode = ({
  position,
  size,
  color,
  pulseSpeed = 1,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  pulseSpeed?: number;
}) => {
  // Scale down the positions to make the network more compact
  const scaledPosition: [number, number, number] = [
    position[0] * 0.7,
    position[1] * 0.7,
    position[2] * 0.7,
  ];

  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Floating motion
      meshRef.current.position.y =
        scaledPosition[1] +
        Math.sin(clock.getElapsedTime() * 2 * pulseSpeed + scaledPosition[0]) *
          0.05;

      // Subtle rotation
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 * pulseSpeed;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 * pulseSpeed;
    }

    if (glowRef.current && glowRef.current.material instanceof THREE.Material) {
      // Pulsing glow effect
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity =
        Math.sin(clock.getElapsedTime() * 2 * pulseSpeed) * 0.4 + 0.6;
    }
  });

  return (
    <group position={scaledPosition}>
      {/* Glow effect */}
      <mesh ref={glowRef} scale={1.5}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} transparent={true} opacity={0.6} />
      </mesh>

      {/* Main node */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

// Connection Line component with pulsing energy effect
const ConnectionLine = ({
  startPos,
  endPos,
  color,
}: {
  startPos: [number, number, number];
  endPos: [number, number, number];
  color: string;
}) => {
  // Scale down positions to make network more compact
  const scaledStartPos: [number, number, number] = [
    startPos[0] * 0.7,
    startPos[1] * 0.7,
    startPos[2] * 0.7,
  ];
  const scaledEndPos: [number, number, number] = [
    endPos[0] * 0.7,
    endPos[1] * 0.7,
    endPos[2] * 0.7,
  ];

  const ref = useRef<THREE.Line>(null);
  const energyRef = useRef<THREE.Mesh>(null);
  const [energyPosition, setEnergyPosition] = useState(0);

  useFrame(({ clock }) => {
    if (
      ref.current &&
      ref.current.material instanceof THREE.LineBasicMaterial
    ) {
      // Pulse effect on the line
      (ref.current.material as THREE.LineBasicMaterial).opacity =
        Math.sin(clock.getElapsedTime() * 2) * 0.3 + 0.7;
    }

    // Update energy pulse position
    const newPos = (clock.getElapsedTime() * 0.5) % 2;
    const normalizedPos = newPos <= 1 ? newPos : 2 - newPos;
    setEnergyPosition(normalizedPos);

    // Move energy pulse along the line
    if (energyRef.current) {
      const x =
        scaledStartPos[0] +
        (scaledEndPos[0] - scaledStartPos[0]) * normalizedPos;
      const y =
        scaledStartPos[1] +
        (scaledEndPos[1] - scaledStartPos[1]) * normalizedPos;
      const z =
        scaledStartPos[2] +
        (scaledEndPos[2] - scaledStartPos[2]) * normalizedPos;
      energyRef.current.position.set(x, y, z);
    }
  });

  return (
    <>
      <line ref={ref}>
        <bufferGeometry attach="geometry">
          <float32BufferAttribute
            attach="attributes-position"
            array={new Float32Array([...scaledStartPos, ...scaledEndPos])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          attach="material"
          color={color}
          opacity={0.7}
          transparent={true}
          linewidth={2}
        />
      </line>

      {/* Energy pulse effect */}
      <mesh ref={energyRef} scale={0.08}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} transparent={true} opacity={0.8} />
      </mesh>
    </>
  );
};

// Create an enhanced network of nodes
const BlockchainNetwork = () => {
  const nodePositions: [number, number, number][] = [
    [-2, 0, 0],
    [2, 0, 0],
    [0, 2, 0],
    [0, -2, 0],
    [-1.8, 1.8, 0.5],
    [1.8, 1.8, 0.5],
    [1.8, -1.8, 0.5],
    [-1.8, -1.8, 0.5],
    [0, 0, 2.5],
    [0, 0, -2],
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [0, 4],
    [0, 7],
    [0, 9],
    [1, 2],
    [1, 5],
    [1, 6],
    [1, 8],
    [2, 4],
    [2, 5],
    [2, 8],
    [3, 6],
    [3, 7],
    [3, 9],
    [4, 7],
    [4, 8],
    [5, 6],
    [5, 8],
    [6, 9],
    [7, 9],
    [8, 9],
  ];

  const colors = ["#4f46e5", "#10b981", "#f59e0b", "#818cf8", "#34d399"];

  return (
    <group>
      {nodePositions.map((pos, i) => (
        <NetworkNode
          key={`node-${i}`}
          position={pos}
          size={0.12}
          color={colors[i % colors.length]}
          pulseSpeed={0.5 + Math.random() * 0.5}
        />
      ))}

      {connections.map(([startIdx, endIdx], i) => (
        <ConnectionLine
          key={`connection-${i}`}
          startPos={nodePositions[startIdx]}
          endPos={nodePositions[endIdx]}
          color={colors[i % colors.length]}
        />
      ))}
    </group>
  );
};

const HeroBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * -20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Enhanced radial gradient overlay with better shadows */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/60 to-dark/90 z-10 pointer-events-none"></div>

      {/* Animated lines background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary/30 to-transparent"></div>
      </div>

      <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }} shadows>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[0, 0, 2]} intensity={1} color="#4f46e5" />
        <pointLight position={[0, 2, 0]} intensity={1} color="#10b981" />

        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={1}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />

        <AnimatedSphere />
        <BlockchainNetwork />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          className="max-w-4xl mx-auto text-center px-4"
          style={{
            transform: `perspective(1000px) rotateX(${
              mousePosition.y * 0.01
            }deg) rotateY(${mousePosition.x * 0.01}deg)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 drop-shadow-2xl"
          >
            <span className="block text-gradient-gold mb-2 text-xl md:text-2xl">
              Fair Future, Together
            </span>
            <span
              className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{
                textShadow: `
                  0 0 5px rgba(56, 189, 248, 0.7),
                  0 0 15px rgba(56, 189, 248, 0.5),
                  0 0 25px rgba(59, 130, 246, 0.5),
                  0 5px 20px rgba(59, 130, 246, 0.3)
                `,
                WebkitBoxDecorationBreak: "clone",
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
              }}
            >
              MEGAPAYER
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow-lg"
          >
            Building the future of the internet, together. Your partner for a
            community-driven, transparent, and fair Web3 experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#ecosystem"
              className="neo-brutalism text-white font-bold py-4 px-8 rounded-lg text-lg 
                [box-shadow:_0_10px_20px_-5px_rgba(79,70,229,0.5)]
                transition-all duration-300 hover:scale-105
                hover:[box-shadow:_0_15px_25px_-5px_rgba(79,70,229,0.65)]
                hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary/50
                relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Ecosystem</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              ></span>
            </Link>
            <Link
              href="#ecosystem-products"
              className="cosmic-border bg-dark/40 backdrop-blur-sm hover:bg-dark/60 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="animate-bounce"
        >
          <svg
            className="w-8 h-8 mx-auto text-white/70 drop-shadow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
