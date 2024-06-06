import express, {Application, Response, Request} from 'express';
import { twitterClient } from './twitterClient.js';
import { runPrompt } from './gemini.js';

const app: Application = express();
const port: number = 3000;

// const tweet = async () => {
//     const content = await runPrompt();
//     console.log(content);
//     try {
//         await twitterClient.v2.tweet(content);
//     } catch (error) {
//         console.log(error)
//     }
// }

// tweet();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})