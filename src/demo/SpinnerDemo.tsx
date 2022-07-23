import React from "react";
import { DemoBox } from "@/demo/DemoBox.js";
import { Spinner } from "@/components/Spinner";

export const SpinnerDemo = () => {
  return (
    <DemoBox>
      <Spinner disableDotIndicator offset={0} />
    </DemoBox>
  );
};
