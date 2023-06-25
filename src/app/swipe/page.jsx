"use client";
import { Box, Container, ThemeProvider } from "@mui/material";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "@/components/Model";
import theme from "@/styles/theme";
import BottomDrawer from "@/components/swipe/BottomDrawer";
import SwipeButtons from "@/components/swipe/SwipeButtons";

const deg2rad = degrees => degrees * (Math.PI / 180);

const Scene = () => {
  useThree(({ camera }) => {
    // camera.position.set(0, 0, 0);
    camera.rotation.set(deg2rad(60), deg2rad(90), deg2rad(0));
    // camera.lookAt(0, 0, 0);
  })
}

const swipe = () => {
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
          <SwipeButtons variant={"left"} />
          <SwipeButtons variant={"right"} />
        </Box>
        <Box sx={{ width: "100%", height: "100vh", paddingX:'3rem'}}>
          <Canvas camera={{fov: 35, zoom: 1.3}}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <directionalLight color="white" position={[0, 5, 0]} />
            <Model />
          </Canvas>
        </Box>
        {/* TODO: Limit to width of container and finish styling */}
        <BottomDrawer />
      </Container>
    </ThemeProvider>
  );
};

export default swipe;
