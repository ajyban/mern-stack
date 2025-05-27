import { useState } from 'react'
import { Link } from 'react-router';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    async function doLogin() {
        await signInWithEmailAndPassword(getAuth(), email, password)
            .catch(() => {
                setError('Email or password is incorrect');
                return null;
            })
    }

    return <>
        <h1>Log In</h1>
        {error && <p>{error}</p>}
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email}
            onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        <button onClick={doLogin}>Log In</button>
        <Link to='/create-account'>Create Account</Link>
    </>
}