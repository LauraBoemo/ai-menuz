import { Grid2 as Grid, Stack } from "@mui/material";
import { Greetings, ImageSet, LanguageSelector, SwipeAlert, Title } from "./utils";

export const Header = () => {
  return ( 
    <Grid 
      size={{ xs: 12, md: 7 }} 
      position={"relative"}
      alignContent={"center"}
      bgcolor={"primary.dark"} 
      padding={1}
      height={"100vh"} 
    >
      <Stack 
        border={"1px solid white"} 
        justifyContent={"center"}
        width={"100%"}
        height={"100%"} 
        top={0}
      >
        <ImageSet />
        <Stack alignItems={"center"} color={"primary.light"} gap={5}>
          <Title />
          <Greetings />
          <LanguageSelector />
          <SwipeAlert />
        </Stack>
      </Stack>
    </Grid>
  );
}

export default Header;