import { Html } from "@react-three/drei";
import { squircle } from "ldrs";
import { useEffect } from "react";

const UiballLoader = () => {
  useEffect(() => {
    squircle.register();
  }, []);

  return (
    <Html center>
      <l-squircle
        size="150"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.2"
        speed="3"
        color="#00aaff"
      />
    </Html>
  );
};

export default UiballLoader;
