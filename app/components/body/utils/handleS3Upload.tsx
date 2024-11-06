interface HandleS3UploadProps {
  file: File;
}

export const handleS3Upload = async ({ file }: HandleS3UploadProps): Promise<string> => {
  if (!file) {
    throw new Error('Please select a file to upload.');
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename: file.name, contentType: file.type }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to get pre-signed URL.');
  }

  const { url, fields } = await response.json();

  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
  formData.append('file', file);

  const uploadResponse = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!uploadResponse.ok) {
    throw new Error(`S3 Upload Error: ${uploadResponse.statusText}`);
  }

  return `${url}${file.name}`;
}

export default handleS3Upload;
