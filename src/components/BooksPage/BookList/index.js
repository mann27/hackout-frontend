import React, { Component } from "react";

import BookListItem from "../BookListItem";
import { Table } from "react-bootstrap";

import books from "../books.json";

class BookList extends Component {
  render() {
    console.log(books);

    const Books = books.map(item => {
      return <BookListItem key={item.id} item={item} />;
    });

    return (
      <Table striped bordered hover className="book-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{Books}</tbody>
      </Table>
    );
  }
}

export default BookList;
