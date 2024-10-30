import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import fetch from 'node-fetch';

dotenv.config()

const client = new TwitterApi({
    appKey: process.env.API_KEY as string,
    appSecret: process.env.API_SECRET as string,
    accessToken: process.env.ACCESS_KEY as string,
    accessSecret: process.env.ACCESS_SECRET as string,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN as string);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

export {twitterClient, twitterBearer};