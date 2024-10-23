import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "./base/baseService";

const getSignedURL = (uploadType: string, config?: AxiosRequestConfig): Promise<AxiosResponse<string>> => {
  return baseService.get(`uploads/${uploadType}/signed-url`, config);
};

const uploadFileToPreSignedURL = async (
  url: string,
  file: File,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadProgress?: (progressEvent: any) => void,
): Promise<undefined> => {
  return axios(url, {
    method: "PUT",
    data: file,
    onUploadProgress,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error uploading file to pre-signed URL", error);
      throw error;
    });
};

export { getSignedURL, uploadFileToPreSignedURL };
