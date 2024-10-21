import React, { useState, useEffect } from "react";
import { Offcanvas, Button, ListGroup } from "react-bootstrap";

const ShoppingCarModal = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 從 localStorage 加載購物車數據
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    // 保存購物車數據到 localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Offcanvas.Body>
      <div className="offcanvas-footer p-3">
        <p>Total: ${getTotalPrice()}</p>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" className="ms-2">Checkout</Button>
      </div>
    </Offcanvas>
  );
};

export default ShoppingCarModal;