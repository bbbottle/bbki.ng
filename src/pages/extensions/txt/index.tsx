import React from "react";
import { SwitchComponentsRoute } from "@/components";
import { ArticleList } from "./consts";

export const Txt = () => {
  return <SwitchComponentsRoute componentPathList={ArticleList} />;
};
