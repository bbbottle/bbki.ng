import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Nav, Page } from "@bbki.ng/components";
import { Footer, HotKeyNav } from "./components";
import {
  Cover,
  // NowPage,
  // PhotoProjects,
  // Png,
} from "./pages";

import ArticlePage from "@/pages/extensions/txt/article";
import Ext from "@/pages/extensions";
import NowPage from "@/pages/now";
import PhotoProjects from "@/pages/extensions/png/png_projects";
import Png from "@/pages/extensions/png";
import Tags from "@/pages/tags";
import TagsResult from "@/pages/tags/tag_result";
import Txt from "@/pages/extensions/txt";

import { usePaths } from "@/hooks";

const Layout = () => {
  return (
    <Page
      nav={<Nav paths={usePaths()} className="blur-cover" />}
      main={<Outlet />}
      footer={<Footer />}
    />
  );
};

export const App = () => {
  return (
    <HotKeyNav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cover />} />
          <Route path="ext" element={<Ext />} />
          <Route path="now" element={<NowPage />} />
          <Route path="ext/txt" element={<Txt />} />
          <Route path="ext/txt/:title" element={<ArticlePage />} />
          <Route path="ext/png" element={<Png />} />
          <Route path="ext/png/:title" element={<PhotoProjects />} />
          <Route path="tags" element={<Tags />} />
          <Route path="tags/:tag" element={<TagsResult />} />
        </Route>
      </Routes>
    </HotKeyNav>
  );
};

export default App;
