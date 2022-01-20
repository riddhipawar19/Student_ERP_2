import React from 'react';
import './Navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar1() {
  return <>
  <Navbar id="navbar" expand="lg">
  <Container fluid>
  <div></div>
    <Navbar.Brand id='logo' href="#">LinkCode</Navbar.Brand>
    <Navbar.Toggle id="sidebar" aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
        <Nav.Link id='menus' href="#">Home</Nav.Link >
        <Nav.Link id='menus' href="#enroll_now">About</Nav.Link >
        <Nav.Link id='menus' href="#enroll_now">Contact us</Nav.Link >
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>;
}

export default Navbar1;
