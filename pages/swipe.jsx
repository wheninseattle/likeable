'use client'
import { Box, Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";
import theme from "@/styles/theme";
import BottomDrawer from "@/components/swipe/BottomDrawer";


const swipe = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        background: theme.palette.primary.mainGradient,
      }}
    >
      <Box sx={{width:'100%', height: '100vh'}}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <directionalLight color="white" position={[0, 5, 0]} />
          <Model/>
        </Canvas>
      </Box>
      <BottomDrawer/>
    </Container>
  );
};

export default swipe;
