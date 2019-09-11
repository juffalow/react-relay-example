import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SEO from 'components/SEO';
import Quote from 'components/Quote';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'environment';

const Home = ({ quotes, relay }) => (
  <SEO title="Quotes" description="List of Quotes with Authors implemented in React and Relay.">
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col>
          <h1>Quotes</h1>
        </Col>
      </Row>
      <Row>
        {
          quotes.quotes.edges.map(edge => edge.node).map(quote => (
            <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
              <Quote quote={quote.quote} author={`${quote.author.firstName} ${quote.author.lastName}`} />
            </Col>
          ))
        }
      </Row>
      <Row>
        <Col className="text-center">
          {
            quotes.quotes.pageInfo.hasNextPage ? (
              <Button onClick={() => relay.loadMore(9, null)}>Load more</Button>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  </SEO>
);

const HomeContainer = createPaginationContainer(
  Home,
  {
    quotes: graphql`
      fragment Home_quotes on Query {
        quotes (
          first: $first
          after: $after
        ) @connection(key: "Home_quotes") {
          totalCount
          edges  {
            node {
              ... on Quote {
                id
                _id
                quote
                author {
                  id
                  _id
                  firstName
                  lastName
                }
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.quotes.quotes;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        first: count,
        after: cursor,
      };
    },
    query: graphql`
      query HomeContainerPaginationQuery(
        $first: Int!
        $after: ID
      ) {
        ...Home_quotes
      }
    `
  }
);

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query HomeContainerQuery($first: Int!, $after: ID) {
        ...Home_quotes
      }
    `}
    variables={{ first: 9 }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <HomeContainer quotes={props} />
      );
    }}
  />
);