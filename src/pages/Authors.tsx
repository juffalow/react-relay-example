import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from '../components/SEO';
import AuthorsContainer from './authors/AuthorsContainer';

const Authors: React.FC = () => {
  return (
    <SEO title="Authors" description="List of Authors implemented in React and Relay.">
      <Container>
        <Row>
          <Col>
            <h1>Authors</h1>
          </Col>
        </Row>
        <AuthorsContainer />
      </Container>
    </SEO>
  );
};

export default Authors;
