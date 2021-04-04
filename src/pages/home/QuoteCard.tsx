import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Quote } from '../../types/Quote';
import Card from 'react-bootstrap/Card';

interface Props {
  quote: Quote;
}

const QuoteCard = (props: Props) => {
  const quote = useFragment<any>(
    graphql`
      fragment QuoteCard_quote on Quote {
        _id
        text
        author {
          id
          firstName
          lastName
        }
      }`,
    props.quote
  );

  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{quote.text}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{`${quote.author.firstName} ${quote.author.lastName}`}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
