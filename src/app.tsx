import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavMainLayout, Nav } from "./components";
import { Extensions, Cover } from "./pages";

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
      <NavMainLayout nav={<Nav />} main={<Content />} footer={<Footer />} />
    </Router>
  );
};
