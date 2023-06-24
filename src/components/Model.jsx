import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const Model = () => {
  const objRef = useRef();
  const modelDisplay = useLoader(OBJLoader, "../../Japanese_Temple.obj");
    
  useFrame(() => {
      objRef.current.rotation.x += 0.01;
      objRef.current.rotation.y += 0.01;
  });
  
  return <primitive object={modelDisplay} ref={objRef} />;
};

export default Model;
