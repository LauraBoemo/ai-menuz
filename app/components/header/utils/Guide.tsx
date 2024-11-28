import { Stack, Typography } from "@mui/material";

export const Guide = () => {
  return ( 
    <Stack alignItems={"center"} mt={5} direction={"row"} justifyContent={"center"} gap={2.5}>
      <Stack>
        <Typography variant={"body1"} color={"primary.light"}>1</Typography>
        <Typography variant={"body1"} color={"primary.light"}>2</Typography>
        <Typography variant={"body1"} color={"primary.light"}>3</Typography>
        <Typography variant={"body1"} color={"primary.light"}>4</Typography>
      </Stack>
      <Stack>
        <Typography variant={"body1"} textAlign={"left"} color={"primary.light"}>Select your language</Typography>
        <Typography variant={"body1"} textAlign={"left"} color={"primary.light"}>Send us a Menu's picture</Typography>
        <Typography variant={"body1"} textAlign={"left"} color={"primary.light"}>Wait for AI to do its magic</Typography>
        <Typography variant={"body1"} textAlign={"left"} color={"primary.light"}>Understand your Menu</Typography>
      </Stack>
    </Stack>
  );
}

export default Guide;
