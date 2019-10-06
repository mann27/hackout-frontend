import React, { Component } from "react";

export default class UserBookItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.bookid}</td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.rating}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}
