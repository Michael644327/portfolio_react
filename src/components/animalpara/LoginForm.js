import React, { useState } from "react";

const LoginForm = ({ handleClose, show, isLogin, setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'aaa@m' && password === '123') {
      setIsLogin({ email, password });  // 更新父層狀態
      localStorage.setItem('isLoggedIn', true);  // 保存登入狀態到 localStorage
      handleClose();
    } else {
      alert('登入失敗');
    }
  }
  return (
    <>
      <form onSubmit={handleLogin} className="needs-validation" noValidate>
        <h2 className="text-center">會員登入</h2>
        <div className="mb-3">
          <label htmlFor="account" className="form-label">帳號</label>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" className="form-control"
            id="account" name="account" required />
          <div className="invalid-feedback">
            此為必填欄位
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">密碼</label>
          <input value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" className="form-control" id="password" required />
          <div className="invalid-feedback">
            此為必填欄位
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check-1">
            <input className="remember" type="checkbox" id="remember" />
            <label className="remember" htmlFor="remember">
              記得我
            </label>
          </div>
        </div>
        <div className="d-grid justify-content-md-end">
          <input className="btn btn-primary" type="submit" value="登入" />
        </div>
      </form>
    </>
  );
}

export default LoginForm;