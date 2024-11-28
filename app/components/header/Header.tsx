import { Grid2 as Grid } from "@mui/material";
import { Greetings, Guide, ImageSet } from "./utils";

export const Header = () => {
  return ( 
    <Grid 
      size={{ xs: 12, md: 7 }} 
      position={"relative"}
      alignContent={"center"}
      bgcolor={"primary.dark"} 
      height={"100vh"} 
    >
      <ImageSet />
      <Greetings />
      <Guide />
    </Grid>
  );
}

export default Header;