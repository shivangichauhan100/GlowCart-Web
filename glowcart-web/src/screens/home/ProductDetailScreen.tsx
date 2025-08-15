import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetailScreen.css';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
};

const ProductDetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(r => r.json())
        .then(setProduct)
        .catch(() => setProduct(null))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="product-detail-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-error">
        <h2>Product not found</h2>
        <button className="btn" onClick={() => navigate('/home')}>
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
  };

  return (
    <div className="product-detail">
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          ← Back
        </button>
        <h1 className="detail-title">Product Details</h1>
        <div className="header-actions">
          <button className="share-btn">📤</button>
          <button className="cart-btn" onClick={() => navigate('/profile')}>
            🛒
          </button>
        </div>
      </header>

      <div className="container">
        <div className="product-detail-content">
          <div className="product-images">
            <img 
              src={product.images?.[0] || product.thumbnail} 
              alt={product.title} 
              className="main-image" 
            />
            <button className="view-similar-btn">View Similar</button>
          </div>

          <div className="product-info-detail">
            <h2 className="product-title-detail">{product.title}</h2>
            <div className="product-rating-detail">
              ⭐ {product.rating.toFixed(1)} / 5
            </div>
            <p className="product-description">{product.description}</p>
            
            <div className="price-section">
              <div className="price-info">
                <span className="current-price">${product.price.toFixed(2)}</span>
                <span className="original-price">${(product.price * 1.1).toFixed(2)}</span>
              </div>
              <button className="btn add-to-cart-btn" onClick={handleAddToCart}>
                Add to Bag
              </button>
            </div>

            <div className="highlights-section">
              <h3 className="section-title">Highlights</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <span className="highlight-label">Width:</span>
                  <span className="highlight-value">15.14</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Height:</span>
                  <span className="highlight-value">13.08</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Warranty:</span>
                  <span className="highlight-value">1 year</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Shipping:</span>
                  <span className="highlight-value">1-2 business days</span>
                </div>
              </div>
            </div>

            <div className="reviews-section">
              <h3 className="section-title">Ratings & Reviews</h3>
              <div className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">Ariel</span>
                  <span className="review-rating">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="review-text">"Love the texture and finish!"</p>
              </div>
              <div className="review-item">
                <div className="review-header">
                  <span className="reviewer-name">Saanvi</span>
                  <span className="review-rating">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="review-text">"Great value for the price."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
