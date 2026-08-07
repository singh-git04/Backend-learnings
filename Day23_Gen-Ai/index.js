import "dotenv/config"
import readline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";


const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});


const model = new ChatMistralAI({
model: "mistral-small-latest",
});
// rl.question("What is Your name? ",(name)=>{
//     console.log(`Hello ${name}`)
//     rl.close()
// })
const message = []

while(true){
    const username = await rl.question("\x1b[31mYou:\x1b[0m ")

    message.push(new HumanMessage(username))

    const response = await model.invoke(message)
    message.push(response)
    console.log("\x1b[32mAI:\x1b[0m", response.text)
}





rl.close()