import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

import Web3 from "web3";

export default class Navbar1 extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
    const accounts = await web3.eth.accounts[0];
    this.setState({ account: accounts });
  }

  constructor(props) {
    super(props);
    this.state = { account: "" };
  }

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
              <Nav.Link>{this.state.account}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
