import mongoose from 'mongoose';
import { Articles } from './db/articles.model.js';

const MONGO_DB_URL = process.env.MONGODB_USERNAME
    ? `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.cjun33p.mongodb.net/articlesdb`
    : 'mongodb://127.0.0.1:27017/articlesdb';

export async function connectToDB() {
    return await mongoose.connect(MONGO_DB_URL)
        .catch(error => console.log(error))
}

function getInitArticles() {
    const articleInfo = [
        { upvotes: 0, name: 'learn-node', comments: [], upvoteIds: [] },
        { upvotes: 0, name: 'learn-react', comments: [], upvoteIds: [] },
        { upvotes: 0, name: 'mongodb', comments: [], upvoteIds: [] }
    ];
    return articleInfo;
}
export async function populateArticles() {
    const currentArticles = await Articles.find();
    if (currentArticles && currentArticles.length) {
        console.log(`Existing Articles found = ${currentArticles.length}`)
        // delete - for local dev
        // await Articles.deleteMany({});
    } else {
        const result = await Articles.insertMany(getInitArticles(), { rawResult: true });
        console.log(`New Articles added = ${result}`);
    }
}
