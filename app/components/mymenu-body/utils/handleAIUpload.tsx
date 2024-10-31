interface HandleAIUploadProps {
  url: string;
}

export const handleAIUpload = async ({ url }: HandleAIUploadProps): Promise<string> => {
  // TODO: Move to .env
  const apiKey = "K88134200888957";
  
  const response = await fetch(
    `https://api.ocr.space/parse/imageurl?apikey=${apiKey}&url=${url}`, 
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to process image: ${errorText}`);
  }

  const data = await response.json();
  return data.ParsedResults[0].ParsedText;
}

export default handleAIUpload;
