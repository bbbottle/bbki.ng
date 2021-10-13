import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavMainLayout, Nav, Cover } from "./components";
import { Extensions } from "./pages/extensions";

const Content = () => {
  return (
    <Switch>
      <Route path="/ext">
        <Extensions />
      </Route>
      <Route path="/" exact>
        <Cover />
      </Route>
    </Switch>
  );
};

export const App = () => {
  return (
    <Router>
      <NavMainLayout nav={<Nav />} main={<Content />} />
    </Router>
  );
};
