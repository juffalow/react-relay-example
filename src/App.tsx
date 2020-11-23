import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import ForkMe from 'components/ForkMe';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Quotes from 'pages/Quotes';
import Authors from 'pages/Authors';

const App = () => (
  <Router>
    <>
      <Menu />
      <ForkMe />
      <main role="main" className="flex-shrink-0" style={{ marginTop: 25, marginBottom: 81 }}>
        <Route path="/quotes" component={Quotes} />
        <Route path="/authors" component={Authors} />
        <Route path="/" component={Home} exact />
      </main>
      <Footer />
    </>
  </Router>
);

export default App;
