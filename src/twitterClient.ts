import { TwitterApi } from "twitter-api-v2";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
config({ path: path.resolve(__dirname, "../.env") });

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