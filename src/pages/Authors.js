import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SEO from 'components/SEO';
import AuthorsFilter from './authors/AuthorsFilter';
import AuthorsTable from './authors/AuthorsTable';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'environment';

const Authors = ({ authors, relay }) => (
  <SEO title="Authors" description="List of Authors implemented in React and Relay.">
    <Container style={{ marginTop: 20, marginBottom: 20 }}>
      <Row>
        <Col>
          <h1>Authors</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, marginBottom: 20 }}>
        <Col>
          <AuthorsFilter refetch={relay.refetchConnection} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AuthorsTable authors={authors.authors.edges.map(edge => edge.node)} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {
            authors.authors.pageInfo.hasNextPage ? (
              <Button onClick={() => relay.loadMore(9, null)}>Load more</Button>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  </SEO>
);

const AuthorsContainer = createPaginationContainer(
  Authors,
  {
    authors: graphql`
      fragment Authors_authors on Query {
        authors (
          first: $first
          after: $after
          firstName: $firstName
          lastName: $lastName
          orderBy: $orderBy
        ) @connection(key: "Authors_authors") {
          totalCount
          edges  {
            node {
              ...AuthorsTable_authors
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
      return props.authors.authors;
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
      query AuthorsContainerPaginationQuery(
        $first: Int!
        $after: ID
        $firstName: String
        $lastName: String
        $orderBy: [AuthorOrder]
      ) {
        ...Authors_authors
      }
    `
  }
);

export default ({ render }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AuthorsContainerQuery($first: Int!, $after: ID, $firstName: String, $lastName: String, $orderBy: [AuthorOrder]) {
        ...Authors_authors
      }
    `}
    variables={{ first: 9 }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <AuthorsContainer authors={props} />
      );
    }}
  />
);
