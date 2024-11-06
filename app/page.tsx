import { Box, Grid2 as Grid } from "@mui/material";
import { Body, Footer, Header } from "./components";

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
          <Header />
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
            <Body />
          </Grid>
          <Grid 
            size={12} 
            height={"10vh"} 
            alignContent={"center"}
          >
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}