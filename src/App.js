import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import AnimalParaNavbar from './components/navbar/navbarAP';
import Footer from './components/footer';
import "./App.css";
import routes from './routes';
import routesAP from './routesAP';

function App() {
  const location = useLocation();
  const allRoutes = [...routes, ...routesAP];

  const currentRoute = allRoutes.find(route => route.path === location.pathname);
  const isAniPara = currentRoute && currentRoute.proj === 'AnimalPara';

  useEffect(() => {
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    } else {
      document.title = "My Portfolio";
    }
  }, [location]);


  // children - 包含傳入的所有子元素
  // 經過PageWrapper為頁面套一段router.title的標題文字
  function PageWrapper({ children }) {
    return (
      <>
        <div className='title col-12 bg-dark text-center text-white p-3'>
          <h2>{currentRoute?.title || ''}</h2>
        </div>
        {children}
      </>
    )
  }

  return (
    <>
      <div className='maincontainer'>
        {isAniPara ? <AnimalParaNavbar /> : <Navbar />}
        <main>
        <Router basename="/portfolio">
          <Routes>
            {allRoutes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={
                <PageWrapper>
                  <Component />
                </PageWrapper>} />
            ))}
          </Routes>
          </Router>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
