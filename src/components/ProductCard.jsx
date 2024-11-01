// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onOrder }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Цена: {product.price}₽</p>
        <p className="card-text">Цвет: {product.color}</p>
        {product.stock > 0 ? (
          <button className="btn btn-primary">В корзину</button>
        ) : (
          <button className="btn btn-danger" onClick={() => onOrder(product.id)}>Заказать</button>
        )}
        {/* Кнопка для подробной информации о товаре */}
        <Link to={`/product/${product.id}`} className="btn btn-info">Подробнее</Link>
      </div>
    </div>
  );
};

export default ProductCard;
