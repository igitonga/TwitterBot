import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const run = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Tell me one funny fact";
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(response);
};
run();
