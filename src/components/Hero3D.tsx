"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.6);
    target.current.set(pointer.x * 0.7, pointer.y * 0.4, 5.2 - scroll * 1.3);
    camera.position.lerp(target.current, 0.045);
    camera.lookAt(0, 0, 0);
    state.scene.rotation.y = THREE.MathUtils.lerp(state.scene.rotation.y, pointer.x * 0.08, 0.04);
  });

  return null;
}

function TattooMachine() {
  const group = useRef<THREE.Group>(null);
  const needle = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.35) * 0.22;
      group.current.rotation.x = Math.sin(time * 0.28) * 0.08;
      group.current.position.y = Math.sin(time * 0.7) * 0.14;
    }
    if (needle.current) {
      needle.current.position.x = 1.62 + Math.sin(time * 34) * 0.08;
    }
  });

  return (
    <group ref={group} rotation={[0.18, -0.45, -0.2]} scale={1.05}>
      <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.28, 0.28, 2.18, 48]} />
        <meshStandardMaterial color="#11100f" metalness={0.85} roughness={0.24} />
      </mesh>
      <mesh castShadow position={[-0.35, 0.44, 0]}>
        <boxGeometry args={[1.1, 0.42, 0.42]} />
        <meshStandardMaterial color="#191613" metalness={0.92} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[-0.92, -0.34, 0]} rotation={[0, 0, -0.28]}>
        <boxGeometry args={[0.52, 1.3, 0.36]} />
        <meshStandardMaterial color="#0b0b0b" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0.58, 0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.32, 0.055, 14, 42]} />
        <meshStandardMaterial color="#c7a76a" metalness={0.95} roughness={0.18} />
      </mesh>
      <mesh ref={needle} castShadow position={[1.62, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.018, 1.06, 24]} />
        <meshStandardMaterial color="#f2eadc" metalness={1} roughness={0.12} />
      </mesh>
      <mesh castShadow position={[1.02, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.15, 0.45, 32]} />
        <meshStandardMaterial color="#c7a76a" metalness={0.95} roughness={0.18} />
      </mesh>
    </group>
  );
}

function InkBottle() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = time * 0.22;
      group.current.position.y = -1.15 + Math.sin(time * 0.6) * 0.08;
    }
  });

  return (
    <group ref={group} position={[-1.85, -1.15, -0.35]} scale={0.78}>
      <mesh castShadow receiveShadow position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.38, 0.48, 1.05, 48]} />
        <meshPhysicalMaterial color="#090909" metalness={0.1} roughness={0.34} transmission={0.15} thickness={0.4} />
      </mesh>
      <mesh castShadow position={[0, 0.68, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.36, 40]} />
        <meshStandardMaterial color="#c7a76a" metalness={0.84} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.02, 0.49]}>
        <planeGeometry args={[0.54, 0.42]} />
        <meshBasicMaterial color="#f7f1e7" transparent opacity={0.82} />
      </mesh>
    </group>
  );
}

function SmokeField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 7.2;
      values[i * 3 + 1] = (Math.random() - 0.5) * 4.4;
      values[i * 3 + 2] = (Math.random() - 0.5) * 4.6;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.025;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c7a76a" size={0.018} transparent opacity={0.42} depthWrite={false} />
    </points>
  );
}

function SceneLights() {
  const light = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!light.current) return;
    light.current.position.x = pointer.x * 3;
    light.current.position.y = 1.8 + pointer.y * 1.4;
  });

  return (
    <>
      <ambientLight intensity={0.34} />
      <directionalLight position={[4, 4, 4]} intensity={1.8} color="#f7f1e7" />
      <pointLight ref={light} position={[0, 2.2, 3]} intensity={5} color="#c7a76a" distance={7} />
      <spotLight position={[-3, 2, 4]} angle={0.45} penumbra={0.8} intensity={3.2} color="#812b22" />
    </>
  );
}

export function Hero3D() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.26], [1, 0.24]);

  return (
    <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5.2], fov: 43 }}
        shadows
      >
        <Suspense fallback={null}>
          <SceneLights />
          <SmokeField />
          <TattooMachine />
          <InkBottle />
          <mesh receiveShadow position={[0, -1.95, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[8, 8]} />
            <shadowMaterial transparent opacity={0.28} />
          </mesh>
          <CameraRig />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
