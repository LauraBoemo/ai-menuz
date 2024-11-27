'use client'

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { handleAIReading, handleAIUpload, handleS3Upload } from "./utils";

import { MenuzUploaderImage } from "../menuz-uploader-image";
import { MenuzButton } from "../menuz-button";
import { MenuzAccordionList } from "../menuz-accordion-list";
import { MenuzSelectorLanguage } from "../menuz-selector-language";
import { useTranslations } from "next-intl";

export const Body = () => {
  const t = useTranslations('HomePage');

  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleImageUpload = async (file: File) => {
    setUploading(true);

    try {
      const url = await handleS3Upload({ file });

      const parsedText = await handleAIUpload({ url });

      // const translatedText = await handleGoogleCloudTranslation({ text: parsedText, targetLanguage: document.documentElement.lang })

      // console.log(translatedText);

      const aiResponse = await handleAIReading({ prompt: parsedText });

      setResult(aiResponse);

      // TODO: Delete AWS IMAGE
      // await handleS3Delete({ url });
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Stack
      maxWidth={"300px"}
      minWidth={"300px"}
      justifyContent={"center"}
    >
      {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
      {uploading && <Typography>{t('menuUploading')}</Typography>}
      {!uploading && !result && (
        <Stack spacing={2}>
          <MenuzSelectorLanguage />
          <MenuzUploaderImage handleImageUpload={handleImageUpload} />
        </Stack>
      )}
      {!uploading && result && (
        <Stack spacing={2}>
          <MenuzAccordionList content={result} />
          <MenuzButton onClick={() => setResult("")}>
            {t('menuOtherUploadButtonLabel')}
          </MenuzButton>
        </Stack>
      )}
    </Stack>
  );
}

export default Body;
