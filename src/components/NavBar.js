import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Lists</Nav.Link>
                <Nav.Link href="/services">Test</Nav.Link>
                <NavDropdown title="Create New" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/product/new">Product</NavDropdown.Item>
                    <NavDropdown.Item href="/service/new">Service</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        </div>
      );
    }
  }
  
  export default NavBar;

