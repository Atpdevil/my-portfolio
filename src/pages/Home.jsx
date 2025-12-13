import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import Loader from "../components/Loader";
import BakerModel from "../components/BakerModel";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const controlsRef = useRef();
  const cameraRef = useRef();

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
      duration: 1.2,
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
      <div className="absolute bottom-10 left-10 z-10">
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
      >
        <Suspense fallback={<Loader />}>
          <Environment files="/hdris/forest.exr" background />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 15, 10]} intensity={1.1} />

          <BakerModel
            position={[0, 0, 0]}
            onSelect={handleAnnotationSelect}
          />

          <OrbitControls
            ref={controlsRef}
            enablePan
            enableZoom
            enableRotate
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
