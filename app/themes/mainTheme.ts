'use client'

import { createTheme } from "@mui/material/styles";
import { Pinyon_Script, Poppins, IBM_Plex_Sans } from 'next/font/google'

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
  weight: "400"
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: "200"
})

const IBM = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: "600"
})

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
      fontFamily: poppins.style.fontFamily,
      fontWeightRegular: 300,
      fontWeightMedium: 400,
      h1: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 120,
        lineHeight: "30px",
        fontFamily: pinyon.style.fontFamily,
      },
      h5: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 16,
        lineHeight: "15px",
        fontFamily: pinyon.style.fontFamily,
      },
      body1: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 16,
        lineHeight: "20px",
      },
      body2: {
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: 16,
        lineHeight: "20px",
        fontFamily: IBM.style.fontFamily,
      },
    },
})

export { mainTheme };

export default mainTheme;