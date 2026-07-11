'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sparkles,
  Torus,
} from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

function CoreBlob() {
  const ref = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.15
    // ease toward pointer for interactivity
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      pointer.y * 0.35,
      0.05,
    )
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      -pointer.x * 0.35,
      0.05,
    )
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={ref} scale={1.55}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#3b6bff"
          emissive="#123a9e"
          emissiveIntensity={0.35}
          roughness={0.12}
          metalness={0.85}
          distort={0.38}
          speed={1.6}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function GlassShell() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.08
  })
  return (
    <mesh ref={ref} scale={2.35}>
      <icosahedronGeometry args={[1, 8]} />
      <MeshTransmissionMaterial
        samples={6}
        thickness={0.6}
        roughness={0.35}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.4}
        color="#34e6cf"
        backside
      />
    </mesh>
  )
}

function OrbitRings() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.z = state.clock.elapsedTime * 0.06
  })
  return (
    <group ref={group} rotation={[Math.PI / 3, 0, 0]}>
      <Torus args={[3.1, 0.008, 16, 120]}>
        <meshStandardMaterial
          color="#7aa2ff"
          emissive="#3b6bff"
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </Torus>
      <Torus args={[3.7, 0.006, 16, 120]} rotation={[0.6, 0.4, 0]}>
        <meshStandardMaterial
          color="#34e6cf"
          emissive="#34e6cf"
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </Torus>
    </group>
  )
}

function FieldPoints() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 900
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#9393a8"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2.2} color="#8fb0ff" />
        <pointLight position={[-6, -3, -4]} intensity={30} color="#34e6cf" />
        <pointLight position={[6, 2, 3]} intensity={18} color="#3b6bff" />

        <CoreBlob />
        <GlassShell />
        <OrbitRings />
        <FieldPoints />
        <Sparkles
          count={60}
          scale={9}
          size={2.4}
          speed={0.3}
          color="#8fb0ff"
          opacity={0.6}
        />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
