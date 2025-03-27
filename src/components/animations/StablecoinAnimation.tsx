import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Cylinder, Ring } from '@react-three/drei';
import * as THREE from 'three';

const StablecoinAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coinStackRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    
    if (coinStackRef.current) {
      coinStackRef.current.children.forEach((coin, i) => {
        // Make coins "bounce" slightly at different rates
        const offset = i * 0.2;
        coin.position.y += Math.sin(t * 2 + offset) * 0.0015;
      });
    }
    
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.3;
      ringsRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });
  
  // Create a stylized coin
  const Coin = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
    return (
      <group position={position as any} rotation={rotation as any} scale={scale}>
        <Cylinder args={[0.8, 0.8, 0.1, 32]} castShadow>
          <meshStandardMaterial 
            color="#f0b90b" 
            metalness={0.9}
            roughness={0.2}
            emissive="#f0b90b"
            emissiveIntensity={0.2}
          />
        </Cylinder>
        
        {/* Coin edge detail */}
        <Cylinder args={[0.82, 0.82, 0.03, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#ffd700" 
            metalness={0.8}
            roughness={0.3}
          />
        </Cylinder>
        
        {/* Coin symbol */}
        <mesh position={[0, 0, 0.06]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.3, 0.4, 32]} />
          <meshStandardMaterial color="#faf5e3" />
        </mesh>
      </group>
    );
  };

  return (
    <group ref={groupRef}>
      {/* Main stablecoin */}
      <group position={[0, 0, 0]}>
        <Cylinder args={[1.2, 1.2, 0.15, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#4f46e5"
            metalness={0.7}
            roughness={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.2}
          />
        </Cylinder>
        
        {/* Dollar symbol */}
        <Text
          position={[0, 0, 0.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.7}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>
        
        {/* Year */}
        <Text
          position={[0, -0.6, 0.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          2025
        </Text>
      </group>
      
      {/* Decorative orbiting rings */}
      <group ref={ringsRef}>
        <Ring args={[1.8, 1.9, 64]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#10b981" 
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </Ring>
        
        <Ring args={[2.2, 2.3, 64]} rotation={[Math.PI / 3, Math.PI / 6, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#f59e0b" 
            side={THREE.DoubleSide}
            transparent
            opacity={0.4}
            emissive="#f59e0b"
            emissiveIntensity={0.2}
          />
        </Ring>
      </group>
      
      {/* Stack of smaller coins */}
      <group ref={coinStackRef} position={[0, -1, 0]}>
        <Coin position={[-1.5, -0.5, 0]} rotation={[0, 0.2, 0.1]} scale={0.6} />
        <Coin position={[-1.2, -0.6, 0.3]} rotation={[0.1, 0.3, 0.1]} scale={0.5} />
        <Coin position={[-0.9, -0.7, -0.1]} rotation={[0.2, -0.1, 0]} scale={0.65} />
        
        <Coin position={[1.5, -0.6, 0.2]} rotation={[0.1, -0.3, 0]} scale={0.6} />
        <Coin position={[1.2, -0.7, -0.3]} rotation={[0.2, 0.1, 0.1]} scale={0.55} />
        <Coin position={[1.0, -0.5, 0]} rotation={[0, -0.2, 0.2]} scale={0.5} />
        
        <Coin position={[0.3, -0.8, 1.0]} rotation={[0.3, 0.1, 0]} scale={0.45} />
        <Coin position={[-0.4, -0.7, 1.2]} rotation={[0.2, -0.2, 0.1]} scale={0.5} />
      </group>
      
      {/* Text */}
      <Text
        position={[0, 1.7, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Megapayer Stablecoin
      </Text>
      
      {/* Small floating dollar symbols */}
      {[...Array(6)].map((_, i) => {
        const theta = (i / 6) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 0.5;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        const y = (Math.random() - 0.5) * 2;
        
        return (
          <Text
            key={i}
            position={[x, y, z]}
            rotation={[-Math.PI / 2, 0, Math.random() * Math.PI]}
            fontSize={0.2 + Math.random() * 0.2}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            $
          </Text>
        );
      })}
    </group>
  );
};

export default StablecoinAnimation;
