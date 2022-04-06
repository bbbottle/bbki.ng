import React, { ReactElement } from "react";
import { MdxArticleList } from "@/articles";
import { withArticleWrapper } from "@/components";
import { MdxArticle } from "@/types/articles";
import { Article, NotFound } from "@bbki.ng/components";
import { useParams } from "react-router-dom";

type TArticleMap = {
  [key: string]: ReactElement;
};

const ArticleMap: TArticleMap = {};

MdxArticleList.forEach((article: unknown) => {
  const { meta, default: component } = article as MdxArticle;
  const Article = withArticleWrapper(component);
  ArticleMap[meta.title] = <Article {...meta} />;
});

export default () => {
  const { title } = useParams();
  if (!title || !ArticleMap[title]) {
    return <NotFound />;
  }
  return ArticleMap[title];
};
