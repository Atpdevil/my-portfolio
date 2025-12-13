import { forwardRef, useMemo } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { annotations } from "../constants/annotations";

const BakerModel = forwardRef(({ onSelect, ...props }, ref) => {
  const { scene } = useGLTF("/models/baker.glb");

  const resolvedAnnotations = useMemo(() => {
    const meshes = {};

    scene.traverse((child) => {
      if (child.isMesh) meshes[child.name] = child;
    });

    return annotations
      .map((cfg) => {
        const mesh = meshes[cfg.meshName];
        if (!mesh) return null;

        return {
          ...cfg,
          mesh,
          position: cfg.getPosition(mesh),
        };
      })
      .filter(Boolean);
  }, [scene]);

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />

      {resolvedAnnotations.map((a) => (
        <Html 
          key={a.id}
          position={a.position}
          transform={false}
          center
          distanceFactor={30}
          zIndexRange={[10, 0]}
        >
          <button
            className="annotation-dot"
            onClick={() => onSelect(a, a.mesh)}
          >
            {a.id}
          </button>
        </Html>
      ))}
    </group>
  );
});

export default BakerModel;
useGLTF.preload("/models/baker.glb");
