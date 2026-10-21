"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function GeometricCore({ isDark }: { isDark: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null!);
  const knotRef = useRef<THREE.Mesh>(null!);
  const outerCageRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Group>(null!);
  const ringRef2 = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;

    // Fluid smooth pointer follow
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2 + (y * 0.4 - coreRef.current.rotation.x) * 0.04;
      coreRef.current.rotation.y += delta * 0.3 + (x * 0.4 - coreRef.current.rotation.y) * 0.04;
    }

    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.35;
      knotRef.current.rotation.y += delta * 0.25;
      knotRef.current.rotation.z += delta * 0.15;
    }

    if (outerCageRef.current) {
      outerCageRef.current.rotation.x -= delta * 0.15;
      outerCageRef.current.rotation.y -= delta * 0.2;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.2;
      ringRef1.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.25;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.25;
      ringRef2.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  const tealColor = isDark ? "#14B8A6" : "#0D9488";
  const indigoColor = isDark ? "#6366F1" : "#4F46E5";
  const emeraldColor = isDark ? "#10B981" : "#059669";
  const coreBg = isDark ? "#0A101D" : "#F1F5F9";

  return (
    <group>
      {/* Central Morphing Organic Core */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.4}>
        <Sphere ref={coreRef} args={[1.1, 64, 64]} scale={1.05}>
          <MeshDistortMaterial
            color={coreBg}
            emissive={tealColor}
            emissiveIntensity={isDark ? 0.45 : 0.2}
            roughness={0.15}
            metalness={0.85}
            distort={0.42}
            speed={2.6}
          />
        </Sphere>
      </Float>

      {/* Floating Geometric Torus Knot Accenting the Core */}
      <TorusKnot ref={knotRef} args={[1.5, 0.04, 128, 32, 2, 3]} scale={0.92}>
        <meshStandardMaterial
          color={indigoColor}
          wireframe
          transparent
          opacity={isDark ? 0.75 : 0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </TorusKnot>

      {/* Outer Polyhedral Geodesic Cage */}
      <mesh ref={outerCageRef} scale={2.05}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={tealColor}
          wireframe
          transparent
          opacity={isDark ? 0.55 : 0.35}
          roughness={0.3}
          metalness={0.95}
        />
      </mesh>

      {/* Primary Cyber Ring */}
      <group ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.55, 0.018, 16, 120]} />
          <meshBasicMaterial color={tealColor} transparent opacity={isDark ? 0.6 : 0.4} />
        </mesh>
      </group>

      {/* Secondary Orbital Cross-Ring */}
      <group ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.75, 0.012, 16, 120]} />
          <meshBasicMaterial color={emeraldColor} transparent opacity={isDark ? 0.45 : 0.3} />
        </mesh>
      </group>
    </group>
  );
}

const DEFAULT_PARTICLE_COORDS = (() => {
  const coords = new Float32Array(80 * 3);
  for (let i = 0; i < 80; i++) {
    const rx = ((Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1 + 1) % 1;
    const ry = ((Math.sin(i * 39.3461 + 11.135) * 43758.5453) % 1 + 1) % 1;
    const rz = ((Math.sin(i * 73.156 + 45.198) * 43758.5453) % 1 + 1) % 1;
    coords[i * 3] = (rx - 0.5) * 9;
    coords[i * 3 + 1] = (ry - 0.5) * 9;
    coords[i * 3 + 2] = (rz - 0.5) * 7;
  }
  return coords;
})();

function FloatingParticles({ isDark }: { isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.035;
      pointsRef.current.rotation.x += delta * 0.018;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[DEFAULT_PARTICLE_COORDS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color={isDark ? "#2DD4BF" : "#0D9488"}
        transparent
        opacity={isDark ? 0.75 : 0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[560px] flex items-center justify-center select-none" style={{ touchAction: "pan-y" }}>
      {/* Ambient Radial Core Light */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-60 blur-[100px] transition-colors duration-700"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.3) 0%, rgba(99, 102, 241, 0.2) 45%, transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.22) 0%, rgba(79, 70, 229, 0.15) 45%, transparent 70%)"
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        className="z-10 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
      >
        <ambientLight intensity={isDark ? 0.8 : 1.3} />
        <directionalLight position={[6, 6, 6]} intensity={isDark ? 1.8 : 2.2} color="#FFFFFF" />
        <pointLight position={[-6, -4, -2]} intensity={isDark ? 3.0 : 1.8} color={isDark ? "#6366F1" : "#4F46E5"} />
        <pointLight position={[5, 5, 3]} intensity={isDark ? 3.5 : 2.2} color={isDark ? "#14B8A6" : "#0D9488"} />

        <GeometricCore isDark={isDark} />
        <FloatingParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}
