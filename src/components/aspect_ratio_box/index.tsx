import classnames from "classnames";
import React from "react";

type aspectRatioBoxProps = {
  width: number | string;
  hwRatio: number;
  className?: string;
  children?: any;
};

export const AspectRatioBox = (props: aspectRatioBoxProps) => {
  const { className, width, hwRatio, children } = props;
  const innerStyle = {
    width: "100%",
    paddingTop: `${hwRatio * 100}%`,
  };

  return (
    <div
      style={{ width, maxWidth: "100%" }}
      className={classnames(className, "relative")}
    >
      <div style={innerStyle} />
      {children && (
        <div className="absolute top-0 bottom-0 left-0 right-0">{children}</div>
      )}
    </div>
  );
};
