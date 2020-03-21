import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer style={{ width: '100%', backgroundColor: '#222', paddingTop: '20px', paddingBottom: '20px', color: '#fff' }}>
    <Container fluid={true}>
      <Row>
        <Col>
          Created with <i className="fas fa-heart" style={{ color: 'red' }}></i> by <a href="https://juffalow.com" style={{ color: '#fff', textDecoration: 'none' }}>Matej <span style={{ color: 'red' }}>'juffalow'</span> Jellus</a> | 2019 - 2020
        </Col>
      </Row>
    </Container>
  </footer>
);

export default React.memo(Footer);
