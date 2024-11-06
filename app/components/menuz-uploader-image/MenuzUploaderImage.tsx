'use client'

import React, { useState } from "react";
import { Stack } from "@mui/material";
import { MenuzSelectorImage, MenuzSelectorImageProps, ImageType } from "../menuz-selector-image";
import { MenuzButton } from "../menuz-button";
import { useTranslations } from "next-intl";
  
type MenuzUploaderImageProps = Omit<MenuzSelectorImageProps, "value" | "onChange"> & {
  handleImageUpload: (file: File) => void,
};

export const MenuzUploaderImage: React.FC<MenuzUploaderImageProps> = ({ handleImageUpload, ...props }) => {
    const t = useTranslations('HomePage');
    
    const [image, setImage] = useState<ImageType>(null!);
    const [file, setFile] = useState<File | null>(null);
  
    return (
      <Stack direction={"column"} spacing={2}>
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
          uploadTitle={t("menuUploadTitle")}
          updateTitle={t("menuUpdateTitle")}
          {...props}
        />
        <MenuzButton 
          onClick={() => handleImageUpload(file)}
          variant={"contained"} 
          disabled={!image?.dataURL}
        >
          {t("menuUploadButtonLabel")}
        </MenuzButton>
      </Stack>
    );
};

export default MenuzUploaderImage;