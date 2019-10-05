import React, { Component } from "react";

export default class Review extends Component {
  render() {
    return <li>{this.props.data}</li>;
  }
}
