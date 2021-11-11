import React, { ReactElement } from "react";
import { Comment } from "@/components";
import { Tags, ThreeColLayout } from "@/components";

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
        <article className="prose mb-14">{props.children}</article>
        {tags && <Tags inline tags={tags} className="mb-14" />}
        <Comment title={title} />
      </>
    );
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
