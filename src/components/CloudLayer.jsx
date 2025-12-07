import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function CloudLayer() {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/textures/clouds.png");

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);

  useFrame((state, delta) => {
    texture.offset.x += delta * 0.003; // horizontal drift
    texture.offset.y += delta * 0.001; // vertical drift
  });

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 50, 0]} // higher above scene
    >
      <planeGeometry args={[300, 300]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </mesh>
  );
}
