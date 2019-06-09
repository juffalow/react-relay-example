import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SEO from 'components/SEO';
import AuthorsContainer from 'containers/AuthorsContainer';
import AuthorsFilter from './authors/AuthorsFilter';
import AuthorsTable from './authors/AuthorsTable';

const Authors = ({ authors, hasMore, loadMore, refetch }) => (
  <SEO title="Authors" description="List of Authors implemented in React and Relay.">
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col>
          <h1>Authors</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, marginBottom: 20 }}>
        <Col>
          <AuthorsFilter refetch={refetch} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AuthorsTable authors={authors} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {
            hasMore ? (
              <Button onClick={loadMore}>Load more</Button>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  </SEO>
);

export default () => (
  <AuthorsContainer render={(props, relay) => (
    <Authors authors={props.authors.edges.map(edge => edge.node)}
      refetch={(params) => {
        relay.refetchConnection(
          9,
          error => {
            console.log(error);
          },
          params,
        );
      }}
      hasMore={relay.hasMore()}
      loadMore={() => {
        if (!relay.hasMore() || relay.isLoading()) {
          return;
        }

        relay.loadMore(
          9,
          error => {
            console.log(error);
          },
        );
      }} />
  )} />
);
