import React from "react";

type disabledTextProps = {
  children: any;
};

export const DisabledText = (props: disabledTextProps) => {
  return <span className="text-gray-400">{props.children}</span>;
};

export const SmallDisabledText = (props: disabledTextProps) => {
  return (
    <small>
      <DisabledText>{props.children}</DisabledText>
    </small>
  );
};
