import { forwardRef, useMemo } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { annotations } from "../constants/annotations";

const BakerModel = forwardRef(({ onSelect, ...props }, ref) => {
  const { scene } = useGLTF("/models/baker.glb");

  const resolvedAnnotations = useMemo(() => {
    const meshes = {};

    // Collect meshes by name
    scene.traverse((child) => {
      if (child.isMesh) {
        meshes[child.name] = child;
      }
    });

    // Map annotation config → world positions
    return annotations
      .map((cfg) => {
        const mesh = meshes[cfg.meshName];
        if (!mesh) return null;

        return {
          ...cfg,
          position: cfg.getPosition(mesh),
          lookAt: mesh.position.toArray(),
        };
      })
      .filter(Boolean);
  }, [scene]);

  return (
    <group ref={ref} {...props}>
      {/* Main model */}
      <primitive object={scene} />

      {/* Annotation dots */}
      {resolvedAnnotations.map((a) => (
        <Html
          key={a.id}
          position={a.position}
          center
          transform={false}
          distanceFactor={20}
          zIndexRange={[10, 0]}
        >
          <button
            className="annotation-dot"
            onClick={() => onSelect?.(a)}
          >
            {a.id}
          </button>
        </Html>
      ))}
    </group>
  );
});

export default BakerModel;

// Preload model
useGLTF.preload("/models/baker.glb");
