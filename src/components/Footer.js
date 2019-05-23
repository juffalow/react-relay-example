import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom">
    <Container>
      <Row>
        <Col>
          <p style={{ color: '#fff', margin: '10px 0' }}>Created with <i className="fas fa-heart" style={{ color: 'red' }}></i> by <a href="https://juffalow.com" style={{ color: '#fff', textDecoration: 'none' }}>Matej <span style={{ color: 'red' }}>'juffalow'</span> Jellus</a> | 2019</p>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default React.memo(Footer);
