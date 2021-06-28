import React, { lazy,Suspense } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
// const NavBar = lazy(() => import('./components/Header/NavBar'));
// const Footer = lazy(() => import('./components/Footer/Footer'));
// const ShowCase = lazy(() => import('./components/Section/ShowCase'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <>
    <Suspense fallback={renderLoader()} >
 
  </Suspense>
</>
  );
}

export default App;
