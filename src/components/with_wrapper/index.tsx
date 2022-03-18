import React from "react";
import { FunctionComponent } from "react";
import { ArticlePage } from "@/components/article";

export const withArticleWrapper =
  (Component: FunctionComponent<any>): FunctionComponent<any> =>
  (props: any) => {
    return (
      <ArticlePage {...props}>
        <Component />
      </ArticlePage>
    );
  };
