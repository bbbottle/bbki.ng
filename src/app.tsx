import React from "react";
import { NavMainLayout } from "./components";
import { Cover } from "./components/cover";

export const App = () => {
  return <NavMainLayout nav={<span>index</span>} main={<Cover />} />;
};
