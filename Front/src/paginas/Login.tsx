import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../estilos/login.css';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirige si ya existe token (usuario logueado)
  useEffect(() => {
    
    if (localStorage.getItem('token')) {
    navigate('/');
  }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch {
      alert('Login fallido');
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>User</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
