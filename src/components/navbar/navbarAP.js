import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routesAP from '../../routesAP';
import "../styles/navbar.css";
import LoginModal from '../animalpara/LoginModal';
import ShoppingCar from '../animalpara/ShoppingCar';

const NavbarAP = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    const [loginUser, setLoginUser] = useState(null);
    const [shoppingCart, setShoppingCart] = useState([]);

    // const [shoppingCart, setShoppingCart] = useState({
    //     userId: "",
    //     items: [],
    //     totalAmount: 0,
    //     lastUpdated: ""
    //   });
    
    const [loginModal, setLoginModal] = useState(false);
    const handleLoginlOpen = () => setLoginModal(true);
    const handleLoginClose = () => setLoginModal(false);

    const [shoppingModal, setShoppingModal] = useState(false);
    const handleShoppingOpen = () => setShoppingModal(true);
    const handleShoppingClose = () => setShoppingModal(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-bt">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="./portfolio">回作品集</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {routesAP.map((route) => (
                                <li key={route.path} className="nav-item">
                                    <Link className={`nav-link ${location.pathname === route.path ? 'active' : ''}`} aria-current="page" to={route.path}>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="position-relative">
                                <button type="button" className="btn btn-black text-white" onClick={handleLoginlOpen}>
                                    <i className="bi bi-person-circle"></i>
                                </button>
                            </li>
                            {isLogin ? (
                                <li className="position-relative">
                                    <button type="button" className="btn btn-primary">
                                        <i className="bi bi-chat-left-dots-fill"></i>
                                    </button>
                                    <span className="bg-danger text-white position-absolute noticeicon px-2 rounded-circle">3</span>
                                </li>
                            ) : ''}
                            <li className="position-relative">
                                <button type="button" className="btn btn-black text-white" onClick={handleShoppingOpen}>
                                    <i className="bi bi-cart2"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <LoginModal 
            isLogin={isLogin} setIsLogin={setIsLogin} 
            loginUser={loginUser} setLoginUser={setLoginUser}
            show={loginModal} handleClose={handleLoginClose} />
            <ShoppingCar
             isLogin={isLogin} loginUser={loginUser}
             cartItems={shoppingCart} setCartItems={setShoppingCart}
            show={shoppingModal} handleClose={handleShoppingClose} />
        </>
    );
}

export default NavbarAP;