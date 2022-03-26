import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  Nav,
  Page,
  ThreeColLayout,
  NotFound,
  ErrorBoundary,
} from "@bbki.ng/components";
import { Footer, HotKeyNav, Stickers } from "./components";
import { Cover } from "./pages";

import ArticlePage from "@/pages/extensions/txt/article";
import NowPage from "@/pages/now";
import PhotoProjects from "@/pages/extensions/png/png_projects";
import Tags from "@/pages/tags";
import TagsResult from "@/pages/tags/tag_result";
import Txt from "@/pages/extensions/txt";

import { usePaths } from "@/hooks";
import { Login } from "@/pages/login";
import { SWR } from "@/swr";

const Layout = () => {
  return (
    <>
      <Page
        nav={<Nav paths={usePaths()} className="blur-cover" />}
        main={
          <ThreeColLayout
            middleRenderer={() => (
              <ErrorBoundary>
                <Outlet />
              </ErrorBoundary>
            )}
            rightRenderer={() => <Stickers />}
          />
        }
        footer={<Footer />}
      />
    </>
  );
};

export const App = () => {
  return (
    <SWR>
      <HotKeyNav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Cover />} />
            <Route path="now" element={<NowPage />} />
            <Route path="content" element={<Txt />} />
            <Route path="content/:title" element={<ArticlePage />} />
            <Route path="content/:title/:id" element={<PhotoProjects />} />
            <Route path="tags" element={<Tags />} />
            <Route path="login" element={<Login />} />
            <Route path="tags/:tag" element={<TagsResult />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HotKeyNav>
    </SWR>
  );
};

export default App;
