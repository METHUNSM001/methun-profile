import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const data = new Float32Array(2400);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() - 0.5) * 12;
    return data;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.025;
      ref.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#b3131b" size={0.018} sizeAttenuation />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Particles />
    </Canvas>
  );
}