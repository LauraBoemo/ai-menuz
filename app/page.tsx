'use client'

import React from "react";
import { Body, Footer, Header } from "./components";
import { Box, Grid2 as Grid } from "@mui/material";

export default function Page() {
  return ( 
    <Box bgcolor={"primary.light"}>
      <Grid 
        container 
        margin={"auto"}
        textAlign={"center"}
      >
        <Header />
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
        </Grid>
      </Grid>
    </Box>
  );
}