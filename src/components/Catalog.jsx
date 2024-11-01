// src/components/Catalog.jsx
import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import ModalOrder from './ModalOrder';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrder = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Каталог товаров</h2>
      <input
        type="text"
        placeholder="Поиск по названию"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="d-flex flex-wrap">
        {filteredProducts.map(product => (
          <div className="m-2" key={product.id}>
            <ProductCard product={product} onOrder={handleOrder} />
          </div>
        ))}
      </div>
      <ModalOrder 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default Catalog;
