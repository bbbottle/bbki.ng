import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavMainLayout, Nav, HotKeyNav } from "./components";
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
      <HotKeyNav>
        <NavMainLayout nav={<Nav />} main={<Content />} footer={<Footer />} />
      </HotKeyNav>
    </Router>
  );
};
