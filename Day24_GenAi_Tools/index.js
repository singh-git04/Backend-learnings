import "dotenv/config"
import readline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai";
import { createAgent, HumanMessage, tool } from "langchain";
import {sendEmail} from "./mail.service.js"
import * as z from "zod"

const emailTool =  tool(
    sendEmail,{
        name : "emailTool",
        description: "Use this tool to send email",
        schema: z.object({
            to: z.string().describe("The recipient email address"),
            html: z.string().describe("The HTML content of the email"),
            subject: z.string().describe("The subject of the email")
        })
    }
)

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});


const model = new ChatMistralAI({
model: "mistral-small-latest",
});


const agent = createAgent({
    model,
    tools: [
        emailTool
    ]
})
// rl.question("What is Your name? ",(name)=>{
//     console.log(`Hello ${name}`)
//     rl.close()
// })
const messages = []

while(true){
    const userInput = await rl.question("\x1b[31mYou:\x1b[0m ")

    messages.push(new HumanMessage(userInput))

    const response = await agent.invoke({messages})
    messages.push(response.messages[response.messages.length-1])
    console.log(`\x1b[32mAI:\x1b[0m ${response.messages[response.messages.length-1].content}`)
}





rl.close()