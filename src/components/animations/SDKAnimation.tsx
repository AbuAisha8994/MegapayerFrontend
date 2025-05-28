import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";
import * as THREE from "three";

const SDKAnimation = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central code block */}
      <group position={[0, 0, 0]}>
        <Box args={[2, 1.5, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.5}
            roughness={0.7}
          />
        </Box>

        {/* Code lines */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            args={[1.6, 0.1, 0.01]}
            position={[0, 0.5 - i * 0.25, 0.11]}
          >
            <meshStandardMaterial
              color={i === 0 ? "#0891B2" : "#94a3b8"}
              emissive={i === 0 ? "#0891B2" : "#94a3b8"}
              emissiveIntensity={0.5}
            />
          </Box>
        ))}
      </group>

      {/* API nodes */}
      <group position={[-2.5, 0, 0]}>
        <Text position={[0, 1.2, 0]} fontSize={0.3} color="white">
          API
        </Text>
        {[...Array(3)].map((_, i) => (
          <Box key={i} args={[1.2, 0.3, 0.1]} position={[0, 0.6 - i * 0.5, 0]}>
            <meshStandardMaterial
              color="#0891B2"
              metalness={0.6}
              roughness={0.4}
            />
          </Box>
        ))}
      </group>

      {/* SDK nodes */}
      <group position={[2.5, 0, 0]}>
        <Text position={[0, 1.2, 0]} fontSize={0.3} color="white">
          SDK
        </Text>
        {[...Array(3)].map((_, i) => (
          <Box key={i} args={[1.2, 0.3, 0.1]} position={[0, 0.6 - i * 0.5, 0]}>
            <meshStandardMaterial
              color={
                i % 3 === 0 ? "#0891B2" : i % 3 === 1 ? "#f59e0b" : "#10b981"
              }
              metalness={0.6}
              roughness={0.4}
            />
          </Box>
        ))}
      </group>

      {/* Connection lines */}
      {[...Array(3)].map((_, i) => (
        <line key={`line-left-${i}`}>
          <bufferGeometry>
            <float32BufferAttribute
              attach="attributes-position"
              array={
                new Float32Array([
                  -1.9,
                  0.6 - i * 0.5,
                  0,
                  -0.7,
                  0.5 - i * 0.25,
                  0,
                ])
              }
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0891B2" opacity={0.6} transparent />
        </line>
      ))}

      {[...Array(3)].map((_, i) => (
        <line key={`line-right-${i}`}>
          <bufferGeometry>
            <float32BufferAttribute
              attach="attributes-position"
              array={
                new Float32Array([
                  0.7,
                  0.5 - i * 0.25,
                  0,
                  1.9,
                  0.6 - i * 0.5,
                  0,
                ])
              }
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0891B2" opacity={0.6} transparent />
        </line>
      ))}

      <Text position={[0, -2.2, 0]} fontSize={0.4} color="white">
        Developer Tools
      </Text>
      <Text position={[0, -2.6, 0]} fontSize={0.2} color="#a1a1aa">
        SDK & API
      </Text>
    </group>
  );
};

export default SDKAnimation;
