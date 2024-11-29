import { Stack, Typography } from "@mui/material";
import { MenuzAccordionList } from "../../menuz-accordion-list";
import { MenuzButton } from "../../menuz-button";
import { useTranslations } from "next-intl";

export const Result = ({ result, handleSetResult }) => {
  const t = useTranslations('HomePage');

  return ( 
  <Stack spacing={2}>
      <Stack direction={"column"}>
        <Typography variant={"body1"} textAlign={"center"}>Below, a list of the items on your Menu, translated and described.</Typography>
        <Typography variant={"body2"} textAlign={"center"} color="primary.dark">Powered by AI</Typography>
      </Stack>
      <MenuzAccordionList content={result} />
      <MenuzButton onClick={() => handleSetResult("")}>
        {t('menuOtherUploadButtonLabel')}
      </MenuzButton>
    </Stack>
  );
}

export default Result;
