import React, { useEffect, useState } from "react";
import UserData from "./data/userdata.json"
import MultiClick from "./MultiClick";

const LoginForm = ({ handleClose, setIsLogin, setLoginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // const [loginUser, setLoginUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [qLogin, setQLogin] = useState(false);


  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberedUsername');
    const savedPassword = localStorage.getItem('rememberedPassword');

    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);  // Automatically check "Remember Me"
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const user = UserData.find(user => user.username === username);

      if (!user) {
        setLoginError('無此帳號');
      } else if (user.password !== password) {
        setLoginError('密碼錯誤');
      } else {
        setIsLogin(true);  // 更新父層狀態
        setLoginUser(user);
        localStorage.setItem('loginUser', JSON.stringify(user));  // 保存登入狀態到 localStorage
        handleClose();
      }
    } catch (error) {
      console.log("用戶資料讀取失敗", error);
      setLoginError('登入失敗，請稍後再試')
    }
  }

  const toggleQuickLogin = () => {
    setQLogin(!qLogin)
  }
  const quickLogin = (qUser) => {
    setUsername(qUser.username);
    setPassword(qUser.password);
  }

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <form onSubmit={handleLogin} className="needs-validation" noValidate>
        <MultiClick onMultiClick={toggleQuickLogin} clickThreshold={3}>
          <h2 className="text-center">會員登入</h2>
        </MultiClick>
        {loginError && <div className="alert alert-danger">{loginError}</div>}
        <div className="mb-3">
          <label htmlFor="account" className="form-label">帳號</label>
          <input value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            <input className="remember" type="checkbox" id="remember"
              checked={rememberMe}
              onChange={handleRememberMeChange} />
            <label className="remember" htmlFor="remember">
              記得我
            </label>
          </div>
        </div>
        <div className="d-grid justify-content-md-end">
          <input className="btn btn-primary" type="submit" value="登入" />
        </div>
      </form>
      <div className={`quickLogin ${qLogin ? 'd-blcok' : 'd-none'}`}>
        <h3>快速登入</h3>
        <ul>
          {UserData.map((qUser) =>
          (
            <li key={qUser.id} onClick={() => quickLogin(qUser)}>{qUser.username}</li>
          )
          )
          }
        </ul>
      </div>
    </>
  );
}

export default LoginForm;