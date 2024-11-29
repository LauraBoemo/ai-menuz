import { Stack, Typography } from "@mui/material";

export const Title = () => {
  return ( 
    <Stack gap={2.5}>
      <Typography variant={"h1"}>Menuz</Typography>
      <Stack direction={"row"} gap={0.5}>
        <Typography variant={"body1"} textAlign={"left"}>Read the Menu's taste </Typography>
        <Typography variant={"body2"} textAlign={"left"}>with AI</Typography>
      </Stack>
    </Stack>    
  );
}

export default Title;
