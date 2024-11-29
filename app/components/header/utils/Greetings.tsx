import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { MenuzSelectorLanguage } from "../../menuz-selector-language";

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
    <>
      <Stack alignItems={"center"} color={"primary.light"} gap={7}>
        <Stack gap={2.5}>
          <Typography variant={"h1"}>Menuz</Typography>
          <Stack direction={"row"} gap={0.5}>
            <Typography variant={"body1"} textAlign={"left"}>Read the Menu's taste </Typography>
            <Typography variant={"body2"} textAlign={"left"}>with AI</Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} gap={1}>
          <CenteredOrnamentLight />
          <Stack direction={"row"} gap={0.5}>
            <Typography variant={"body1"}>Greetings from the</Typography>
            <Typography variant={"h5"} fontSize={20}>chef</Typography>
            <Typography variant={"body1"}>!</Typography>
          </Stack>
          <Typography variant={"body1"}>Hard time reading a menu?</Typography>
          <Typography variant={"body1"}>Menuz translates and describes<br/>all of it for you!</Typography>
          <CenteredOrnamentLight />
        </Stack>
        <Box width={"100%"} bgcolor={"primary.light"} mx={"20px"} py={"10px"} justifyItems={"center"}>
          <MenuzSelectorLanguage />
        </Box>
      </Stack>
    </>
  );
}

export default Greetings;
