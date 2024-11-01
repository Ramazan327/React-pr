// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail'; // Импортируем компонент деталей товара
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Routes>
        <Route path="/" element={<Catalog />} /> {/* Отображение каталога на главной странице */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Страница с деталями продукта */}
      </Routes>
    </Router>
  );
}

export default App;
