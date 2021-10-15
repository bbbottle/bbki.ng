import React from "react";
import { ExtensionsList } from "./consts";
import { SwitchComponentsRoute } from "@/components/";

export const Extensions = () => {
  return <SwitchComponentsRoute componentPathList={ExtensionsList} />;
};
