import { Grid2 as Grid, Typography } from "@mui/material";
import { ImageSet } from "./utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations('HomePage');
  
  return ( 
    <Grid 
      size={{ xs: 12, md: 5 }} 
      position={"relative"}
      alignContent={"center"}
      bgcolor={"primary.dark"} 
      height={{ xs: "10vh", md: "100vh" }} 
    >
      <ImageSet />
      <Typography variant={"h1"} textAlign={"center"} color={"primary.light"}>Menuz</Typography>
      <Image 
        src={"/static/CenteredLight.svg"}
        width={200}
        height={120}
        alt="CenteredLight" 
      />
      <Typography mt={-2} variant={"body1"} color={"primary.light"}>{t("AISignature")}</Typography>
    </Grid>
  );
}

export default Header;