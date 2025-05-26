import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Text, Html } from "@react-three/drei";
import * as THREE from "three";

// Wallet representation
const Wallet = ({
  position,
  color,
  label,
  onClick,
  isActive,
}: {
  position: [number, number, number];
  color: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] +
        Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.1;

      // Rotation for active wallet
      if (isActive) {
        meshRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} onClick={onClick}>
        <boxGeometry args={[1, 0.6, 0.1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={isActive ? 0.5 : 0.2}
        />
      </mesh>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

// Escrow system representation
const Escrow = ({
  position,
  isActive,
}: {
  position: [number, number, number];
  isActive: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current && isActive) {
      // Pulse effect when active
      meshRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.1;
      meshRef.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.1;
      meshRef.current.scale.z = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.1;

      // Rotation
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={isActive ? "#10b981" : "#6b7280"}
          wireframe={true}
          emissive={isActive ? "#10b981" : "#6b7280"}
          emissiveIntensity={isActive ? 0.5 : 0.1}
        />
      </mesh>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        ESCROW
      </Text>
    </group>
  );
};

// Transaction asset
const Asset = ({
  position,
  targetPosition,
  progress,
  color,
}: {
  position: [number, number, number];
  targetPosition: [number, number, number];
  progress: number;
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Interpolate position based on progress (0 to 1)
  const currentPosition: [number, number, number] = [
    position[0] + (targetPosition[0] - position[0]) * progress,
    position[1] + (targetPosition[1] - position[1]) * progress,
    position[2] + (targetPosition[2] - position[2]) * progress,
  ];

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Spin the asset as it moves
      meshRef.current.rotation.y += 0.05;
      meshRef.current.rotation.x += 0.03;
    }
  });

  return (
    <mesh ref={meshRef} position={currentPosition}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Main P2P exchange animation component
const P2PAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);
  const transactionsRef = useRef<THREE.Group>(null);

  const [transactionStep, setTransactionStep] = useState(0);
  const [transactionProgress, setTransactionProgress] = useState(0);
  const [isTransactionActive, setIsTransactionActive] = useState(false);

  const buyer = {
    position: [-2, 0, 0] as [number, number, number],
    color: "#4f46e5",
    label: "BUYER",
  };
  const seller = {
    position: [2, 0, 0] as [number, number, number],
    color: "#f59e0b",
    label: "SELLER",
  };
  const escrow = { position: [0, 0, 0] as [number, number, number] };

  // Animation loop for transaction progress
  useEffect(() => {
    if (!isTransactionActive) return;

    const interval = setInterval(() => {
      setTransactionProgress((prev) => {
        if (prev >= 1) {
          // Move to next step
          setTransactionStep((prevStep) => {
            if (prevStep >= 3) {
              setIsTransactionActive(false);
              return 0; // Reset
            }
            return prevStep + 1;
          });
          return 0; // Reset progress
        }
        return prev + 0.02; // Increment progress
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isTransactionActive, transactionStep]);

  const startTransaction = () => {
    setTransactionStep(0);
    setTransactionProgress(0);
    setIsTransactionActive(true);
  };

  // Create network nodes (representing peer traders)
  const nodes = [...Array(12)].map((_, i) => {
    // Position nodes in a circular pattern
    const angle = (i / 12) * Math.PI * 2;
    const radius = 2.5 + Math.random() * 0.3;

    return {
      id: i,
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 1.5,
        Math.sin(angle) * radius,
      ],
      size: 0.2 + Math.random() * 0.1,
      color: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#4f46e5" : "#f59e0b",
    };
  });

  // Create some transactions between nodes
  type Transaction = {
    id: number;
    from: (typeof nodes)[number];
    to: (typeof nodes)[number];
    progress: number;
    speed: number;
    size: number;
    color: string;
  };
  const transactions: Transaction[] = [];
  for (let i = 0; i < 8; i++) {
    const fromIndex = Math.floor(Math.random() * nodes.length);
    let toIndex = Math.floor(Math.random() * nodes.length);

    // Avoid self-transactions
    while (toIndex === fromIndex) {
      toIndex = Math.floor(Math.random() * nodes.length);
    }

    transactions.push({
      id: i,
      from: nodes[fromIndex],
      to: nodes[toIndex],
      progress: Math.random(), // Initial position along the path
      speed: 0.2 + Math.random() * 0.3, // Speed of transaction
      size: 0.08 + Math.random() * 0.05,
      color: Math.random() > 0.5 ? "#10b981" : "#f59e0b",
    });
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }

    if (nodesRef.current) {
      // Make nodes hover slightly
      nodesRef.current.children.forEach((node, i) => {
        node.position.y += Math.sin(t + i) * 0.0015;
      });
    }

    if (transactionsRef.current) {
      // Animate transactions moving between nodes
      transactionsRef.current.children.forEach((txObj, i) => {
        if (txObj.type !== "Mesh") return;

        const tx = transactions[i];
        if (!tx) return;

        // Update progress
        tx.progress += tx.speed * 0.005;
        if (tx.progress > 1) {
          tx.progress = 0;

          // Generate new transaction
          const fromIndex = Math.floor(Math.random() * nodes.length);
          let toIndex = Math.floor(Math.random() * nodes.length);
          while (toIndex === fromIndex) {
            toIndex = Math.floor(Math.random() * nodes.length);
          }
          tx.from = nodes[fromIndex];
          tx.to = nodes[toIndex];
        }

        // Interpolate position
        const fromPos = tx.from.position;
        const toPos = tx.to.position;
        const p = tx.progress;

        // Arc trajectory
        const midPoint = [
          fromPos[0] + (toPos[0] - fromPos[0]) * 0.5,
          fromPos[1] + (toPos[1] - fromPos[1]) * 0.5 + 0.5, // Arc upward
          fromPos[2] + (toPos[2] - fromPos[2]) * 0.5,
        ];

        // Quadratic Bezier curve
        const t1 = 1 - p;
        const t2 = p;
        txObj.position.x =
          t1 * t1 * fromPos[0] + 2 * t1 * t2 * midPoint[0] + t2 * t2 * toPos[0];
        txObj.position.y =
          t1 * t1 * fromPos[1] + 2 * t1 * t2 * midPoint[1] + t2 * t2 * toPos[1];
        txObj.position.z =
          t1 * t1 * fromPos[2] + 2 * t1 * t2 * midPoint[2] + t2 * t2 * toPos[2];
      });
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={nodesRef}>
        {nodes.map((node, index) => (
          <Sphere
            key={`node-${index}`}
            args={[node.size, 24, 24]}
            position={node.position as any}
          >
            <meshStandardMaterial
              color={node.color}
              metalness={0.7}
              roughness={0.3}
              emissive={node.color}
              emissiveIntensity={0.3}
            />
          </Sphere>
        ))}
      </group>

      {/* Transaction objects */}
      <group ref={transactionsRef}>
        {transactions.map((tx, index) => (
          <Box
            key={`tx-${index}`}
            args={[tx.size, tx.size, tx.size]}
            position={[
              tx.from.position[0],
              tx.from.position[1],
              tx.from.position[2],
            ]}
          >
            <meshStandardMaterial
              color={tx.color}
              metalness={0.8}
              roughness={0.2}
              emissive={tx.color}
              emissiveIntensity={0.8}
            />
          </Box>
        ))}
      </group>

      {/* Connection lines */}
      <group>
        {nodes.map((node, i) => {
          // Connect each node to 2-3 nearby nodes
          const connections = [];
          const numConnections = Math.floor(Math.random() * 2) + 1;

          for (let j = 1; j <= numConnections; j++) {
            const targetIndex = (i + j) % nodes.length;
            connections.push({
              from: node.position,
              to: nodes[targetIndex].position,
              color: i % 2 === 0 ? "#10b981" : "#4f46e5",
              opacity: 0.2 + Math.random() * 0.2,
            });
          }

          return connections.map((conn, connIndex) => (
            <line key={`line-${i}-${connIndex}`}>
              <bufferGeometry>
                <float32BufferAttribute
                  attach="attributes-position"
                  array={
                    new Float32Array([
                      conn.from[0],
                      conn.from[1],
                      conn.from[2],
                      conn.to[0],
                      conn.to[1],
                      conn.to[2],
                    ])
                  }
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial
                color={conn.color}
                transparent
                opacity={conn.opacity}
              />
            </line>
          ));
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
        P2P Exchange Network
      </Text>

      <Text
        position={[0, -3.0, 0]}
        fontSize={0.2}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
      >
        Trustless Trading • 2025
      </Text>

      <Wallet
        position={buyer.position}
        color={buyer.color}
        label={buyer.label}
        onClick={startTransaction}
        isActive={
          isTransactionActive &&
          (transactionStep === 0 || transactionStep === 3)
        }
      />

      <Wallet
        position={seller.position}
        color={seller.color}
        label={seller.label}
        onClick={startTransaction}
        isActive={isTransactionActive && transactionStep === 2}
      />

      <Escrow
        position={escrow.position}
        isActive={isTransactionActive && transactionStep === 1}
      />

      {/* Step 1: Buyer sends payment to escrow */}
      {isTransactionActive && transactionStep === 0 && (
        <Asset
          position={buyer.position}
          targetPosition={escrow.position}
          progress={transactionProgress}
          color="#4f46e5"
        />
      )}

      {/* Step 2: Escrow notifies seller */}
      {isTransactionActive && transactionStep === 1 && (
        <Asset
          position={escrow.position}
          targetPosition={seller.position}
          progress={transactionProgress}
          color="#10b981"
        />
      )}

      {/* Step 3: Seller sends asset to buyer */}
      {isTransactionActive && transactionStep === 2 && (
        <Asset
          position={seller.position}
          targetPosition={buyer.position}
          progress={transactionProgress}
          color="#f59e0b"
        />
      )}

      {/* Instructions */}
      <Html position={[0, 2, 0]} center>
        <div className="bg-dark/70 backdrop-blur-md px-4 py-2 rounded text-white text-center">
          {isTransactionActive
            ? `P2P Transaction in Progress: Step ${transactionStep + 1}/4`
            : "Click on BUYER to start transaction demo"}
        </div>
      </Html>
    </group>
  );
};

export default P2PAnimation;
