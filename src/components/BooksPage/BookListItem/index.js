import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class BookListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.bookid}</td>
        <td>
          <div className="row">
            <div className="col-md-8">
              <p style={{ fontWeight: "bold" }}>{this.props.item.title}</p>
              <p>copies sold : {this.props.item.nBuys}</p>
            </div>
            <div className="col-md-4">
              <Button
                variant="outline-dark"
                href={`/book/${this.props.item.bookid}`}
              >
                View
              </Button>
            </div>
          </div>
        </td>
        <td>{this.props.item.author}</td>
        <td>{this.props.item.rating}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}
