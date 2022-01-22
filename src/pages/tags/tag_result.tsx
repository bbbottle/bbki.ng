import React from "React";
import Txt from "@/pages/extensions/txt";
import { getArticleListByTag } from "@/utils/tags";
import { MdxArticleList } from "@/articles";
import { useParams } from "react-router-dom";

export default () => {
  const { tag } = useParams();
  if (!tag) {
    return null;
  }
  return (
    <Txt
      title={`标签：${tag}`}
      articleList={getArticleListByTag(MdxArticleList, tag)}
    />
  );
};
