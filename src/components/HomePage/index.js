import React, { Component } from "react";
import Navbar from "../Navbar";

import BookList from "./BookList";
import { Button } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Navbar />
        </div>

        <div className="main-content container" style={{ paddingTop: "40px" }}>
          <div className="addbook-container">
            <Button href="/add" variant="dark">
              Add New Book
            </Button>
          </div>
          <div className="booklist-container" style={{ marginTop: "20px" }}>
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
