import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OffersScreen.css';

type Offer = {
  id: number;
  title: string;
  description: string;
  discount: string;
  code: string;
  validUntil: string;
  category: string;
  image: string;
  isActive: boolean;
};

const OffersScreen = () => {
  const navigate = useNavigate();

  const offers: Offer[] = [
    {
      id: 1,
      title: "Welcome Bonus",
      description: "Get 20% off on your first order with us!",
      discount: "20% OFF",
      code: "WELCOME20",
      validUntil: "Dec 31, 2024",
      category: "New Customer",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
      isActive: true
    },
    {
      id: 2,
      title: "Beauty Bundle",
      description: "Buy any 3 beauty products and get 1 free!",
      discount: "BUY 3 GET 1",
      code: "BUNDLE4",
      validUntil: "Nov 30, 2024",
      category: "Bundle Offer",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
      isActive: true
    },
    {
      id: 3,
      title: "Luxury Skincare",
      description: "30% off on all premium skincare products",
      discount: "30% OFF",
      code: "SKIN30",
      validUntil: "Dec 15, 2024",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
      isActive: true
    },
    {
      id: 4,
      title: "Makeup Madness",
      description: "50% off on selected makeup products",
      discount: "50% OFF",
      code: "MAKEUP50",
      validUntil: "Dec 20, 2024",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop",
      isActive: true
    },
    {
      id: 5,
      title: "Free Shipping",
      description: "Free shipping on orders above ₹999",
      discount: "FREE SHIPPING",
      code: "FREESHIP",
      validUntil: "Ongoing",
      category: "Shipping",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop",
      isActive: true
    },
    {
      id: 6,
      title: "Weekend Special",
      description: "Extra 15% off on weekend orders",
      discount: "15% OFF",
      code: "WEEKEND15",
      validUntil: "Every Weekend",
      category: "Weekend",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=400&auto=format&fit=crop",
      isActive: true
    }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
    alert(`Coupon code "${code}" copied to clipboard!`);
  };

  return (
    <div className="offers-screen">
      <header className="offers-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/home')}>
            ← Back
          </button>
          <h1 className="offers-title">Special Offers</h1>
          <div className="header-actions">
            <span className="offers-count">{offers.length} active offers</span>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="offers-content">
          <div className="offers-hero">
            <div className="hero-content">
              <h2>🎉 Exclusive Beauty Deals</h2>
              <p>Discover amazing offers on premium beauty products</p>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" 
                alt="Beauty offers"
              />
            </div>
          </div>

          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                  <div className="offer-badge">
                    <span className="discount-text">{offer.discount}</span>
                  </div>
                </div>
                
                <div className="offer-content">
                  <div className="offer-category">{offer.category}</div>
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.description}</p>
                  
                  <div className="offer-code-section">
                    <div className="code-display">
                      <span className="code-label">Use Code:</span>
                      <span className="code-text">{offer.code}</span>
                    </div>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(offer.code)}
                    >
                      Copy
                    </button>
                  </div>
                  
                  <div className="offer-footer">
                    <span className="valid-until">Valid until: {offer.validUntil}</span>
                    <button className="shop-now-btn" onClick={() => navigate('/home')}>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="offers-info">
            <div className="info-card">
              <div className="info-icon">💡</div>
              <h3>How to Use Offers</h3>
              <ul>
                <li>Copy the coupon code</li>
                <li>Add products to your cart</li>
                <li>Apply the code at checkout</li>
                <li>Enjoy your discount!</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>Terms & Conditions</h3>
              <ul>
                <li>One offer per order</li>
                <li>Cannot be combined with other offers</li>
                <li>Valid on selected products only</li>
                <li>Offers subject to change</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersScreen;
