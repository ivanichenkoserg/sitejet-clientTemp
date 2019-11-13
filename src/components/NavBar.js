import { Nav, Navbar} from 'react-bootstrap';
import React, { Component } from 'react';

class NavBar extends Component {

    render() {
      return (
        <div >
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand >Language Tester</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="top-nav-bar">
                <Nav.Link href="/">List</Nav.Link>
                <Nav.Link href="/test">Test</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
      );
    }
  }
  
  export default NavBar;

