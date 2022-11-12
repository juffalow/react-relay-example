import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import QuoteCard from './QuoteCard';
import { Quote } from '../../types/Quote';

interface Props {
  quotes: Array<Quote>;
}

const QuotesList = (props: Props) => {
  const quotes = useFragment<any>(
    graphql`
      fragment QuotesList_quotes on Quote @relay(plural: true) {
        id
        ...QuoteCard_quote
      }`,
    props.quotes
  );

  return (
    <Row className="mt-4">
      {
        quotes.map((quote: Quote) => (
          <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
            <QuoteCard quote={quote} />
          </Col>
        ))
      }
    </Row>
  );
}

export default QuotesList;
