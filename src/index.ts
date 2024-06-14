import express, {Application, Response, Request} from 'express';
import dotenv from "dotenv";
import { twitterClient, twitterBearer } from './twitterClient.js';
import { runPrompt } from './gemini.js';
import { CronJob } from 'cron';

dotenv.config();

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.sendFile(process.cwd() + '/index.html');
})

const tweet = async () => {
    const content = await runPrompt();

    try {
        await twitterClient.v2.tweet(content);
    } catch (error) {
        console.log(error)
    }
}

const cronTweet = new CronJob("0 */12 * * *", async () => {
    tweet();
});

cronTweet.start();

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})