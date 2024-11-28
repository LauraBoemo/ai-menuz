'use client'

import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#4B4B4B",
        dark: "#6C181E",
        light: "#F8F5ED",
        contrastText: "#F2E1CB",
      },
      success: {
        main: "#4D8922",
      },
      error: {
        main: "#6C181E",
      },
      info: {
        main: "#239793",
      },
      warning: {
        main: "#E8D75A",
      },
    },
    typography: {
      fontFamily:
        "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontWeightRegular: 300,
      fontWeightMedium: 400,
      h1: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 80,
        lineHeight: "30px",
        fontFamily:
          "DMSerifDisplay, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      },
      body1: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 14,
        lineHeight: "15px",
      },
    },
})

export { mainTheme };

export default mainTheme;