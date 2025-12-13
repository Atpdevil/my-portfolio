import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraController = ({ targetRef }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (!targetRef.current) return;

    const { cameraPos, lookAt } = targetRef.current;

    const targetPosition = new THREE.Vector3(...cameraPos);
    const targetLookAt = new THREE.Vector3(...lookAt);

    camera.position.lerp(targetPosition, 0.08);
    camera.lookAt(targetLookAt);

    // Stop controlling once close enough
    if (camera.position.distanceTo(targetPosition) < 0.05) {
      targetRef.current = null;
    }
  });

  return null;
};

export default CameraController;
