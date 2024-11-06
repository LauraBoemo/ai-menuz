'use client'

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { handleAIReading, handleAIUpload, handleS3Upload } from "./utils";

import { ImageUploader } from "../image-uploader";
import { MyMenuButton } from "../mymenu-button";
import { ResultList } from "../result-list";

export const MyMenuBody = () => {
  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleImageUpload = async (file: File) => {
    setUploading(true);

    try {
      const url = await handleS3Upload({ file });

      const parsedText = await handleAIUpload({ url });

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
      maxWidth={{ xs: "300px", sm: "500px" }}
      maxHeight={"300px"}
      justifyContent={"center"}
    >
      {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
      {uploading && <Typography>Reading the Menu...</Typography>}
      {!uploading && !result && <ImageUploader handleImageUpload={handleImageUpload} />}
      {!uploading && result && (
        <Stack spacing={2}>
          <ResultList content={result} />
          <MyMenuButton onClick={() => setResult("")}>
            Upload another menu
          </MyMenuButton>
        </Stack>
      )}
    </Stack>
  );
}

export default MyMenuBody;
