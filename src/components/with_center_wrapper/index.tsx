import React from "react";
import { FunctionComponent } from "react";
import { AlmostCenterLayout } from "../layout";

export const withCenterWrapper =
  (Component: FunctionComponent) => (props: any) => {
    return (
      <AlmostCenterLayout>
        <Component {...props} />
      </AlmostCenterLayout>
    );
  };
