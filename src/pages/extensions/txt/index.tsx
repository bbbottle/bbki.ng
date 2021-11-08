import React from "react";
import { SwitchComponentsRoute } from "@/components";
import { ArticleList } from "./consts";
import { compPathObj } from "@/types/path";

type TxtProps = {
  title?: string;
  articleList: compPathObj[];
};

const Txt = (props: TxtProps) => {
  return (
    <SwitchComponentsRoute
      title={props.title}
      componentPathList={props.articleList || ArticleList}
    />
  );
};

export default Txt;
