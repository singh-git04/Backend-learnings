import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"


import config from "../config/config.js"

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  apiKey: config.GOOGLE_API_KEY,
})

const mistralModel = new ChatMistralAI({
  apiKey: process.env.MISTRAL_API_KEY,
  modelName: "mistral-small",
})


const cohoreModel = new ChatCohere({
  apiKey: process.env.COHERE_API_KEY,
  model: "command-a-03-2025"
});


export const response = await cohoreModel.invoke("Why do parrots talk? in 3 words")
