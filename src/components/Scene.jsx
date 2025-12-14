import { Environment, OrbitControls } from "@react-three/drei";
import BakerModel from "./BakerModel";

const Scene = ({ controlsRef, onSelect }) => {
  return (
    <>
      <Environment files="/hdris/forest.exr" background />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={1.1} />

      <BakerModel
        position={[0, 0, 0]}
        onSelect={onSelect}
      />

      <OrbitControls
        ref={controlsRef}
        enablePan
        enableZoom
        enableRotate
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
};

export default Scene;
