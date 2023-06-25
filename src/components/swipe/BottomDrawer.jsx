import { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MetricInfo from "./MetricInfo";

const BottomDrawer = ({ mesh }) => {
  const [open, setOpen] = useState(false);
  console.log(mesh);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 5 }}>
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width="100%"
        height="fit-content"
        display="flex"
        gap="0.5rem"
        flexDirection={"column"}
        justifyContent="center"
        textAlign="left"
        bgcolor="#f0f0f0"
        borderTop="1px solid #ccc"
        zIndex={999}
        background="#F8F8F8"
        paddingBottom="1rem"
        overflow="hidden"
        sx={{
          maxHeight: open ? "100%" : "10rem",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        <Button
          variant="contained"
          fullWidth={true}
          color="grey"
          sx={{
            padding: 0,
            height: "25px",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          }}
          onClick={toggleDrawer}
        ></Button>
        <Stack spacing={.75} sx={{paddingX: '2rem'}}>

          <Typography variant="h2">{`Massing #${mesh.id}`}</Typography>
          <Typography variant="h3" sx={{ color: "#5E5E5E;" }}>
            {`Cluster ${mesh.clusterId || "X"}`}
          </Typography>
          <Box sx={{ display: "flex"}}>
            <PlaceIcon color="primary" />
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              {`${mesh.location || "Seattle, WA"}`}
            </Typography>
          </Box>
        {/* </Box> */}
        </Stack>
        {open && (
          <Stack spacing={1} sx={{ paddingX: "2rem", marginTop: '1rem' }}>
            <Typography variant="body1" sx={{ paddingBottom: "1rem" }}>
              An architectural marvel that spirals into the sky. Its unique
              design reflects the city&apos;s vibrant spirit.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontWeight: 700, paddingBottom: "1rem" }}
            >
              Iteration Info
            </Typography>
            <MetricInfo name={"Floor Plate Size"} value={`${mesh.p0} SQFT`} />
            <MetricInfo name={"No. of Floors"} value={mesh.p1} />
            <MetricInfo name={"Floor Edges"} value={`${mesh.p2} Sides`} />
            <MetricInfo name={"Rotation"} value={`${mesh.p4} deg`} />
            <MetricInfo
              name={"Floor to Floor Height"}
              value={`${mesh.p5} FT`}
            />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default BottomDrawer;
