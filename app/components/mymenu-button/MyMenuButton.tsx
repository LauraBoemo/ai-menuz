'use client'

import { Button, styled } from "@mui/material";

export const MyMenuButton = styled(Button)(({ theme }) => ({
    ...theme.typography.body1,
    height: "40px",
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.dark,

    "&.Mui-disabled": {
        opacity: 0.5,
        color: theme.palette.primary.main,
    },
  }));
  
  export default MyMenuButton;
