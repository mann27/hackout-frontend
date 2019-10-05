import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class BookListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>
          <div className="row">
            <div className="col-md-8">
              <p style={{ fontWeight: "bold" }}>{this.props.item.name}</p>
              <p>copies sold : 24</p>
            </div>
            <div className="col-md-4">
              <Button
                variant="outline-dark"
                href={`/book/${this.props.item.id}`}
              >
                View
              </Button>
            </div>
          </div>
        </td>
        <td>{this.props.item.author}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}
