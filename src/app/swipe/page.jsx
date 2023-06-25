"use client";
import { Box, Container, ThemeProvider } from "@mui/material";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "@/components/Model";
import theme from "@/styles/theme";
import BottomDrawer from "@/components/swipe/BottomDrawer";
import SwipeButtons from "@/components/swipe/SwipeButtons";
import { useState, useEffect, useRef } from "react";

const MESH_SERVER = "https://mesh-server-880e3482d864.herokuapp.com";
// const MESH_SERVER = 'http://localhost:3000'

const getMesh = async () => {
  const res = await fetch(`${MESH_SERVER}/mesh`);
  const json = await res.json();
  console.log("json", json);
  return json;
};

const Swipe = () => {
  const [currentMesh, setCurrentMesh] = useState(undefined);

  const scrollInto = useRef(null);

  const setMesh = (mesh) => {
    console.log("setting mesh in rando", mesh);
    setCurrentMesh(mesh);
  };

  const handleLeft = async () => {
    console.log("left");
    const body = {
      meshId: currentMesh.id,
      liked: false,
    };
    console.log(body);
    const res = await fetch(`${MESH_SERVER}/cluster`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const nextMesh = await getMesh();
    console.log("nextMesh", nextMesh);
    setMesh(nextMesh);
    // setCurrentMesh(nextMesh)
  };

  const handleRight = async () => {
    console.log("right");
    const body = {
      meshId: currentMesh.id,
      liked: true,
    };
    console.log(body);
    const res = await fetch(`${MESH_SERVER}/cluster`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const nextMesh = await getMesh();
    console.log("nextMesh", nextMesh);
    setMesh(nextMesh);
  };

  useEffect(() => {
    scrollInto.current.scrollIntoView({ behavior: "smooth" });
    const fetchData = async () => {
      try {
        const mesh = await getMesh();
        console.log("useEffect setting mesh", mesh);
        setMesh(mesh);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
          height: "100lvh",
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
          <SwipeButtons variant={"left"} onClick={handleLeft} />
          <SwipeButtons variant={"right"} onClick={handleRight} />
        </Box>
        <Box sx={{ width: "100%", height: "100vh", paddingX: "3rem" }}>
          <Canvas camera={{ fov: 35, zoom: 1.3 }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <directionalLight color="white" position={[0, 5, 0]} />
            {currentMesh && <Model mesh={currentMesh} />}
          </Canvas>
        </Box>
        {currentMesh && <BottomDrawer mesh={currentMesh} />}
        <div ref={scrollInto} />
      </Container>
    </ThemeProvider>
  );
};

export default Swipe;
