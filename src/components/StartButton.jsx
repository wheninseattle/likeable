import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import IconStart from "./icons/IconStart";

const GradientIconButton = styled(Button)(({ variant }) => ({
  border: 0,
  height: "4.25rem",
  borderRadius:
    variant === "left" ? "0 2.125rem 2.125rem 0" : "2.125rem 0 0 2.125rem",
  color: "white",
  height: 48,
  padding: "0",
}));

const StartButton = () => {
  return (
    <GradientIconButton>
      <IconStart />
    </GradientIconButton>
  );
};

export default StartButton;
