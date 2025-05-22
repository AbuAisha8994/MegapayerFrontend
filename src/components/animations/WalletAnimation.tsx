import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Enhanced wallet animation showing crypto transfer between devices
const WalletAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [transferActive, setTransferActive] = useState(false);
  const [coinPosition, setCoinPosition] = useState(0);
  const transferInterval = useRef<NodeJS.Timeout | null>(null);

  // Setup automatic transfer animation
  useEffect(() => {
    // Start the animation after a delay
    const startTimeout = setTimeout(() => {
      setTransferActive(true);
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      if (transferInterval.current) clearInterval(transferInterval.current);
    };
  }, []);

  // Animate the coin transfer when active
  useEffect(() => {
    if (transferActive) {
      let progress = 0;

      transferInterval.current = setInterval(() => {
        progress += 0.01;

        if (progress >= 1) {
          progress = 0;
          setTransferActive((prev) => !prev); // Reverse direction
        }

        setCoinPosition(progress);
      }, 20);

      return () => {
        if (transferInterval.current) clearInterval(transferInterval.current);
      };
    }
  }, [transferActive]);

  // General group rotation animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      groupRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  // Device component (smartphone/wallet)
  const Device = ({
    position,
    color,
    isSource,
  }: {
    position: [number, number, number];
    color: string;
    isSource: boolean;
  }) => {
    const deviceRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
      if (deviceRef.current) {
        // Subtle floating animation
        deviceRef.current.position.y =
          position[1] +
          Math.sin(clock.getElapsedTime() * (isSource ? 1.5 : 1.2)) * 0.05;

        // Subtle glow effect when active
        if ((isSource && transferActive) || (!isSource && !transferActive)) {
          deviceRef.current.children.forEach((child) => {
            if (
              child instanceof THREE.Mesh &&
              child.material instanceof THREE.MeshStandardMaterial
            ) {
              child.material.emissiveIntensity =
                0.7 + Math.sin(clock.getElapsedTime() * 3) * 0.3;
            }
          });
        }
      }
    });

    return (
      <group ref={deviceRef} position={position}>
        {/* Phone body */}
        <Box args={[1.2, 2, 0.1]} castShadow>
          <meshStandardMaterial
            color={color}
            metalness={0.7}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </Box>

        {/* Phone screen */}
        <Box args={[0.9, 1.6, 0.05]} position={[0, 0, 0.08]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>

        {/* Wallet app icon */}
        <Box args={[0.5, 0.5, 0.02]} position={[0, 0, 0.14]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.6}
            roughness={0.3}
            emissive="#4f46e5"
            emissiveIntensity={0.2}
          />
        </Box>

        {/* Wallet icon */}
        <Text
          position={[0, 0, 0.17]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>

        <Text
          position={[0, -0.9, 0.14]}
          fontSize={0.14}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          MEGAPAYER
        </Text>
      </group>
    );
  };

  // Crypto coin that transfers between devices
  const Coin = () => {
    const coinRef = useRef<THREE.Mesh>(null);

    // Calculate position based on transfer progress
    const startPos = [-1.8, 0, 0];
    const endPos = [1.8, 0, 0];
    const currentDirection = transferActive ? 1 : -1;

    // Either startPos->endPos or endPos->startPos based on direction
    const fromPos = currentDirection === 1 ? startPos : endPos;
    const toPos = currentDirection === 1 ? endPos : startPos;

    // Current position based on animation progress
    const currentPos = [
      fromPos[0] + (toPos[0] - fromPos[0]) * coinPosition,
      fromPos[1] +
        (toPos[1] - fromPos[1]) * coinPosition +
        Math.sin(coinPosition * Math.PI) * 0.5, // Arc motion
      fromPos[2] + (toPos[2] - fromPos[2]) * coinPosition,
    ];

    useFrame(({ clock }) => {
      if (coinRef.current) {
        // Rotate the coin as it moves
        coinRef.current.rotation.y += 0.1;
        coinRef.current.rotation.x += 0.05;

        // Pulse effect
        const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.1;
        coinRef.current.scale.set(scale, scale, scale);
      }
    });

    return (
      <group position={currentPos as any}>
        <mesh ref={coinRef}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.9}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.7}
          />
        </mesh>

        {/* $ symbol on the coin */}
        <Text
          position={[0, 0, 0.03]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          $
        </Text>
      </group>
    );
  };

  // Connection line between devices
  const ConnectionPath = () => {
    // Points to form a bezier curve path
    const points = [];
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-1.8, 0, 0),
      new THREE.Vector3(0, 0.5, 0), // Control point (top of arc)
      new THREE.Vector3(1.8, 0, 0)
    );

    // Create a smooth path with 20 points
    for (let i = 0; i <= 20; i++) {
      const point = curve.getPoint(i / 20);
      points.push(point.x, point.y, point.z);
    }

    return (
      <>
        <line>
          <bufferGeometry>
            <float32BufferAttribute
              attach="attributes-position"
              array={new Float32Array(points)}
              count={points.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#4f46e5" transparent opacity={0.4} />
        </line>

        {/* Data packets moving along the path */}
        {[0.2, 0.4, 0.6, 0.8].map((offset, i) => {
          const progress = (coinPosition + offset) % 1;
          const point = curve.getPoint(progress);

          return (
            <Sphere
              key={i}
              args={[0.04, 8, 8]}
              position={[point.x, point.y, point.z]}
            >
              <meshStandardMaterial
                color="#4f46e5"
                emissive="#4f46e5"
                emissiveIntensity={0.8}
                transparent
                opacity={0.8}
              />
            </Sphere>
          );
        })}
      </>
    );
  };

  return (
    <group ref={groupRef}>
      {/* Left device (sender) */}
      <Device position={[-1.8, 0, 0]} color="#8b5cf6" isSource={true} />

      {/* Right device (receiver) */}
      <Device position={[1.8, 0, 0]} color="#ec4899" isSource={false} />

      {/* Connection path between devices */}
      <ConnectionPath />

      {/* Animated coin */}
      <Coin />

      {/* Title */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Universal Crypto Wallet
      </Text>

      {/* Floating network nodes in the background */}
      {[...Array(10)].map((_, i) => {
        const theta = (i / 10) * Math.PI * 2;
        const radius = 2.8 + Math.random() * 0.5;
        return (
          <Sphere
            key={i}
            args={[0.06, 16, 16]}
            position={[
              Math.cos(theta) * radius,
              (Math.random() - 0.5) * 2,
              Math.sin(theta) * radius - 1,
            ]}
          >
            <meshStandardMaterial
              color={
                i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#10b981" : "#f59e0b"
              }
              emissive={
                i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#10b981" : "#f59e0b"
              }
              emissiveIntensity={0.5}
            />
          </Sphere>
        );
      })}
    </group>
  );
};

export default WalletAnimation;
