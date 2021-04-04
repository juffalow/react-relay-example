import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ForkMe from './components/ForkMe';
import Footer from './components/Footer';
import Home from './pages/Home';
import Authors from './pages/Authors';
import environment from './environment';

const App = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Router>
      <>
        <Menu />
        <ForkMe />
        <main role="main" className="flex-shrink-0" style={{ marginTop: 25, marginBottom: 81 }}>
          <Route path="/authors" component={Authors} />
          <Route path="/" component={Home} exact />
        </main>
        <Footer />
      </>
    </Router>
  </RelayEnvironmentProvider>
);

export default App;
