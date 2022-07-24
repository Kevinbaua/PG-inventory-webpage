import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="primary" variant="dark" >
        <Container fluid="md" className="justify-content-between">

          <Navbar.Brand href="#home" className='fw-bold fs-3 px-0 mx-0 border border-0'>PG Inventory</Navbar.Brand>

          <Nav className="fs-5">
            <Nav.Link href="#music" className='px-3'>Music</Nav.Link>
            <Nav.Link href="#sports" className='px-3'>Sports</Nav.Link>
            <Nav.Link href="#tech" className='px-3'>Tech</Nav.Link>
            <Nav.Link href="#contact" className='ms-5'>Contact Us</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
