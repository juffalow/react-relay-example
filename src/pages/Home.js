import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from 'components/SEO';

const Home = () => (
  <SEO title="Home" description="">
    <Container className="main">
      <Row>
        <Col>
          <h1>Quotes - react & relay example</h1>
          <p>New application for everyone to store results from matches.</p>
        </Col>
      </Row>
    </Container>
  </SEO>
);

export default Home;