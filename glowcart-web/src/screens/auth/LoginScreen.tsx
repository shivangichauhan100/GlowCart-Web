import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    navigate('/home');
  };

  return (
    <div className="auth-screen">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Hello Again!</h1>
          <p className="auth-subtitle">Welcome back to Shivangi Chauhan Beauty</p>
          <p className="auth-tagline">You've been missed</p>
        </div>
        
        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn auth-btn" 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="auth-links">
          <span className="text-secondary">Don't have an account? </span>
          <Link to="/register" className="auth-link">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
