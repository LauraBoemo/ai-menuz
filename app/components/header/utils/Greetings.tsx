import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Greetings = () => {
  return ( 
    <Stack alignItems={"center"}>
      <Typography variant={"h1"} textAlign={"center"} color={"primary.light"}>Menuz</Typography>
      <Image 
        src={"/static/CenteredLight.svg"}
        width={200}
        height={120}
        alt="CenteredLight" 
        style={{ marginBottom: -20 }}
      />
      <Typography variant={"body1"} textAlign={"center"} color={"primary.light"}>Greetings from the Chef!</Typography>
      <Typography variant={"body1"} textAlign={"center"} color={"primary.light"}>Hard time reading your Menu?</Typography>
      <Typography variant={"body1"} textAlign={"center"} color={"primary.light"}>Menuz can help you...</Typography>
    </Stack>
  );
}

export default Greetings;
