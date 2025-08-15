import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingScreen.css';

const OnboardingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      <div className="onboarding-content">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
          alt="Luxury beauty products"
          className="onboarding-hero"
        />
        <h1 className="onboarding-title">Shivangi Chauhan</h1>
        <p className="onboarding-subtitle">Beauty Ecommerce Platform</p>
        <p className="onboarding-tagline">Your Beauty, Delivered</p>
        <button 
          className="btn onboarding-btn" 
          onClick={() => navigate('/login')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
