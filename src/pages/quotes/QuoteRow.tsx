import React from 'react'
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Quote } from '../../types/Quote';

interface Props {
  quote: Quote;
}

const UserRow = (props: Props) => (
  <>
    <td>{props.quote._id}</td>
    <td>{props.quote.text}</td>
    <td>{props.quote.createdAt}</td>
  </>
);

const QuoteRowFragmentContainer = createFragmentContainer(UserRow, {
  quote: graphql`
     fragment QuoteRow_quote on Quote {
        _id
        text
        createdAt
     }
  `
});

export default QuoteRowFragmentContainer;