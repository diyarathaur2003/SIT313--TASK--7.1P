import React, { useRef, useState } from 'react'
import { useAuth } from './Authentication'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { login } = useAuth() // Use the login function from the authentication context
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    async function handlecheck(e) {
        e.preventDefault()
        try {
            setError('');
            setloading(true);
            await login(email.current.value, password.current.value); // Use the login function
            navigate('/web'); // Redirect to the dashboard or desired route
        }
        catch (error) {
            setError(error.message);
        }
        setloading(false)
    }

    return (
        <div className='body1'>
        <div className="login">
            <h1>Log In</h1>
            {error && <div className="alert">{error}</div>}
            <form onSubmit={handlecheck}>
                <label>Email:
                    <input className ="diya" type="email" ref={email} required />
                </label>
                <label>Password:
                    <input className ="diya" type="password" ref={password} required />
                </label>
                <button disabled={loading} className="button" type="submit">LOGIN</button>
            </form>
           
        </div>
         <div className="account">
         Need an Account? <Link to="/signup">Sign Up</Link>
     </div>
     </div>
    )
}
