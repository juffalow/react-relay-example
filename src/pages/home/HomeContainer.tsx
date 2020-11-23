import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import environment from 'environment';
import QuotesList from '../quotes/QuotesList';
import { Quote } from '../../types/Quote';

interface Props {
  quotes: {
    quotes: {
      edges: Array<{
        node: Quote
      }>
    },
  };
  relay: any;
}

const Quotes: React.FC<Props> = (props: Props) => (
  <>
    <QuotesList quotes={props.quotes.quotes.edges.map(edge => edge.node)} />
    <Row className="mt-4 text-center">
      <Col>
        {
          props.relay.hasMore() &&
          <Button onClick={() => props.relay.loadMore(9, null)}>Load more</Button>
        }
      </Col>
    </Row>
  </>
);

const HomeContainer = createPaginationContainer(
  Quotes,
  {
    quotes: graphql`
      fragment HomeContainer_quotes on Query {
        quotes (
          first: $first
          after: $after
        ) @connection(key: "QuotesList_quotes") {
          totalCount
          edges  {
            node {
              ...QuotesList_quotes
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
      return props.quotes.quotes;
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
      };
    },
    query: graphql`
      query HomeContainerPaginationQuery(
        $first: Int!
        $after: String
      ) {
        ...HomeContainer_quotes
      }
    `
  }
);

export default function RelayHomeContainer() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeContainerQuery($first: Int, $after: String) {
            ...HomeContainer_quotes
        }
      `}
      variables={{ first: 10, after: null }}
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
          <HomeContainer quotes={props} />
        );
      }}
    />
  );
}
