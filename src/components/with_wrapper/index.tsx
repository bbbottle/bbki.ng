import React from "react";
import { FunctionComponent } from "react";
import { Article } from "@/components/article";
import { AlmostCenterLayout, ThreeColLayout } from "../layout";

export const withCenterWrapper =
  (Component: FunctionComponent) => (props: any) => {
    return (
      <AlmostCenterLayout>
        <Component {...props} />
      </AlmostCenterLayout>
    );
  };

export const withArticleWrapper =
  (Component: FunctionComponent<any>) => (props: any) => {
    return (
      <Article {...props}>
        <Component />
      </Article>
    );
  };

export const withVideoWrapper =
  (Component: FunctionComponent<any>) => (props: any) => {
    const renderChildren = () => {
      return <Component {...props} className="mt-40" />;
    };
    return <ThreeColLayout middleRenderer={renderChildren} />;
  };
