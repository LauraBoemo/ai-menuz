import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations('HomePage');
  
  return ( 
    <Typography variant={"body1"}>{t("AISignature")}</Typography>
  );
}

export default Footer;
