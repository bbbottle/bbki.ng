import React from "react";
import { DemoBox } from "@/demo/DemoBox.js";
import { Spinner } from "@/components/Spinner";

export const SpinnerDemo = () => {
  return (
    <DemoBox style={{ background: "#d1684e", borderColor: "white" }}>
      <Spinner
        disableDotIndicator
        offset={0}
        length={0.3}
        radius={0.056}
        color={[255, 255, 255, 1]}
        multiplier={50000}
      />
    </DemoBox>
  );
};
