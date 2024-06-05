import express from 'express';
import { twitterClient } from './twitterClient.js';
const app = express();
const port = 3000;
const tweet = async () => {
    try {
        await twitterClient.v2.tweet("I'm aliiiveee!");
    }
    catch (error) {
        console.log(error);
    }
};
tweet();
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
