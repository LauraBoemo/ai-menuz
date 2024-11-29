import { Stack } from "@mui/material";
import { MenuzAccordionList } from "../../menuz-accordion-list";
import { MenuzButton } from "../../menuz-button";
import { useTranslations } from "next-intl";

export const Result = ({ result, handleSetResult }) => {
  const t = useTranslations('HomePage');

  return ( 
  <Stack spacing={2}>
      <MenuzAccordionList content={result} />
      <MenuzButton onClick={() => handleSetResult("")}>
        {t('menuOtherUploadButtonLabel')}
      </MenuzButton>
    </Stack>
  );
}

export default Result;
