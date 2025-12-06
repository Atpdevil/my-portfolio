import { useGLTF } from "@react-three/drei";

export default function BakerModel(props) {
  const { scene } = useGLTF("/models/scene.gltf");
  return <primitive object={scene} {...props} />;
}
