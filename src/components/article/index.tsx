import React from "react";
import { ThreeColLayout } from "@/components";

export const Article = (props: any) => {
  const renderArticle = () => {
    return props.children;
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
