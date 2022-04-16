import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="About">About Me</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="login">Log In</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="signup">
       Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;