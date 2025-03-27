import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const SocialAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create user nodes
  const users = useMemo(() => {
    const userCount = 50;
    return Array.from({ length: userCount }, (_, i) => {
      // Make a few users larger to represent influencers
      const isInfluencer = Math.random() > 0.85;
      return {
        id: i,
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ),
        size: isInfluencer ? 0.4 + Math.random() * 0.3 : 0.1 + Math.random() * 0.2,
        color: isInfluencer 
          ? new THREE.Color(0x4f46e5) // Primary color for influencers
          : new THREE.Color(0x10b981) // Secondary color for regular users
      };
    });
  }, []);
  
  // Create connections between users
  const connections = useMemo(() => {
    const lines = [];
    
    users.forEach((user, i) => {
      // Connect each user to several others
      const connectionCount = Math.floor(Math.random() * 5) + 1;
      
      for (let c = 0; c < connectionCount; c++) {
        // Ensure we don't connect to self
        const j = (i + Math.floor(Math.random() * (users.length - 1)) + 1) % users.length;
        
        // Calculate connection likelihood based on distance
        const distance = user.position.distanceTo(users[j].position);
        
        // Only create connections if nodes are within a reasonable distance
        if (distance < 8) {
          lines.push({
            id: `${i}-${j}`,
            start: user.position,
            end: users[j].position,
            // Connections to influencers are brighter
            opacity: users[i].size > 0.2 || users[j].size > 0.2 ? 0.6 : 0.2,
            color: users[i].size > 0.2 ? users[i].color : users[j].size > 0.2 ? users[j].color : "#ffffff"
          });
        }
      }
    });
    
    return lines;
  }, [users]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (groupRef.current) {
      // Rotate the entire network
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.025) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* User nodes */}
      {users.map(user => (
        <mesh key={user.id} position={user.position}>
          <sphereGeometry args={[user.size, 16, 16]} />
          <meshStandardMaterial 
            color={user.color} 
            emissive={user.color}
            emissiveIntensity={0.5} 
            roughness={0.2} 
          />
        </mesh>
      ))}
      
      {/* Content bubbles (for larger nodes) */}
      {users
        .filter(user => user.size > 0.3)
        .map(user => {
          const offset = new THREE.Vector3().copy(user.position).normalize().multiplyScalar(1.5);
          const bubblePos = new THREE.Vector3().copy(user.position).add(offset);
          
          return (
            <group key={`bubble-${user.id}`} position={bubblePos}>
              <mesh>
                <boxGeometry args={[2, 1, 0.1]} />
                <meshStandardMaterial 
                  color="#ffffff" 
                  opacity={0.1} 
                  transparent 
                  roughness={0.1} 
                />
              </mesh>
              <Text
                position={[0, 0, 0.06]}
                fontSize={0.3}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
              >
                Content
              </Text>
            </group>
          );
        })}
      
      {/* Connections between users */}
      {connections.map((line) => (
        <line key={line.id}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={['attributes', 'position']}
              array={new Float32Array([
                line.start.x, line.start.y, line.start.z,
                line.end.x, line.end.y, line.end.z
              ])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            attach="material"
            color={line.color}
            opacity={line.opacity}
            transparent
            linewidth={1}
          />
        </line>
      ))}
      
      {/* Platform features */}
      <group position={[-6, -4, 0]}>
        <Text
          fontSize={0.5}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          Privacy-First
        </Text>
      </group>
      
      <group position={[6, -5, 0]}>
        <Text
          fontSize={0.5}
          color="#4f46e5"
          anchorX="center"
          anchorY="middle"
        >
          User-Owned Content
        </Text>
      </group>
      
      <group position={[0, -6, 0]}>
        <Text
          fontSize={0.5}
          color="#f59e0b"
          anchorX="center"
          anchorY="middle"
        >
          Creator Economy
        </Text>
      </group>
    </group>
  );
};

export default SocialAnimation;
