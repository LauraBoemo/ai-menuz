'use client'

import React, { useState } from "react";
import { Stack } from "@mui/material";
import { MenuzImageSelector, MenuzImageSelectorProps, ImageType } from "../menuz-image-selector";
import { MenuzButton } from "../menuz-button";
  
type MenuzImageUploaderProps = Omit<MenuzImageSelectorProps, "value" | "onChange"> & {
  handleImageUpload: (file: File) => void,
};

export const MenuzImageUploader: React.FC<MenuzImageUploaderProps> = ({ handleImageUpload, ...props }) => {
    const [image, setImage] = useState<ImageType>(null!);
    const [file, setFile] = useState<File | null>(null);
  
    return (
      <Stack direction={"column"} spacing={1}>
        <MenuzImageSelector
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
        <MenuzButton 
          onClick={() => handleImageUpload(file)}
          variant={"contained"} 
          disabled={!image?.dataURL}
        >
          View Menu&apos;s Details
        </MenuzButton>
      </Stack>
    );
};

export default MenuzImageUploader;