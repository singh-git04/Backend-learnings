import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.6-flash",
  apiKey: process.env.GEMINI_API_KEY
});
 
export async function response(){
    model.invoke("what's capital of india").then((res)=>{
        console.log(res.text);
    })
}