import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage";

const IndexRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
  );
};

export default IndexRoutes;
