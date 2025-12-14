import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import UiballLoader from "../components/UiballLoader";
import HomeInfo from "../components/HomeInfo";
import Scene from "../components/Scene";

const Home = () => {
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);

  const [selected, setSelected] = useState(null);

  const handleAnnotationSelect = (annotation) => {
    const [x, y, z] = annotation.position;
    const lookAt = new THREE.Vector3(x, y, z);

    if (controlsRef.current) {
      controlsRef.current.enabled = false;
    }

    gsap.to(cameraRef.current.position, {
      x: x - 3,
      y: y + 2,
      z: z + 6,
      duration: 2.2,
      ease: "power3.out",
      onUpdate: () => {
        cameraRef.current.lookAt(lookAt);

        if (controlsRef.current) {
          controlsRef.current.target.lerp(lookAt, 0.2);
          controlsRef.current.update();
        }
      },
      onComplete: () => {
        if (controlsRef.current) {
          controlsRef.current.target.copy(lookAt);
          controlsRef.current.update();
          controlsRef.current.enabled = true;
        }
      },
    });

    setSelected(annotation);
  };

  return (
    <section className="w-full h-screen relative">
      {/* INFO CARD */}
      <div className="absolute bottom-[67px] left-10 z-10">
        {selected && (
          <HomeInfo
            title={selected.title}
            description={selected.description}
            action={selected.action}
          />
        )}
      </div>

      <Canvas
        camera={{ position: [15, 28, 28], fov: 50 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
        gl={{ preserveDrawingBuffer: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={<UiballLoader />}>
          <Scene
            controlsRef={controlsRef}
            onSelect={handleAnnotationSelect}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
