import { NavLink, useNavigate } from 'react-router';
import './Navbar.css';
import { getAuth, signOut } from 'firebase/auth'

export default function Navbar() {
    const isLoggedIn = true;
    const userEmail = 'a@a.com'
    const navigate = useNavigate();

    function doSignOut() {
        if (isLoggedIn) {
            signOut(getAuth());
            return;
        }
        navigate('/login')
    }
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
                    <li>
                        {userEmail && <span>Welcome, {userEmail}</span>}
                        <button onClick={doSignOut}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                    </li>
                </ul>

            </div>
        </>

    )
}