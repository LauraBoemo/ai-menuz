'use client'

import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploading, { ErrorsType, ImageType, ImageUploadingPropsType } from "react-images-uploading";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';

export type { ImageType, ErrorsType };

const StyledImage = styled("img")(() => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0",
  objectFit: "contain",
}));

const StyledStack = styled(Stack)(() => ({
  height: "100%",
  borderRadius: 6,
  border: "1px dashed #4B4B4B",
  width: '100%',
  background: "#4b4b4b1b",
  transition: "all .175s ease-in",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#4b4b4b47",
    img: {
      opacity: 0.3,
    },
  },
}));

const StyledContentWrapper = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  position: "relative",
  display: "grid",
  zIndex: 2,
}));

const StyledCloseIcon = styled(CloseIcon)(() => ({
  position: "absolute",
  fontSize: "1.2rem",
}));

export type ImageSelectorProps = Omit<ImageUploadingPropsType, "value" | "onChange"> & {
  value: ImageType | null;
  onChange: (image: ImageType | null) => void;
  uploadTitle?: string;
  updateTitle?: string;
  errorMessage?: string;
  successMessage?: string;
  acceptTypeErrorMessage?: string;
  maxFileSizeErrorMessage?: string;
  resolutionErrorMessage?: string;
  height?: number | string;
  width?: number | string;
};

export const ImageSelector: React.FC<ImageSelectorProps> = ({
  uploadTitle,
  updateTitle,
  onChange,
  value,
  height,
  width,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <ImageUploading
      {...props}
      onChange={(values: ImageType[]) => onChange((values?.length && values[0]) || null)}
      multiple={false}
      value={(value && [value]) || []}
    >
      {({ imageList, onImageUpload, dragProps, onImageRemove }) => {
        return (
          <Stack spacing={0.5} height={height} width={width}>
            <StyledStack
              direction="column"
              onClick={onImageUpload}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              {...dragProps}
            >
              {!!imageList?.length && (
                <Stack alignItems="end" zIndex={3} borderRadius={"5px"}>
                  <StyledCloseIcon
                    onClick={(event: { preventDefault: () => void; stopPropagation: () => void; }) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onImageRemove(0);
                    }}
                    style={{ margin: "8px" }}
                  />
                </Stack>
              )}
              {(!imageList?.length || isHovering) && (
                <StyledContentWrapper alignItems="center">
                  <Stack alignItems="center" textAlign="center" direction="column" p={1} spacing={1}>
                    <ImageIcon />
                    <Typography variant={"body1"}>{!!imageList?.length ? updateTitle : uploadTitle}</Typography>
                  </Stack>
                </StyledContentWrapper>
              )}
              {!!imageList?.length && <StyledImage src={imageList[0]?.dataURL} />}
            </StyledStack>
          </Stack>
        );
      }}
    </ImageUploading>
  );
};

export default ImageSelector;
