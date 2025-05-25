import { Link } from 'react-router'
import articles from '../mock-data/articles'

export default function ArticlesList() {

    const articleListElements = articles.map(article =>
    (
        <div className="card" key={article.name}>            
            <div className="card-body">
                <Link to={`${article.name}`} className="card-title">{article.title}</Link>
            </div>
        </div>
    )

    )
    return (
        <>
            <h1>ArticlesList</h1>
            {articleListElements}
        </>
    )
}