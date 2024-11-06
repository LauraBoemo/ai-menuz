'use client'

import React, { useState } from "react";
import { Stack } from "@mui/material";
import { MenuzSelectorImage, MenuzSelectorImageProps, ImageType } from "../menuz-selector-image";
import { MenuzButton } from "../menuz-button";
  
type MenuzUploaderImageProps = Omit<MenuzSelectorImageProps, "value" | "onChange"> & {
  handleImageUpload: (file: File) => void,
};

export const MenuzUploaderImage: React.FC<MenuzUploaderImageProps> = ({ handleImageUpload, ...props }) => {
    const [image, setImage] = useState<ImageType>(null!);
    const [file, setFile] = useState<File | null>(null);
  
    return (
      <Stack direction={"column"} spacing={1}>
        <MenuzSelectorImage
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

export default MenuzUploaderImage;