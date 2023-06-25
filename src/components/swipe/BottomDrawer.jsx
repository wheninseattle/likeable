import React, { useState } from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";

const BottomDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        position="fixed"
        left={0}
        bottom={0}
        width="100%"
        height="fit-content"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0f0f0"
        borderTop="1px solid #ccc"
        zIndex={999}
        transition="0.3s"
      >
        <Button
          variant="contained"
          color="grey"
          sx={{ width: "50px" }}
          onClick={toggleDrawer}
        />
        <Typography variant="h1">Massing #12</Typography>
        <Typography variant="body1">Massing #12</Typography>
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
    </>
  );
};

export default BottomDrawer;
