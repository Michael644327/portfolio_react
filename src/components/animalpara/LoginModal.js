import React, { useRef, useState, useEffect } from "react";
import LoginForm from "./LoginForm";

const LoginModal = ({ handleClose, show, isLogin, setIsLogin }) => {
  const modalRef = useRef(null);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      setIsLogin(true);
      setLoginUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, handleClose]);

  if (!show) {
    return null;
  }

  const handleLogout = () => {
    setIsLogin(false);    // 清除狀態
    localStorage.removeItem('loginUser');      // 從 localStorage 中移除登入狀態
  };

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog" ref={modalRef}>
          {isLogin ? (
            <div className="modal-content">
              <div className="form-border">
                <p>帳號: {isLogin.email}
                {loginUser.nickname}</p>
                <button onClick={handleLogout}>登出</button>
              </div>
            </div>
          ) : (
            <div className="modal-content">
              <div className="form-border">
                <LoginForm handleClose={handleClose} isLogin={isLogin} setIsLogin={setIsLogin} />
              </div>
            </div>

          )}
        </div>
      </div>
    </>
  );
}

export default LoginModal;