import React, { useEffect, useState } from 'react';
import UserData from "../../../components/animalpara/data/userdata.json"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      setIsLogin(true);
      setLoginUser(JSON.parse(storedUser));
    }
  }, []);

  // 處理登入事件
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const user = UserData.find(user => user.username === username);
      if (!user) {
        setLoginError('無此帳號');
        alert(loginError);
      } else if (user.password !== password) {
        setLoginError('密碼錯誤');
        alert(loginError);
      } else {
        setIsLogin(true);  // 更新父層狀態
        setLoginUser(user);
        localStorage.setItem('loginUser', JSON.stringify(user));  // 保存登入狀態到 localStorage
      }
    } catch (error) {
      console.log("用戶資料讀取失敗", error);
      setLoginError('登入失敗，請稍後再試')
    }
  }

  // 登出
  const handleLogout = () => {
    setIsLogin(false);    // 清除狀態
    // localStorage.removeItem('isLoggedIn');      // 從 localStorage 中移除登入狀態
    localStorage.removeItem('loginUser');      // 從 localStorage 中移除登入狀態
  };

  //快速登入用
  const quickLogin = (qUser) => {
    setUsername(qUser.username);
    setPassword(qUser.password);
  }

  return (
    <div className='row'>
      <div className='col-6'>
        {isLogin ? (
          <div>
            <p>歡迎登入<br />
              {loginUser.nickname}</p>
            <button onClick={handleLogout}>登出</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
      <div className='col-6'>
        <h3>快速登入</h3>
        <ul>
        {UserData.map((qUser) => 
          (
            <li key={qUser.id} onClick={()=>quickLogin(qUser)}>{qUser.username}</li>
          )
        )
        }
        </ul>
      </div>

    </div>
  );
};

export default Login;