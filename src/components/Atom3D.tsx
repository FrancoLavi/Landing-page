import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const BRAND = '#a100ff';

/** Una órbita elíptica con "cortes" como en el logo + un electrón que la recorre. */
function Orbit({ rotation, speed, phase = 0 }: { rotation: [number, number, number]; speed: number; phase?: number }) {
  const electron = useRef<THREE.Mesh>(null!);
  const a = 3.1; // semieje mayor
  const b = 1.25; // semieje menor

  const segments = useMemo(() => {
    // 2 arcos grandes por órbita, con huecos (como el logo)
    const arc = (from: number, to: number) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 80; i++) {
        const t = from + ((to - from) * i) / 80;
        pts.push(new THREE.Vector3(Math.cos(t) * a, Math.sin(t) * b, 0));
      }
      return new THREE.BufferGeometry().setFromPoints(pts);
    };
    return [arc(0.35, Math.PI - 0.35), arc(Math.PI + 0.35, Math.PI * 2 - 0.35)];
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + phase;
    electron.current.position.set(Math.cos(t) * a, Math.sin(t) * b, 0);
  });

  return (
    <group rotation={rotation}>
      {segments.map((g, i) => (
        <line key={i}>
          <primitive object={g} attach="geometry" />
          <lineBasicMaterial color={BRAND} toneMapped={false} />
        </line>
      ))}
      <mesh ref={electron}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshBasicMaterial color="#e6b3ff" toneMapped={false} />
      </mesh>
    </group>
  );
}

function Atom() {
  const group = useRef<THREE.Group>(null!);
  const target = useRef({ x: 0, y: 0 });

  useFrame(({ pointer, clock }, dt) => {
    target.current.x = pointer.y * 0.35;
    target.current.y = pointer.x * 0.5;
    const scroll = typeof window !== 'undefined' ? window.scrollY / 600 : 0;
    const g = group.current;
    g.rotation.x += (target.current.x + scroll * 0.6 - g.rotation.x) * Math.min(1, dt * 3);
    g.rotation.y += (target.current.y + clock.elapsedTime * 0.12 + scroll - g.rotation.y) * Math.min(1, dt * 2);
  });

  return (
    <group ref={group}>
      {/* Núcleo */}
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshStandardMaterial color="#0b0b10" roughness={0.25} metalness={0.8} emissive={BRAND} emissiveIntensity={0.18} />
      </mesh>
      <mesh scale={1.35}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshBasicMaterial color={BRAND} transparent opacity={0.07} toneMapped={false} />
      </mesh>

      <Orbit rotation={[0, 0, Math.PI / 4]} speed={0.9} />
      <Orbit rotation={[0, 0, -Math.PI / 4]} speed={0.75} phase={2} />
      <Orbit rotation={[Math.PI / 2.4, 0.5, 0]} speed={1.1} phase={4} />
    </group>
  );
}

export default function Atom3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 5]} intensity={40} color="#c77dff" />
      <pointLight position={[-5, -3, 2]} intensity={25} color={BRAND} />
      <Atom />
      <Sparkles count={70} scale={[11, 7, 6]} size={2.2} speed={0.25} color="#c77dff" opacity={0.6} />
      <EffectComposer multisampling={0}>
        <Bloom intensity={1.3} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
