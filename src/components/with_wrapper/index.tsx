import React from "react";
import { FunctionComponent } from "react";
import { Article } from "@/components/article";
import { AlmostCenterLayout } from "../layout";

export const withCenterWrapper =
  (Component: FunctionComponent) => (props: any) => {
    return (
      <AlmostCenterLayout>
        <Component {...props} />
      </AlmostCenterLayout>
    );
  };

export const withArticleWrapper =
  (Component: FunctionComponent) => (props: any) => {
    return (
      <Article>
        <div className="py-40">
          <Component {...props} />
        </div>
      </Article>
    );
  };
