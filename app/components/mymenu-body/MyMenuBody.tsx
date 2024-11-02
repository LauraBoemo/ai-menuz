'use client'

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { ImageUploader } from "../image-uploader";
import { MyMenuButton } from "../mymenu-button";
import { handleAIUpload, handleS3Delete, handleS3Upload } from "./utils";

export const MyMenuBody = () => {
  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<string>("")

  const handleImageUpload = async (file: File) => {
    setUploading(true);
  
    try {
      const url = await handleS3Upload({ file });
      const parsedText = await handleAIUpload({ url });
      setResult(parsedText);
      // TODO: Review -- saving
      // await handleS3Delete({ url });
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return ( 
    <Stack
      width={"300px"}
      height={"200px"}
      maxWidth={"300px"}
      maxHeight={"200px"}
      justifyContent={"center"}
    >
      {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
      {uploading && <Typography>Reading the Menu...</Typography>}
      {!uploading && !result && <ImageUploader handleImageUpload={handleImageUpload} />}
      {!uploading && result && (
        <Stack spacing={2}>
          <MyMenuButton onClick={() => setResult("")}>
            Upload another menu
          </MyMenuButton>
          <Typography>{result}</Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default MyMenuBody;
