import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  LineSegments,
  EdgesGeometry,
  LineBasicMaterial,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";
import { OrbitControls } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";


const Model = () => {
  const objRef = useRef();
  const modelDisplay = useLoader(OBJLoader, "../../Test1.obj");
  // const modelDisplay = useLoader(OBJLoader, "../../Test1.3dm");

  // const edgeMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 2}); // Define edge material
  // const edgeGroup = new THREE.Group();
  // const edges = new EdgesGeometry(modelDisplay.geometry, 30); // Create edges geometry
  // const lines = new LineSegments(edges, edgeMaterial)
  // edgeGroup.add(lines);
  // edgeGroup.name = "edges";

  // modelDisplay.add(edgeGroup);

  useFrame(() => {
    // objRef.current.rotation.x += 0.005;
    // objRef.current.rotation.y += 0.005;
  });

  return (
    <>
      <group>
        <mesh position={[0, -2, 0]} >
          {/* TODO: Get model to scale to container */}
          <primitive
            object={modelDisplay}
            ref={objRef}
            scale={[0.005, 0.005, 0.005]}
          />
          {/* TODO: Get edges to show up */}
          {/* <lineSegments geometry={edges} material={edgeMaterial} /> */}
          {/* <primitive object={lines}/> */}
        </mesh>

        {/* TODO: Add grid at base of model */}
        {/* <mesh
          geometry={gridGeometry}
          material={gridMaterial}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
      </group>
      <OrbitControls />
    </>
  );
};

export default Model;
