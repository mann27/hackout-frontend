import React, { Component } from "react";

export default class AddBook extends Component {
  render() {
    return (
      <div>
        <div className="addbook-title">Add a new Book</div>
        <form>
          <label>Book Name</label>
          <input type="text" />
          <label>Price</label>
          <input type="number" />
        </form>
      </div>
    );
  }
}
