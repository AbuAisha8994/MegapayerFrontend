import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Torus, Text } from "@react-three/drei";
import * as THREE from "three";

const DEXAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const liquidityPoolRef = useRef<THREE.Group>(null);
  const chainsRef = useRef<THREE.Group>(null);
  const transactionsRef = useRef<THREE.Group>(null);

  // Define the chains in our multi-chain DEX
  const chains = [
    {
      id: "chain1",
      name: "MEGA",
      color: "#4f46e5",
      radius: 1.6,
      speed: 0.15,
      startAngle: 0,
    },
    {
      id: "chain2",
      name: "ETH",
      color: "#818cf8",
      radius: 1.6,
      speed: -0.12,
      startAngle: Math.PI * 0.5,
    },
    {
      id: "chain3",
      name: "BTC",
      color: "#f59e0b",
      radius: 1.6,
      speed: 0.18,
      startAngle: Math.PI,
    },
    {
      id: "chain4",
      name: "SOL",
      color: "#10b981",
      radius: 1.6,
      speed: -0.14,
      startAngle: Math.PI * 1.5,
    },
  ];

  // Create tokens within each chain
  type Token = {
    id: string;
    chainId: string;
    position: [number, number, number];
    size: number;
    color: string;
    angle: number;
    speed: number;
  };
  const tokens: Token[] = [];
  chains.forEach((chain) => {
    // 3-5 tokens per chain
    const tokenCount = 3 + Math.floor(Math.random() * 3);

    for (let i = 0; i < tokenCount; i++) {
      const angle = (i / tokenCount) * Math.PI * 2 + chain.startAngle;
      const radius = chain.radius * 0.6;

      tokens.push({
        id: `${chain.id}-token-${i}`,
        chainId: chain.id,
        position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius],
        size: 0.1 + Math.random() * 0.05,
        color: chain.color,
        angle: angle,
        speed: 0.3 + Math.random() * 0.2,
      });
    }
  });

  // Create cross-chain transactions
  type Transaction = {
    id: string;
    from: {
      chainId: string;
      position: [number, number, number];
      color: string;
    };
    to: {
      chainId: string;
      position: [number, number, number];
      color: string;
    };
    progress: number;
    speed: number;
    size: number;
    completed: boolean;
  };
  const transactions: Transaction[] = [];
  for (let i = 0; i < 8; i++) {
    const sourceChainIndex = Math.floor(Math.random() * chains.length);
    let targetChainIndex = Math.floor(Math.random() * chains.length);

    // Ensure cross-chain transaction (different source and target)
    while (targetChainIndex === sourceChainIndex) {
      targetChainIndex = Math.floor(Math.random() * chains.length);
    }

    const sourceChain = chains[sourceChainIndex];
    const targetChain = chains[targetChainIndex];

    // Random angles on the respective chains
    const sourceAngle = Math.random() * Math.PI * 2 + sourceChain.startAngle;
    const targetAngle = Math.random() * Math.PI * 2 + targetChain.startAngle;

    transactions.push({
      id: `tx-${i}`,
      from: {
        chainId: sourceChain.id,
        position: [
          Math.cos(sourceAngle) * sourceChain.radius * 0.7,
          0,
          Math.sin(sourceAngle) * sourceChain.radius * 0.7,
        ],
        color: sourceChain.color,
      },
      to: {
        chainId: targetChain.id,
        position: [
          Math.cos(targetAngle) * targetChain.radius * 0.7,
          0,
          Math.sin(targetAngle) * targetChain.radius * 0.7,
        ],
        color: targetChain.color,
      },
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.003,
      size: 0.07 + Math.random() * 0.04,
      completed: false,
    });
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }

    if (chainsRef.current) {
      // Rotate each chain ring
      chainsRef.current.children.forEach((chain, i) => {
        if (chains[i]) {
          chain.rotation.y = t * chains[i].speed;
        }
      });
    }

    if (liquidityPoolRef.current) {
      // Pulsate the central liquidity pool
      const scale = 1 + Math.sin(t * 2) * 0.03;
      liquidityPoolRef.current.scale.set(scale, scale, scale);
    }

    if (transactionsRef.current) {
      // Animate transactions
      transactionsRef.current.children.forEach((txMesh, i) => {
        if (txMesh.type !== "Mesh") return;

        const tx = transactions[i];
        if (!tx) return;

        // Update progress
        tx.progress += tx.speed;

        if (tx.progress >= 1) {
          // Reset transaction with new source and target
          const sourceChainIndex = Math.floor(Math.random() * chains.length);
          let targetChainIndex = Math.floor(Math.random() * chains.length);

          while (targetChainIndex === sourceChainIndex) {
            targetChainIndex = Math.floor(Math.random() * chains.length);
          }

          const sourceChain = chains[sourceChainIndex];
          const targetChain = chains[targetChainIndex];

          const sourceAngle =
            Math.random() * Math.PI * 2 + sourceChain.startAngle;
          const targetAngle =
            Math.random() * Math.PI * 2 + targetChain.startAngle;

          tx.from = {
            chainId: sourceChain.id,
            position: [
              Math.cos(sourceAngle) * sourceChain.radius * 0.7,
              0,
              Math.sin(sourceAngle) * sourceChain.radius * 0.7,
            ],
            color: sourceChain.color,
          };

          tx.to = {
            chainId: targetChain.id,
            position: [
              Math.cos(targetAngle) * targetChain.radius * 0.7,
              0,
              Math.sin(targetAngle) * targetChain.radius * 0.7,
            ],
            color: targetChain.color,
          };

          tx.progress = 0;
        }

        // Calculate current position on a curved path through the central liquidity pool
        const p = tx.progress;
        const fromPos = tx.from.position;
        const toPos = tx.to.position;

        // Use a 3-point quadratic curve through the center (liquidity pool)
        const centerElevation = 0.5; // Height at the center

        if (p < 0.5) {
          // First half: from source to center
          const t1 = p * 2; // normalized from 0-1 for the first half
          const t2 = 1 - t1;

          txMesh.position.x = t2 * fromPos[0] + t1 * 0;
          txMesh.position.y = t2 * fromPos[1] + t1 * centerElevation;
          txMesh.position.z = t2 * fromPos[2] + t1 * 0;
        } else {
          // Second half: from center to destination
          const t1 = (p - 0.5) * 2; // normalized from 0-1 for the second half
          const t2 = 1 - t1;

          txMesh.position.x = t2 * 0 + t1 * toPos[0];
          txMesh.position.y = t2 * centerElevation + t1 * toPos[1];
          txMesh.position.z = t2 * 0 + t1 * toPos[2];
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central liquidity pool */}
      <group ref={liquidityPoolRef} position={[0, 0, 0]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.8}
            roughness={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Liquidity pool glow effect */}
        <Sphere args={[0.65, 16, 16]}>
          <meshStandardMaterial
            color="#4f46e5"
            transparent
            opacity={0.15}
            metalness={0.1}
            roughness={0.8}
          />
        </Sphere>
      </group>

      {/* Blockchain rings */}
      <group ref={chainsRef}>
        {chains.map((chain, index) => (
          <group
            key={chain.id}
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, chain.startAngle]}
          >
            {/* Chain ring */}
            <Torus args={[chain.radius, 0.03, 16, 100]}>
              <meshStandardMaterial
                color={chain.color}
                metalness={0.7}
                roughness={0.3}
                emissive={chain.color}
                emissiveIntensity={0.3}
              />
            </Torus>

            {/* Chain name */}
            <Text
              position={[0, 0, -chain.radius * 1.1]}
              rotation={[-Math.PI / 2, 0, 0]}
              fontSize={0.15}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {chain.name}
            </Text>
          </group>
        ))}
      </group>

      {/* Tokens on each chain */}
      <group>
        {tokens.map((token, index) => (
          <Box
            key={token.id}
            args={[token.size, token.size, token.size]}
            position={[token.position[0], 0, token.position[2]]}
          >
            <meshStandardMaterial
              color={token.color}
              metalness={0.6}
              roughness={0.4}
              emissive={token.color}
              emissiveIntensity={0.3}
            />
          </Box>
        ))}
      </group>

      {/* Cross-chain transactions */}
      <group ref={transactionsRef}>
        {transactions.map((tx, index) => (
          <Sphere
            key={tx.id}
            args={[tx.size, 16, 16]}
            position={[tx.from.position[0], 0, tx.from.position[2]]}
          >
            <meshStandardMaterial
              color={tx.from.color}
              metalness={0.8}
              roughness={0.2}
              emissive={tx.from.color}
              emissiveIntensity={0.5}
            />
          </Sphere>
        ))}
      </group>

      {/* Title */}
      <Text
        position={[0, -2.0, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Multi-Chain DEX
      </Text>

      <Text
        position={[0, -2.5, 0]}
        fontSize={0.2}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
      >
        Cross-Chain Liquidity • 2025
      </Text>
    </group>
  );
};

export default DEXAnimation;
