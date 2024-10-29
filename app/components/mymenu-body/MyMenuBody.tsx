'use client'

import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { ImageUploader } from "../image-uploader";
import { MyMenuButton } from "../mymenu-button";

export const MyMenuBody = () => {
  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<string>("")
  
  const handleS3Upload = async (file: File) => {
    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    setUploading(true)

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      }
    )

    if (response.ok) {
      const { url, fields } = await response.json()

      const formData = new FormData()
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string)
      })
      formData.append('file', file)

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      if (uploadResponse.ok) {
        handleAIUpload(uploadResponse.url, file.name);
      } else {
        setError(`S3 Upload Error: ${uploadResponse}`);
        setUploading(false)
      }
    } else {
      setError("Failed to get pre-signed URL.");
      setUploading(false)
    }
  }

  const handleAIUpload = async (url: string, file: string) => {
    const apiKey = "K88134200888957";
    const response = await fetch(
      `https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${url}${file}`, 
      {
        method: "GET",
      }
    );
  
    if (response.ok) {
      const data = await response.json();
      setUploading(false)
      setResult(data.ParsedResults[0].ParsedText);
    } else {
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${errorText}`);
      setError(`Failed to process image: ${errorText}`);
    }
    
    setUploading(false);
  }

  return ( 
    <Stack
      width={"30vw"}
      height={"40vh"}
      justifyContent={"center"}
    >
      {error && <Typography variant={"body1"} textAlign={"center"} color={"error"}>{error}</Typography>}
      {uploading && <Typography>Reading the Menu...</Typography>}
      {!uploading && !result && <ImageUploader handleS3Upload={handleS3Upload} />}
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
