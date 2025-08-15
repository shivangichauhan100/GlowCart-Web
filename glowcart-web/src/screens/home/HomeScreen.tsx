import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard';
import './HomeScreen.css';

type Product = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const json = await res.json();
  return json.products as Product[];
};

// Enhanced beauty and cosmetic keywords for better filtering
const cosmeticKeywords = [
  'mascara', 'lip', 'eyeshadow', 'fragrance', 'perfume', 'skin', 'cream', 'lotion', 'beauty',
  'makeup', 'cosmetic', 'foundation', 'concealer', 'blush', 'bronzer', 'highlighter',
  'eyeliner', 'lipstick', 'lip gloss', 'nail polish', 'serum', 'moisturizer', 'cleanser',
  'toner', 'mask', 'brush', 'palette', 'compact', 'powder', 'spray', 'oil', 'gel',
  'essence', 'treatment', 'anti-aging', 'hydrating', 'matte', 'glossy', 'shimmer'
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts().then(setAllProducts).catch(() => setAllProducts([]));
  }, []);

  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return allProducts
      .filter(p =>
        cosmeticKeywords.some(k =>
          p.title.toLowerCase().includes(k) || p.description.toLowerCase().includes(k)
        )
      )
      .filter(p => (lower ? p.title.toLowerCase().includes(lower) : true));
  }, [allProducts, search]);

  return (
    <div className="home-screen">
      <header className="home-header">
        <div className="container">
          <div className="header-content">
            <div className="brand-section">
              <h1 className="brand-title">Shivangi Chauhan</h1>
              <p className="brand-subtitle">Beauty Ecommerce Platform</p>
            </div>
            <div className="header-actions">
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for beauty products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>
              <button className="filter-btn">
                <span className="filter-icon">⚡</span>
                Apply Filter
              </button>
              <div className="cart-icon" onClick={() => navigate('/profile')}>
                🛒 {items.length > 0 && <span className="cart-badge">{items.length}</span>}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="home-main">
        <div className="container">
          <div className="section-header">
            <div className="section-title-group">
              <h2 className="section-title">✨ Premium Beauty Collection</h2>
              <p className="section-subtitle">Discover luxury cosmetics and skincare</p>
            </div>
            <span className="product-count">{filtered.length} products</span>
          </div>

          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </main>

      <nav className="bottom-nav">
        <div className="nav-item active">
          <span>🏠</span>
          <span>Home</span>
        </div>
        <div className="nav-item">
          <span>🎁</span>
          <span>Offers</span>
        </div>
        <div className="nav-item">
          <span>❤️</span>
          <span>Wishlist</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/profile')}>
          <span>👤</span>
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default HomeScreen;
