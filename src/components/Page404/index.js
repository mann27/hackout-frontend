import React, { Component } from "react";
import Error from "../../templates/images/error.png";

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <img
          alt="Page not found"
          src={Error}
          style={{
            width: 1440,
            height: 820,
            position: "absolute",
            top: this.props.top,
            left: this.props.left
          }}
        />
      </div>
    );
  }
}
