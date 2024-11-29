'use client'

import { Button, styled } from "@mui/material";

export const MenuzButton = styled(Button)(({ theme }) => ({
    ...theme.typography.body1,
    height: "40px",
    padding: "30px",
    color: theme.palette.primary.light,
    textTransform: "none",
    backgroundColor: theme.palette.primary.dark,

    "&.Mui-disabled": {
        opacity: 0.5,
        color: theme.palette.primary.main,
    },
  }));
  
  export default MenuzButton;
