import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  let user = localStorage.getItem('user');

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="info">
      <Container>
        <Navbar.Brand style={{ color: 'whitesmoke' }} href="/">
          <h3>MYFLiX APP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Movies</Nav.Link>
            {isAuth() && <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>}
          </Nav>
          <Nav className="ml-auto">
            {!isAuth() && <Nav.Link href="/">Login</Nav.Link>}
            {isAuth() && <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>}
            {!isAuth() && <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
