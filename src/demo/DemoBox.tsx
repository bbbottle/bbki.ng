import React, { ReactNode } from "react";

export const DemoBox = (props: { children?: ReactNode }) => {
  return (
    <div className="grid place-items-center md:p-32 border-gray-400 aspect-square border border-dotted">
      {props.children}
    </div>
  );
};
