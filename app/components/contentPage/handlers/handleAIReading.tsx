import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI, GenerationConfig } from "@google/generative-ai";

interface HandleAIReadingProps {
  prompt: string;
  config?: GenerationConfig;
}

export const handleAIReading = async ({ prompt, config }: HandleAIReadingProps): Promise<string> => {
  // TODO: Move to .env
  const genAI = new GoogleGenerativeAI("AIzaSyCPY8L2QD_pHGVmE_c2Klow3FWm1X3GXd4");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: config || {
        maxOutputTokens: 10000,
        temperature: 0.7,
    },
  });
  try {
    // TODO: this do not want to translate. we will need another ai
    const result = await model.generateContent(`
      Content of a menu: ${prompt}. Translate it to this language of this code ${document.documentElement.lang || 'en'}. Make a JSON from it TRANSLATED following this model: 
      recipes: [{ name: "Name01", ingredients: "Ingredient01,Ingredient02,Ingredient03", suggestion: "Here, make a quick quote describing the meal taste, do NOT make it as you want to sell, BE REALISTIC" }, { name: "Name02", ingredients: "Ingredient04,Ingredient05,Ingredient06", suggestion: "Here, make a quick quote describing the meal taste" }]
    `);
    return result.response.text(); 
  } catch (error) {
    throw new Error("Failed to generate content: " + error.message);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { prompt, config }: HandleAIReadingProps = req.body;

    try {
      const generatedText = await handleAIReading({ prompt, config });
      res.status(200).json({ output: generatedText });
    } catch (error) {
      console.error("Error in generateText:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

