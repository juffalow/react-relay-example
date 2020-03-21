import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import ForkMe from 'components/ForkMe';
import Footer from 'components/Footer';
// import Home from 'pages/Home';
// import Authors from 'pages/Authors';
// <Route path="/" exact component={Home} />
// <Route path="/authors" exact component={Authors} />
import Quotes from 'pages/Quotes';

const App = () => (
  <Router>
    <>
      <Menu />
      <ForkMe />
      <main role="main" className="flex-shrink-0" style={{ marginTop: 25, marginBottom: 25 }}>
        <Route path="/quotes" component={Quotes} />
      </main>

      <Footer />
    </>
  </Router>
);

export default App;
