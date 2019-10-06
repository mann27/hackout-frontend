import React, { Component } from "react";

import BookListItem from "../BookListItem";
import { Table } from "react-bootstrap";

import axios from "axios";

class BookList extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/getbooks").then(res => {
      this.setState({ books: res.data });
    });
  }

  render() {
    const Books = this.state.books.map(item => {
      return <BookListItem key={item.id} item={item} />;
    });

    return (
      <Table striped bordered hover className="book-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{Books}</tbody>
      </Table>
    );
  }
}

export default BookList;
