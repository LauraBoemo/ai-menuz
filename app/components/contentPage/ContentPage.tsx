'use client'

import React, { useState } from "react";
import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Content, Header, Result, Section, Step } from "./utils";
import { handleAIUpload, handleS3Upload, handleAIReading } from "./handlers";

import { MenuzUploaderImage } from "../menuz-uploader-image";
import { MenuzSelectorLanguage } from "../menuz-selector-language";
import { useTranslations } from "next-intl";

export const ContentPage = () => {
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
    <Grid 
      size={{ xs: 12, md: 7 }} 
      position={"relative"}
      alignContent={"center"}
      bgcolor={"primary.dark"} 
      padding={1}
      height={"100vh"} 
    >
      <Stack 
        border={"1px solid"} 
        borderColor={"primary.light"}
        justifyContent={"center"}
        width={"100%"}
        height={"100%"} 
        top={0}
      >
        <Header />
        <Step number={1} text={"To which language we translate your menu?"} />
        <Section content={<MenuzSelectorLanguage />} />
        <Step number={2} text={"Add the menu's picture from your camera or gallery below"} />
        {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
        {uploading && <Typography>{t('menuUploading')}</Typography>}
        {!uploading && !result && (
          <MenuzUploaderImage handleImageUpload={handleImageUpload} />
        )} 
        {!uploading && result && (
          <Result result={result} handleSetResult={() => setResult("")} />
        )}
      </Stack>
    </Grid>
  );
}

export default ContentPage;
