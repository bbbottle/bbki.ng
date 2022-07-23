import React from "react";
import { DemoBox } from "@/demo/DemoBox.js";
import { Spinner } from "@/components/Spinner";

export const SpinnerDemo = () => {
  return (
    <DemoBox style={{ background: "#dc5530", borderColor: "white" }}>
      <Spinner
        disableDotIndicator
        offset={0}
        length={0.4}
        color={[255, 255, 255, 1]}
        multiplier={20000}
      />
    </DemoBox>
  );
};
