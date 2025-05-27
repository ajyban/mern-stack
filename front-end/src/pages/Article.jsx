import { NavLink, useLoaderData, useParams } from 'react-router'
import articles from '../mock-data/articles';
import axios from 'axios';
import Comments from '../components/comments/Comments';
import { useState } from 'react';
import AddCommentForm from '../components/comments/AddCommentForm';

export async function loader({ params }) {
    const response = await axios.get('/api/articles/' + params.name);
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}

export default function Article() {
    const { name } = useParams();
    const { upvotes: initalUpvotes, comments: initalComments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initalUpvotes);
    const [comments, setComments] = useState(initalComments)

    async function upvote() {
        const respose = await axios.post('/api/articles/' + name + '/upvote')
        setUpvotes(respose.data.upvotes)
    }

    async function onAddComent({postedBy, text}) {
        const respose = await axios.post('/api/articles/' + name + '/comments', { postedBy, text })
        setComments(respose.data.comments)
    }

    const currentArticle = articles.find((art) => art.name === name);
    return (
        <>
            <NavLink to="../" >Back</NavLink>
            {currentArticle ? (
                <article>
                    <h1>{currentArticle.title}</h1>
                    <button onClick={upvote}>Upvote</button>
                    <p>This article has {upvotes} upvotes </p>
                    {currentArticle.content.map((c, ind) => <p key={ind}>{c}</p>)}
                    <AddCommentForm onAddComent={onAddComent} />
                    <Comments comments={comments} />
                </article>


            ) : null}
        </>
    )

}