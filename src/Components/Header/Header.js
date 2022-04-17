import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSignOut = () =>{
    signOut(auth);
}
    return (
        <div className='sticky-top' >
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="home">BechaKena-Sikkha</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="About">About Me</Nav.Link>
      
    </Nav>
    <Nav>
      {
       user ?
       <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
         :
      <Nav.Link as={Link} to="login">
       Login
      </Nav.Link>}
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