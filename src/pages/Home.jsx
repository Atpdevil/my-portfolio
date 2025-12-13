import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Loader from "../components/Loader";
import BakerModel from "../components/BakerModel";
import HomeInfo from "../components/HomeInfo";
import CameraController from "../components/CameraController";

const DEFAULT_CAMERA = {
  cameraPos: [20, 30, 40],
  lookAt: [0, 0, 0],
};

const Home = () => {
  const modelRef = useRef();
  const targetRef = useRef(null);

  const [selected, setSelected] = useState(null);

  // Keyboard rotation (unchanged)
  const handleKeyDown = (e) => {
    if (!modelRef.current) return;

    if (e.key === "ArrowLeft") modelRef.current.rotation.y += 0.1;
    if (e.key === "ArrowRight") modelRef.current.rotation.y -= 0.1;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAnnotationSelect = (annotation) => {
  if (selected?.id === annotation.id) {
    targetRef.current = DEFAULT_CAMERA;
    setSelected(null);
    return;
  }

  targetRef.current = {
    cameraPos: annotation.cameraPos,
    lookAt: annotation.lookAt,
  };
  setSelected(annotation);
};

  return (
    <section className="w-full h-screen relative bg-[#d9d9d9]">
      
      {/* Info Panel */}
      <div className="absolute bottom-10 left-10 z-10">
        {selected && (
          <HomeInfo
            title={selected.title}
            description={selected.description}
            route={selected.route}
          />
        )}
      </div>

        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [31, 21, 31], fov: 45 }}
          shadows
        >
        <Suspense fallback={<Loader />}>

          <Environment
            files="/hdris/forest.exr"
            background
            blur={0.25}
          />

          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={1.1}
            position={[10, 15, 10]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          <BakerModel
            ref={modelRef}
            position={[0, -1, 0]}
            scale={1}
            onSelect={handleAnnotationSelect}
          />

          <CameraController
            targetRef={targetRef}
            enabled={!!selected}
          />

          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
            enableDamping
            dampingFactor={0.05}
          />

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
