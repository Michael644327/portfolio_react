import React from "react";
import { Offcanvas, Button } from "react-bootstrap";

const ShoppingCarModal = ({show, handleClose }) => {
  return(
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Your shopping cart items go here.</p>
        {/* 在這裡添加你的購物車項目 */}
      </Offcanvas.Body>
      <div className="offcanvas-footer">
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Checkout</Button>
      </div>
    </Offcanvas>
)
}

export default ShoppingCarModal;