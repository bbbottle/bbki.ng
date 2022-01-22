import React from "react";
import { ProjectList } from "./consts";
import { CenterLinkList, SwitchComponentsRoute } from "@/components";

const Png = () => {
  return <SwitchComponentsRoute componentPathList={ProjectList} />;
};

export default () => {
  return <CenterLinkList list={ProjectList} title="图片" />;
};
