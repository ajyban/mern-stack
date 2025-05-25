import Layout from './components/layout/Layout';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Home from './pages/Home'
import NotFound from './pages/NotFound';

export const routes = [{
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/',
            element: <Home />
        }, {
            path: '/about',
            element: <About />
        }, {
            path: '/articles',
            element: <ArticlesList />
        }, {
            path: '/articles/:name',
            element: <Article />
        }
    ]
}];

