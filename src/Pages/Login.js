import axios from 'axios';
import { useState } from 'react';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const res = await axios.post('http://localhost:8080/auth/login', { username, password });
        alert(res.data);
      } catch (err) {
        alert('Login failed');
      }
    };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  )
}

export default Login
