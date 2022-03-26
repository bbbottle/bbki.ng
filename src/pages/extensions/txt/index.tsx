import React from "react";
import { ArticleList } from "./consts";
import Tags from "@/pages/tags";
import { LinkList, LinkProps } from "@bbki.ng/components";
import { useRouteName } from "@/hooks";

type TxtProps = {
  title?: string;
  articleList?: LinkProps[];
};

export default (props: TxtProps) => {
  const name = useRouteName();
  return (
    <LinkList
      links={props.articleList || ArticleList}
      title={props.title || name}
      description={<Tags inline className="ml-0" withAll />}
    />
  );
};
