import { useState } from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MetricInfo from "./MetricInfo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BottomDrawer = ({ mesh, open, setOpen }) => {
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
        <IconButton
          variant="contained"
          fullWidth={true}
          sx={{
            padding: 0,
            height: "25px",
            boxShadow: "none",
            "&:hover": { boxShadow: "none" },
          }}
          onClick={toggleDrawer}
        >
          {open ? (
            <KeyboardArrowDownIcon size="large" color="secondary" />
          ) : (
            <KeyboardArrowUpIcon size="large" color="secondary" />
          )}
        </IconButton>
        <Stack spacing={0.75} sx={{ paddingX: "2rem" }}>
          <Typography variant="h2">{`Massing #${mesh.id}`}</Typography>
          <Typography variant="h3" sx={{ color: "#5E5E5E;" }}>
            {`Cluster ${mesh.clusterId || "X"}`}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <PlaceIcon color="secondary" />
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              {`${mesh.location || "Seattle, WA"}`}
            </Typography>
          </Box>
        </Stack>
        {open && (
          <Stack spacing={1} sx={{ paddingX: "2rem", marginTop: "1rem" }}>
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
