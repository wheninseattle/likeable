import { styled } from "@mui/system";
// import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import IconSwipeHeart from "../icons/IconSwipeHeart";
import IconSwipePass from "../icons/IconSwipePass";

const GradientIconButton = styled(IconButton)(({ variant }) => ({
  border: 0,
  height: "4.25rem",
  borderRadius:
    variant === "left" ? "0 2.125rem 2.125rem 0" : "2.125rem 0 0 2.125rem",
  color: "white",
  height: '6.25rem',
  margin: variant === 'left' ?"0.5rem 0.5rem 0.5rem 0" : "0.5rem 0 0.5rem 0.5rem",
  "&:hover": {backgroundColor: "transparent"},
  zIndex: 100,
}));

const SwipeButtons = (props) => {
  const { variant, onClick } = props;
  console.log('props.handler',props.onClick)
  return (
    <>
      <GradientIconButton variant={variant} onClick={onClick}>
        {variant === "left" ? <IconSwipePass /> : <IconSwipeHeart />}
      </GradientIconButton>
    </>
  );
};

export default SwipeButtons;
