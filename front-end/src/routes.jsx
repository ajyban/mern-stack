import Layout from './components/layout/Layout';
import About from './pages/About';
import Article, { loader as articleLoader } from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home'
import Login from './pages/Login';
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
            element: <Article />,
            loader: articleLoader
        }, {
            path: '/login',
            element: <Login />
        }, {
            path: '/create-account',
            element: <CreateAccount />
        }
    ]
}];

