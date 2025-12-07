import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Loader from "../components/Loader";
import BakerModel from "../components/BakerModel";
import CloudLayer from "../components/CloudLayer";

const Home = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();

  const handleKeyDown = (e) => {
    if (!modelRef.current) return;

    if (e.key === "ArrowLeft") modelRef.current.rotation.y += 0.1;
    if (e.key === "ArrowRight") modelRef.current.rotation.y -= 0.1;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="w-full h-screen relative bg-[#d9d9d9]">
      <Canvas
        camera={{ position: [31, 21, 31], fov: 45 }}
        gl={{ toneMappingExposure: 1.2 }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          
          {/* Forest HDRI (Soft, warm light) */}
          <Environment
            files="/hdris/forest.exr"
            background={true}
            blur={0.25}
          />

          {/* Moving clouds above the scene */}
          <CloudLayer />

          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={1.1}
            position={[10, 15, 10]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* Main Model */}
          <BakerModel
            ref={modelRef}
            scale={1}
            position={[0, -1, 0]}
            isRotating={isRotating}
            rotationSpeed={0.01}
          />

          {/* Camera Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
            rotateSpeed={0.45}
            enableDamping={true}
            dampingFactor={0.05}
          />

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
