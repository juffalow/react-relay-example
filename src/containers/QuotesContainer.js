import React from 'react';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from 'environment';

const QuotesList = createPaginationContainer(
  (props) => (props.render(props.query, props.relay)),
  graphql`
  fragment QuotesContainer_query on Query {
    quotes (
      first: $first
      after: $after
    ) @connection(key: "QuotesList_quotes") {
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
  }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.query && props.query.quotes;
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
      query QuotesContainerPaginationQuery(
        $first: Int!
        $after: ID
      ) {
        ...QuotesContainer_query
      }
    `
  }
);

export default ({ render }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query QuotesContainerQuery($first: Int!, $after: ID) {
        ...QuotesContainer_query
      }
    `}
    variables={{ first: 9, after: null }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <QuotesList query={props} render={render} />
      );
    }}
  />
);
