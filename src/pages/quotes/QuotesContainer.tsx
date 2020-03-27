import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QueryRenderer, createPaginationContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import environment from 'environment';
import QuotesList from './QuotesList';
import Filter from './Filter';
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

const refetch = (relay: any, values: any) => {
  relay.refetchConnection(
    10,
    (error: any) => {
      console.log(error);
    },
    {
      city: values.city,
      postCode: values.postCode,
      orderBy: [{
        field: values.orderField,
        direction: values.orderDirection,
      }],
    },
  );
};

const Quotes: React.FC<Props> = (props: Props) => (
  <>
    <Row className="mt-4 mb-4">
      <Col>
        <Filter onUpdate={(values: any) => refetch(props.relay, values)} />
      </Col>
    </Row>
    <QuotesList quotes={props.quotes.quotes.edges.map(edge => edge.node)} />
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

const QuotesContainer = createPaginationContainer(
  Quotes,
  {
    quotes: graphql`
      fragment QuotesContainer_quotes on Query {
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
      query QuotesContainerPaginationQuery(
        $first: Int!
        $after: String
      ) {
        ...QuotesContainer_quotes
      }
    `
  }
);

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query QuotesContainerQuery($first: Int, $after: String) {
          ...QuotesContainer_quotes
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
        <QuotesContainer quotes={props} />
      );
    }}
  />
);
