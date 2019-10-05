import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";
import Page404 from "../components/Page404";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/HomePage/AddBook";

const IndexRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/book/:id" component={BookDetails} />
      <Route path="/add" component={AddBook} />
      <Route component={Page404} />
    </Switch>
  );
};

export default IndexRoutes;
