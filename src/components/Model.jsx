import React, {useRef} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = () => {
  const modelDisplay = useLoader(OBJLoader, "../../Japanese_Temple.obj");
  return (
        <primitive object={modelDisplay} />
  );
};

export default Model;
