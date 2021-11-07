import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavMainLayout, Nav, HotKeyNav } from "./components";
import { Cover } from "./pages";

const Extensions = lazy(() => import("./pages/extensions"));

const Content = () => {
  return (
    <Switch>
      <Route path="/ext">
        <Suspense fallback={() => null}>
          <Extensions />
        </Suspense>
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
