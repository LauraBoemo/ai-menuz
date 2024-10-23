'use client'

import React, { useEffect, useState } from "react";
import { Button, FormControl, Stack } from "@mui/material";
import { ImageSelector, ImageSelectorProps, ImageType } from "../image-selector";
import { useLoader, useError } from "../../utils";
import { useSignedURL } from "../../api/image-upload";
  
type ImageUploaderProps = Omit<ImageSelectorProps, "value" | "onChange"> & {
    imageKey: string;
    imageUrl: string;
    label?: string;
    bucket: string;
    onChange?: (imageUrl: string) => void;
};

export const ImageUploader: React.FC<ImageUploaderProps> = ({
    imageUrl,
    onChange,
    imageKey,
    ...props
}) => {
    const [image, setImage] = useState<ImageType>(null!);
    const { setLoader } = useLoader();
    const { setError } = useError();
    const [getImageUploadURL] = useSignedURL();

    const onImageChange = async (image: ImageType) => {
        setImage(image);
        try {
            setLoader(true);
            if (image) {
                // @ts-ignore
                const fileName = `${imageKey}/${image.file.name}`;
                // @ts-ignore
                const uploadURL = await getImageUploadURL({
                    fileName,
                });

                // @ts-ignore
                await uploadFileToPreSignedURL(uploadURL, image.file);
                // @ts-ignore
                onChange(fileName);
                return;
            }
            
            // @ts-ignore
            onChange("");
        } catch (ex) {
            // @ts-ignore
            setError(ex?.message || "Error uploading image to s3");
            console.log("Error uploading image to s3", ex);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (imageUrl) {
            setImage({
                dataURL: imageUrl,
            });
        }
    }, [imageUrl]);

    return (
        <FormControl fullWidth>
            <Stack direction={"column"} spacing={1}>
                <ImageSelector
                    width={250}
                    height={215}
                    acceptType={["jpg", "jpeg", "png"]}
                    maxFileSize={3000000}
                    value={(image?.dataURL && image) || null}
                    // @ts-ignore
                    onChange={onImageChange}
                    uploadTitle={"Click here and add the Menu's picture from your camera or gallery!"}
                    updateTitle={"You can edit the Menu's picture by clicking here!"}
                    maxFileSizeErrorMessage={"MaxFileSizeError"}
                    acceptTypeErrorMessage={"AcceptTypeError"}
                    {...props}
                />
                <Button 
                    variant={"contained"} 
                    disabled={!image?.dataURL}
                    sx={{ 
                        bgcolor: "#4B4B4B", 
                        color: "#F8F5ED", 
                        textTransform: "capitalize"
                    }}>
                        View Menu&apos;s Details
                </Button>
            </Stack>
        </FormControl>
    );
};

export default ImageUploader;
