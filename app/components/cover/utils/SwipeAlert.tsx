import { Stack, Typography } from "@mui/material";
import SwipeIcon from '@mui/icons-material/Swipe';

export const SwipeAlert = () => {
  return ( 
    <Stack alignItems={"center"} gap={1}>
      <SwipeIcon style={{ color: "primary.light" }} />
      <Typography variant={"body1"}>Swipe to navigate!</Typography>
    </Stack>    
  );
}

export default SwipeAlert;
