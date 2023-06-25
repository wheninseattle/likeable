"use client";
import { Box, Container, ThemeProvider } from "@mui/material";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "@/components/Model";
import theme from "@/styles/theme";
import BottomDrawer from "@/components/swipe/BottomDrawer";
import SwipeButtons from "@/components/swipe/SwipeButtons";
import { useState, useEffect } from "react";

//const MESH_SERVER = 'https://mesh-server-880e3482d864.herokuapp.com'
const MESH_SERVER = 'http://localhost:3000'

const deg2rad = degrees => degrees * (Math.PI / 180);

const Scene = () => {
  useThree(({ camera }) => {
    // camera.position.set(0, 0, 0);
    camera.rotation.set(deg2rad(60), deg2rad(90), deg2rad(0));
    // camera.lookAt(0, 0, 0);
  })
}

const getMesh = async () => {
  const res = await fetch(`${MESH_SERVER}/mesh`)
  const json = await res.json()
  console.log('json', json)
  return json
}

const swipe = async () => {
  const [currentMesh, setCurrentMesh] = useState(12)

  const setMesh = (meshId) => {
    console.log('setting mesh in rando', meshId)
    setCurrentMesh(meshId)
  }

  const handleLeft = async () => {
    console.log('left')
    const body = {
      meshId: currentMesh,
      liked: false
    }
    console.log(body)
    const res = await fetch(`${MESH_SERVER}/cluster`, {
      method: "POST",
      body: JSON.stringify(body)
    })
    const nextMesh = await getMesh()
    console.log('nextMesh', nextMesh)
    setMesh(nextMesh)
  }

  const handleRight = async () => {
    console.log('right')
    const body = {
      meshId: currentMesh,
      liked: true
    }
    console.log(body)
    const res = await fetch(`${MESH_SERVER}/cluster`, {
      method: "POST",
      body: JSON.stringify(body)
    })
    const nextMesh = await getMesh()
    console.log('nextMesh', nextMesh)
    setMesh(nextMesh)
  }

  useEffect(() => {
    const fetchData = async () => {
      const meshId = await getMesh()
      console.log('useEffect setting mesh', meshId)
      setMesh(meshId)
    }
    fetchData()
  })

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100vh",
          padding: 0,
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <SwipeButtons variant={"left"} onClick={handleLeft}/>
          <SwipeButtons variant={"right"} onClick={handleRight}/>
        </Box>
        <Box sx={{ width: "100%", height: "100vh", paddingX:'3rem'}}>
          <Canvas camera={{fov: 35, zoom: 1.3}}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <directionalLight color="white" position={[0, 5, 0]} />
            { currentMesh ? <Model mesh={currentMesh} /> : undefined }
          </Canvas>
        </Box>
        {/* TODO: Limit to width of container and finish styling */}
        <BottomDrawer />
      </Container>
    </ThemeProvider>
  );
};

export default swipe;
