import express from 'express';
import dotenv from "dotenv";
import { twitterClient } from './twitterClient.js';
import { runPrompt } from './gemini.js';
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.send('This is Twitter Bot!');
});
const tweet = async () => {
    const content = await runPrompt();
    console.log(content);
    try {
        await twitterClient.v2.tweet(content);
    }
    catch (error) {
        console.log(error);
    }
};
tweet();
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
