import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import IconSwipeHeart from "../icons/IconSwipeHeart";
import IconSwipePass from "../icons/IconSwipePass";

const GradientIconButton = styled(Button)(({ variant }) => ({
  border: 0,
  height: "4.25rem",
  borderRadius:
    variant === "left" ? "0 2.125rem 2.125rem 0" : "2.125rem 0 0 2.125rem",
  color: "white",
  height: 48,
  padding: 0,
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
