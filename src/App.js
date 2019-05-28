import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import ForkMe from 'components/ForkMe';
import Footer from 'components/Footer';
import Home from 'pages/Home';

const App = () => (
  <Router>
    <>
      <Menu />
      <ForkMe />

      <Route path="/" exact component={Home} />

      <Footer />
    </>
  </Router>
);

export default App;
