import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Description, NavMainLayout } from "./components";
import { Cover } from "./components/cover";

export const App = () => {
  const mainJsx = (
    <Switch>
      <Route path="/ext">
        <Description />
      </Route>
      <Route path="/">
        <Cover />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <NavMainLayout
        nav={
          <Link to="/">
            <span>index</span>
          </Link>
        }
        main={mainJsx}
      />
    </Router>
  );
};
