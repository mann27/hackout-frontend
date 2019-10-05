import React, { Component } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import Navbar from "../../Navbar";

export default class AddBook extends Component {
  constructor() {
    super();

    this.state = {
      account: "",
      booknameValue: "",
      bookpriceValue: 0,
      bookcoverValue: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      account,
      booknameValue,
      bookpriceValue,
      bookcoverValue
    } = this.state;
    const book = {
      account,
      booknameValue,
      bookpriceValue,
      bookcoverValue
    };

    console.log(book);

    axios.get(
      `http://localhost:5000/${book.bookpriceValue}/${book.booknameValue}/${book.bookcoverValue}`
    );

    //snail adding to db here

    this.setState({
      bookpublisherValue: "",
      booknameValue: "",
      bookpriceValue: 0,
      bookcoverValue: ""
    });
  };

  render() {
    return (
      <div>
        <div className="nav-bar">
          <Navbar />
        </div>
        <div className="main-content container" style={{ paddingTop: "40px" }}>
          <div className="addbook-title">
            <h1>Add a new Book</h1>
          </div>
          <div className="addbook-form-container" style={{ marginTop: "30px" }}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  name="booknameValue"
                  placeholder="Enter the name of document"
                  value={this.state.booknameValue}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="bookpriceValue"
                  value={this.state.bookpriceValue}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Book cover url</Form.Label>
                <Form.Control
                  type="text"
                  name="bookcoverValue"
                  placeholder="add a url link of book cover"
                  value={this.state.bookcoverValue}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
