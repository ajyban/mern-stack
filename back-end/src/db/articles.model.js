import mongoose from 'mongoose';

const articlesSchema = new mongoose.Schema({
    name: String,
    upvotes: Number,
    comments: [{ text: String, postedBy: String }]
});

export const Articles = mongoose.model('Articles', articlesSchema);

