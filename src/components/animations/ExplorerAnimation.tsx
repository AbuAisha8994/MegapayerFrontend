import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Line } from "@react-three/drei";
import * as THREE from "three";

const ExplorerAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const dataGridRef = useRef<THREE.Group>(null);
  const blocksRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.Group>(null);

  // Create a grid of data points representing blockchain data
  const createDataGrid = () => {
    const grid = [];
    const gridSize = 6;
    const cellSize = 0.2;
    const spacing = 0.3;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        // Skip some cells randomly to create a more interesting pattern
        if (Math.random() > 0.8) continue;

        const height = 0.05 + Math.random() * 0.2;
        grid.push({
          position: [
            (x - gridSize / 2) * spacing,
            height / 2,
            (z - gridSize / 2) * spacing,
          ] as [number, number, number],
          scale: [cellSize, height, cellSize] as [number, number, number],
          color: z % 2 === 0 ? "#0ea5e9" : "#10b981",
        });
      }
    }
    return grid;
  };

  // Create blockchain blocks visualized as 3D elements
  const createBlocks = () => {
    const blocks = [];
    const blockCount = 5;

    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        id: i,
        position: [-1.5 + i * 0.8, 0.7, 0] as [number, number, number],
        size: [0.6, 0.35, 0.1] as [number, number, number],
        color: "#0ea5e9",
      });
    }

    return blocks;
  };

  // Generate connection lines between blocks
  const createBlockConnections = (blocks: any[]) => {
    return blocks.slice(0, -1).map((block, i) => ({
      id: i,
      points: [
        [block.position[0] + 0.3, block.position[1], block.position[2]],
        [
          blocks[i + 1].position[0] - 0.3,
          blocks[i + 1].position[1],
          blocks[i + 1].position[2],
        ],
      ] as [[number, number, number], [number, number, number]],
      color: "#0ea5e9",
    }));
  };

  const dataPoints = React.useMemo(() => createDataGrid(), []);
  const blocks = React.useMemo(() => createBlocks(), []);
  const connections = React.useMemo(
    () => createBlockConnections(blocks),
    [blocks]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.2;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }

    // Animate data grid points (pulsing effect)
    if (dataGridRef.current && dataGridRef.current.children) {
      dataGridRef.current.children.forEach((cell, i) => {
        if (cell.type === "Mesh") {
          const originalHeight = dataPoints[i]?.scale[1] || 0.1;
          const pulse = Math.sin(t * 2 + i * 0.2) * 0.2 + 1;
          cell.scale.y = originalHeight * pulse;
        }
      });
    }

    // Subtle animation for block elements
    if (blocksRef.current && blocksRef.current.children) {
      blocksRef.current.children.forEach((block, i) => {
        if (block.type === "Mesh") {
          // Slight floating effect
          block.position.y =
            blocks[i].position[1] + Math.sin(t * 1.5 + i) * 0.02;

          // Subtle pulsing glow via emissive intensity
          if (block.material instanceof THREE.MeshStandardMaterial) {
            block.material.emissiveIntensity = 0.5 + Math.sin(t * 2 + i) * 0.2;
          }
        }
      });
    }

    // Animate the connection lines (data flowing effect)
    if (linesRef.current && linesRef.current.children) {
      linesRef.current.children.forEach((line, i) => {
        if (
          line.type === "Line" &&
          line.material instanceof THREE.LineBasicMaterial
        ) {
          // Pulse opacity to simulate data flow
          line.material.opacity = 0.5 + Math.sin(t * 3 + i) * 0.5;
        }
      });
    }
  });

  // Animated particle to visualize data movement
  const DataParticle = ({
    startPoint,
    endPoint,
    speed,
    delay,
  }: {
    startPoint: [number, number, number];
    endPoint: [number, number, number];
    speed: number;
    delay: number;
  }) => {
    const particleRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
      if (particleRef.current) {
        const t = (clock.getElapsedTime() + delay) * speed;
        const progress = t % 1;

        particleRef.current.position.x =
          startPoint[0] + (endPoint[0] - startPoint[0]) * progress;
        particleRef.current.position.y =
          startPoint[1] + (endPoint[1] - startPoint[1]) * progress;
        particleRef.current.position.z =
          startPoint[2] + (endPoint[2] - startPoint[2]) * progress;
      }
    });

    return (
      <mesh ref={particleRef} position={startPoint}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#60a5fa"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
    );
  };

  return (
    <group ref={groupRef}>
      {/* Data Grid (represents blockchain historical data) */}
      <group ref={dataGridRef} position={[0, -1, 0]}>
        {dataPoints.map((point, i) => (
          <Box
            key={`data-${i}`}
            args={[point.scale[0], point.scale[1], point.scale[2]]}
            position={point.position}
          >
            <meshStandardMaterial
              color={point.color}
              metalness={0.7}
              roughness={0.2}
              emissive={point.color}
              emissiveIntensity={0.5}
            />
          </Box>
        ))}
      </group>

      {/* Blockchain visualization (block chain) */}
      <group ref={blocksRef}>
        {blocks.map((block, i) => (
          <Box
            key={`block-${block.id}`}
            args={block.size}
            position={block.position}
          >
            <meshStandardMaterial
              color={block.color}
              metalness={0.8}
              roughness={0.2}
              emissive={block.color}
              emissiveIntensity={0.5}
            />

            {/* Block number */}
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.14}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {block.id + 1}
            </Text>
          </Box>
        ))}
      </group>

      {/* Block connections */}
      <group ref={linesRef}>
        {connections.map((conn) => (
          <Line
            key={`conn-${conn.id}`}
            points={conn.points}
            color={conn.color}
            lineWidth={1.5}
            transparent
            opacity={0.75}
          />
        ))}

        {/* Data particles traveling along connections */}
        {connections.map((conn, i) => (
          <DataParticle
            key={`particle-${i}`}
            startPoint={conn.points[0] as [number, number, number]}
            endPoint={conn.points[1] as [number, number, number]}
            speed={0.7}
            delay={i * 0.3}
          />
        ))}
      </group>

      {/* Search indicator */}
      <group position={[0, 1.3, 0]}>
        <Box args={[1.2, 0.35, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.6}
            roughness={0.4}
          />
        </Box>

        {/* Blinking cursor effect */}
        <Box args={[0.05, 0.15, 0.01]} position={[0.4, 0, 0.03]}>
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#60a5fa"
            emissiveIntensity={1}
          />
        </Box>

        <Text
          position={[0, 0, 0.03]}
          fontSize={0.16}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
        >
          Search
        </Text>
      </group>

      {/* Platform name */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Megapayer Explorer
      </Text>

      <Text
        position={[0, -3.0, 0]}
        fontSize={0.2}
        color="#a1a1aa"
        anchorX="center"
        anchorY="middle"
      >
        Blockchain Analytics • 2025
      </Text>
    </group>
  );
};

export default ExplorerAnimation;
