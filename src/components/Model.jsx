import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = ({ mesh }) => {
  const fileName = mesh.data;
  console.log("modelmesh", mesh);
  const objRef = useRef();
  const modelDisplay = useLoader(OBJLoader, fileName);

  return (
    <>
      <group>
        <mesh position={[0, -0.6, 0]}>
          <primitive
            object={modelDisplay}
            ref={objRef}
            scale={[0.001, 0.001, 0.001]}
          />
        </mesh>
        <gridHelper args={[0.75, 6, 6]} position={[0, -0.6, 0]} />
      </group>
      <OrbitControls />
    </>
  );
};

export default Model;
