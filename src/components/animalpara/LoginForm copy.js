import React, { useState } from "react";
import UserData from "./data/userdata.json"

const LoginForm = ({ handleClose, show, isLogin, setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    try {

      const user = UserData.find(user => user.username === email);

      if (!user) {
        setLoginError('無此帳號');
      } else if (user.password !== password) {
        setLoginError('密碼錯誤');
      } else {
        setIsLogin({ email, password });  // 更新父層狀態
        localStorage.setItem('isLoggedIn', true);  // 保存登入狀態到 localStorage
        handleClose();
      }
    } catch (error) {
      console.log("用戶資料讀取失敗", error);
      setLoginError('登入失敗，請稍後再試')
    }
  }
  const quickLogin = (
    console.log('aaa')
  )

  return (
    <>
      <form onSubmit={handleLogin} className="needs-validation" noValidate>
        <h2 className="text-center" onClick={quickLogin}>會員登入</h2>
        {loginError && <div className="alert alert-danger">{loginError}</div>}
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