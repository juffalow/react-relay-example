import React from 'react';
import Card from 'react-bootstrap/Card';

const Quote = ({ quote, author }) => (
  <Card>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>{quote}</p>
        <footer className="blockquote-footer">
          <cite title="Source Title">{author}</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
);

export default Quote;
