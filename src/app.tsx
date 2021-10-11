import React from "react";
import { Description, NavMainLayout } from "./components";

export const App = () => {
  return <NavMainLayout nav={<span>bbki.ng</span>} main={<Description />} />;
};
