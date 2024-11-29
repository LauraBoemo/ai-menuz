import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { MenuzUploaderImage } from "../../menuz-uploader-image";

export const Content = ({ error, uploading, result, handleContentUpload }) => {
  const t = useTranslations('HomePage');
  return ( 
    <>
      {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
      {uploading && <Typography>{t('menuUploading')}</Typography>}
      {!uploading && !result && (
        <MenuzUploaderImage handleImageUpload={handleContentUpload} />
      )} 
    </>
  );
}

export default Content;
