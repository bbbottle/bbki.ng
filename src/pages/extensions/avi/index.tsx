import React from "react";
import { SwitchComponentsRoute } from "@/components";
import { Logs } from "@/pages/extensions/avi/consts";

export const Avi = () => {
  return <SwitchComponentsRoute componentPathList={Logs} />;
};
