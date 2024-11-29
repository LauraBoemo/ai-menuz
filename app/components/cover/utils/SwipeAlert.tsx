import { Stack, Typography } from "@mui/material";
import SwipeIcon from "@mui/icons-material/Swipe";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";

const swipeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
`;

const AnimatedSwipeIcon = styled(SwipeIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
  marginLeft: "-10px",
  animation: `${swipeAnimation} 1.5s ease-in-out infinite`,
}));

export const SwipeAlert = () => {
  return (
    <Stack alignItems={"center"} gap={1}>
      <AnimatedSwipeIcon />
      <Typography variant={"body1"}>Swipe to navigate!</Typography>
    </Stack>
  );
};

export default SwipeAlert;
