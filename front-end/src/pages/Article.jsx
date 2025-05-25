import { NavLink, useParams } from 'react-router'
import articles from '../mock-data/articles';

export default function Article() {
    const { name } = useParams();

    const currentArticle = articles.find((art) => art.name === name);
    return (
        <>
            <NavLink to="../" >Back</NavLink>
            {currentArticle ? (
                <article>
                    <h1>{currentArticle.title}</h1>
                    {currentArticle.content.map((c, ind) => <p key={ind}>{c}</p>)}
                </article>


            ) : null}
        </>
    )

}