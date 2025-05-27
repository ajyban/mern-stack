import { Articles } from './articles.model.js';

export async function getArticle(name) {
    const articles = await Articles.findOne({ name }, { name: 1, comments: 1, upvotes: 1 , upvoteIds: 1});
    return articles;
}

export async function incrementUpvoteInArticle(name, uid) {


    const articles = await Articles.findOneAndUpdate({ name }, {
        $inc: { upvotes: 1 },
        $push: { upvoteIds: uid },
    }, { returnDocument: 'after' });
    return articles;
}

export async function addCommentsToArticle(name, postedBy, text) {
    const articles = await Articles.findOneAndUpdate({ name }, {
        $push: { comments: { postedBy, text } }
    }, { returnDocument: 'after' });
    return articles;
}