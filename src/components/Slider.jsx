// src/components/Slider.jsx
import React from 'react';
import slider1 from '../assets/one.jpg';
import slider2 from '../assets/two.jpg';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel className='car'>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="Первый слайд" />
        <Carousel.Caption>
          <h3>Слайд 1</h3>
          <p>Описание первого слайда</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Второй слайд" />
        <Carousel.Caption>
          <h3>Слайд 2</h3>
          <p>Описание второго слайда</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
