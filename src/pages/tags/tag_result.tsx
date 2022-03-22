import React from "react";
import Txt from "@/pages/extensions/txt";
import { getArticleListByTag } from "@/utils/tags";
import { MdxArticleList } from "@/articles";
import { useParams } from "react-router-dom";
import { Error as ErrorPanel } from "@bbki.ng/components";

export default () => {
  const { tag } = useParams();
  if (!tag) {
    return <ErrorPanel error={new Error("missing tagName")} />;
  }
  return (
    <Txt
      title={`#${tag}`}
      articleList={getArticleListByTag(MdxArticleList, tag)}
    />
  );
};
