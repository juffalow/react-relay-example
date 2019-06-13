import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SEO from 'components/SEO';
import Quote from 'components/Quote';
import QuotesContainer from 'containers/QuotesContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PaginationContainerCode from './home/PaginationContainerCode';
import HomeCode from './home/HomeCode';

const Home = ({ quotes, hasMore, loadMore }) => (
  <SEO title="Quotes" description="List of Quotes with Authors implemented in React and Relay.">
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1>React and Relay example</h1>
          <p>The whole page (source code on <a href="https://github.com/juffalow/react-relay-example">GitHub</a>) is written in <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://react-bootstrap.netlify.com/">React Bootstrap</a> for UI. On the backend side, there is a GraphQL server (<a href="https://github.com/juffalow/slim-graphql-eloquent-example" target="_blank">PHP</a> / <a href="https://github.com/juffalow/express-graphql-example" target="_blank">Node</a>) and the connection is handled by <a href="https://facebook.github.io/relay/" target="_blank">Relay</a>.</p>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h4>Relay Pagination Container</h4>
          <SyntaxHighlighter language="javascript" showLineNumbers={true} style={vs}>
            {PaginationContainerCode}
          </SyntaxHighlighter>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h4>List of Quotes</h4>
          <SyntaxHighlighter language="jsx" showLineNumbers={true} style={vs}>
            {HomeCode}
          </SyntaxHighlighter>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Quotes</h2>
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
