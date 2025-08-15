import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { items, subtotal, clearCart } = useCart();

  const handleLogout = () => {
    logout();
    clearCart();
    navigate('/');
  };

  const menuItems = [
    { title: 'Address', icon: '📍', path: '/address' },
    { title: 'Order History', icon: '📦', path: '/profile' },
    { title: 'Language', icon: '🌐', path: '/profile' },
    { title: 'Notifications', icon: '🔔', path: '/profile' },
    { title: 'Contact Us', icon: '📞', path: '/help' },
    { title: 'Get Help', icon: '❓', path: '/help' },
    { title: 'Privacy Policy', icon: '🔒', path: '/profile' },
    { title: 'Terms & Conditions', icon: '📄', path: '/terms' },
  ];

  return (
    <div className="profile-screen">
      <header className="profile-header">
        <div className="container">
          <h1 className="profile-title">Profile</h1>
        </div>
      </header>

      <div className="container">
        <div className="profile-content">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <h2 className="user-name">Aastha Sharma</h2>
              <p className="user-email">aastha@example.com</p>
            </div>
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Cart Summary</h3>
            <div className="cart-items">
              {items.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                <>
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                      <div className="cart-item-info">
                        <h4 className="cart-item-title">{item.title}</h4>
                        <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  <div className="cart-total">
                    <span>Total:</span>
                    <span className="total-amount">${subtotal.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="menu-section">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="menu-item"
                onClick={() => navigate(item.path)}
              >
                <div className="menu-item-content">
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-title">{item.title}</span>
                </div>
                <span className="menu-arrow">→</span>
              </div>
            ))}
          </div>

          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/home')}>
          <span>🏠</span>
          <span>Home</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/offers')}>
          <span>🎁</span>
          <span>Offers</span>
        </div>
        <div className="nav-item">
          <span>❤️</span>
          <span>Wishlist</span>
        </div>
        <div className="nav-item active">
          <span>👤</span>
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default ProfileScreen;
