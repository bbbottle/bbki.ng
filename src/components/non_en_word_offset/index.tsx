import React from "react";

type nonEnWordOffsetProps = {
  children: string;
  offset?: number;
};

export const NonEnWordOffset = (props: nonEnWordOffsetProps) => {
  const { children, offset = 2 } = props;
  const isEnWord = /[a-z]+/.test(children);
  if (isEnWord) {
    return <span>{children}</span>;
  }

  return (
    <span className="relative" style={{ top: offset }}>
      {children}
    </span>
  );
};
