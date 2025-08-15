import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthScreen.css';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Mock registration - just navigate to login
      navigate('/login');
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Join The Glow!</h1>
          <p className="auth-subtitle">Create your account with Shivangi Chauhan Beauty</p>
          <p className="auth-tagline">Start your beauty journey today</p>
        </div>
        
        <form onSubmit={handleRegister} className="auth-form">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
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
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn auth-btn">
            Create Account
          </button>
        </form>

        <div className="auth-links">
          <span className="text-secondary">Already have an account? </span>
          <Link to="/login" className="auth-link">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
