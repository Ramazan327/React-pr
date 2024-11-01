// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <h1>Магазин обоев</h1>
      <nav>
        <Link to="/" className="text-white mx-3">Главная</Link>
        <Link to="/catalog" className="text-white mx-3">Каталог</Link>
      </nav>
    </header>
  );
};

export default Header;
