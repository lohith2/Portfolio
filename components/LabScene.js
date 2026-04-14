"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ReactorCore() {
  const group = useRef(null);
  const shellOne = useRef(null);
  const shellTwo = useRef(null);
  const pulse = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    group.current.rotation.y = t * 0.22;
    group.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    shellOne.current.rotation.z += 0.005;
    shellTwo.current.rotation.x += 0.004;
    pulse.current.scale.setScalar(1 + Math.sin(t * 2.2) * 0.08);
  });

  return (
    <group ref={group}>
      <mesh ref={pulse}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshPhysicalMaterial
          color="#7af3ff"
          emissive="#1d9fb6"
          emissiveIntensity={0.7}
          roughness={0.18}
          metalness={0.75}
          wireframe
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh ref={shellOne} rotation={[Math.PI / 2.4, 0.2, 0.4]}>
        <torusGeometry args={[2.3, 0.05, 20, 200]} />
        <meshBasicMaterial color="#4a8cff" transparent opacity={0.85} />
      </mesh>

      <mesh ref={shellTwo} rotation={[1.1, 0.7, 1.2]}>
        <torusGeometry args={[2.85, 0.035, 16, 200]} />
        <meshBasicMaterial color="#c8ff8f" transparent opacity={0.5} />
      </mesh>

      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={0.9}>
        <mesh position={[0, 0, -0.5]}>
          <octahedronGeometry args={[0.72, 0]} />
          <meshPhysicalMaterial
            color="#ffb36b"
            emissive="#b66c1d"
            emissiveIntensity={0.4}
            roughness={0.14}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

function DataRings() {
  const rings = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    rings.current.forEach((ring, index) => {
      if (!ring) return;
      ring.rotation.y = t * (0.08 + index * 0.02);
      ring.rotation.z = Math.sin(t * 0.6 + index) * 0.35;
    });
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.03
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.45,
      0.03
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      {[3.8, 4.8, 5.8].map((radius, index) => (
        <mesh
          key={radius}
          ref={(node) => {
            rings.current[index] = node;
          }}
          rotation={[Math.PI / 2.5 + index * 0.18, index * 0.5, 0]}
        >
          <torusGeometry args={[radius, 0.02, 10, 240]} />
          <meshBasicMaterial
            color={index === 1 ? "#7af3ff" : index === 2 ? "#c8ff8f" : "#4a8cff"}
            transparent
            opacity={0.24}
          />
        </mesh>
      ))}
    </group>
  );
}

function BeamField() {
  const lines = [
    [
      [-4.5, -1.4, -1.8],
      [-1.8, 0.2, 0.1],
      [0, 0, 0],
    ],
    [
      [4.6, 1.5, -2],
      [1.4, 0.4, 0.2],
      [0, 0, 0],
    ],
    [
      [-3.8, 2.2, -2.6],
      [-1.2, 0.9, 0.1],
      [0, 0, 0],
    ],
    [
      [3.2, -2.2, -1.4],
      [1.1, -0.8, 0.15],
      [0, 0, 0],
    ],
  ];

  return (
    <group>
      {lines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index % 2 === 0 ? "#7af3ff" : "#4a8cff"}
          transparent
          opacity={0.45}
          lineWidth={1.2}
        />
      ))}
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={1.4} color="#9ee7ff" />
      <pointLight position={[2.8, 2.5, 2.8]} intensity={35} color="#7af3ff" distance={16} />
      <pointLight position={[-3.8, -1.4, -2.2]} intensity={28} color="#4a8cff" distance={18} />
      <pointLight position={[0, 0, -4]} intensity={18} color="#c8ff8f" distance={12} />
    </>
  );
}

export default function LabScene() {
  return (
    <div className="scene-shell">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0.2, 8]} fov={42} />
        <fog attach="fog" args={["#07101d", 10, 22]} />
        <SceneLights />
        <Stars radius={40} depth={28} count={1200} factor={4} saturation={0} fade speed={0.7} />
        <BeamField />
        <DataRings />
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
          <ReactorCore />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          maxPolarAngle={Math.PI * 0.62}
          minPolarAngle={Math.PI * 0.38}
        />
      </Canvas>

      <div className="scene-overlay">
        <div className="scene-overlay-card">
          <span className="chip">Live Feed</span>
          <strong>Quantum Inference Engine</strong>
          <p>Tracking active prompts, model states, and interaction vectors.</p>
        </div>
        <div className="scene-overlay-card">
          <span className="chip">Signal Lock</span>
          <strong>98.2% stability</strong>
          <p>Immersive 3D scene built with React Three Fiber and Drei.</p>
        </div>
      </div>
    </div>
  );
}
