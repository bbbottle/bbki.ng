import React from "react";
import { pathObj } from "@/types/path";
import { CenterLinkList } from "@/components";

type switchComponentsRouteProps = {
  title?: string;
  componentPathList: pathObj[];
};

export const SwitchComponentsRoute = (props: switchComponentsRouteProps) => {
  const { componentPathList, title } = props;
  return (
    <>
      <CenterLinkList list={componentPathList} title={title} />
    </>
  );
};
