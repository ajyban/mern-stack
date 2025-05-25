import { NavLink } from 'react-router';
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="app-nav-bar">
                <ul className="nav nav-underline justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/articles">Articles</NavLink>
                    </li>
                </ul>
            </div>
        </>

    )
}