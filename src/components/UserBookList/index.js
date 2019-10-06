import React, { Component } from "react";

import Navbar from "../Navbar";
import axios from "axios";
import UserBookItem from "./UserBookItem";

import { Table } from "react-bootstrap";

export default class UserBookList extends Component {
  render() {
    var bookItem = [];
    axios.get("http://localhost:5000/getuserbooks").then(response => {
      bookItem = response.data.map(item => {
        return <UserBookItem item={item} />;
      });
    });

    return (
      <div>
        <div className="nav-bar">
          <Navbar />
        </div>

        <div className="main-content container" style={{ paddingTop: "40px" }}>
          <h1>List of Books user has bought</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{bookItem}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
