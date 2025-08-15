import React from 'react';
import './ProductCard.css';

type Product = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = ({ product, onPress }: Props) => {
  return (
    <div className="product-card" onClick={onPress}>
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          ⭐ {product.rating.toFixed(1)}
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>
      <button className="heart-btn">❤️</button>
    </div>
  );
};

export default ProductCard;
