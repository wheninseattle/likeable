import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import {
  EdgesGeometry,
  LineBasicMaterial,
  PlaneGeometry,
  LineSegments,
  MeshBasicMaterial,
  Mesh,
} from "three";
import { OrbitControls } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import * as THREE from "three";

const Model = ({ mesh }) => {
  const fileName = `mesh/${ mesh || Math.floor(Math.random()*100) }.obj`
  console.log('modelmesh', mesh)
  const objRef = useRef();
  const modelDisplay = useLoader(OBJLoader, fileName);
  // const modelDisplay = useLoader(OBJLoader, "../../Test1.3dm");

  // const edgeMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 2 }); // Define edge material
  // const edgeGroup = new THREE.Group();
  // const edges = new EdgesGeometry(modelDisplay.geometry, 30); // Create edges geometry
  // const lines = new LineSegments(edges, edgeMaterial);
  // edgeGroup.add(lines);
  // edgeGroup.name = "edges";

  // modelDisplay.add(edgeGroup);

  // const gridSize = 6;
  // const gridStepSize = 1;
  // const gridGeometry = new PlaneGeometry(
  //   gridStepSize,
  //   gridStepSize,
  //   gridSize,
  //   gridSize,
  //   false
  // );
  // const gridMaterial = new MeshBasicMaterial({
  //   color: "#fff",
  //   wireframe: true,
  // });
  // const gridMesh = new Mesh(gridGeometry, gridMaterial);
  // gridMesh.position.z = -0.5;

  return (
    <>
      <group>
        <mesh position={[0, -0.75, 0]}>
          <primitive
            object={modelDisplay}
            ref={objRef}
            scale={[0.001, 0.001, 0.001]}
          />
          {/* TODO: Get edges to show up */}
        </mesh>
        {/* <mesh
          geometry={gridGeometry}
          material={gridMaterial}
          position={[0, -0.75, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
        <gridHelper args={[0.75,6,6]} position={[0, -0.75, 0]}/>
      </group>
      <OrbitControls />
    </>
  );
};

export default Model;
