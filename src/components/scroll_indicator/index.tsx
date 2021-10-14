import React from "react";
import { SmallDisabledText } from "../disabled_text";

export const ScrollIndicator = () => {
  return (
    <span className="flex flex-col items-center mt-10">
      <SmallDisabledText>|</SmallDisabledText>
      <SmallDisabledText>scroll</SmallDisabledText>
      <SmallDisabledText>|</SmallDisabledText>
    </span>
  );
};
