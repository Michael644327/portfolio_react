import React, { useState } from 'react';

const Login = () => {
  // 初始化登入狀態
  const [isLogin, setIsLogin] = useState({ email: '', password: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 處理登入事件
  const handleLogin = (e) => {
    e.preventDefault();

    // 假設驗證成功
    if (email === 'user@example.com' && password === 'password123') {
      setIsLogin({ email, password });
      localStorage.setItem('isLoggedIn', true);  // 將狀態保存到 localStorage 中
    } else {
      alert('Invalid credentials');
    }
  };

  // 處理登出事件
  const handleLogout = () => {
    setIsLogin({ email: '', password: '' });    // 清除狀態
    localStorage.removeItem('isLoggedIn');      // 從 localStorage 中移除登入狀態
  };

  return (
    <div>
      {/* 根據 isLogin.email 狀態條件渲染 */}
      {isLogin.email ? (
        <div>
          <p>帳號: {isLogin.email}</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">登入</button>
        </form>
      )}
    </div>
  );
};

export default Login;