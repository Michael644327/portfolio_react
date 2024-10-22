import React, { useEffect } from "react";
import { Offcanvas, Button, ListGroup } from "react-bootstrap";

const ShoppingCar = ({ 
  show, 
  handleClose, 
  isLogin, 
  loginUser, 
  cartItems, 
  setCartItems 
}) => {
  // 從 localStorage 加載購物車數據
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, [setCartItems]);

  // 當購物車內容變更時，保存到 localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 移除商品
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // 更新商品數量
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 計算總價
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => 
      total + (parseFloat(item.price) * item.quantity), 0
    ).toFixed(2);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>購物車</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLogin ? (
          <p className="mb-3">{loginUser.nickname}，您好</p>
        ) : (
          <p className="mb-3">您還沒有登入</p>
        )}
        
        {cartItems.length === 0 ? (
          <p>購物車是空的</p>
        ) : (
          <ListGroup>
            {cartItems.map(item => (
              <ListGroup.Item 
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <div>{item.product}</div>
                  <small className="text-muted">{item.fullName}</small>
                </div>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <span className="ms-3">${parseFloat(item.price).toFixed(2)}</span>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    className="ms-2"
                    onClick={() => removeItem(item.id)}
                  >
                    ✕
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Offcanvas.Body>
      <div className="offcanvas-footer p-3 border-top">
        <div className="d-flex justify-content-between mb-3">
          <strong>總計：</strong>
          <strong>${getTotalPrice()}</strong>
        </div>
        <div className="d-flex gap-2">
          <Button variant="secondary" onClick={handleClose}>
            繼續購物
          </Button>
          <Button 
            variant="primary" 
            disabled={cartItems.length === 0 || !isLogin}
          >
            結帳
          </Button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default ShoppingCar;