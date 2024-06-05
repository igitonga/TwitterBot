import express, {Application, Response, Request} from 'express';
import { twitterClient } from './twitterClient.js';

const app: Application = express();
const port: number = 3000;

const tweet = async () => {
    try {
        await twitterClient.v2.tweet("I'm aliiiveee!");
    } catch (error) {
        console.log(error)
    }
}

tweet();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})