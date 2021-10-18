import React from "react";
import { ThreeColLayout } from "@/components";
import "github-markdown-css/github-markdown-light.css";

export const Article = (props: any) => {
  const renderArticle = () => {
    return <div className="markdown-body pb-14">{props.children}</div>;
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
