// src/components/ModalOrder.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalOrder = ({ show, handleClose, product }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заказ на ${product.name} оформлен!\nИмя: ${name}\nТелефон: ${phone}`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заказ {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ФИО</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Номер телефона</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit">Оформить заказ</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalOrder;
