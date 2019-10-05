import React, { Component } from "react";

import BookListItem from "../BookListItem";
import { Table } from "react-bootstrap";

import axios from "axios";
import Web3 from "web3";

import { BStore_ABI, BStore_ADDRESS } from "../../../config";

class BookList extends Component {
  constructor() {
    super();

    this.state = {
      account: "",
      bookCount: 0,
      books: []
    };

    this.loadBlockChainData = this.loadBlockChainData.bind(this);
  }

  componentDidMount() {
    this.loadBlockChainData();

    axios.get("http://192.168.137.90:5000/getbooks/").then(res => {
      this.setState({ books: res.data });
    });
  }

  async loadBlockChainData() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const bookList = new web3.eth.Contract(BStore_ABI, BStore_ADDRESS);
    this.setState({ bookList });
    const bookCount = await bookList.methods.bookCount().call();
    this.setState({ bookCount: bookCount.toNumber() });
    for (var i = 1; i <= bookCount; i++) {
      const book = await bookList.methods.books(i).call();
      this.setState({
        books: [...this.state.books, book]
      });
    }
    console.log(this.state);
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
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{Books}</tbody>
      </Table>
    );
  }
}

export default BookList;
