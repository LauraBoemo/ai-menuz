import fs from 'fs';
import { execSync } from 'child_process';

interface HandleTranslationProps {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

const getAccessToken = (): string => {
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!credentialsPath || !fs.existsSync(credentialsPath)) {
    throw new Error(
      'GOOGLE_APPLICATION_CREDENTIALS environment variable is not set or points to a non-existent file.'
    );
  }

  // Gera o token usando o comando gcloud
  const command = `gcloud auth application-default print-access-token`;
  const accessToken = execSync(command).toString().trim();

  if (!accessToken) {
    throw new Error('Failed to generate access token using gcloud.');
  }

  return accessToken;
};

export const handleGoogleCloudTranslation = async ({
  text,
  targetLanguage,
  sourceLanguage,
}: HandleTranslationProps): Promise<string> => {
  if (!text || !targetLanguage) {
    throw new Error('Both text and targetLanguage are required for translation.');
  }

  const accessToken = getAccessToken();

  const url = `https://translation.googleapis.com/v3/projects/cogent-scion-443000-n6/locations/global:translateText`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      contents: [text],
      targetLanguageCode: targetLanguage,
      sourceLanguageCode: sourceLanguage || null,
      mimeType: 'text/plain',
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(
      `Translation API Error: ${response.statusText} - ${JSON.stringify(errorDetails)}`
    );
  }

  const data = await response.json();
  const translatedText = data.translations?.[0]?.translatedText;

  if (!translatedText) {
    throw new Error('No translation found in the response.');
  }

  return translatedText;
};

export default handleGoogleCloudTranslation;
