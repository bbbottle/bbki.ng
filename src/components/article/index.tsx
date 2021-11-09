import React, { ReactElement } from "react";
import { Comment } from "@/components";
import { Tags, ThreeColLayout } from "@/components";
import "github-markdown-css/github-markdown-light.css";

type ArticleProps = {
  tags?: string[];
  title: string;
  children: ReactElement;
};

export const Article = (props: ArticleProps) => {
  const renderArticle = () => {
    const { tags, title } = props;
    return (
      <>
        <div className="markdown-body pb-14">{props.children}</div>
        {tags && <Tags inline tags={tags} className="mb-14" />}
        <Comment title={title} />
      </>
    );
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
