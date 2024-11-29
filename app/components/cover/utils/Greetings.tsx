import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const CenteredOrnamentLight = () => {
  return (
    <Image 
      src={"/static/CenteredLight.svg"}
      width={200}
      height={120}
      alt="CenteredLight" 
      style={{ marginBottom: -20, marginTop: -20 }}
    />
  )
}

export const Greetings = () => {
  return ( 
    <Stack alignItems={"center"} gap={1}>
      <CenteredOrnamentLight />
      <Stack direction={"row"} gap={0.5}>
        <Typography variant={"body1"}>Greetings from the</Typography>
        <Typography variant={"h5"} fontSize={22}>chef</Typography>
        <Typography variant={"body1"}>!</Typography>
      </Stack>
      <Typography variant={"body1"}>Hard time reading your menu?</Typography>
      <Stack direction={"row"} gap={0.5}>
        <Typography variant={"body1"}>Our AI can translate and explain it</Typography>
        <Typography variant={"h5"} fontSize={22}>for you!</Typography>
      </Stack>
      <CenteredOrnamentLight />
    </Stack>
  );
}

export default Greetings;
