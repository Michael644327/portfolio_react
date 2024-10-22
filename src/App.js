import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import NavbarAP from './components/navbar/navbarAP';
import Footer from './components/footer';
import "./App.css";
import routes from './routes';
import routesAP from './routesAP';

function App() {

  return (
    <AppContent />
  );
}

function AppContent() {
  const location = useLocation();
  const allRoutes = [...routes, ...routesAP];
  // const [isLogin, setIsLogin] = useState({ email: '', password: '' });

  // const currentRoute = allRoutes.find(route => route.path === location.pathname);
  const currentRoute = allRoutes.find(route => route?.path && matchPath(route.path, location.pathname));
  const isAniPara = currentRoute && currentRoute.proj === 'AnimalPara';

  useEffect(() => {
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    } else {
      document.title = "My Portfolio";
    }
  }, [location, currentRoute]);

  function PageWrapper({ children, title }) {
    return (
      <>
        {title ? (
          <div className='title col-12 bg-dark text-center text-white p-3'>
            <h2>{title}</h2>
          </div>
        ) : null}
        {children}
      </>
    );
  }

  return (
    <>
      <div className='maincontainer'>
        {isAniPara ? <NavbarAP /> : <Navbar />}
        <main>
          <Routes>
            {allRoutes.map(({ path, element: Component, title, h2Title }) => (
              <Route key={path} path={path} element={
                <PageWrapper title={h2Title ? title : null}>
                  <Component />
                </PageWrapper>} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;