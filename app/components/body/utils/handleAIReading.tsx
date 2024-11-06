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
    const result = await model.generateContent(`
      Hello! This is supposed to be the content of a menu: ${prompt}. Can you make a JSON from it following this model: 
      recipes: [{ name: "Name01", ingredients: "Ingredient01,Ingredient02,Ingredient03" }, { name: "Name02", ingredients: "Ingredient04,Ingredient05,Ingredient06" }]
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

