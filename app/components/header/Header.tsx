import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Greetings, ImageSet } from "./utils";
import { MenuzSelectorLanguage } from "../menuz-selector-language";

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
        <Greetings />
      </Stack>
    </Grid>
  );
}

export default Header;