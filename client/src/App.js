
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/auth/login', { username, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      setAccessToken(res.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRefresh = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const res = await axios.post('http://localhost:4000/auth/refresh', { token: refreshToken });
      localStorage.setItem('accessToken', res.data.accessToken);
      setAccessToken(res.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <h1>Simple Login</h1>
      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRefresh}>Refresh Token</button>
      <p>Access Token: {accessToken}</p>
    </div>
  );
}

export default App;