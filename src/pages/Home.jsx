import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

import Loader from "../components/Loader";
import BakerModel from "../components/BakerModel";
import HomeInfo from "../components/HomeInfo";

function CameraRig({ target }) {
  const { camera, controls } = useThree();

  useEffect(() => {
    if (!target || !controls) return;

    camera.position.set(...target.cameraPos);
    camera.updateProjectionMatrix();

    controls.target.copy(target.lookAt);
    controls.update();
  }, [target, camera, controls]);

  return null;
}

const Home = () => {
  const modelRef = useRef();
  const controlsRef = useRef();

  const [cameraTarget, setCameraTarget] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleAnnotationSelect = (annotation, mesh) => {
    const lookAt = new THREE.Vector3();
    mesh.getWorldPosition(lookAt);

    setCameraTarget({
      cameraPos: annotation.cameraPos,
      lookAt,
    });

    setSelected(annotation);
  };

  return (
    <section className="w-full h-screen bg-[#d9d9d9]">
      <div className="absolute bottom-10 left-10 z-10">
        {selected && (
          <HomeInfo
            title={selected.title}
            description={selected.description}
          />
        )}
      </div>

      <Canvas 
        camera={{ position: [10, 20, 30], fov: 55 }}
      >
        <Suspense fallback={<Loader />}>
          <Environment files="/hdris/forest.exr" background />

          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 15, 10]} intensity={1.1} />

          <BakerModel
            ref={modelRef}
            position={[0, -1, 0]}
            onSelect={handleAnnotationSelect}
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

          <CameraRig target={cameraTarget} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
