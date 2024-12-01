import { NextApiRequest, NextApiResponse } from "next";

interface handleGoogleCloudTranslationProps {
  text: string;
  targetLanguage: string;
}

export const handleGoogleCloudTranslation = async ({ text, targetLanguage }: handleGoogleCloudTranslationProps): Promise<string> => {
  // TODO: Move to .env
  const projectId = 'cogent-scion-443000-n6';
  const {Translate} = require('@google-cloud/translate').v2;
  const translate = new Translate({projectId});

  try {
    async function translateText(text, target) {
      const [translation] = await translate.translate(text, target);
      return translation;
    }
    return translateText(text, targetLanguage);
  } catch (error) {
    throw new Error("Failed to generate content: " + error.message);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { text, targetLanguage }: handleGoogleCloudTranslationProps = req.body;

    try {
      const translation = await handleGoogleCloudTranslation({ text, targetLanguage });
      res.status(200).json({ output: translation });
    } catch (error) {
      console.error("Error in cloudTranslation:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

