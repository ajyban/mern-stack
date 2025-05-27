import { NavLink, useNavigate } from 'react-router';
import './Navbar.css';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../../useUser';

export default function Navbar() {
    const { isLoading, user } = useUser()
    const navigate = useNavigate();

    function doSignOut() {
        if (user) {
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
                    {isLoading && <p>Loading</p>}
                    {!isLoading &&
                        <li>
                            {user && user.email && <span>Welcome, {user.email}</span>}
                            <button onClick={doSignOut}>{user ? 'Log Out' : 'Log In'}</button>
                        </li>
                    }
                </ul>

            </div>
        </>

    )
}