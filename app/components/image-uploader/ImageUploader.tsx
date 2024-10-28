'use client'

import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { ImageSelector, ImageSelectorProps, ImageType } from "../image-selector";
import { MyMenuButton } from "../mymenu-button";
  
type ImageUploaderProps = Omit<ImageSelectorProps, "value" | "onChange"> & {};

export const ImageUploader: React.FC<ImageUploaderProps> = ({ ...props }) => {
    const [image, setImage] = useState<ImageType>(null!);
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [uploading, setUploading] = useState(false)
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
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
          setSuccess("Upload successful!");
        } else {
          setError(`S3 Upload Error: ${uploadResponse}`);
        }
      } else {
        setError("Failed to get pre-signed URL.");
      }
  
      setUploading(false)
    }

    return (
        <Stack direction={"column"} spacing={1}>
            <ImageSelector
                width={250}
                height={215}
                acceptType={["jpg", "jpeg", "png"]}
                maxFileSize={3000000}
                value={(image?.dataURL && image) || null}
                onChange={(e) => {
                    setImage(e)
                    if (e?.file) {
                        setFile(e.file)
                    }
                }}
                uploadTitle={"Click here and add the Menu's picture from your camera or gallery!"}
                updateTitle={"You can edit the Menu's picture by clicking here!"}
                errorMessage={error}
                successMessage={success}
                {...props}
            />
            <MyMenuButton 
                // @ts-ignore
                onClick={handleSubmit}
                variant={"contained"} 
                disabled={!image?.dataURL || uploading}
            >
              View Menu&apos;s Details
            </MyMenuButton>
        </Stack>
    );
};

export default ImageUploader;
