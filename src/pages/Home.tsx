import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from '../components/SEO';
import HomeContainer from './home/HomeContainer';

const Home: React.FC = () => (
  <SEO title="Quotes" description="">
    <Container>
      <Row>
        <Col>
          <h1>Quotes - React &amp; Relay examole project</h1>
          <p className="lead">The whole page is created with <a href="https://create-react-app.dev/" rel="noopener noreferrer" target="_blank">create-react-app</a> without eject. It uses newest version of <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a> (<i>18.0.0</i>) and <a href="https://relay.dev/" rel="noopener noreferrer" target="_blank">Relay</a> (<i>13.0.0</i>) that is now available (<i>19.4.2022</i>) and everything is coded in <a href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank">TypeScript</a>. You can find here how to use <code>useLazyLoadQuery</code>, <code>useFragment</code> and <code>usePaginationFragment</code>. Backend is available in <a href="https://github.com/juffalow/slim-graphql-eloquent-example" rel="noopener noreferrer" target="_blank">PHP</a> and <a href="https://github.com/juffalow/express-graphql-example" rel="noopener noreferrer" target="_blank">NodeJS</a>.</p>
          <p>This project was created because of lot of hours spent searching, trying and debugging. There are several articles and projects about Relay, but those are mostly using older versions, or it is just a small sample of a code without other major parts. Here is a complete web application with everything you need to start using React, Relay and GraphQL.</p>
          <HomeContainer />
          <h2>Want to contribute?</h2>
          <p>I am sure you can find several things that can be coded better, or are not clear. And it really needs tests to be a fully complete project. So if you have time, I would be very happy if you can write me some feedback, or even create a pull request.</p>
        </Col>
      </Row>
    </Container>
  </SEO>
);

export default Home;
