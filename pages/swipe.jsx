import { Box, Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Model";

const swipe = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{width:'100%', height: '100vh'}}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <directionalLight color="blue" position={[0, 5, 0]} />
          <Model/>
        </Canvas>
      </Box>
    </Container>
  );
};

export default swipe;
