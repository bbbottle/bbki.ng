import React, { ReactElement } from "react";
import { Tags, Article } from "@bbki.ng/components";
import { ROUTES } from "@/constants";

type ArticlePageProps = {
  tags?: string[];
  title: string;
  description?: any;
  children: ReactElement;
};

export const ArticlePage = (props: ArticlePageProps) => {
  const { tags: tagNames, title, description } = props;
  const tags = tagNames
    ? tagNames.map((t) => ({ children: t, to: `${ROUTES.TAGS}/${t}` }))
    : [];
  return (
    <>
      <Article title={title} description={description}>
        <article className="prose mb-20">{props.children}</article>
      </Article>
      {tagNames && <Tags tags={tags} />}
    </>
  );
};
