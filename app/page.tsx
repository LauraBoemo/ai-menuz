import { Box, Grid2 as Grid } from "@mui/material";
import { ImageUploader, MyMenuFooter, MyMenuHeader } from "./components";

export default function Page() {

  return ( 
    <Box bgcolor={"primary.light"}>
      <Grid 
        container 
        margin={"auto"}
        textAlign={"center"}
      >
        <Grid 
          alignContent={"center"}
          bgcolor={"primary.dark"} 
          size={{ xs: 12, md: 5 }} 
          height={{ xs: "10vh", md: "100vh" }} 
        >
          <MyMenuHeader />
        </Grid>
        <Grid 
          container
          margin={"auto"}
          textAlign={"center"}
        >
          <Grid 
            size={12} 
            alignContent={"center"} 
            justifyItems={"center"}
            height={{ xs: "80vh", md: "90vh" }} 
          >
            <ImageUploader />
          </Grid>
          <Grid 
            size={12} 
            height={"10vh"} 
            alignContent={"center"}
          >
            <MyMenuFooter />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}