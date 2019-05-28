import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from 'components/SEO';
import Quote from 'components/Quote';

const Home = () => (
  <SEO title="Home" description="List of Quotes with Authors implemented in React + Relay.">
    <Container className="main">
      <Row>
        <Col>
          <h1>Quotes <small>React + Relay example</small></h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Quote quote="First, solve the problem. Then, write the code." author="Linus Torvalds" />
        </Col>
        <Col>
          <Quote quote="First, solve the problem. Then, write the code." author="Linus Torvalds" />
        </Col>
        <Col>
          <Quote quote="First, solve the problem. Then, write the code." author="Linus Torvalds" />
        </Col>
      </Row>
    </Container>
  </SEO>
);

export default Home;
