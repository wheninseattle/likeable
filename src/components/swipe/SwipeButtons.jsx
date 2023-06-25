import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

const GradientIconButton = styled(Button)(({ variant }) => ({
  background: 'linear-gradient(to right, #FFCD4B 0%, #ED5887 100%)',
  border: 0,
  height: "4.25rem",
  borderRadius:
    variant === "left" ? "0 2.125rem 2.125rem 0" : "2.125rem 0 0 2.125rem",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: 'white',
  height: 48,
  padding: "0",
}));

const SwipeButtons = (props) => {
  const { variant } = props;
  return (
    <>
      <GradientIconButton variant={variant}>
        {variant === "left" ? (
          <CloseIcon sx={{ color: "white" }} />
        ) : (
          <FavoriteIcon sx={{ color: "white" }} />
        )}
      </GradientIconButton>
    </>
  );
};

export default SwipeButtons;
