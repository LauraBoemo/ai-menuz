'use client'

import { Box, Grid2 as Grid, ThemeProvider } from "@mui/material";
import { Body, Footer, Header } from "./components";
import { useState } from "react";
import { createTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import React from "react";
import { mainTheme } from "./themes";

export default function Page() {
  const [locale, setLocale] = useState("enUS");

  const themeWithLocale = React.useMemo(
    () => createTheme(mainTheme, locales[locale as unknown as string]),
    [locale],
  );

  return ( 
    <ThemeProvider theme={themeWithLocale}>
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
              <Body handleLayoutUpdate={setLocale} />
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
    </ThemeProvider>
  );
}