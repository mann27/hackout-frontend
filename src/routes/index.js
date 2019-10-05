import React from "react";
import { Switch, Route } from "react-router-dom";

import BooksPage from "../components/BooksPage";
import Page404 from "../components/Page404";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/BooksPage/AddBook";
import HomePage from "../components/HomePage";

const IndexRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/books" component={BooksPage} />
      <Route path="/book/:id" component={BookDetails} />
      <Route path="/add" component={AddBook} />
      <Route component={Page404} />
    </Switch>
  );
};

export default IndexRoutes;
