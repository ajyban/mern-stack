import express from 'express';
import { connectToDB, populateArticles } from './mongo-db-connection.js';
import { addCommentsToArticle, getArticles, incrementUpvoteInArticle } from './db/articles.utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const articles = await getArticles(name)
        .catch(() => null);;
    res.json(articles);
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
    const article = await incrementUpvoteInArticle(name)
        .catch(() => null);
    res.json(article);
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    console.log(postedBy, text)
    const response = await addCommentsToArticle(name, postedBy, text)
        .catch(() => null);
    res.json(response);
});

connectToDB().then(() => {
    console.log('Connected to DB!');
    populateArticles();
    app.listen(8000, function () {
        console.log('Server is listening on port 8000')
    });
}).catch(err => console.log(err))
