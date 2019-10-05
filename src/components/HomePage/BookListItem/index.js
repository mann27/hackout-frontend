import React, { Component } from "react";

export default class BookListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.author}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}
