import React from "react";
import classnames from "classnames";

type disabledTextProps = {
  children: any;
  className?: string;
};

export const DisabledText = (props: disabledTextProps) => {
  return (
    <span className={classnames("text-gray-400", props.className)}>
      {props.children}
    </span>
  );
};

export const SmallDisabledText = (props: disabledTextProps) => {
  return (
    <small>
      <DisabledText>{props.children}</DisabledText>
    </small>
  );
};
