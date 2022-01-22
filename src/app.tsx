import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Nav } from "@bbki.ng/components";
import { Footer, NavMainLayout, HotKeyNav } from "./components";
import {
  ArticlePage,
  Cover,
  Ext,
  PhotoProjects,
  Png,
  Tags,
  TagsResult,
  Txt,
} from "./pages";
import { usePaths } from "@/hooks";

const Layout = () => {
  return (
    <NavMainLayout
      nav={<Nav paths={usePaths()} className="sticky top-0 blur-cover z-50" />}
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
