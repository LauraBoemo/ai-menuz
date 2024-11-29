'use client'

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
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
      <Stack justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"column"} py={2} minWidth={"80%"} maxWidth={"80%"}>
          <MenuzSelectorImage
            height={"30vh"}
            acceptType={["jpg", "jpeg", "png"]}
            maxFileSize={3000000}
            value={(image?.dataURL && image) || null}
            onChange={(e) => {
                setImage(e)
                if (e?.file) {
                    setFile(e.file)
                }
            }}
            {...props}
          />
        </Stack>
        <Box width={"100%"} bgcolor={"primary.dark"} color={"primary.light"} py={2} justifyItems={"center"}>
          <Stack direction={"row"} gap={1} mx={2.5}>
          <Typography variant={"h5"} fontSize={22}>3.</Typography>
            <MenuzButton 
              onClick={() => handleImageUpload(file)}
              variant={"contained"} 
              disabled={!image?.dataURL}
            >
              <Typography color="primary.light">Click here and generate the menu's content with AI</Typography>
            </MenuzButton>
          </Stack>
        </Box>
      </Stack>
    );
};

export default MenuzUploaderImage;