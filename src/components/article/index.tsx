import React, { ReactElement } from "react";
import { ThreeColLayout } from "@/components";
import { Tags } from "@bbki.ng/components";
import { ROUTES } from "@/constants";

type ArticleProps = {
  tags?: string[];
  title: string;
  children: ReactElement;
};

export const Article = (props: ArticleProps) => {
  const renderArticle = () => {
    const { tags: tagNames, title } = props;
    const tags = tagNames
      ? tagNames.map((t) => ({ children: t, to: `${ROUTES.TAGS}/${t}` }))
      : [];
    return (
      <>
        <article className="prose mb-20">{props.children}</article>
        {tagNames && <Tags tags={tags} />}
      </>
    );
  };
  return <ThreeColLayout middleRenderer={renderArticle} />;
};
