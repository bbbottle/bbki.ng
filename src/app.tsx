import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Nav, Page } from "@bbki.ng/components";
import { Footer, HotKeyNav } from "./components";
import {
  ArticlePage,
  Cover,
  Ext,
  NowPage,
  PhotoProjects,
  Png,
  Tags,
  TagsResult,
  Txt,
} from "./pages";
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
