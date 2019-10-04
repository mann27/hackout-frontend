import React, { Component } from "react";
import Navbar from "../Navbar";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Navbar />
        </div>
        <div className="content">Hello</div>
      </div>
    );
  }
}
export default HomePage;
