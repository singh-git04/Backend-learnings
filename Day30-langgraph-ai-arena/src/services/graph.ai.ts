import { StateSchema, MessagesValue, type GraphNode, StateGraph, START, END } from "@langchain/langgraph";

type JUDGEMENT  = {
    winnerr: "solution1" | "solution2"
    solution1_score: number
    solution2_score: number
}

type AIBATTLESTATE={
    messages: typeof MessagesValue
    solution1: string
    solution2: string
    judgement: JUDGEMENT 
}

const state: AIBATTLESTATE = {
    messages: MessagesValue,
    solution1: "",
    solution2: "",
    judgement: {
        winnerr: "solution1",
        solution1_score: 0,
        solution2_score: 0
    }
}