import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer';
import AnimalParaNavbar from './components/navbar/navbar-bt';
// import AnimalParaNavbar from './components/animalpara/navbar';
import "./App.css";
import routes from './routes';
import routesBt from './routes-bt';
import LoginModal from './components/animalpara/LoginModal';

function App() {
  const location = useLocation();

  const allRoutes = [...routes, ...routesBt];

  const currentRoute = allRoutes.find(route => route.path === location.pathname);
  const isAniPara = currentRoute && currentRoute.proj === 'AnimalPara';

  useEffect(() => {
    
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    } else {
      document.title = "My Portfolio"; // 預設標題
    }
  }, [location]);  // 從 routes1 中找到與當前路徑匹配的路由



  return (
    <>
      <div className='maincontainer'>
        {isAniPara ? <AnimalParaNavbar /> : <Navbar />}
        <main>
          <Routes>
            {allRoutes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
      {isAniPara && <LoginModal />}
    </>
  );
}

export default App;
