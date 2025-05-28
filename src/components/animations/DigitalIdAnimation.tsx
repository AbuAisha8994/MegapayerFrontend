import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

const DigitalIdAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create a digital ID card with glowing effects
  const IdCardRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Data points surrounding the ID
  const dataPointsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }

    if (IdCardRef.current) {
      // Floating animation for the ID card
      IdCardRef.current.position.y = Math.sin(t * 0.7) * 0.1;

      // Very subtle rotation
      IdCardRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }

    if (glowRef.current && glowRef.current.material instanceof THREE.Material) {
      // Pulse the glow effect
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(t * 2) * 0.1;
    }

    if (dataPointsRef.current) {
      // Animate the data points around the ID
      dataPointsRef.current.children.forEach((point, i) => {
        if (point instanceof THREE.Mesh) {
          const offset = i * 0.5;
          point.position.y = Math.sin(t * 1 + offset) * 0.1;
          point.rotation.z = t * (i % 2 === 0 ? 0.5 : -0.5);

          // Pulse scale effect
          const scale = 1 + Math.sin(t * 2 + i) * 0.2;
          point.scale.set(scale, scale, scale);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* ID Card */}
      <group>
        {/* Glow effect around the card */}
        <mesh ref={glowRef} scale={[1.2, 1.8, 0.1]} position={[0, 0, -0.05]}>
          <boxGeometry />
          <meshBasicMaterial
            color="#10b981"
            transparent={true}
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Main ID card */}
        <mesh ref={IdCardRef} scale={[1, 1.5, 0.05]}>
          <boxGeometry />
          <meshStandardMaterial
            color="#1f2937"
            metalness={0.6}
            roughness={0.3}
            emissive="#10b981"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Photo area */}
        <mesh position={[0, 0.5, 0.06]} scale={[0.6, 0.7, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#0f172a" />
        </mesh>

        {/* Name and info bars */}
        <mesh position={[0, -0.2, 0.06]} scale={[0.8, 0.1, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
          />
        </mesh>

        <mesh position={[0, -0.4, 0.06]} scale={[0.8, 0.1, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#374151" />
        </mesh>

        <mesh position={[0, -0.6, 0.06]} scale={[0.8, 0.1, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#374151" />
        </mesh>
      </group>

      {/* Digital elements surrounding the ID */}
      <group ref={dataPointsRef}>
        {/* Data nodes */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.8;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <Sphere key={i} args={[0.1, 16, 16]} position={[x, y, 0]}>
              <meshStandardMaterial
                color={
                  i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#4f46e5" : "#f59e0b"
                }
                emissive={
                  i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#4f46e5" : "#f59e0b"
                }
                emissiveIntensity={0.5}
                roughness={0.3}
              />
            </Sphere>
          );
        })}

        {/* Connection lines */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.8;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <line key={`line-${i}`}>
              <bufferGeometry>
                <float32BufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([0, 0, 0, x, y, 0])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial
                color={
                  i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#4f46e5" : "#f59e0b"
                }
                transparent
                opacity={0.3}
                linewidth={1}
              />
            </line>
          );
        })}
      </group>

      {/* Title */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        MPC ID
      </Text>

      <Text
        position={[0, -3.0, 0]}
        fontSize={0.2}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
      >
        Self-Sovereign Identity • 2025
      </Text>
    </group>
  );
};

export default DigitalIdAnimation;
