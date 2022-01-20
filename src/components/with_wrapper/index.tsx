import React from "react";
import { FunctionComponent } from "react";
import { ArticlePage } from "@/components/article";
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
      <ArticlePage {...props}>
        <Component />
      </ArticlePage>
    );
  };

export const withVideoWrapper =
  (Component: FunctionComponent<any>) => (props: any) => {
    const renderChildren = () => {
      return <Component {...props} className="mt-40" />;
    };
    return <ThreeColLayout middleRenderer={renderChildren} />;
  };
