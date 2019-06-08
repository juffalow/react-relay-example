import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from 'components/SEO';
import Quote from 'components/Quote';
import QuotesContainer from 'containers/QuotesContainer';

const Home = ({ quotes }) => (
  <SEO title="Quotes" description="List of Quotes with Authors implemented in React + Relay.">
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col>
          <h1>Quotes <small>React and Relay example</small></h1>
        </Col>
      </Row>
      <Row>
        {
          quotes.map(quote => (
            <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
              <Quote quote={quote.quote} author={`${quote.author.firstName} ${quote.author.lastName}`} />
            </Col>
          ))
        }
      </Row>
    </Container>
  </SEO>
);

export default () => (
  <QuotesContainer render={(props, relay) => (
    <Home quotes={props.quotes.edges.map(edge => edge.node)}
      refetch={(params) => {
        relay.refetchConnection(
          9,
          error => {
            console.log(error);
          },
          params,
        );
      }}
      isLoading={relay.isLoading}
      hasMore={relay.hasMore}
      loadMore={relay.loadMore} />
  )} />
);
