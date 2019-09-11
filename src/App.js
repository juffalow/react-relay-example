import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import ForkMe from 'components/ForkMe';
import Footer from 'components/Footer';
// import Home from 'pages/Home'; <Route path="/" exact component={Home} />
import Authors from 'pages/Authors';

const App = () => (
  <Router>
    <>
      <Menu />
      <ForkMe />

      
      <Route path="/authors" exact component={Authors} />

      <Footer />
    </>
  </Router>
);

export default App;
