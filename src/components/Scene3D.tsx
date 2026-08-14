import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Trail } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EnergyCore() {
  const group = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;

    time.current += delta;

    group.current.rotation.y += delta * 0.18;

    group.current.rotation.x =
      Math.sin(time.current * 0.4) * 0.12;

    const pulse =
      1 + Math.sin(time.current * 2) * 0.035;

    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      {/* Outer wireframe */}
      <mesh>
        <icosahedronGeometry args={[1.25, 4]} />

        <meshBasicMaterial
          color="#5de7ff"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Inner energy sphere */}
      <mesh>
        <sphereGeometry args={[0.88, 48, 48]} />

        <meshStandardMaterial
          color="#03131d"
          emissive="#00d9ff"
          emissiveIntensity={3}
          roughness={0.25}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Bright center */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />

        <meshBasicMaterial
          color="#b8f8ff"
          transparent
          opacity={0.75}
        />
      </mesh>
    </group>
  );
}

function Orbit({
  radius,
  rotation,
  speed,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
    >
      <torusGeometry
        args={[radius, 0.008, 16, 160]}
      />

      <meshBasicMaterial
        color="#7c5cff"
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

function MovingParticle({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;

    time.current += delta;

    const t = time.current;

    ref.current.position.x =
      position[0] +
      Math.sin(t * 0.8 + position[1]) * 0.4;

    ref.current.position.y =
      position[1] +
      Math.cos(t * 0.7 + position[2]) * 0.3;

    ref.current.position.z =
      position[2] +
      Math.sin(t * 0.9) * 0.2;
  });

  return (
    <Trail
      width={0.8}
      length={4}
      color={color}
      attenuation={(t) => t * t}
    >
      <mesh
        ref={ref}
        position={position}
      >
        <sphereGeometry args={[0.025, 12, 12]} />

        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <pointLight
        position={[3, 2, 4]}
        intensity={10}
        color="#00eaff"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={7}
        color="#7c5cff"
      />

      <Stars
        radius={70}
        depth={45}
        count={1800}
        factor={1.6}
        saturation={0}
        fade
        speed={0.25}
      />

      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.35}
      >
        <group position={[2.2, 0, 0]}>
          <EnergyCore />

          <Orbit
            radius={1.8}
            speed={0.35}
            rotation={[
              Math.PI / 2.5,
              0.2,
              0,
            ]}
          />

          <Orbit
            radius={2.15}
            speed={-0.25}
            rotation={[
              0.8,
              Math.PI / 3,
              0,
            ]}
          />

          <Orbit
            radius={2.45}
            speed={0.18}
            rotation={[
              1.15,
              0.5,
              0,
            ]}
          />

          <MovingParticle
            position={[1.8, 0.5, 0]}
            color="#00eaff"
          />

          <MovingParticle
            position={[-1.7, -0.4, 0.2]}
            color="#7c5cff"
          />

          <MovingParticle
            position={[0.2, 1.8, -0.5]}
            color="#ffffff"
          />

          <MovingParticle
            position={[-0.4, -1.7, 0.3]}
            color="#00eaff"
          />
        </group>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1]}
        gl={{
  antialias: false,
  alpha: true,
  powerPreference: "low-power",
}}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}