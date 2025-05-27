import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function CreateAccount() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    async function doCreateAccount() {
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match');
            return;
        }
        const res = await createUserWithEmailAndPassword(getAuth(), email, password)
            .catch((err) => {
                setError(err.message);
                return null;
            });
        if (res) {
            navigate('/articles')
        }
    }

    return <>
        <h1>Create Account</h1>
        {error && <p>{error}</p>}
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email}
            onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)} />
        <button onClick={doCreateAccount}>Create Account</button>
        <Link to='/login'>Log In</Link>
    </>
}