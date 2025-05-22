import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Cylinder, Ring } from "@react-three/drei";
import * as THREE from "three";

const MPCCoinAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coinRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);
  const [sparkles, setSparkles] = useState<
    { position: [number, number, number]; size: number; speed: number }[]
  >([]);

  // Create sparkle particles on mount
  useEffect(() => {
    const newSparkles = [];
    for (let i = 0; i < 20; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 2;
      newSparkles.push({
        position: [
          Math.cos(theta) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(theta) * radius,
        ],
        size: 0.03 + Math.random() * 0.05,
        speed: 0.3 + Math.random() * 0.7,
      });
    }
    setSparkles(newSparkles);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
    }

    if (coinRef.current) {
      // Floating motion for the main coin
      coinRef.current.position.y = Math.sin(t) * 0.1;
      // Subtle tilt
      coinRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }

    if (logoRef.current) {
      // Rotate the logo at a slightly different speed from the coin
      logoRef.current.rotation.y = -t * 0.1;
    }

    if (particlesRef.current) {
      // Animate the sparkle particles
      particlesRef.current.children.forEach((sparkle, i) => {
        if (sparkle instanceof THREE.Mesh) {
          const speed = sparkles[i]?.speed || 1;

          // Orbit around the coin
          const radius = 1.2 + Math.sin(t * speed * 0.5) * 0.3;
          const angle = t * speed * 0.3 + (i * Math.PI * 2) / 20;

          sparkle.position.x = Math.cos(angle) * radius;
          sparkle.position.z = Math.sin(angle) * radius;
          sparkle.position.y = Math.sin(t * speed) * 0.5;

          // Pulsate
          const scale = 0.8 + Math.sin(t * speed * 2) * 0.2;
          sparkle.scale.set(scale, scale, scale);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main coin */}
      <group ref={coinRef}>
        {/* Coin body */}
        <Cylinder args={[1.2, 1.2, 0.15, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.8}
            roughness={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.4}
          />
        </Cylinder>

        {/* Coin edge with more detail */}
        <Cylinder args={[1.22, 1.22, 0.12, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.9}
            roughness={0.1}
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </Cylinder>

        {/* Coin rim detail */}
        <Ring
          args={[1.1, 1.21, 64]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.06, 0]}
        >
          <meshStandardMaterial
            color="#818cf8"
            metalness={0.7}
            roughness={0.3}
            emissive="#818cf8"
            emissiveIntensity={0.3}
          />
        </Ring>

        {/* Bottom rim detail */}
        <Ring
          args={[1.1, 1.21, 64]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.06, 0]}
        >
          <meshStandardMaterial
            color="#818cf8"
            metalness={0.7}
            roughness={0.3}
            emissive="#818cf8"
            emissiveIntensity={0.3}
          />
        </Ring>

        {/* MPC Logo centered on coin */}
        <group
          ref={logoRef}
          position={[0, 0.08, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <Text
            position={[0, 0, 0]}
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={-0.05}
          >
            MPC
          </Text>
        </group>
      </group>

      {/* Sparkle particles around the coin */}
      <group ref={particlesRef}>
        {sparkles.map((sparkle, i) => (
          <mesh key={i} position={sparkle.position as any}>
            <sphereGeometry args={[sparkle.size, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={1}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Orbital rings */}
      <Ring
        args={[1.8, 1.85, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#4f46e5"
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </Ring>

      <Ring
        args={[2.2, 2.23, 64]}
        rotation={[Math.PI / 3, Math.PI / 6, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#818cf8"
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          emissive="#818cf8"
          emissiveIntensity={0.4}
        />
      </Ring>

      {/* Text label below */}
      <Text
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Governance & Utility Token
      </Text>
    </group>
  );
};

export default MPCCoinAnimation;
