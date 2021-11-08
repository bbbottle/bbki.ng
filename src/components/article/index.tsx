import React, { ReactElement } from "react";
import { Tags, ThreeColLayout } from "@/components";
import "github-markdown-css/github-markdown-light.css";

type ArticleProps = {
  tags?: string[];
  children: ReactElement;
};

export const Article = (props: ArticleProps) => {
  const renderArticle = () => {
    const { tags } = props;
    return (
      <>
        <div className="markdown-body pb-14">{props.children}</div>
        {tags && <Tags inline tags={tags} className="mb-14" />}
      </>
    );
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
