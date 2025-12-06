import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Loader from '../components/Loader';
import BakerModel from '../components/BakerModel';

const Home = () => {
  return (
    <section className="w-full h-screen relative bg-[#d9d9d9]">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [31, 21, 31], fov: 45 }}
        gl={{ toneMappingExposure: 1.2 }}
        shadows
      >

        <Suspense fallback={<Loader />}>
          {/* Lights */}
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            intensity={1.2}
            position={[5, 10, 5]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* Actual 3D Model */}
          <BakerModel scale={1} position={[0, -1, 0]} />

          {/* Optional nice HDRI environment */}
          <Environment preset="sunset" />

          {/* Orbit camera controls */}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
