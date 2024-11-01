// src/data/products.js
import image1 from '../assets/one.jpg'; // Импортируйте изображение
import image2 from '../assets/two.jpg'; // Импортируйте другие изображения, если они есть
import image3 from '../assets/three.jpg';
import image4 from '../assets/four.jpg';
import image5 from '../assets/five.jpg';

const products = [
  {
    id: 1,
    name: "Обои Синий",
    image: image1, // Замените на действительный путь к изображению
    price: 500,
    color: "Синий",
    stock: 10, // количество на складе
  },
  {
    id: 2,
    name: "Обои Зеленый",
    image: image2, // Замените на действительный путь к изображению
    price: 700,
    color: "Зеленый",
    stock: 0, // количество на складе
  },
  {
    id: 3,
    name: "Обои Красный",
    image: image3, // Замените на действительный путь к изображению
    price: 450,
    color: "Красный",
    stock: 5,
  },
  {
    id: 4,
    name: "Обои Желтый",
    image: image4, // Замените на действительный путь к изображению
    price: 300,
    color: "Желтый",
    stock: 8,
  },
  {
    id: 5,
    name: "Обои Фиолетовый",
    image: image5, // Замените на действительный путь к изображению
    price: 600,
    color: "Фиолетовый",
    stock: 2,
  },
];

export default products;
