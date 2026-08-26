import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, SystemMessage ,AIMessage} from "langchain";



const model = new ChatMistralAI({
model: "mistral-small-latest",
apiKey: process.env.MISTRAL_APIKEY
});


export async function genrateResponse(messages){

    const response = await model.invoke(messages.map((msg)=>{
        if(msg.role === 'user'){
            return new HumanMessage(msg.context)
        }else if(msg.role === 'ai'){
            return new AIMessage(msg.context)
        }
    }))
    return response.text
}


export async function generateChatTitle(message) {
    const response  = await model.invoke([
        new SystemMessage(
            `You are a helpful assistant that generates a title for the chat based on the conversation. Please provide a concise and relevant title.
            
            user will provide the first message of the chat, and you will generate a title based on the essence of the conversation in 2-4 words. The title should be clear, concise, and relevant and enagaging, giving user a quick understanding of the chat's content. Please avoid using generic titles and focus on capturing the main theme or topic of the conversation.`

        ),

        new HumanMessage(
            `Genrate a title for the chat conversation based on the following first message: "${message}"
            `)
    ])

    return response.text
}

