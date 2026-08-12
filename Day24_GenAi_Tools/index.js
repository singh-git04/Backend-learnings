import "dotenv/config"
import readline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent } from "langchain";
import sendEmail from "./mail.service.js";
import * as z from "zod"



const emailTool = tool(
    sendEmail,
    {
        name: "emailTool",
        description: "Use this tool to send email",
        schema: z.object({
            to: z.string().describe("The recipient email address"),
            html: z.string().describe("The html content of the email"),
            subject:z.string().describe("The subject of the email")
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
    tools:[emailTool]
})

const message = []

while(true){
    const username = await rl.question("\x1b[31mYou:\x1b[0m ")

    message.push(new HumanMessage(username))

    const response = await agent.invoke({message})
    message.push(response)
    console.log("\x1b[32mAI:\x1b[0m", response.messages.length-1)
}





rl.close()