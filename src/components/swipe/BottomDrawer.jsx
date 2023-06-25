import React, { useState } from "react";
import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MetricInfo from "./MetricInfo";

const BottomDrawer = () => {
  const [open, setOpen] = React.useState(false);

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
       
        sx={{maxHeight: open ? "100%" : "10rem",transition:"max-height 0.5s ease-in-out"}}
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
        <Box sx={{ paddingX: "2rem" }}>
          <Typography variant="h2">Massing #12</Typography>
          <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
            Project x
          </Typography>
          <Box sx={{ display: "flex" }}>
            <PlaceIcon color="primary" />
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              Seattle, WA
            </Typography>
          </Box>
        </Box>
        {open && (
          <Box sx={{ paddingX: "2rem" }}>
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
            <MetricInfo name={"Floor Plate Size"} value={"20,000 sf"} />
            <MetricInfo name={"No. of Floors"} value={21} />
            <MetricInfo name={"Floor Edges"} value={"50f"} />
            <MetricInfo name={"Rotation"} value={"30 deg"} />
            <MetricInfo name={"Floor to Floor Height"} value={"15 ft"} />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default BottomDrawer;
