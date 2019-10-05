import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import Navbar from "../../Navbar";

export default class AddBook extends Component {
  constructor() {
    super();

    this.state = {
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
    const { booknameValue, bookpriceValue, bookcoverValue } = this.state;
    const book = {
      booknameValue,
      bookpriceValue,
      bookcoverValue
    };

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
            <Form>
              <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the name of document"
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" onChange={this.onChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Book cover url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="add a url link of book cover"
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
