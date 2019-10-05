import React, { Component } from "react";
import Navbar from "../Navbar";

import BookList from "./BookList";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Navbar />
        </div>
        <div className="main-content container" style={{ paddingTop: "40px" }}>
          <BookList />
        </div>
      </div>
    );
  }
}
export default HomePage;
