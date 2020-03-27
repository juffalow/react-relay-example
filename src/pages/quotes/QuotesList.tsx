import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import QuoteCard from './QuoteCard';
import { Quote } from '../../types/Quote';

interface Props {
  quotes: Array<Quote>;
}

const QuotesList = (props: Props) => (
  <Row>
    {
      props.quotes.map(quote => (
        <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
          <QuoteCard quote={quote} />
        </Col>
      ))
    }
  </Row>
);

const QuotesListFragmentContainer = createFragmentContainer(QuotesList, {
  quotes: graphql`
    fragment QuotesList_quotes on Quote @relay(plural: true) {
      id
      ...QuoteCard_quote
    }
  `
});

export default QuotesListFragmentContainer;
