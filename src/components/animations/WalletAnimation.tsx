import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const WalletAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const smallBoxesRef = useRef<THREE.Group>(null);
  
  const smallBoxPositions = [
    [1.5, 0.8, -0.5],
    [-1.2, -0.3, 0.4],
    [0.5, -1.2, 0.6],
    [-0.8, 1.1, -0.3],
    [0.2, 0.7, 0.9],
    [-0.4, -0.9, -0.8]
  ];
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.5;
      torusRef.current.rotation.y = t * 0.2;
    }
    
    if (smallBoxesRef.current) {
      smallBoxesRef.current.children.forEach((box, i) => {
        const offset = i * 0.2;
        box.position.x += Math.sin(t + offset) * 0.003;
        box.position.y += Math.cos(t * 1.5 + offset) * 0.002;
        box.position.z += Math.sin(t * 0.7 + offset) * 0.002;
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central wallet container */}
      <Box args={[2.2, 3, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#4f46e5" 
          metalness={0.6}
          roughness={0.3}
          emissive="#4f46e5"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Wallet screen */}
      <Box args={[1.8, 2.5, 0.05]} position={[0, 0, 0.15]}>
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      {/* Decorative torus */}
      <Torus args={[1.6, 0.05, 16, 100]} position={[0, 0, -0.15]} ref={torusRef}>
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.6}
          roughness={0.3}
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </Torus>
      
      {/* Central logo sphere */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0.3]}>
        <meshStandardMaterial 
          color="#5046ef" 
          metalness={0.8}
          roughness={0.2}
          emissive="#5046ef"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      {/* Text - using simple approach (no font files required) */}
      <Text
        position={[0, -1.5, 0.2]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Megapayer
      </Text>
      
      <Text
        position={[0, -1.8, 0.2]}
        fontSize={0.15}
        color="#a8a8a8"
        anchorX="center"
        anchorY="middle"
      >
        Universal Wallet 2025
      </Text>
      
      {/* Small floating blocks representing different chains */}
      <group ref={smallBoxesRef}>
        {smallBoxPositions.map((position, index) => (
          <Box 
            key={index}
            args={[0.2, 0.2, 0.2]}
            position={position as any}
          >
            <meshStandardMaterial 
              color={index % 2 === 0 ? "#10b981" : "#f59e0b"} 
              metalness={0.6}
              roughness={0.3}
              emissive={index % 2 === 0 ? "#10b981" : "#f59e0b"}
              emissiveIntensity={0.3}
            />
          </Box>
        ))}
      </group>
      
      {/* Lines connecting the boxes to the center */}
      {smallBoxPositions.map((position, index) => (
        <line key={`line-${index}`}>
          <bufferGeometry>
            <float32BufferAttribute 
              attach="attributes-position" 
              array={new Float32Array([0, 0, 0.3, position[0] * 0.8, position[1] * 0.8, position[2] * 0.8])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color={index % 2 === 0 ? "#10b981" : "#f59e0b"} 
            transparent={true}
            opacity={0.4} 
          />
        </line>
      ))}
    </group>
  );
};

export default WalletAnimation;
