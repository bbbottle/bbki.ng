import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavMainLayout, Nav, HotKeyNav } from "./components";
import { Cover } from "./pages";
import { ROUTES } from "@/constants";

const Extensions = lazy(() => import("./pages/extensions"));
const Tags = lazy(() => import("./pages/tags"));
const Spinner = () => null;

const Content = () => {
  return (
    <Switch>
      <Route path={ROUTES.EXT}>
        <Suspense fallback={<Spinner />}>
          <Extensions />
        </Suspense>
      </Route>
      <Route path={ROUTES.TAGS}>
        <Suspense fallback={<Spinner />}>
          <Tags />
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
