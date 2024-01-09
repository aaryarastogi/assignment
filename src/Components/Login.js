// src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import './CSS/LoginStyle.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const handleLogin = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const userData = await response.json();
        setUserData(userData);
        
        // Pass userData to the '/dashboard' route using the 'state' key
        navigate('/dashboard', { state: { userData: userData.results } });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

  return (
    <div className='container'>
      <h2 className='login'>Login</h2>
      <form className='form'>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
