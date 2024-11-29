import { Stack, Typography } from "@mui/material";

export const Guide = () => {
  return ( 
    <Stack alignItems={"center"} mt={5} direction={"row"} color={"primary.light"} justifyContent={"center"} gap={2.5}>
      <Stack>
        <Typography variant={"body1"}>1</Typography>
        <Typography variant={"body1"}>2</Typography>
        <Typography variant={"body1"}>3</Typography>
        <Typography variant={"body1"}>4</Typography>
      </Stack>
      <Stack textAlign={"left"}>
        <Typography variant={"body1"}>Select your language</Typography>
        <Typography variant={"body1"}>Send us a Menu's picture</Typography>
        <Typography variant={"body1"}>Wait for AI to do its magic</Typography>
        <Typography variant={"body1"}>Understand your Menu</Typography>
      </Stack>
    </Stack>
  );
}

export default Guide;
