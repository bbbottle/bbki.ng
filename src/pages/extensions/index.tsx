import React from "react";
import { ExtensionsList } from "./consts";
import { CenterLinkList } from "@/components/";
import { ROUTE_NAME, ROUTES } from "@/constants";

export default () => {
  return (
    <CenterLinkList list={ExtensionsList} title={ROUTE_NAME[ROUTES.EXT]} />
  );
};
