import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import AnimalParaNavbar from './components/navbar/navbarAP';
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

  const currentRoute = allRoutes.find(route => route.path === location.pathname);
  const isAniPara = currentRoute && currentRoute.proj === 'AnimalPara';

  useEffect(() => {
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    } else {
      document.title = "My Portfolio";
    }
  }, [location]);

  function PageWrapper({ children }) {
    return (
      <>
        {!currentRoute.title ? (<></>) : (
          <div className='title col-12 bg-dark text-center text-white p-3'>
            <h2>{currentRoute.title}</h2>
          </div>
        )}
        {children}
      </>
    );
  }

  return (
    <>
      <div className='maincontainer'>
        {isAniPara ? <AnimalParaNavbar /> : <Navbar />}
        <main>
          <Routes>
            {allRoutes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={
                <PageWrapper>
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