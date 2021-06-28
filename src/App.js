import React, { lazy,Suspense } from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./Components/HomeSection/Home'));
// const Footer = lazy(() => import('./components/Footer/Footer'));
// const ShowCase = lazy(() => import('./components/Section/ShowCase'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <>
    <Suspense fallback={renderLoader()} >
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      </Router>
  </Suspense>
</>
  );
}

export default App;
