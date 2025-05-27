import express from 'express';
import { connectToDB, populateArticles } from './mongo-db-connection.js';
import { addCommentsToArticle, getArticle, incrementUpvoteInArticle } from './db/articles.utils.js';
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
);

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../dist')))

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await getArticle(name)
        .catch(() => null);;
    res.json(article);
})

app.use(async function (req, res, next) {
    const { authtoken } = req.headers;
    if (authtoken) {
        const user = await admin.auth().verifyIdToken(authtoken);
        req.user = user;
        next();
    } else {
        res.sendStatus(400);
    }
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const { uid } = req.user;
    const { name } = req.params;

    const currentArticle = await getArticle(name);
    console.log(currentArticle)
    const upvoteIds = currentArticle.upvoteIds || [];
    const canUpvote = uid && !upvoteIds.includes(uid);

    if (canUpvote) {
        const article = await incrementUpvoteInArticle(name, uid)
            .catch(() => null);
        res.json(article);
    } else {
        res.sendStatus(403);
    }

});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    console.log(postedBy, text)
    const response = await addCommentsToArticle(name, postedBy, text)
        .catch(() => null);
    res.json(response);
});

const PORT = process.env.PORT || 8000;

connectToDB().then(() => {
    console.log('Connected to DB!');
    populateArticles();
    app.listen(PORT, function () {
        console.log('Server is listening on port ' + PORT)
    });
}).catch(err => console.log(err))
