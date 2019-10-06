import React, { Component } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import IndexRoutes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <IndexRoutes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
