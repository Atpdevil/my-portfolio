import { forwardRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three";
import { annotations } from "../constants/annotations";

const PLAY_THESE = [
  "attackminiguns",
  "hello",
  "walkingstop",
  "Take 01",
];

const BakerModel = forwardRef(({ onSelect, ...props }, ref) => {
  const { scene, animations } = useGLTF("/models/baker.glb");
  const { actions } = useAnimations(animations, scene);

  /* ---------- PLAY SELECTED ANIMATIONS ---------- */

  useEffect(() => {
    if (!actions) return;

    // stop everything first (important)
    Object.values(actions).forEach((a) => a.stop());

    PLAY_THESE.forEach((name) => {
      const action = actions[name];
      if (!action) {
        console.warn(`Animation not found: ${name}`);
        return;
      }

      action.reset();
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.clampWhenFinished = false;
      action.fadeIn(0.2);
      action.play();
    });

    return () => {
      Object.values(actions).forEach((a) => a.stop());
    };
  }, [actions]);

  /* ---------- ANNOTATIONS ---------- */

  const resolvedAnnotations = useMemo(() => {
    const meshes = {};
    scene.traverse((c) => c.isMesh && (meshes[c.name] = c));

    return annotations
      .map((cfg) => meshes[cfg.meshName] && { ...cfg, mesh: meshes[cfg.meshName] })
      .filter(Boolean);
  }, [scene]);

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />

      {resolvedAnnotations.map((a) => (
        <Html key={a.id} position={a.position} center>
          <button className="annotation-dot" onClick={() => onSelect(a, a.mesh)}>
            {a.id}
          </button>
        </Html>
      ))}
    </group>
  );
});

export default BakerModel;
useGLTF.preload("/models/baker.glb");
