import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  async function handleCheck(e) {
    e.preventDefault();

    const passwordValue = password.current.value;
    const confirmPasswordValue = confirmpassword.current.value;

    if (passwordValue !== confirmPasswordValue) {
      return setError('Passwords do not match.');
    }

    if (!passwordValue) {
      return setError('Password cannot be empty.');
    }

    try {
      setError('');
      setloading(true);
      await signup(email.current.value, passwordValue); // Ensure the correct order of parameters
      navigate('/login');
    } catch (error) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  }

  return (
    <div className="body2">
      <div className="signup">
        <h1>Create Dev@Deakin Account</h1>

        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleCheck}>
          <label>
            NAME*
            <input className='input' type="text" ref={name} required />
          </label>
          <label>
            Email*
            <input className='input' type="email" ref={email} required />
          </label>
          <label>
            Password*
            <input className='input' type="password" ref={password} required />
          </label>
          <label>
            Confirm Password*
            <input className='input' type="password" ref={confirmpassword} required />
          </label>
          <button disabled={loading} className="button" type="submit">
            SIGN UP!!
          </button>
        </form>
      </div>
      <div className="acc">
        Already have an account? <Link to="/login">Log In !!</Link>
      </div>
    </div>
  );
}
