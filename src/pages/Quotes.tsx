import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from 'components/SEO';
import QuotesContainer from './quotes/QuotesContainer';

const Quotes: React.FC = () => {
  return (
    <SEO title="Quotes" description="List of Quotes with Authors implemented in React and Relay.">
      <Container>
        <Row>
          <Col>
            <h1>Quotes</h1>
          </Col>
        </Row>
        <QuotesContainer />
      </Container>
    </SEO>
  );
};

export default Quotes;
