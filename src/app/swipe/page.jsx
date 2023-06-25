"use client";
import { Box, Container, ThemeProvider } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import theme from "@/styles/theme";
import BottomDrawer from "@/components/swipe/BottomDrawer";
import SwipeButtons from "@/components/swipe/SwipeButtons";

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
          backgroundColor: "white"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <SwipeButtons variant={"left"} />
          <SwipeButtons variant={"right"} />
        </Box>
        <Box sx={{ width: "100%", height: "100vh" }}>
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
