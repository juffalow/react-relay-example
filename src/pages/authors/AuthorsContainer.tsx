import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import environment from 'environment';
import AuthorsTable from './AuthorsTable';
import Filter from './Filter';
import { Author } from '../../types/Author';

interface Props {
  authors: {
    authors: {
      edges: Array<{
        node: Author
      }>
    },
  };
  relay: any;
}

const refetch = (relay: any, values: any) => {
  relay.refetchConnection(
    10,
    (error: any) => {
      console.log(error);
    },
    values,
  );
};

const Authors: React.FC<Props> = (props: Props) => (
  <>
    <Row className="mt-4 mb-4">
      <Col>
        <Filter onUpdate={(values: any) => refetch(props.relay, values)} />
      </Col>
    </Row>
    <AuthorsTable authors={props.authors.authors.edges.map(edge => edge.node)} />
    <Row className="mt-4">
      <Col>
        {
          props.relay.hasMore() &&
          <Button onClick={() => props.relay.loadMore(9, null)}>Load more</Button>
        }
      </Col>
    </Row>
  </>
);

const AuthorsContainer = createPaginationContainer(
  Authors,
  {
    authors: graphql`
      fragment AuthorsContainer_authors on Query {
        authors (
          first: $first
          after: $after
          firstName: $firstName
          lastName: $lastName
          orderBy: $orderBy
        ) @connection(key: "AuthorsTable_authors") {
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
    getConnectionFromProps(props: any) {
      return props.authors.authors;
    },
    getFragmentVariables(prevVars: any, totalCount: number) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props: any, { count, cursor }, fragmentVariables: any) {
      return {
        first: count,
        after: cursor,
        firstName: fragmentVariables.firstName,
        lastName: fragmentVariables.lastName,
        orderBy: fragmentVariables.orderBy,
      };
    },
    query: graphql`
      query AuthorsContainerPaginationQuery(
        $first: Int!
        $after: String
        $firstName: String
        $lastName: String
        $orderBy: [AuthorsOrder]
      ) {
        ...AuthorsContainer_authors
      }
    `
  }
);

export default function RelayAuthorsContainer() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AuthorsContainerQuery($first: Int, $after: String, $firstName: String, $lastName: String, $orderBy: [AuthorsOrder]) {
            ...AuthorsContainer_authors
        }
      `}
      variables={{ first: 10, after: null, firstName: null, lastName: null, orderBy: [{ field: 'ID', direction: 'ASC' }] }}
      render={({error, props}: any) => {

        if (error) {
          return (
            <Alert variant={'danger'}>
              Unexpected error occured! Please contact maintainer or try again later.
            </Alert>
          );
        }

        if (!props) {
          return ( <Spinner animation="border" /> );
        }

        return (
          <AuthorsContainer authors={props} />
        );
      }}
    />
  );
}
