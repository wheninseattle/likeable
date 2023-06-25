import React, { useState } from "react";
import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const BottomDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Container maxWidth="sm" sx={{padding: 5, height:'fit-content'}}>
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
        alignItems="center"
        bgcolor="#f0f0f0"
        borderTop="1px solid #ccc"
        zIndex={999}
        transition="0.3s"
        background='#F8F8F8'
        paddingBottom="1rem"
      > 
        <Button
          variant="contained"
          fullWidth={true}
          color="grey"
          sx={{padding:0, height:"25px", boxShadow:"none"}}
          // sx={{ width: "50px" }}
          onClick={toggleDrawer}
        >

        </Button>
        <Typography variant="h1">Massing #12</Typography>
        <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
          Project x
        </Typography>
        <Box sx={{ display: "flex" }}>
          <PlaceIcon color="primary" />
          <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
            Seattle, WA
          </Typography>
        </Box>
        { open&& 
          <Box
          >
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              Metric 1
            </Typography>
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              Metric 2
            </Typography>
            <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
              Metric 3
            </Typography>
          </Box>
        } 
      </Box>
    </Container>
  );
};

export default BottomDrawer;
