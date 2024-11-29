import { Box } from "@mui/material";
import { MenuzSelectorLanguage } from "../../menuz-selector-language";

export const LanguageSelector = () => {
  return ( 
    <Box width={"100%"} bgcolor={"primary.light"} mx={"20px"} py={"10px"} justifyItems={"center"}>
      <MenuzSelectorLanguage />
    </Box>
  );
}

export default LanguageSelector;
