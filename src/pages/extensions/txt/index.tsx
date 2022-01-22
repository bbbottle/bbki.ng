import React from "react";
import { CenterLinkList } from "@/components";
import { ArticleList } from "./consts";
import { pathObj } from "@/types/path";

type TxtProps = {
  title?: string;
  articleList?: pathObj[];
};

export default (props: TxtProps) => {
  return (
    <CenterLinkList
      list={props.articleList || ArticleList}
      title={props.title}
    />
  );
};
