import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">Hackout</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Features</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/User">User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
