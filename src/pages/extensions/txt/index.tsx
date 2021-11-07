import React from "react";
import { SwitchComponentsRoute } from "@/components";
import { ArticleList } from "./consts";

const Txt = () => {
  return <SwitchComponentsRoute componentPathList={ArticleList} />;
};

export default Txt;
