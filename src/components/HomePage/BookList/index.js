import React, { Component } from "react";

import BookListItem from "../BookListItem";
import { Table } from "react-bootstrap";

export default class BookList extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <BookListItem />
        </tbody>
      </Table>
    );
  }
}
