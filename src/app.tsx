import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import {
  Footer,
  NavMainLayout,
  Nav,
  HotKeyNav,
  CenterListWithTitleSkeleton,
} from "./components";
import { Cover } from "./pages";
import { ROUTES } from "@/constants";

const Extensions = lazy(() => import("./pages/extensions"));
const Tags = lazy(() => import("./pages/tags"));

const Content = () => {
  return (
    <Switch>
      <Route path={ROUTES.EXT}>
        <Suspense
          fallback={
            <CenterListWithTitleSkeleton titleLength={4} listItemLength={2} />
          }
        >
          <Extensions />
        </Suspense>
      </Route>
      <Route path={ROUTES.TAGS}>
        <Suspense
          fallback={
            <CenterListWithTitleSkeleton
              titleLength={2}
              listItemLength={2}
              listItemWidthArray={[61, 32]}
            />
          }
        >
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

export default Sentry.withProfiler(App, { name: "BBKingApp" });
