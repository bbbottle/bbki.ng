import React, { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
  Nav,
  Page,
  ThreeColLayout,
  NotFound,
  ErrorBoundary,
} from "@bbki.ng/components";
import { Footer, HotKeyNav, Stickers } from "./components";
import { Cover } from "./pages";

import Png from "@/pages/extensions/png";
import ArticlePage from "@/pages/extensions/txt/article";
import NowPage from "@/pages/now";
import PhotoProjects from "@/pages/extensions/png/png_projects";
import Tags from "@/pages/tags";
import TagsResult from "@/pages/tags/tag_result";
import Txt from "@/pages/extensions/txt";

import { usePaths } from "@/hooks";
import { Login } from "@/pages/login";
import { SWR } from "@/swr";
import {
  GlobalLoadingContext,
  GlobalLoadingStateProvider,
} from "@/global_loading_state_provider";

const Layout = () => {
  const { isLoading } = useContext(GlobalLoadingContext);
  return (
    <>
      <Page
        nav={
          <Nav paths={usePaths()} className="blur-cover" loading={isLoading} />
        }
        main={<Outlet />}
        footer={isLoading ? <div /> : <Footer />}
      />
    </>
  );
};

const threeColWrapper =
  <T extends object>(Component: any) =>
  (props: T) => {
    return (
      <ThreeColLayout
        middleRenderer={() => (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        )}
      />
    );
  };

const NowInMidCol = threeColWrapper(NowPage);
const ContentInMidCol = threeColWrapper(Txt);
const ArticleInMidCol = threeColWrapper(ArticlePage);
const TagsInMidCol = threeColWrapper(Tags);
const LoginInMidCol = threeColWrapper(Login);
const TagsResultInMidCol = threeColWrapper(TagsResult);

export const App = () => {
  return (
    <SWR>
      <HotKeyNav>
        <Stickers />
        <GlobalLoadingStateProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Png />} />
              <Route path="/projects" element={<Navigate to="/" />} />
              <Route path="/projects/:id" element={<PhotoProjects />} />

              <Route path="now" element={<NowInMidCol />} />
              <Route path="tags" element={<TagsInMidCol />} />
              <Route path="tags/:tag" element={<TagsResultInMidCol />} />

              <Route path="blog" element={<ContentInMidCol />} />
              <Route path="blog/:title" element={<ArticleInMidCol />} />
              <Route path="blog/:title/:id" element={<PhotoProjects />} />

              <Route path="login" element={<LoginInMidCol />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalLoadingStateProvider>
      </HotKeyNav>
    </SWR>
  );
};

export default App;
