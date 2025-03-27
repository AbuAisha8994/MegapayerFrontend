import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const BlockchainAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const chainRef = useRef<THREE.Group>(null);
  
  // Create a set of blocks forming a chain
  const blocks = [...Array(8)].map((_, i) => ({
    id: i,
    position: [(i - 3.5) * 1.2, Math.sin(i * 0.7) * 0.3, Math.cos(i * 0.4) * 0.2],
    size: [0.8, 0.5, 0.2]
  }));
  
  // Connection lines between blocks
  const connections = blocks.slice(0, -1).map((block, i) => ({
    id: i,
    start: block.position,
    end: blocks[i + 1].position
  }));
  
  // Create nodes around the blockchain (validators)
  const nodes = [...Array(12)].map((_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 3;
    return {
      id: i,
      position: [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        Math.sin(i * 0.5) * 0.5
      ],
      size: 0.2 + Math.random() * 0.15
    };
  });
  
  // Add validator connections (random)
  const validatorConnections = [];
  nodes.forEach((node, i) => {
    // Connect each validator to 1-3 random blocks
    const numConnections = 1 + Math.floor(Math.random() * 2);
    for (let c = 0; c < numConnections; c++) {
      const blockIndex = Math.floor(Math.random() * blocks.length);
      validatorConnections.push({
        id: `v${i}-b${blockIndex}`,
        start: node.position,
        end: blocks[blockIndex].position
      });
    }
  });
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    }
    
    if (chainRef.current) {
      // Small "pulse" effect on the chain
      chainRef.current.children.forEach((child, i) => {
        if (child.type === 'Mesh') {
          const pulse = Math.sin(t * 3 + i * 0.5) * 0.03;
          child.scale.set(1 + pulse, 1 + pulse, 1 + pulse);
        }
      });
    }
    
    // Animate the validators (nodes)
    const nodeGroup = groupRef.current?.children[1];
    if (nodeGroup) {
      nodeGroup.children.forEach((child, i) => {
        if (child.type === 'Mesh') {
          // Make validators hover slightly
          child.position.y += Math.sin(t * 2 + i) * 0.001;
          // Make validators pulse slightly
          const pulse = Math.sin(t * 2 + i * 0.7) * 0.05;
          child.scale.set(1 + pulse, 1 + pulse, 1 + pulse);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Blockchain */}
      <group ref={chainRef}>
        {/* Blocks */}
        {blocks.map((block) => (
          <Box 
            key={block.id} 
            args={block.size} 
            position={block.position}
          >
            <meshStandardMaterial 
              color="#4f46e5" 
              metalness={0.7}
              roughness={0.2}
              emissive="#4f46e5"
              emissiveIntensity={0.2}
            />
          </Box>
        ))}
        
        {/* Block numbers */}
        {blocks.map((block) => (
          <Text
            key={`text-${block.id}`}
            position={[block.position[0], block.position[1], block.position[2] + 0.11]}
            fontSize={0.16}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {block.id + 1}
          </Text>
        ))}
        
        {/* Block connections */}
        {connections.map((conn) => (
          <line key={`line-${conn.id}`}>
            <bufferGeometry>
              <float32BufferAttribute 
                attach="attributes-position" 
                array={new Float32Array([
                  conn.start[0], conn.start[1], conn.start[2],
                  conn.end[0], conn.end[1], conn.end[2]
                ])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.6} />
          </line>
        ))}
      </group>
      
      {/* Validators */}
      <group>
        {/* Validator nodes */}
        {nodes.map((node) => (
          <Sphere 
            key={`node-${node.id}`} 
            args={[node.size, 16, 16]} 
            position={node.position}
          >
            <meshStandardMaterial 
              color={node.id % 3 === 0 ? "#10b981" : node.id % 3 === 1 ? "#f59e0b" : "#5046ef"}
              metalness={0.5}
              roughness={0.4}
              emissive={node.id % 3 === 0 ? "#10b981" : node.id % 3 === 1 ? "#f59e0b" : "#5046ef"}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
        
        {/* Validator connections */}
        {validatorConnections.map((conn) => (
          <line key={`vline-${conn.id}`}>
            <bufferGeometry>
              <float32BufferAttribute 
                attach="attributes-position" 
                array={new Float32Array([
                  conn.start[0], conn.start[1], conn.start[2],
                  conn.end[0], conn.end[1], conn.end[2]
                ])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#10b981" transparent opacity={0.2} />
          </line>
        ))}
      </group>
      
      {/* Title */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Megapayer Blockchain
      </Text>
      
      <Text
        position={[0, -3.0, 0]}
        fontSize={0.2}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
      >
        Shared Proof of Stake • 2025
      </Text>
    </group>
  );
};

export default BlockchainAnimation;
