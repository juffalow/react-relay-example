import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './QuotesLoader.css';

interface Props {
  count?: number;
}

const QuotesLoader = (props: Props) => (
  <Row className="mt-4">
    {
      Array.apply(null, Array(props.count)).map(() => (
        <Col md={4} style={{ marginBottom: 20 }}>
          <Card className="bar-loader" style={{ minHeight: 125 }} />
        </Col>
      ))
    }
  </Row>
)

QuotesLoader.defaultProps = {
  count: 3,
}

export default QuotesLoader;
