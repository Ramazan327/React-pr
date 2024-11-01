// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams(); // Получаем ID из параметров URL
  const product = products.find(p => p.id === Number(id)); // Находим продукт по ID

  if (!product) {
    return <div>Продукт не найден.</div>; // Обработка отсутствующего продукта
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Цена: {product.price}₽</p>
      <p>Цвет: {product.color}</p>
      <p>Количество на складе: {product.stock}</p>
      {/* Добавьте дополнительные детали по вашему желанию */}
    </div>
  );
};

export default ProductDetail;
