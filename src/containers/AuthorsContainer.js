/*
import React from 'react';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'environment';

const AuthorsList = createPaginationContainer(
  (props) => (props.render(props.query, props.relay)),
  graphql`
  fragment AuthorsContainer_query on Query {
    authors (
      first: $first
      after: $after
      firstName: $firstName
      lastName: $lastName
      orderBy: $orderBy
    ) @connection(key: "AuthorsList_authors") {
      totalCount
      edges  {
        node {
          ... on Author {
            id
            _id
            firstName
            lastName
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
  }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.query && props.query.authors;
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
        ...AuthorsContainer_query
      }
    `
  }
);

export default ({ render }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AuthorsContainerQuery($first: Int!, $after: ID, $firstName: String, $lastName: String, $orderBy: [AuthorOrder]) {
        ...AuthorsContainer_query
      }
    `}
    variables={{ first: 9, after: null, firstName: null, lastName: null, orderBy: null }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <AuthorsList query={props} render={render} />
      );
    }}
  />
);
*/
