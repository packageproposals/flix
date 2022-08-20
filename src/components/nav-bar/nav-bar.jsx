import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav-bar.scss';
import { TbMovie, TbUserCircle, TbLogout } from 'react-icons/tb';

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
    <Navbar
      className="navbar"
      collapseOnSelect
      sticky="top"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <h3 className="logo-main pt-2">MYFLiX APP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <TbMovie className="nav-icon" />
              Movies
            </Nav.Link>
            {isAuth() && (
              <Nav.Link href={`/users/${user}`}>
                <TbUserCircle className="nav-icon" />
                {user}
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {!isAuth() && (
              <Nav.Link className="nav-text" href="/">
                Login
              </Nav.Link>
            )}
            {isAuth() && (
              <Nav.Link onClick={onLoggedOut}>
                <TbLogout className="nav-logout" />
                Logout
              </Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link className="nav-text" href="/register">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
