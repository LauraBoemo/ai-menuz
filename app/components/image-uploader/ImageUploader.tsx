'use client'

import React, { useState } from "react";
import { Stack } from "@mui/material";
import { ImageSelector, ImageSelectorProps, ImageType } from "../image-selector";
import { MyMenuButton } from "../mymenu-button";
  
type ImageUploaderProps = Omit<ImageSelectorProps, "value" | "onChange"> & {
  handleS3Upload: (file: File) => void,
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({ handleS3Upload, ...props }) => {
    const [image, setImage] = useState<ImageType>(null!);
    const [file, setFile] = useState<File | null>(null);
  
    return (
      <Stack direction={"column"} spacing={1}>
        <ImageSelector
          width={"30vw"}
          height={"40vh"}
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
          {...props}
        />
        <MyMenuButton 
          onClick={() => handleS3Upload(file)}
          variant={"contained"} 
          disabled={!image?.dataURL}
        >
          View Menu&apos;s Details
        </MyMenuButton>
      </Stack>
    );
};

export default ImageUploader;