import React, { ReactElement } from "react";
import { ThreeColLayout } from "@/components";
import { Tags, Article } from "@bbki.ng/components";
import { ROUTES } from "@/constants";

type ArticlePageProps = {
  tags?: string[];
  title: string;
  children: ReactElement;
};

export const ArticlePage = (props: ArticlePageProps) => {
  const { tags: tagNames, title } = props;
  const tags = tagNames
    ? tagNames.map((t) => ({ children: t, to: `${ROUTES.TAGS}/${t}` }))
    : [];
  return (
    <>
      <Article title={title}>
        <article className="prose mb-20">{props.children}</article>
      </Article>
      {tagNames && <Tags tags={tags} />}
    </>
  );
};
