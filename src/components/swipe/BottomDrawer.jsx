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
        position="fixed"
        left={0}
        bottom={0}
        width="100%"
        height="fit-content"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        textAlign="left"
        alignItems="center"
        bgcolor="#f0f0f0"
        borderTop="1px solid #ccc"
        zIndex={999}
        transition="0.3s"
        paddingY={2}
        background='#F8F8F8'
      >
        <Button
          variant="contained"
          color="grey"
          sx={{ width: "50px" }}
          onClick={toggleDrawer}
        />
        <Typography variant="h1">Massing #12</Typography>
        <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
          Massing #12
        </Typography>
        <Box sx={{ display: "flex" }}>
          <PlaceIcon color="primary" />
          <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
            Seattle, WA
          </Typography>
        </Box>
      </Box>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          style: { maxHeight: "calc(100% - 50px)" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          p={2}
        >
          <h2>Drawer Content</h2>
          <p>Any content can go here...</p>
        </Box>
      </Drawer>
    </Container>
  );
};

export default BottomDrawer;
