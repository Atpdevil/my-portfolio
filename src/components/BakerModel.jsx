import { useGLTF } from "@react-three/drei";

export default function BakerModel(props) {
  const { scene } = useGLTF("/models/baker.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/baker.glb");
