import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const articleInfo = [
    { upvotes: 0, name: 'learn-node', comments: [] },
    { upvotes: 0, name: 'learn-react', comments: [] },
    { upvotes: 0, name: 'mongodb', comments: [] }
];

app.post('/api/articles/:name/upvote', (req, res) => {
    console.log(req.params.name)
    const articleName = req.params.name;
    const currentArticle = articleInfo.find((a) => a.name === articleName);
    if (currentArticle) {
        currentArticle.upvotes += 1
    }
    res.send(`Response is ${currentArticle.upvotes}`);
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const currentArticle = articleInfo.find((a) => a.name === name);
    if (currentArticle) {
        currentArticle.comments.push({ postedBy, text });
    }
    res.json(currentArticle);
});

app.listen(8000, function () {
    console.log('Server is listening on port 8000')
});