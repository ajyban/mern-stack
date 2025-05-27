import mongoose from 'mongoose';

const articlesSchema = new mongoose.Schema({
    name: String,
    upvotes: Number,
    upvoteIds: [String],
    comments: [{ text: String, postedBy: String }]
});

export const Articles = mongoose.model('Articles', articlesSchema);

