import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { querySet } from "./helper/data.js";
import { note } from "./helper/data.js";

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

function getTopic<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const runPrompt = async () => {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const prompt = getTopic(querySet) + note;

    const result = await model.generateContent(prompt);

    const response = result.response;

    const text = response.text();
console.log(text);
    return text;
}

export {runPrompt};

