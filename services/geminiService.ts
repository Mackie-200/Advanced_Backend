import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for McDonald Chirumezani's professional portfolio. 
Your goal is to answer questions about McDonald based STRICTLY on the following resume data.
Be professional, concise, and helpful. If you don't know the answer based on the data provided, politely say so.
Do not invent information.

RESUME DATA:
${JSON.stringify(RESUME_DATA, null, 2)}
`;

const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. The chat feature requires an API Key.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later.";
  }
};
