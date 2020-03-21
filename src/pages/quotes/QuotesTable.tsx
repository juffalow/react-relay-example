import React from 'react'
import Table from 'react-bootstrap/Table';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import QuoteRow from './QuoteRow';
import { Quote } from '../../types/Quote';

interface Props {
  quotes: Array<Quote>;
}

const QuotesTable = (props: Props) => (
  <Table striped bordered responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Hash</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {
        props.quotes.map(quote => (
          <tr key={quote.id}>
            <QuoteRow quote={quote} />
          </tr>
        ))
      }
    </tbody>
  </Table>
);

const QuotesTableFragmentContainer = createFragmentContainer(QuotesTable, {
  quotes: graphql`
    fragment QuotesTable_quotes on Quote @relay(plural: true) {
      id
      ...QuoteRow_quote
    }
  `
});

export default QuotesTableFragmentContainer;
