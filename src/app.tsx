import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Nav } from "@bbki.ng/components";
import { ROUTES } from "@/constants";
import { minDelay } from "@/utils";
import {
  Footer,
  NavMainLayout,
  HotKeyNav,
  CenterListWithTitleSkeleton,
} from "./components";
import { Cover } from "./pages";
import { usePaths } from "@/hooks";

const Extensions = lazy(() => minDelay(import("./pages/extensions")));
const Tags = lazy(() => minDelay(import("./pages/tags")));

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
    <HotKeyNav>
      <NavMainLayout
        nav={
          <Nav paths={usePaths()} className="sticky top-0 blur-cover z-50" />
        }
        main={<Content />}
        footer={<Footer />}
      />
    </HotKeyNav>
  );
};

export default App;
