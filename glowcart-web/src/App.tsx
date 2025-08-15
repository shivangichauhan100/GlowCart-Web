import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/home/HomeScreen';
import ProductDetailScreen from './screens/home/ProductDetailScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import AddressScreen from './screens/AddressScreen';
import TermsScreen from './screens/TermsScreen';
import HelpScreen from './screens/HelpScreen';
import OffersScreen from './screens/OffersScreen';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductDetailScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/address" element={<AddressScreen />} />
              <Route path="/terms" element={<TermsScreen />} />
              <Route path="/help" element={<HelpScreen />} />
              <Route path="/offers" element={<OffersScreen />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
